"use client";

import Link from "next/link";

const companies = [
  {
    ticker: "NVDA",
    name: "NVIDIA",
    price: 214.86,
    change: 2.4,
    score: 96,
    sector: "AI Compute",
    status: "Core",
    risk: "Low",
    reason: "AI infrastructure demand accelerating"
  },
  {
    ticker: "AMD",
    name: "Advanced Micro Devices",
    price: 503.89,
    change: 7.8,
    score: 90,
    sector: "AI Chips",
    status: "Core",
    risk: "Medium",
    reason: "Data center growth expanding"
  },
  {
    ticker: "PLTR",
    name: "Palantir",
    price: 136.60,
    change: -0.2,
    score: 84,
    sector: "AI Software",
    status: "Radar",
    risk: "Low",
    reason: "Government contract momentum"
  },
];

export default function Home() {
  return (
    <main>

      <h1>Monster Radar OS</h1>

      <section className="card">
        <h2>Daily Brief</h2>

        <p>Scanner Status: ACTIVE</p>
        <p>Companies Tracked: {companies.length}</p>
        <p>Threat Alerts: 0</p>
        <p>New Radar Names: 3</p>
      </section>

      <h2>Watchlist + Radar</h2>

      <div className="grid">

        {companies.map((c) => (

          <Link
            key={c.ticker}
            href={`/company/${c.ticker}`}
            style={{
              textDecoration:"none",
              color:"white"
            }}
          >

            <div className="watchlist-card">

              <div
                style={{
                  display:"flex",
                  justifyContent:"space-between",
                  alignItems:"center"
                }}
              >

                <div>

                  <h3>{c.ticker}</h3>

                  <p>{c.name}</p>

                </div>

                <div>

                  <span
                    className={
                      c.status === "Core"
                        ? "badge core"
                        : c.status === "Radar"
                        ? "badge radar"
                        : "badge caution"
                    }
                  >
                    {c.status}
                  </span>

                </div>

              </div>

              <p>
                ${c.price} ({c.change}%)
              </p>

              <p>
                Monster Score: {c.score}
              </p>

              <p>
                Sector: {c.sector}
              </p>

              <p>
                Risk: {c.risk}
              </p>

              <p>
                AI Perspective:
                {" "}
                {c.reason}
              </p>

            </div>

          </Link>

        ))}

      </div>

    </main>
  );
}
