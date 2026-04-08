import { searchCollegeByStateDistrict } from "@/lib/queries/college/college";
import { errorResponse, successResponse } from "@/utils/apiResponse";

export async function GET(): Promise<Response> {
  return errorResponse(405, "GET method not allowed. Use POST.");
}

export async function POST(request: Request): Promise<Response> {
  try {
    const formData = await request.formData();

    const state = formData.get("state") as string | null;
    const district = formData.get("district") as string | null;

    if (!state) {
      return errorResponse(400, "state is required");
    }

    if (!district) {
      return errorResponse(400, "district is required");
    }

    const data = await searchCollegeByStateDistrict(state, district);
    return successResponse(200, data, "Colleges list fetched successfully");
    
  } catch (error: any) {
    return errorResponse(
      500,
      "Something went wrong",
      error?.message || "Unknown error"
    );
  }
}