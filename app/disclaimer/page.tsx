import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Disclaimer | AI Skills Agents',
  description: 'Disclaimer for AI Skills Agents.',
  alternates: { canonical: 'https://aiskillsagents.com/disclaimer' },
}
const BLUE = '#2563EB'
const TEXT = '#1A1A1A'
const TEXT_SECONDARY = '#4A4A4A'
const TEXT_MUTED = '#7A7A7A'
const BORDER = '#E8E5E0'
const BG_WARM = '#FBF9F6'

export default function Disclaimer() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      <nav style={{ padding: '0 5vw', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${BORDER}`, background: '#FFFFFF' }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, textDecoration: 'none' }}>AI Skills Agents</a>
        <a href="/" style={{ fontSize: 14, color: TEXT_MUTED, textDecoration: 'none' }}>← Back to Home</a>
      </nav>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '72px 5vw 80px' }}>
        <h1 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 36, fontWeight: 700, marginBottom: 12, color: TEXT }}>Disclaimer</h1>
        <p style={{ color: TEXT_MUTED, lineHeight: 1.8, marginBottom: 36, fontSize: 15 }}>Last updated: March 2026</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          {[
            { h: 'No Guarantee of Results', b: 'AI Skills Agents provides AI automation consulting and services. Results vary based on individual business circumstances, market conditions, and implementation. Past performance does not guarantee future results.' },
            { h: 'Not Financial or Legal Advice', b: 'Nothing on this website constitutes financial, legal, or tax advice. Consult qualified professionals for decisions affecting your business.' },
            { h: 'AI-Generated Content', b: "Portions of this website's content are generated or assisted by artificial intelligence. While we review content for accuracy, it may contain errors or outdated information." },
            { h: 'Third-Party Services', b: 'We may recommend or integrate with third-party tools and services. We are not responsible for the performance, pricing changes, or terms of third-party providers.' },
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
          <a href="/disclaimer" style={{ color: BLUE, textDecoration: 'none' }}>Disclaimer</a>
          <a href="/affiliate-disclosure" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Affiliate Disclosure</a>
          <a href="/dmca" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>DMCA</a>
        </div>
        <div>© 2025 AI Skills Agents</div>
      </footer>
    </div>
  )
}
