"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Server-side Supabase client
export function createServerSupabaseClient() {
  const cookieStore = cookies();

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll: async () => {
        const cookieStore = await cookies();
        return cookieStore.getAll().map((cookie) => ({
          name: cookie.name,
          value: cookie.value,
        }));
      },
      setAll: async (cookies) => {
        const resolvedCookieStore = await cookieStore;
        cookies.forEach((cookie) => {
          resolvedCookieStore.set(cookie.name, cookie.value, cookie.options);
        });
      },
    },
  });
}
