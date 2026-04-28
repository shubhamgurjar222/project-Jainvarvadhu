import { errorResponse, successResponse } from "@/utils/apiResponse"
import { getUserByPhoneNo } from "@/lib/queries/users/getUserByPhoneNo"

export async function GET(): Promise<Response> {
  return errorResponse(405, "GET method not allowed. Use POST.");
}

export async function POST(request: Request): Promise<Response> {
  try {
    const formData = await request.formData();

    const phoneNo = formData.get('phoneNo') as string | null;

    if (!phoneNo) {
      return errorResponse(400, "Phone Number is required");
    }

    const data = await getUserByPhoneNo(phoneNo);
    if (data) return successResponse(200, data, "Phone Number is already registered");
    else return successResponse(200, null, "User Not registred");

  } catch (error: any) {
    return errorResponse(
      500,
      "Something went wrong",
      error?.message || "Unknown error"
    );
  }
}