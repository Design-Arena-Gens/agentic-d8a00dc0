import Link from 'next/link';
import { Logo } from './Logo';

export function Navbar() {
  return (
    <header className="container-gutter py-6">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur-md">
        <Link href="#" className="flex items-center gap-3">
          <Logo className="h-6 w-6" />
          <span className="font-semibold tracking-tight">NeonPay</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-300">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#edge" className="hover:text-white">Why switch</a>
          <a href="#integrations" className="hover:text-white">Integrations</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#docs" className="hover:text-white">Docs</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#" className="hidden sm:inline-flex text-sm px-3 py-2 rounded-lg border border-white/10 hover:border-white/20">Sign in</a>
          <a href="#" className="inline-flex text-sm px-3 py-2 rounded-lg bg-brand-500 hover:bg-brand-400 text-white">Start building</a>
        </div>
      </div>
    </header>
  );
}
