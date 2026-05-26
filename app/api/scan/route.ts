import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY!;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function calculateScore(price: number, changePercent: number) {
  let score = 50;

  if (price > 0) score += 10;
  if (changePercent > 0) score += 10;
  if (changePercent > 2) score += 10;
  if (changePercent > 5) score += 10;

  return Math.min(score, 100);
}

export async function GET() {
  const { data: universe, error: universeError } = await supabase
    .from("stock_universe")
    .select("ticker,name,sector,industry")
    .eq("is_active", true)
    .limit(50);

  if (universeError) {
    return NextResponse.json({
      success: false,
      error: universeError.message,
    });
  }

  const results = [];

  for (const company of universe || []) {
   if (
  company.ticker.includes(".") ||
  company.ticker.length > 5
) {
  continue;
} 
    const quoteRes = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${company.ticker}&token=${FINNHUB_API_KEY}`,
      { cache: "no-store" }
    );

    const quote = await quoteRes.json();

    const currentPrice = quote.c || 0;
    if (currentPrice <= 1) {
  continue;
}
    const changePercent = quote.dp || 0;
    const monsterScore = calculateScore(currentPrice, changePercent);

    let status = "Radar";
    let riskLevel = "Normal";

    if (monsterScore >= 85) status = "Core Watchlist";
    if (monsterScore >= 70 && monsterScore < 85) status = "Watchlist";

    if (monsterScore < 55) {
      status = "Caution";
      riskLevel = "High";
    }

    const { error } = await supabase.from("companies").upsert(
      {
        ticker: company.ticker,
        name: company.name,
        sector: company.sector || company.industry || "Unknown",
        current_price: currentPrice,
        monster_score: monsterScore,
        status,
        risk_level: riskLevel,
      },
      { onConflict: "ticker" }
    );

    results.push({
      ticker: company.ticker,
      price: currentPrice,
      changePercent,
      monsterScore,
      status,
      error: error?.message || null,
    });
  }

  return NextResponse.json({
    success: true,
    message: "Market universe scan complete",
    scanned: results.length,
    results,
  });
}
