import { errorResponse, successResponse } from "@/utils/apiResponse"
import { checkUserByEmail } from "@/lib/queries/users/checkEmail"

export async function GET(): Promise<Response> {
  return errorResponse(405, "GET method not allowed. Use POST.");
}

export async function POST(request: Request): Promise<Response> {
  try {
    const formData = await request.formData();

    const email = formData.get('email') as string | null;

    if (!email) {
      return errorResponse(400, "email is required");
    }

    const data = await checkUserByEmail(email);
    if (data) return successResponse(200, data, "Email is already registered");
    else return successResponse(200, null, "New Email");

  } catch (error: any) {
    return errorResponse(
      500,
      "Something went wrong",
      error?.message || "Unknown error"
    );
  }
}