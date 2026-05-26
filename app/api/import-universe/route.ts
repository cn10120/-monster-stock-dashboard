import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY!;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function GET() {
  const res = await fetch(
    `https://finnhub.io/api/v1/stock/symbol?exchange=US&token=${FINNHUB_API_KEY}`,
    { cache: "no-store" }
  );

  const symbols = await res.json();

  const cleaned = symbols
    .filter((s: any) => s.symbol && s.description)
    .slice(0, 500)
    .map((s: any) => ({
      ticker: s.symbol,
      name: s.description,
      exchange: "US",
      sector: "Unknown",
      industry: "Unknown",
      market_cap: 0,
      is_active: true
    }));

  const { error } = await supabase
    .from("stock_universe")
    .upsert(cleaned, { onConflict: "ticker" });

  if (error) {
    return NextResponse.json({
      success: false,
      error: error.message
    });
  }

  return NextResponse.json({
    success: true,
    imported: cleaned.length,
    message: "Stock universe imported"
  });
}
