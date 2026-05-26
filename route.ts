import { NextResponse } from 'next/server';

// Starter API route. Add FINNHUB_API_KEY or ALPHA_VANTAGE_API_KEY in .env.local.
// This route is intentionally simple so you can swap providers later.
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ticker = searchParams.get('ticker') || 'NVDA';
  const provider = process.env.MARKET_DATA_PROVIDER || 'sample';

  if (provider === 'finnhub' && process.env.FINNHUB_API_KEY) {
    const quoteRes = await fetch(`https://finnhub.io/api/v1/quote?symbol=${ticker}&token=${process.env.FINNHUB_API_KEY}`, { next: { revalidate: 300 } });
    const newsRes = await fetch(`https://finnhub.io/api/v1/company-news?symbol=${ticker}&from=2026-05-01&to=2026-05-25&token=${process.env.FINNHUB_API_KEY}`, { next: { revalidate: 3600 } });
    const quote = await quoteRes.json();
    const news = await newsRes.json();
    return NextResponse.json({ ticker, provider, quote, news: Array.isArray(news) ? news.slice(0, 5) : [] });
  }

  return NextResponse.json({
    ticker,
    provider: 'sample',
    quote: { c: 100, d: 1.5, dp: 1.5 },
    news: [
      { headline: `${ticker} sample headline`, summary: 'Connect a market data provider to replace this with live news.' }
    ]
  });
}
