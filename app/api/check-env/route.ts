import { NextResponse } from "next/server";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
  const finnhub = process.env.FINNHUB_API_KEY || "";

  return NextResponse.json({
    supabaseUrlExists: !!url,
    supabaseUrlStartsWithHttps: url.startsWith("https://"),
    supabaseUrlEndsWithSupabaseCo: url.endsWith(".supabase.co"),
    supabaseUrlHasDashboard: url.includes("dashboard"),
    supabaseUrlLength: url.length,

    supabaseKeyExists: !!key,
    supabaseKeyStartsWithSbPublish: key.startsWith("sb_publish"),
    supabaseKeyLength: key.length,

    finnhubExists: !!finnhub,
    finnhubLength: finnhub.length
  });
}