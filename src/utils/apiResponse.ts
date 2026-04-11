import { NextResponse } from "next/server";

export function successResponse( statusCode: number, data: unknown, message: string ): NextResponse {
  return NextResponse.json({ statusCode, data, message, success: true, });
}

export function errorResponse( statusCode: number, message: string, error: unknown = null, stack: string | null = null ): NextResponse {
  return NextResponse.json({ statusCode, message, success: false, error, stack, });
}