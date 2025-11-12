import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://agentic-d8a00dc0.vercel.app'),
  title: {
    default: 'NeonPay ? Payments for the AI era',
    template: '%s ? NeonPay'
  },
  description: 'A modern payments platform delivering global coverage, lower fees, and AI-native fraud defense.',
  openGraph: {
    title: 'NeonPay ? Payments for the AI era',
    description: 'Global payments, lower fees, AI-native fraud. Go further with NeonPay.',
    url: 'https://agentic-d8a00dc0.vercel.app',
    siteName: 'NeonPay',
    images: [
      { url: '/og.svg', width: 1200, height: 630, alt: 'NeonPay' }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeonPay ? Payments for the AI era',
    description: 'Global payments, lower fees, AI-native fraud defense.',
    images: ['/og.svg']
  },
  icons: {
    icon: '/favicon.svg'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
