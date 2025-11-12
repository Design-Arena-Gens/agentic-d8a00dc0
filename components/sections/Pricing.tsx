export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">Simple, transparent pricing</h2>
        <p className="text-zinc-300 mt-4">Volume discounts automatically apply as you scale.</p>
      </div>
      <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-6">
        <div className="card p-8 text-center">
          <div className="text-5xl font-semibold">0.2% + 10?</div>
          <div className="text-zinc-300 mt-2">Per successful card charge</div>
          <ul className="text-zinc-200 text-sm mt-6 space-y-2">
            <li>? No setup or monthly fees</li>
            <li>? Volume discounts from $250k/mo</li>
            <li>? Interchange+ available for enterprise</li>
          </ul>
          <a href="#" className="mt-8 inline-flex px-5 py-3 rounded-xl bg-brand-500 hover:bg-brand-400">Get started</a>
        </div>
        <div className="card p-8">
          <h3 className="text-lg font-semibold">Switch and save</h3>
          <p className="text-zinc-300 mt-2">Bring your processing statement and we\'ll model savings with identical volumes and card mix.</p>
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm">
            <div className="rounded-xl bg-white/5 p-4">
              <div className="text-zinc-400">Est. fee reduction</div>
              <div className="text-2xl">10?20 bps</div>
            </div>
            <div className="rounded-xl bg-white/5 p-4">
              <div className="text-zinc-400">Approval lift</div>
              <div className="text-2xl">+1?3 pts</div>
            </div>
          </div>
          <p className="text-xs text-zinc-500 mt-4">Availability varies by region and MCC.</p>
        </div>
      </div>
    </section>
  );
}
