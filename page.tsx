import { helpLegend } from '../../lib/help';

export default function LegendPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Help Legend</h1>
      <p className="mt-3 text-slate-300">Use this page as the cheat sheet for every metric inside the dashboard.</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {Object.entries(helpLegend).map(([term, description]) => (
          <div key={term} className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
            <h2 className="text-lg font-bold capitalize">{term.replace(/([A-Z])/g, ' $1')}</h2>
            <p className="mt-2 text-slate-300">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
