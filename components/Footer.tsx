export function Footer() {
  return (
    <footer className="section">
      <div className="border-t border-white/10 pt-10 text-sm text-zinc-400">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>? {new Date().getFullYear()} NeonPay, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Status</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
