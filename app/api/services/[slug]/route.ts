import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await context.params;

    const res = await fetch(
      `${process.env.API_URL}/services/slug/${slug}`,
      {
        cache: "no-store",
      }
    );

    const data = await res.json();

    return NextResponse.json(data, {
      status: res.status,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch service",
      },
      {
        status: 500,
      }
    );
  }
}