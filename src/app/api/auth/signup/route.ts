import { errorResponse, successResponse } from "@/utils/apiResponse"
import { signup  } from "@/lib/queries/users/signup"

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
      first_name: formData.get("firstname") as string,
      last_name: formData.get("lastname") as string,
      dob: dob,
      community: formData.get("community") as string,
      country: formData.get("country") as string,
      email: formData.get("email") as string,
      hashed_password: formData.get("password") as string,
      phone_no: formData.get("phoneno") as string,
    };

    const data: any = await signup(userData);
    if (!data) return errorResponse(400, "User could not be registered");

    if (data.success === false) {
        return errorResponse(400, data.error);
    }

    const response = { ...data, dob: data.dob.toISOString().split("T")[0] };
    
    return successResponse(200, response, "User Registered Successfully");
    
  } catch (error: any) {
    return errorResponse(500, "Something went wrong", error?.message || "Unknown error");
  }
}