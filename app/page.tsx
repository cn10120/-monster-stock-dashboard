const companies = [
  { ticker: "NVDA", name: "NVIDIA", score: 96, theme: "AI Compute", status: "Core Watchlist" },
  { ticker: "AMD", name: "Advanced Micro Devices", score: 82, theme: "AI Chips", status: "Watch" },
  { ticker: "AVGO", name: "Broadcom", score: 88, theme: "AI Infrastructure", status: "Core Watchlist" },
  { ticker: "ASML", name: "ASML", score: 91, theme: "Semiconductor Equipment", status: "Core Watchlist" },
  { ticker: "PLTR", name: "Palantir", score: 84, theme: "AI Software", status: "Watch" },
  { ticker: "CEG", name: "Constellation Energy", score: 78, theme: "AI Energy", status: "Radar" },
  { ticker: "ALAB", name: "Astera Labs", score: 86, theme: "AI Connectivity", status: "Radar" },
  { ticker: "CRDO", name: "Credo Technology", score: 80, theme: "Data Movement", status: "Radar" },
];

const help = [
  ["Monster Score", "A 0–100 score showing how closely a company matches the traits of past huge winners."],
  ["Infrastructure Role", "Does the company sell something the whole industry needs? Example: NVIDIA GPUs, ASML machines, TSMC fabs."],
  ["Moat", "How hard it is for competitors to copy the business."],
  ["Revenue Growth", "Fast-growing sales. Future monster stocks often show 25–50%+ revenue growth."],
  ["Radar", "Companies that are not full watchlist names yet but are starting to filter in."],
];

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b1020", color: "white", padding: 24, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 42, marginBottom: 8 }}>Monster Stock Dashboard</h1>
      <p style={{ color: "#b6c2d9", fontSize: 18 }}>
        Your AI investing watchlist, Stock Radar, Monster Score, and Help Legend.
      </p>

      <section style={{ marginTop: 30, display: "grid", gap: 16 }}>
        <div style={card}>
          <h2>Daily Brief</h2>
          <p style={muted}>No live API connected yet. Next upgrade: daily stock prices, news, and earnings updates.</p>
        </div>

        <div style={card}>
          <h2>Watchlist</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {companies.map((c) => (
              <div key={c.ticker} style={companyCard}>
                <div>
                  <h3 style={{ margin: 0 }}>{c.ticker} — {c.name}</h3>
                  <p style={muted}>{c.theme} • {c.status}</p>
                </div>
                <div style={scoreBox}>{c.score}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={card}>
          <h2>Stock Radar</h2>
          <p style={muted}>These are companies that may filter in based on AI exposure, infrastructure role, revenue growth, margins, and momentum.</p>
          <ul>
            <li>ALAB — AI connectivity</li>
            <li>CRDO — data-center networking</li>
            <li>CEG — AI energy demand</li>
          </ul>
        </div>

        <div style={card}>
          <h2>Help Legend</h2>
          {help.map(([term, desc]) => (
            <details key={term} style={{ marginBottom: 10 }}>
              <summary style={{ cursor: "pointer", fontWeight: "bold" }}>{term}</summary>
              <p style={muted}>{desc}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

const card = {
  background: "#121a2f",
  border: "1px solid #26324f",
  borderRadius: 16,
  padding: 18,
};

const companyCard = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#0b1020",
  border: "1px solid #26324f",
  borderRadius: 12,
  padding: 14,
};

const scoreBox = {
  background: "#1f6feb",
  padding: "10px 14px",
  borderRadius: 10,
  fontWeight: "bold",
};

const muted = {
  color: "#b6c2d9",
};
