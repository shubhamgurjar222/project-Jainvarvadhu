import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verifyAccessToken } from "@/lib/jwt"
 

export function proxy(request: NextRequest): NextResponse  {

  const token  = request.cookies.get("accessToken")?.value

  if(!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  try {
    const decoded = verifyAccessToken(token)
    return NextResponse.next();

  } catch (err) {
    console.error('Token verification failed:', err);
    return NextResponse.redirect(new URL("/login", request.url))
  }
}
 
export const config = {
  matcher: ['/dashboard/:path*'],
}