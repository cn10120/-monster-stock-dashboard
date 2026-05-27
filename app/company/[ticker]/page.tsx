export default function CompanyPage({ params }: any) {
  const ticker = String(params?.ticker || "UNKNOWN").toUpperCase();

  const company: any = {
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
        <p>This page will become the full AI intelligence profile for {ticker}.</p>
      </section>
    </main>
  );
}
