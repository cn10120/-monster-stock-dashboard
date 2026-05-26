export type Company = {
  ticker: string;
  name: string;
  category: string;
  thesis: string;
  score: number;
  price: number;
  dayChangePct: number;
  ytdPct: number;
  revenueGrowth: number;
  grossMargin: number;
  moat: number;
  infrastructure: number;
  radarReason?: string;
  watchlist: boolean;
};

export const companies: Company[] = [
  { ticker: 'NVDA', name: 'NVIDIA', category: 'AI Compute', thesis: 'Dominant AI accelerator and software ecosystem.', score: 96, price: 139.2, dayChangePct: 1.8, ytdPct: 42, revenueGrowth: 78, grossMargin: 73, moat: 10, infrastructure: 10, watchlist: true },
  { ticker: 'AVGO', name: 'Broadcom', category: 'AI Chips / Networking', thesis: 'Custom silicon and networking supplier for AI infrastructure.', score: 90, price: 142.7, dayChangePct: 0.9, ytdPct: 31, revenueGrowth: 44, grossMargin: 68, moat: 9, infrastructure: 9, watchlist: true },
  { ticker: 'AMD', name: 'Advanced Micro Devices', category: 'AI Compute', thesis: 'AI accelerator challenger plus strong CPU franchise.', score: 84, price: 162.8, dayChangePct: -0.4, ytdPct: 24, revenueGrowth: 28, grossMargin: 51, moat: 7, infrastructure: 8, watchlist: true },
  { ticker: 'ALAB', name: 'Astera Labs', category: 'AI Connectivity', thesis: 'Connectivity bottleneck supplier for AI servers.', score: 86, price: 79.4, dayChangePct: 3.2, ytdPct: 55, revenueGrowth: 72, grossMargin: 75, moat: 8, infrastructure: 9, radarReason: 'High growth + AI connectivity bottleneck.', watchlist: true },
  { ticker: 'CRDO', name: 'Credo Technology', category: 'Data Movement', thesis: 'High-speed connectivity for AI data centers.', score: 82, price: 68.1, dayChangePct: 2.1, ytdPct: 47, revenueGrowth: 64, grossMargin: 62, moat: 7, infrastructure: 8, radarReason: 'Strong relative strength and data-center momentum.', watchlist: false },
  { ticker: 'ASML', name: 'ASML', category: 'Semiconductor Equipment', thesis: 'Monopoly-like role in EUV lithography.', score: 92, price: 965.4, dayChangePct: 0.3, ytdPct: 18, revenueGrowth: 22, grossMargin: 51, moat: 10, infrastructure: 10, watchlist: true },
  { ticker: 'PLTR', name: 'Palantir', category: 'AI Software', thesis: 'AI operating layer for enterprise and government workflows.', score: 83, price: 121.3, dayChangePct: 1.2, ytdPct: 61, revenueGrowth: 36, grossMargin: 80, moat: 8, infrastructure: 7, watchlist: true },
  { ticker: 'CEG', name: 'Constellation Energy', category: 'AI Energy', thesis: 'Nuclear power leverage as data centers demand reliable energy.', score: 78, price: 287.9, dayChangePct: -0.2, ytdPct: 34, revenueGrowth: 16, grossMargin: 31, moat: 8, infrastructure: 9, watchlist: true },
  { ticker: 'OKLO', name: 'Oklo', category: 'AI Energy / Nuclear', thesis: 'Speculative nuclear energy option for future AI power demand.', score: 70, price: 41.2, dayChangePct: 4.6, ytdPct: 72, revenueGrowth: 0, grossMargin: 0, moat: 6, infrastructure: 8, radarReason: 'AI energy narrative + high momentum, but speculative.', watchlist: false }
];
