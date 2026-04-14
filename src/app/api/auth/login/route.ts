import { errorResponse, successResponse } from "@/utils/apiResponse"
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt"
import { cookies } from "next/headers";
import { verifyPassword } from "@/lib/hashPassword"
import { getUserByMailId } from "@/lib/queries/users/getUserByMailId"


export async function GET(): Promise<Response> {
  return errorResponse(405, "GET method not allowed. Use POST.");
}

export async function POST(request: Request): Promise<Response> {
  try {     
    const formData: FormData = await request.formData();

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email) {
      return errorResponse(400, "Email is Required")
    }

    if (!password) {
      return errorResponse(400, "Password is Required")
    }

    const userData = await getUserByMailId(email)

    if (userData?.success === false) {
      return errorResponse(404, "Invalid email or password")
    }

    const hashedPassword = userData?.data?.hashed_password;
    const verifiedPassword = await verifyPassword(password, hashedPassword as string)

    if (verifiedPassword === false) {
      return errorResponse (401, "Invalid email or password")
    }

    const payload = {
      id: userData?.data?.id as number,
      email: userData?.data?.email as string,
      firstName: userData?.data?.first_name as string,
      lastName: userData?.data?.last_name as string,
    };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    const cookieStore  = await cookies();

    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, 
    });

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 15 * 60, 
    });

    
    const response = {
      id: userData?.data?.id,
      first_name: userData?.data?.first_name,
      last_name: userData?.data?.last_name,
      email: userData?.data?.email,
    };
        
    return successResponse(200, response, "User Logged In Successfully");
    
  } catch (error: any) {
    console.log(error)
    return errorResponse(500, "Something went wrong", error || "Unknown error");
  }
}