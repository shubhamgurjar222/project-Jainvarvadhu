import { errorResponse, successResponse } from "@/utils/apiResponse"
import { signup  } from "@/lib/queries/users/signup"
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt"
import { cookies } from "next/headers";

type signUp = {
    gender: "male" | "female";
    first_name: string;
    last_name: string;
    dob: Date;
    community: string;
    country: string;
    email: string;
    hashed_password: string;
    phone_no: string;
}

export async function GET(): Promise<Response> {
  return errorResponse(405, "GET method not allowed. Use POST.");
}

export async function POST(request: Request): Promise<Response> {
  try {     
    const formData: FormData = await request.formData();

    const dobInput = formData.get("dob") as string;
    const dob = new Date(dobInput)

    const userData: signUp = {
      gender: formData.get("gender") as "male" | "female",
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      dob: dob,
      community: formData.get("community") as string,
      country: formData.get("country") as string,
      email: formData.get("email") as string,
      hashed_password: formData.get("password") as string,
      phone_no: formData.get("phoneNo") as string,
    };

    const data: any = await signup(userData);

    if (data?.success == false) {
      if (data.message == "Email ld already registred") {
        return errorResponse(400, data.message)
      }

      if (data?.message == "Phone Number already registred") {
        return errorResponse(400, data.message)
      }
    }


    const payload = {
      id: data.id,
      email: data.email,
      firstName: data.first_name,
      lastName: data.last_name,
    };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    const cookieStore = await cookies();
    cookieStore.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      maxAge: 7 * 24 * 60 * 60, 
    });

    const response = { 
      user: { ...data, dob: data.dob.toISOString().split("T")[0] },
      accessToken,
    }
        
    return successResponse(200, response, "User Registered Successfully & Logged In");
    
  } catch (error: any) {
    console.log(error)
    return errorResponse(500, "Something went wrong", error || "Unknown error");
  }
}