import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAccessToken, verifyRefreshToken, generateAccessToken } from "@/lib/jwt"
 

export function proxy(request: NextRequest): NextResponse  {

  const accessToken  = request.cookies.get("accessToken")?.value
  const refreshToken = request.cookies.get('refreshToken')?.value

  if (!accessToken && !refreshToken) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (accessToken) {
    try {
      verifyAccessToken(accessToken)
      return NextResponse.next()
    } catch (error) {
      console.log("Access token expired or invalid")
    }
  } 

  if(refreshToken) {
    try {
      const payload = verifyRefreshToken(refreshToken)
      const newAccessToken = generateAccessToken(
        {
          id: payload.id,
          email: payload.email,
          firstName: payload.firstName,
          lastName: payload.lastName,
        }
      )

      const response = NextResponse.next()
      response.cookies.set('accessToken', newAccessToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        path: "/",
        maxAge: 15 * 60 
      })

      return response
    } catch (error) {
      console.error('Refresh token also expired:', error)
      return NextResponse.redirect(new URL("/login", request.url))
    }
  }

  return NextResponse.redirect(new URL('/login', request.url))
}
 
export const config = {
  matcher: ['/dashboard/:path*'],
}