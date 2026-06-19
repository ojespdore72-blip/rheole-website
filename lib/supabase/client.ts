import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Reusable connection setup
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
        },
        global: {
          headers: {
            "x-application-name": "rheole-enterprise",
          },
        },
      })
    : null;

/**
 * Executes a Supabase database callback query with retry-on-failure resilience.
 * Useful for handling temporary connection pool drops or cold-start timeouts.
 */
export async function withRetry<T>(
  queryFn: () => Promise<{ data: T | null; error: any }>,
  retries = 3,
  delayMs = 500
): Promise<T | null> {
  let lastError: any = null;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const { data, error } = await queryFn();
      if (!error) return data;
      lastError = error;
    } catch (err) {
      lastError = err;
    }

    if (attempt < retries) {
      await new Promise((resolve) => setTimeout(resolve, delayMs * attempt));
    }
  }

  throw new Error(
    `Database query failed after ${retries} attempts. Details: ${
      lastError?.message || lastError
    }`
  );
}
