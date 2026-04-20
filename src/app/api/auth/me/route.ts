import { cookies } from "next/headers";
import { errorResponse, successResponse } from "@/utils/apiResponse";
import getUserFromToken from "@/lib/getUserByAccessToken"


export async function GET(): Promise<Response> {

  const token = await getUserFromToken()

  console.log(token)

  if (!token) {
      return errorResponse(401, "User Not Logged In")
  }
  
  return successResponse(200, null, "User is logged In.")
}

