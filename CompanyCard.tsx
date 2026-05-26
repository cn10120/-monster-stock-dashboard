import Link from 'next/link';
import { Company } from './companies';
import HelpTip from './HelpTip';

export default function CompanyCard({ company }: { company: Company }) {
  const badge = company.score >= 85 ? 'Study Now' : company.score >= 75 ? 'Watch' : 'Speculative';
  return (
    <Link href={`/company/${company.ticker}`} className="block rounded-2xl border border-slate-700 bg-slate-900/70 p-5 hover:border-sky-400">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xl font-bold">{company.ticker}</div>
          <div className="text-sm text-slate-400">{company.name}</div>
        </div>
        <div className="rounded-full bg-sky-950 px-3 py-1 text-xs text-sky-200">{badge}</div>
      </div>
      <div className="mt-4 text-sm text-slate-300">{company.thesis}</div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div>Score<HelpTip term="score" />: <b>{company.score}</b></div>
        <div>Day<HelpTip term="dayChange" />: <b className={company.dayChangePct >= 0 ? 'text-emerald-300' : 'text-red-300'}>{company.dayChangePct}%</b></div>
        <div>Rev Growth<HelpTip term="revenueGrowth" />: <b>{company.revenueGrowth}%</b></div>
        <div>Moat<HelpTip term="moat" />: <b>{company.moat}/10</b></div>
      </div>
    </Link>
  );
}
