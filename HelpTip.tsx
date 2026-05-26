import { helpLegend } from './help';

export default function HelpTip({ term }: { term: keyof typeof helpLegend }) {
  return <span className="ml-1 text-sky-300 help-tip" title={helpLegend[term]}>?</span>;
}
