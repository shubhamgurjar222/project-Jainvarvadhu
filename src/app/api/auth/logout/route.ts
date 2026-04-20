import { errorResponse, successResponse } from "@/utils/apiResponse"
import { cookies } from "next/headers";
import { logout } from "@/lib/queries/users/logout"


export async function GET(): Promise<Response> {
  return errorResponse(405, "GET method not allowed. Use POST.");
}

export async function POST(): Promise<Response> {

  try {    
    let refreshTokenStatus: any
    const cookieStore = await cookies();

    const accessToken: string = cookieStore.get("accessToken")?.value || "";
    const refreshToken: string = cookieStore.get("refreshToken")?.value || "";

     if (!refreshToken && !accessToken) {
      return errorResponse(401, "No active session found");
    }

    if (refreshToken) {
      refreshTokenStatus = await logout(refreshToken)
    }

    if (!refreshTokenStatus) {
      return errorResponse(400, "Failed to invalidate session in database")
    }

    cookieStore.set("accessToken", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(0),
      path: "/"
    });

    cookieStore.set("refreshToken", "", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      expires: new Date(0),
      path: "/"
    });

    return successResponse(200, null, 'Logged out successfully');
  } catch (error) {
    console.error(error);
    return errorResponse(500, "Internal server error during logout")
  }
}