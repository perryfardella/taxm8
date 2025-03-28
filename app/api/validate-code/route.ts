import { NextRequest, NextResponse } from "next/server";

// Access code is stored as an environment variable
const EARLY_ACCESS_CODE = process.env.EARLY_ACCESS_CODE;

export async function POST(req: NextRequest) {
  try {
    const { accessCode } = await req.json();

    // Check if early access code is provided
    if (!accessCode) {
      return NextResponse.json(
        { error: "Early access code is required" },
        { status: 400 }
      );
    }

    // Validate the access code
    if (accessCode !== EARLY_ACCESS_CODE) {
      return NextResponse.json(
        { error: "Invalid early access code" },
        { status: 403 }
      );
    }

    // Return success if code is valid
    return NextResponse.json({ valid: true });
  } catch (error) {
    console.error("Access code validation error:", error);
    return NextResponse.json(
      { error: "An error occurred while validating the access code" },
      { status: 500 }
    );
  }
}
