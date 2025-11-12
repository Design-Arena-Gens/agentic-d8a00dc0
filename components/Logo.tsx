import { clsx } from 'clsx';

type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <svg viewBox="0 0 32 32" className={clsx('text-brand-400', className)} aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#75c9ff" />
          <stop offset="50%" stopColor="#39a9ff" />
          <stop offset="100%" stopColor="#0b86ff" />
        </linearGradient>
      </defs>
      <rect rx="8" ry="8" width="32" height="32" fill="url(#g)" opacity="0.2" />
      <path d="M8 18l8-12-2.5 8H24l-8 12 2.5-8H8z" fill="url(#g)" />
    </svg>
  );
}
