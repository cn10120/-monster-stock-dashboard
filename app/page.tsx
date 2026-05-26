"use client";

const companies = [
  {
    ticker: "NVDA",
    price: 214.86,
    change: -0.21,
    monster: 96,
    risk: "Low",
    status: "CORE",
    reason: "AI infrastructure leader"
  },
  {
    ticker: "AMD",
    price: 503.89,
    change: 7.78,
    monster: 90,
    risk: "Medium",
    status: "CORE",
    reason: "Data center growth accelerating"
  },
  {
    ticker: "PLTR",
    price: 136.60,
    change: -0.20,
    monster: 84,
    risk: "Low",
    status: "RADAR",
    reason: "Government contracts expanding"
  },
  {
    ticker: "AVGO",
    price: 422.01,
    change: 1.90,
    monster: 88,
    risk: "Low",
    status: "WATCHLIST",
    reason: "AI networking demand"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <h1 className="text-5xl font-bold">
            Monster Stock OS
          </h1>

          <p className="text-gray-400 mt-2">
            AI powered investing intelligence
          </p>
        </div>

        <div className="grid gap-5">

          {companies.map((stock) => (
            <div
              key={stock.ticker}
              className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800"
            >

              <div className="flex justify-between">

                <div>

                  <div className="text-2xl font-bold">
                    {stock.ticker}
                  </div>

                  <div className="text-gray-400">
                    ${stock.price}
                  </div>

                </div>

                <div
                  className={`font-bold ${
                    stock.change > 0
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {stock.change}%
                </div>

              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">

                <div className="bg-zinc-800 p-3 rounded-xl">
                  <div className="text-gray-400 text-sm">
                    Monster Score
                  </div>

                  <div className="text-2xl font-bold">
                    {stock.monster}
                  </div>
                </div>

                <div className="bg-zinc-800 p-3 rounded-xl">
                  <div className="text-gray-400 text-sm">
                    Risk
                  </div>

                  <div>
                    {stock.risk}
                  </div>
                </div>

                <div className="bg-zinc-800 p-3 rounded-xl">
                  <div className="text-gray-400 text-sm">
                    Status
                  </div>

                  <div>
                    {stock.status}
                  </div>
                </div>

              </div>

              <div className="mt-5 border-t border-zinc-800 pt-4">

                <div className="text-sm text-gray-400">
                  Why am I seeing this?
                </div>

                <div className="mt-2">
                  {stock.reason}
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>
    </main>
  );
}
