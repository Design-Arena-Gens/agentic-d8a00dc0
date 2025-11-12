export function Integrations() {
  return (
    <section id="integrations" className="section">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">Drop-in SDKs and a clean API</h2>
          <p className="text-zinc-300 mt-4">Ship in hours, not weeks. Our components are accessible, themeable, and battle-tested.</p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm text-zinc-200">
            <li className="card p-4">React Checkout</li>
            <li className="card p-4">Web Components</li>
            <li className="card p-4">iOS & Android SDKs</li>
            <li className="card p-4">Server libraries (Node, Python, Go)</li>
          </ul>
        </div>
        <div className="card p-0 overflow-hidden">
          <div className="bg-zinc-950 border-b border-white/10 px-4 py-2 text-xs text-zinc-400">api/charges.create.ts</div>
          <pre className="p-4 text-sm overflow-auto leading-relaxed"><code>{`// Create a charge
const res = await fetch('https://api.neonpay.com/v1/charges', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': ` + "`Bearer ${process.env.NEONPAY_KEY}`" + `
  },
  body: JSON.stringify({
    amount: 4200, // cents
    currency: 'usd',
    source: token.id,
    description: 'Pro subscription'
  })
});
const charge = await res.json();
`}</code></pre>
        </div>
      </div>
    </section>
  );
}
