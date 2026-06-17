import { CtaSection } from '@/components/CtaSection';
import { Faq } from '@/components/Faq';
import { Features } from '@/components/Features';
import { Hero } from '@/components/Hero';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I calculate food cost percentage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Divide your ingredient cost by the selling price and multiply by 100. CostMyDish does this automatically for every recipe and selling format.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good food cost percentage for a restaurant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most restaurants target 28–35% food cost. CostMyDish lets you set your own target and alerts you when any dish goes over.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use CostMyDish as a bakery pricing calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Add your ingredients, build your recipe, set how you sell (whole cake or by the slice), and CostMyDish shows your food cost % and profit for each format instantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does CostMyDish work for food trucks and caterers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. CostMyDish works for restaurants, food trucks, caterers, home bakers and cafés. Set multiple selling formats per recipe to cost every way you sell.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is CostMyDish free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The free plan includes 5 recipes and 20 ingredients with full cost calculations and margin status badges. Upgrade to Hobbyist for unlimited recipes and ingredients.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Faq />
      <Pricing />
      <CtaSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
