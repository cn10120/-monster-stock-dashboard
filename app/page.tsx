"use client";

const companies = [
  { ticker: "NVDA", name: "NVIDIA", price: 214.86, change: -0.21, score: 96, sector: "AI Compute", status: "Core", risk: "Low", reason: "AI infrastructure leader" },
  { ticker: "AMD", name: "Advanced Micro Devices", price: 503.89, change: 7.78, score: 90, sector: "AI Chips", status: "Core", risk: "Medium", reason: "Data center growth accelerating" },
  { ticker: "AVGO", name: "Broadcom", price: 422.01, change: 1.9, score: 88, sector: "AI Infrastructure", status: "Watchlist", risk: "Low", reason: "AI networking demand increasing" },
  { ticker: "PLTR", name: "Palantir", price: 136.6, change: -0.2, score: 84, sector: "AI Software", status: "Radar", risk: "Low", reason: "Government contracts expanding" },
  { ticker: "ALAB", name: "Astera Labs", price: 318.72, change: 3.85, score: 86, sector: "AI Connectivity", status: "Radar", risk: "Medium", reason: "Connectivity bottleneck for AI data centers" },
  { ticker: "CEG", name: "Constellation Energy", price: 301.57, change: 2.55, score: 78, sector: "Energy", status: "Radar", risk: "Medium", reason: "AI power demand tailwind" },
];

const sectors = [
  { name: "AI / Semis", heat: 95 },
  { name: "Energy", heat: 82 },
  { name: "Defense", heat: 76 },
  { name: "Healthcare", heat: 64 },
  { name: "Consumer", heat: 48 },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-bold tracking-[0.3em] text-cyan-400">MONSTER RADAR OS</p>
              <h1 className="text-2xl font-black">Market Command Center</h1>
            </div>
            <div className="rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">
              ● SCANNER LIVE
            </div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-5 py-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl">
            <p className="text-sm text-slate-400">Daily Brief</p>
            <h2 className="mt-2 text-3xl font-black">12 tracked</h2>
            <p className="mt-2 text-sm text-slate-300">Scanner updated prices, scores, and radar status.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl">
            <p className="text-sm text-slate-400">New Radar Names</p>
            <h2 className="mt-2 text-3xl font-black text-cyan-300">3</h2>
            <p className="mt-2 text-sm text-slate-300">ALAB, CRDO, CEG are showing strong theme momentum.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl">
            <p className="text-sm text-slate-400">Risk Alerts</p>
            <h2 className="mt-2 text-3xl font-black text-amber-300">0</h2>
            <p className="mt-2 text-sm text-slate-300">No thesis break alerts detected in this dummy version.</p>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-white/10 bg-[#0b1020] p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-black">Industry Heat Map</h2>
            <span className="text-xs text-slate-400">Momentum score</span>
          </div>

          <div className="grid gap-3">
            {sectors.map((s) => (
              <div key={s.name}>
                <div className="mb-1 flex justify-between text-sm">
                  <span>{s.name}</span>
                  <span className="text-cyan-300">{s.heat}</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full rounded-full bg-cyan-400" style={{ width: `${s.heat}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-black">Watchlist + Radar</h2>
              <p className="text-sm text-slate-400">Current price, Monster Score, risk, status, and reason.</p>
            </div>
          </div>

          <div className="grid gap-4">
            {companies.map((c) => (
              <div key={c.ticker} className="rounded-3xl border border-white/10 bg-[#0b1020] p-5 shadow-2xl">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-3xl font-black">{c.ticker}</h3>
                      <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-xs font-bold text-cyan-300">
                        {c.status}
                      </span>
                    </div>
                    <p className="mt-1 text-slate-400">{c.name}</p>
                    <p className="text-sm text-slate-500">{c.sector}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-xl font-black">${c.price}</p>
                    <p className={c.change >= 0 ? "text-green-400" : "text-red-400"}>
                      {c.change >= 0 ? "+" : ""}
                      {c.change}%
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Monster Score</p>
                    <p className="mt-1 text-3xl font-black text-cyan-300">{c.score}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Risk</p>
                    <p className="mt-2 font-bold">{c.risk}</p>
                  </div>
                  <div className="rounded-2xl bg-white/5 p-4">
                    <p className="text-xs text-slate-400">Action</p>
                    <p className="mt-2 font-bold">{c.status === "Core" ? "Hold thesis" : "Review"}</p>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-xs font-bold tracking-widest text-slate-500">WHY AM I SEEING THIS?</p>
                  <p className="mt-2 text-slate-200">{c.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}