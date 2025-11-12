export function ValueProps() {
  const items = [
    {
      title: 'Global by default',
      desc: 'Local acquiring in 45+ markets, 190+ currencies, and instant payouts to cards and bank accounts.'
    },
    {
      title: 'Transparent economics',
      desc: 'Volume-based pricing with automatic interchange optimization. No setup fees. No gotchas.'
    },
    {
      title: 'AI-native fraud defense',
      desc: 'Adaptive models trained on your traffic, reducing false declines while blocking abuse in real time.'
    },
    {
      title: 'Drop-in SDKs',
      desc: 'React, iOS, and Android SDKs that are fast, accessible, and delightful to integrate.'
    },
    {
      title: 'Enterprise-grade uptime',
      desc: 'Multi-region routing with automatic failover and a 99.99% uptime SLA.'
    },
    {
      title: 'Actionable observability',
      desc: 'Unified logging, L2 dispute automation, and real-time insights for finance and growth teams.'
    }
  ];
  return (
    <section id="features" className="section">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">Everything you need to move money</h2>
        <p className="text-zinc-300 mt-4">A complete, modular stack so you can ship faster and optimize margins as you scale.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((i) => (
          <div key={i.title} className="card p-6">
            <h3 className="text-lg font-semibold">{i.title}</h3>
            <p className="text-zinc-300 mt-2">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
