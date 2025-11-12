import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ValueProps } from '@/components/sections/ValueProps';
import { Edge } from '@/components/sections/Edge';
import { Integrations } from '@/components/sections/Integrations';
import { Pricing } from '@/components/sections/Pricing';
import { CTA } from '@/components/sections/CTA';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueProps />
      <Edge />
      <Integrations />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
