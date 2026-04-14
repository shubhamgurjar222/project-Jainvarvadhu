import { errorResponse, successResponse } from "@/utils/apiResponse"
import { signup  } from "@/lib/queries/users/signup"
import { generateAccessToken, generateRefreshToken } from "@/lib/jwt"
import { cookies } from "next/headers";
import { hashPassword } from "@/lib/hashPassword"
import { saveRefreshTokenInDB } from "@/lib/queries/users/saveRefreshTokenInDB"

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

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_MIN_LENGTH = 8

function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email) && email.length <= 254
}

function isStrongPassword(password: string): { valid: boolean; reason?: string } {
  if (password.length < PASSWORD_MIN_LENGTH) {
    return { valid: false, reason: `Password must be at least ${PASSWORD_MIN_LENGTH} characters` }
  }
  if (!/[A-Z]/.test(password)) {
    return { valid: false, reason: "Password must contain at least one uppercase letter" }
  }
  if (!/[a-z]/.test(password)) {
    return { valid: false, reason: "Password must contain at least one lowercase letter" }
  }
  if (!/[0-9]/.test(password)) {
    return { valid: false, reason: "Password must contain at least one number" }
  }
  return { valid: true }
}

export async function GET(): Promise<Response> {
  return errorResponse(405, "GET method not allowed. Use POST.");
}

export async function POST(request: Request): Promise<Response> {
  try {     
    const formData: FormData = await request.formData();

    const dobInput = formData.get("dob") as string;
    const dob = new Date(dobInput);
    const hashedPassword = await hashPassword(formData.get("password") as string)

    const userData: signUp = {
      gender: formData.get("gender") as "male" | "female",
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      dob: dob,
      community: formData.get("community") as string,
      country: formData.get("country") as string,
      email: formData.get("email") as string,
      hashed_password: hashedPassword ,
      phone_no: formData.get("phoneNo") as string,
    };

    for (const [field, value] of Object.entries(userData)) {
      if (!value || (typeof value === "string" && !value.trim())) {
        return errorResponse(400, `Required field: ${field}`)
      }
    }  
    
    if (!isValidEmail(userData.email)) {
      return errorResponse(400, "Invalid email format")
    }

    const passwordValidation = isStrongPassword(userData.hashed_password)
    if (!passwordValidation.valid) {
      return errorResponse(400, passwordValidation.reason || "Password does not meet requirements")
    }

    const data: any = await signup(userData);

    if (data?.success == false) {
      if (data.message == "Email already registered") {
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

    const isTokenSaved = await saveRefreshTokenInDB(payload.id, refreshToken)

    if (!isTokenSaved) {
      return errorResponse(400, "Token Not Saved");
    }

    const response = { user: { ...data, dob: data.dob } }
        
    return successResponse(200, response, "User Registered Successfully & Logged In");
    
  } catch (error: any) {
    console.log(error)
    return errorResponse(500, "Something went wrong", error || "Unknown error");
  }
}