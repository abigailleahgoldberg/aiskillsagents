import type { Metadata } from "next";
import "./globals.css";

const BASE = "https://aiskillsagents.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: { default: "AI Skills Agents | Custom AI Agents for Your Business", template: "%s | AI Skills Agents" },
  description: "We build custom AI agents that handle your lead gen, customer service, operations, and more — 24/7, without the overhead. National AI implementation, built for results.",
  keywords: ["AI agents for business", "custom AI agents", "AI automation", "business AI implementation", "AI lead generation", "autonomous AI systems", "AI customer service", "AI operations"],
  openGraph: {
    title: "AI Skills Agents | Custom AI Agents Built for Your Business",
    description: "Stop paying for tools nobody uses. We build AI agents that actually run your business — lead gen, ops, customer service, and more.",
    url: BASE, siteName: "AI Skills Agents", type: "website", locale: "en_US",
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "AI Skills Agents", description: "Custom AI agents built to run your business.", images: [`${BASE}/og-image.png`] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: BASE },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
