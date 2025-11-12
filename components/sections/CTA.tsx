export function CTA() {
  return (
    <section className="section text-center">
      <div className="card p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold">Ready to move faster and spend less?</h2>
        <p className="text-zinc-300 mt-3">Join our private beta and see what NeonPay can do for your margins.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="#" className="px-5 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90">Request access</a>
          <a href="#" className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:border-white/20">Talk to sales</a>
        </div>
      </div>
    </section>
  );
}
