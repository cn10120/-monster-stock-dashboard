# Monster Stock Dashboard

A starter Next.js dashboard for tracking a personal “future monster stock” watchlist.

## What is included

- Main watchlist dashboard
- Stock Radar page for companies that filter in
- Company detail pages
- Click/hover Help Legend tooltips
- Full Help Legend page
- Sample company data already loaded
- Starter API route for live quotes/news
- Supabase schema for storing companies, daily snapshots, news, and radar candidates

## Companies currently loaded

NVDA, AVGO, AMD, ALAB, CRDO, ASML, PLTR, CEG, OKLO.

You can add more in `data/companies.ts` or move the data into Supabase.

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Add live data

1. Copy `.env.example` to `.env.local`.
2. Add a Finnhub API key.
3. Set `MARKET_DATA_PROVIDER=finnhub`.
4. Use `/api/market-data?ticker=NVDA` to test.

## Suggested next upgrades

- Add authentication so only you can access it.
- Move watchlist data from `data/companies.ts` into Supabase.
- Add daily cron job to update snapshots.
- Add Add/Ignore buttons for Radar candidates.
- Add email or text alerts for big news, earnings, or price moves.
- Add real scoring formula using current fundamentals and news.

## Score formula idea

Monster Score =

- 20% revenue growth
- 15% gross margin
- 15% infrastructure role
- 15% moat
- 10% AI/major trend exposure
- 10% adjacent market expansion
- 10% relative strength
- 5% insider/founder alignment

This is not financial advice. It is a research dashboard.
