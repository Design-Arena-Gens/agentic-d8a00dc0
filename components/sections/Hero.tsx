export function Hero() {
  return (
    <section className="section relative">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]" />
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
          <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
          Now in private beta
        </span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
          Payments engineered for speed,
          <span className="block gradient-text">priced for scale.</span>
        </h1>
        <p className="mt-6 text-zinc-300 text-lg">
          NeonPay is the modern payments platform built for the AI era ? global coverage,
          radically transparent pricing, and intelligent fraud defense so you can grow with confidence.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#" className="px-5 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90">Start building</a>
          <a href="#" className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:border-white/20">Talk to sales</a>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-zinc-400">
          <div className="card p-4"><div className="text-2xl font-semibold text-white">190+</div> countries & currencies</div>
          <div className="card p-4"><div className="text-2xl font-semibold text-white">99.99%</div> uptime SLA</div>
          <div className="card p-4"><div className="text-2xl font-semibold text-white">40%</div> lower fraud losses</div>
          <div className="card p-4"><div className="text-2xl font-semibold text-white">-15 bps</div> average fees</div>
        </div>
      </div>
    </section>
  );
}
