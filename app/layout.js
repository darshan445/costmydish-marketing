import { Inter } from 'next/font/google';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { siteConfig } from '@/lib/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'CostMyDish – Free Food Cost Calculator App for Chefs, Bakers & Restaurants',
  description:
    'Free food costing calculator for chefs, home bakers, caterers and food trucks. Build your ingredient library, cost recipes in real time, and set selling prices that hit your food cost % target.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'CostMyDish – Free Food Cost Calculator',
    description:
      'Know your food cost percentage before you price a single dish. CostMyDish is a free food costing calculator for restaurant owners, home bakers, caterers and food truck operators.',
    url: 'https://www.costmydish.com',
    images: [
      {
        url: 'https://www.costmydish.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'CostMyDish – Free Food Cost Calculator',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CostMyDish – Free Food Cost Calculator',
    description: 'Know your food cost % before you price a single dish.',
    images: ['https://www.costmydish.com/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CostMyDish',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android, iOS',
  url: 'https://www.costmydish.com',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description: 'Food cost calculator for chefs, bakers and food businesses',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
