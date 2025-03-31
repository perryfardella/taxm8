import { createClient } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  console.log("Waitlist API endpoint hit"); // Debug log

  try {
    if (!request.body) {
      return NextResponse.json(
        { error: "Request body is missing" },
        { status: 400 }
      );
    }

    const body = await request.json();
    console.log("Received body:", body); // Debug log

    const { email } = body;

    // Initialize Supabase client
    const supabase = await createClient();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email" },
        { status: 400 }
      );
    }

    console.log("Attempting to insert email:", email); // Debug log

    // Insert into waitlist table
    const { data, error } = await supabase
      .from("waitlist")
      .insert([{ email }])
      .select();

    console.log("Supabase response:", { data, error }); // Debug log

    if (error?.code === "23505") {
      return NextResponse.json(
        { error: "You're already on the waitlist!" },
        { status: 400 }
      );
    }

    if (error) {
      console.error("Supabase error:", error); // Debug log
      return NextResponse.json(
        { error: "Database error occurred" },
        { status: 500 }
      );
    }

    // Optional: Send welcome email
    // await sendWelcomeEmail(email);

    return NextResponse.json(
      { message: "Successfully joined the waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist API error:", error); // Debug log
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
