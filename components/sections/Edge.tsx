export function Edge() {
  return (
    <section id="edge" className="section">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        <div className="card p-8">
          <h2 className="text-2xl font-semibold">Designed to win on margins and UX</h2>
          <p className="text-zinc-300 mt-3">
            NeonPay combines low-latency routing with interchange optimization and adaptive risk controls.
            The result: fewer declines, lower fraud, and better unit economics at scale.
          </p>
          <ul className="mt-6 space-y-3 text-zinc-200">
            <li>? Smart cascading across acquirers to maximize approvals</li>
            <li>? BIN-level optimizations for rewards, debit, and corporate cards</li>
            <li>? Risk profiles tuned per product, geography, and device fingerprint</li>
            <li>? Real-time experiments to A/B test payment flows without code changes</li>
          </ul>
        </div>
        <div className="card p-8">
          <h3 className="text-lg font-semibold">Competitive snapshot</h3>
          <div className="mt-4 grid grid-cols-2 text-sm">
            <div className="text-zinc-400">Checkout speed</div>
            <div className="text-white">Sub-100ms render</div>
            <div className="text-zinc-400 mt-2">Fraud losses</div>
            <div className="text-white mt-2">? up to 40%</div>
            <div className="text-zinc-400 mt-2">Approval rate</div>
            <div className="text-white mt-2">+1-3 pts</div>
            <div className="text-zinc-400 mt-2">Fees</div>
            <div className="text-white mt-2">-10?20 bps</div>
          </div>
          <p className="text-xs text-zinc-500 mt-4">Metrics are indicative and vary by region, MCC, and issuer.</p>
        </div>
      </div>
    </section>
  );
}
