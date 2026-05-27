export default async function CompanyPage({ params }: any) {

const ticker =
params?.ticker ||
params?.slug ||
"NVDA";

const company = {
name: ticker.toUpperCase(),
price: "$214.86",
change: "+2.4%",
score: 96,
status: "Core",
risk: "Low",
sector: "AI Compute"
};

return (
<main>
<a href="/" style={{color:"#38bdf8"}}>
← Back to Dashboard
</a>

<h1>{ticker.toUpperCase()}</h1>

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

<p>{`Monster AI believes ${ticker.toUpperCase()} shows characteristics worth monitoring.`}</p>


<h3>Bull Case</h3>
<p>
Growth remains strong and market
demand is improving.
</p>

<h3>Bear Case</h3>
<p>
Valuation risk and slowing growth
could weaken the thesis.
</p>

<h3>Watch</h3>
<p>
Revenue, volume and future guidance.
</p>

</section>
<section className="card">
<h2>Growth Engine</h2>

<p>Revenue Growth: +74%</p>
<p>EPS Growth: +61%</p>
<p>Free Cash Flow Growth: +38%</p>
<p>Gross Margin: 76%</p>

<h3>What this means</h3>

<p>
Growth metrics show whether the business itself
is expanding and becoming stronger over time.
</p>

</section>
  
</main>
);
}
