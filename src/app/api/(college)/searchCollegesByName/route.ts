import { searchCollegesByName } from "@/lib/queries/college/college";
import { errorResponse, successResponse } from "@/utils/apiResponse";

export async function GET(): Promise<Response> {
  return errorResponse(405, "GET method not allowed. Use POST.");
}

export async function POST(request: Request): Promise<Response> {
  try {
    const formData = await request.formData();

    const name = formData.get("name") as string | null;

    if (!name) {
      return errorResponse(400, "Name is required");
    }

    const data = await searchCollegesByName(name);
    return successResponse(200, data, "Colleges list fetched successfully");
    
  } catch (error: any) {
    return errorResponse(
      500,
      "Something went wrong",
      error?.message || "Unknown error"
    );
  }
}