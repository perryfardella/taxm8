import { createClient } from "@/lib/supabase-server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");

  console.log("Auth callback received code:", !!code); // Log if we got a code

  if (code) {
    const supabase = await createClient();

    try {
      // Exchange code for session
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);

      if (error) {
        console.error("Error exchanging code for session:", error);
      } else {
        console.log(
          "Successfully exchanged code for session, user:",
          data.user?.email
        );
      }
    } catch (err) {
      console.error("Exception in auth callback:", err);
    }
  }

  // Always redirect to chat - the middleware will redirect to sign-in if no session
  return NextResponse.redirect(new URL("/chat", request.url));
}
