import { CtaSection } from '@/components/CtaSection';
import { Faq } from '@/components/Faq';
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Faq />
      <Pricing />
      <CtaSection />
    </>
  );
}
