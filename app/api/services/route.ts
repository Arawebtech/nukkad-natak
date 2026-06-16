import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.API_URL}/services/public-services/all`,
      {
        next: { revalidate: 60 },
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
        message: "Failed to fetch services",
      },
      {
        status: 500,
      }
    );
  }
}