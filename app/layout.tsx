import type { Metadata } from 'next';
import { Merriweather, Inter } from 'next/font/google';
import './globals.css';
import NetworkBar from '../components/NetworkBar';

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
});

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const BASE = 'https://aiskillsagents.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'AI Skills Agents | Custom AI Systems for Your Business',
    template: '%s | AI Skills Agents',
  },
  description: 'We build custom AI systems that answer your phones, book appointments, follow up with leads, and run your back office — so you can focus on what you do best.',
  keywords: ['AI agents for business', 'custom AI systems', 'AI automation', 'business AI implementation', 'AI lead generation', 'AI customer service', 'AI for small business'],
  openGraph: {
    title: 'AI Skills Agents | We Handle the Work You Hate',
    description: 'Custom AI systems that save time and make money for small business owners. Setup in 2 weeks. No long-term contracts.',
    url: BASE,
    siteName: 'AI Skills Agents',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'AI Skills Agents' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Skills Agents | We Handle the Work You Hate',
    description: 'Custom AI systems built for small business owners. No jargon. No contracts. Just results.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  alternates: { canonical: BASE },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable}`}>
      <head>
        <meta name="linkedin:owner" content="The Voice of Cash" />
        <meta property="og:image:type" content="image/png" />
        <meta name="facebook-domain-verification" content="" />
      </head>
      <body style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}><NetworkBar />{children}</body>
    </html>
  );
}
