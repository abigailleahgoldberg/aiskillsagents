import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Affiliate Disclosure | AI Skills Agents',
  description: 'FTC affiliate disclosure for AI Skills Agents.',
  alternates: { canonical: 'https://aiskillsagents.com/affiliate-disclosure' },
}
const BLUE = '#2563EB'
const TEXT = '#1A1A1A'
const TEXT_SECONDARY = '#4A4A4A'
const TEXT_MUTED = '#7A7A7A'
const BORDER = '#E8E5E0'
const BG_WARM = '#FBF9F6'

export default function AffiliateDisclosure() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      <nav style={{ padding: '0 5vw', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${BORDER}`, background: '#FFFFFF' }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, textDecoration: 'none' }}>AI Skills Agents</a>
        <a href="/" style={{ fontSize: 14, color: TEXT_MUTED, textDecoration: 'none' }}>← Back to Home</a>
      </nav>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '72px 5vw 80px' }}>
        <h1 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 36, fontWeight: 700, marginBottom: 12, color: TEXT }}>Affiliate Disclosure</h1>
        <p style={{ color: TEXT_MUTED, lineHeight: 1.8, marginBottom: 36, fontSize: 15 }}>Last updated: March 2026</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {[
            { h: 'FTC Compliance Notice', b: 'In accordance with the Federal Trade Commission (FTC) guidelines, we disclose that AI Skills Agents participates in affiliate marketing programs. This means we may earn commissions when you click on links to products or services and make a purchase.' },
            { h: 'How Affiliate Links Work', b: 'Some links on this website are affiliate links. When you click these links and make a purchase, we receive a small commission at no additional cost to you. This helps support our operations and allows us to continue providing free content.' },
            { h: 'Our Commitment', b: 'Affiliate relationships do not influence our content or recommendations. We only recommend products and services we believe provide value. Our opinions are our own.' },
            { h: 'Identifying Affiliate Links', b: 'We strive to clearly identify affiliate relationships. Posts containing affiliate links will include a disclosure notice.' },
            { h: 'Questions?', b: 'Contact us at thevoiceofcash@gmail.com' },
          ].map(s => (
            <div key={s.h}>
              <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>{s.h}</h2>
              <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
      <footer style={{ background: BG_WARM, borderTop: `1px solid ${BORDER}`, padding: '28px 5vw', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 13, color: TEXT_MUTED }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 16, color: TEXT, textDecoration: 'none' }}>AI Skills Agents</a>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="/privacy" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Privacy</a>
          <a href="/terms" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Terms</a>
          <a href="/disclaimer" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Disclaimer</a>
          <a href="/affiliate-disclosure" style={{ color: BLUE, textDecoration: 'none' }}>Affiliate Disclosure</a>
          <a href="/dmca" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>DMCA</a>
        </div>
        <div>© 2025 AI Skills Agents</div>
      </footer>
    </div>
  )
}
