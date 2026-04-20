import { cookies } from "next/headers"
import { verifyAccessToken } from "@/lib/jwt"

export default async function getUserByAccessToken() {
  const cookieStore = await cookies()
  const token = cookieStore.get("accessToken")?.value
  if (!token) throw new Error("Unauthorized")

  const decoded = verifyAccessToken(token)
  return decoded  
}