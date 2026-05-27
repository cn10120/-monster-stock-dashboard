const companies: any = {
  NVDA: {
    name: "NVIDIA",
    price: "$214.86",
    change: "+2.4%",
    score: 96,
    status: "Core",
    risk: "Low",
    sector: "AI Compute",
  },
  AMD: {
    name: "Advanced Micro Devices",
    price: "$503.89",
    change: "+7.8%",
    score: 90,
    status: "Core",
    risk: "Medium",
    sector: "AI Chips",
  },
  PLTR: {
    name: "Palantir",
    price: "$136.60",
    change: "-0.2%",
    score: 84,
    status: "Radar",
    risk: "Low",
    sector: "AI Software",
  },
};

export default function CompanyPage({ params }: { params: { ticker: string } }) {
  const ticker = params.ticker.toUpperCase();
  const company = companies[ticker] || {
    name: ticker,
    price: "Updating",
    change: "Updating",
    score: 72,
    status: "Radar",
    risk: "Unknown",
    sector: "Unknown",
  };

  return (
    <main>
      <a href="/" style={{ color: "#38bdf8" }}>← Back to Dashboard</a>

      <h1>{ticker}</h1>
      <p>{company.name}</p>

      <section className="card">
        <h2>Company Snapshot</h2>
        <p>Price: {company.price}</p>
        <p>Today: {company.change}</p>
        <p>Sector: {company.sector}</p>
        <p>Status: {company.status}</p>
        <p>Risk: {company.risk}</p>
        <p>Monster Score: {company.score}</p>
      </section>

      <section className="card">
        <h2>Monster AI Perspective</h2>
        <p>
          This company is being tracked because it shows traits that could matter for future outlier performance.
          The current view is based on market momentum, sector strength, risk level, and Monster Score.
        </p>

        <h3>Bull Case</h3>
        <p>Growth continues, market demand strengthens, and the company expands into larger opportunities.</p>

        <h3>Bear Case</h3>
        <p>Valuation risk, slowing growth, weak guidance, or competition could weaken the thesis.</p>

        <h3>What To Watch</h3>
        <p>Revenue growth, margins, earnings guidance, volume confirmation, and major news catalysts.</p>
      </section>

      <section className="card">
        <h2>Growth Engine</h2>
        <p>Revenue Growth: Coming soon</p>
        <p>EPS Growth: Coming soon</p>
        <p>Free Cash Flow Growth: Coming soon</p>
        <p>Gross Margin: Coming soon</p>

        <h3>What this means</h3>
        <p>
          Growth numbers show whether the business itself is expanding, not just whether the stock price is moving.
        </p>
      </section>

      <section className="card">
        <h2>Volume Intelligence</h2>
        <p>Today’s Volume: Coming soon</p>
        <p>Average Volume: Coming soon</p>
        <p>Relative Volume: Coming soon</p>

        <h3>Why it matters</h3>
        <p>
          Volume helps confirm whether a price move has real participation behind it.
          A breakout on strong volume is usually more meaningful than a move on weak volume.
        </p>
      </section>

      <section className="card">
        <h2>Earnings Radar</h2>
        <p>Next Earnings Date: Coming soon</p>
        <p>Expected Move: Coming soon</p>

        <h3>Market Impact</h3>
        <p>
          Earnings can affect related companies, sector sentiment, and the broader market depending on guidance.
        </p>
      </section>

      <section className="card">
        <h2>Threat Monitor</h2>
        <p>Insider Selling: Coming soon</p>
        <p>Debt Risk: Coming soon</p>
        <p>Sentiment Risk: Coming soon</p>
        <p>Thesis Status: Watching</p>

        <h3>What could break the thesis?</h3>
        <p>
          Slowing growth, margin compression, weak guidance, dilution, debt issues, or major negative news.
        </p>
      </section>
    </main>
  );
}
