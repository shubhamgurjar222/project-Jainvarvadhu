import { successResponse, errorResponse } from "@/utils/apiResponse";


export async function fetchResources(url: string, body?: FormData, token: string | null = null ): Promise<unknown> {
  let fullUrl = process.env.NEXT_PUBLIC_API_URL + url;
  let res: any
  let data: any
  try {
    res = await fetch(fullUrl, {
      method: "POST",
      body: body,
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      }
    });
    const data = await res.json();
    return data;

  } catch (error) {
    if (!res.ok) {
      throw new Error(data?.message || "Request failed");
    }
  }
}