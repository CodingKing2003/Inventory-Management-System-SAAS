import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title } = await request.json();
    const brand = { title };
    console.log(brand);

    return NextResponse.json(brand);
  } catch (error) {
    return NextResponse.json(
      {
        error,
        message: "Failed to create brand",
      },
      {
        status: 500,
      }
    );
  }
}
