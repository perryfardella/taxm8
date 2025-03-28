import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Create server-side Supabase client with the new cookie method format
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // New method of specifying getAll
        getAll: () => {
          return req.cookies.getAll().map((cookie) => ({
            name: cookie.name,
            value: cookie.value,
          }));
        },
        // New method of specifying setAll
        setAll: (cookies) => {
          cookies.forEach((cookie) => {
            res.cookies.set(cookie.name, cookie.value, cookie.options);
          });
        },
      },
    }
  );

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If there's no session and the user is trying to access a protected route
  if (!session && req.nextUrl.pathname.startsWith("/chat")) {
    const redirectUrl = new URL("/signin", req.url);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

export const config = {
  matcher: ["/chat/:path*"],
};
