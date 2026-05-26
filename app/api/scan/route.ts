import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const FINNHUB_API_KEY = process.env.FINNHUB_API_KEY!;
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const universe = [
  { ticker: "NVDA", name: "NVIDIA", sector: "Technology" },
  { ticker: "AMD", name: "Advanced Micro Devices", sector: "Technology" },
  { ticker: "AVGO", name: "Broadcom", sector: "Technology" },
  { ticker: "ASML", name: "ASML", sector: "Semiconductors" },
  { ticker: "PLTR", name: "Palantir", sector: "Software" },
  { ticker: "CEG", name: "Constellation Energy", sector: "Energy" },
  { ticker: "ALAB", name: "Astera Labs", sector: "Semiconductors" },
  { ticker: "CRDO", name: "Credo Technology", sector: "Networking" },
  { ticker: "TSM", name: "Taiwan Semiconductor", sector: "Semiconductors" },
  { ticker: "MU", name: "Micron", sector: "Memory" },
  { ticker: "ANET", name: "Arista Networks", sector: "Networking" },
  { ticker: "GEV", name: "GE Vernova", sector: "Energy" }
];

function calculateScore(price: number, changePercent: number) {
  let score = 50;

  if (price > 0) score += 10;
  if (changePercent > 0) score += 10;
  if (changePercent > 2) score += 10;
  if (changePercent > 5) score += 10;

  return Math.min(score, 100);
}

export async function GET() {
  const results = [];

  for (const company of universe) {
    const quoteRes = await fetch(
      `https://finnhub.io/api/v1/quote?symbol=${company.ticker}&token=${FINNHUB_API_KEY}`,
      { cache: "no-store" }
    );

    const quote = await quoteRes.json();

    const currentPrice = quote.c || 0;
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
        sector: company.sector,
        current_price: currentPrice,
        monster_score: monsterScore,
        status,
        risk_level: riskLevel
      },
      { onConflict: "ticker" }
    );

    if (monsterScore < 55) {
      await supabase.from("alerts").insert({
        ticker: company.ticker,
        alert_type: "Risk Warning",
        reason: "Monster Score dropped below 55 based on scanner rules."
      });
    }

    results.push({
      ticker: company.ticker,
      price: currentPrice,
      changePercent,
      monsterScore,
      status,
      error: error?.message || null
    });
  }

  return NextResponse.json({
    message: "Scan complete",
    updated: results.length,
    results
  });
}
