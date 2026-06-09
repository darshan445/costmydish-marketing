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
  title: 'CostMyDish — Recipe costing & food cost calculator',
  description:
    'Know exactly what every dish costs. Build an ingredient library, cost recipes in real time, and set selling prices with confidence.',
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'CostMyDish',
    description: 'Recipe costing made simple. Price with confidence.',
    images: ['/og-banner.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-banner.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'CostMyDish',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android, iOS',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    'Food cost calculator for home bakers, cottage food operators and small restaurant owners',
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
