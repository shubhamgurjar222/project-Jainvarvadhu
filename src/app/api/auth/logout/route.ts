import { errorResponse, successResponse } from "@/utils/apiResponse"
import { cookies } from "next/headers";
import { logout } from "@/lib/queries/users/logout"


export async function GET(): Promise<Response> {
  return errorResponse(405, "GET method not allowed. Use POST.");
}


export async function POST(): Promise<Response> {

  try {
    const cookieStore = await cookies();

    const refreshToken: string = cookieStore.get("refreshToken")?.value || "";

    const refreshTokenStatus = await logout(refreshToken)

    if (!refreshTokenStatus) {
      return errorResponse(400, "Failed to logged out user")
    }

    cookieStore.set("accessToken", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    cookieStore.set("refreshToken", "", {
      httpOnly: true,
      expires: new Date(0),
    });

    return successResponse(200, null, 'Logged out successfully');
  } catch (error) {
    console.error(error);
    return errorResponse(500, "Logged out Failed")
  }
}