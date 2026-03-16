import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'DMCA Notice | AI Skills Agents',
  description: 'DMCA takedown policy for AI Skills Agents.',
  alternates: { canonical: 'https://aiskillsagents.com/dmca' },
}
const BLUE = '#2563EB'
const TEXT = '#1A1A1A'
const TEXT_SECONDARY = '#4A4A4A'
const TEXT_MUTED = '#7A7A7A'
const BORDER = '#E8E5E0'
const BG_WARM = '#FBF9F6'

export default function DMCA() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      <nav style={{ padding: '0 5vw', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${BORDER}`, background: '#FFFFFF' }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, textDecoration: 'none' }}>AI Skills Agents</a>
        <a href="/" style={{ fontSize: 14, color: TEXT_MUTED, textDecoration: 'none' }}>← Back to Home</a>
      </nav>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '72px 5vw 80px' }}>
        <h1 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 36, fontWeight: 700, marginBottom: 12, color: TEXT }}>DMCA Notice &amp; Takedown Policy</h1>
        <p style={{ color: TEXT_MUTED, lineHeight: 1.8, marginBottom: 36, fontSize: 15 }}>Last updated: March 2026</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16, marginBottom: 16 }}>
              AI Skills Agents respects intellectual property rights. If you believe content on this site infringes your copyright, please send a DMCA takedown notice to:
            </p>
            <div style={{ background: BG_WARM, border: `1px solid ${BORDER}`, padding: '20px 24px', marginBottom: 16 }}>
              <p style={{ color: TEXT, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>DMCA Agent: The Voice of Cash</p>
              <p style={{ color: TEXT_SECONDARY, fontSize: 15 }}>
                Email:{' '}
                <a href="mailto:thevoiceofcash@gmail.com" style={{ color: BLUE, textDecoration: 'underline' }}>thevoiceofcash@gmail.com</a>
              </p>
            </div>
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>Your Notice Must Include</h2>
            <ol style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16, paddingLeft: 20 }}>
              <li style={{ marginBottom: 8 }}>Identification of the copyrighted work claimed to be infringed</li>
              <li style={{ marginBottom: 8 }}>Identification of the material to be removed, with sufficient detail to locate it</li>
              <li style={{ marginBottom: 8 }}>Your contact information (name, address, phone, email)</li>
              <li style={{ marginBottom: 8 }}>A statement that you have a good faith belief the use is not authorized</li>
              <li style={{ marginBottom: 8 }}>A statement under penalty of perjury that the information is accurate</li>
              <li>Your physical or electronic signature</li>
            </ol>
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>Counter-Notification</h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>
              If you believe your content was wrongly removed, you may submit a counter-notification with the required information under 17 U.S.C. § 512(g).
            </p>
          </div>
        </div>
      </div>
      <footer style={{ background: BG_WARM, borderTop: `1px solid ${BORDER}`, padding: '28px 5vw', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 13, color: TEXT_MUTED }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 16, color: TEXT, textDecoration: 'none' }}>AI Skills Agents</a>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="/privacy" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Privacy</a>
          <a href="/terms" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Terms</a>
          <a href="/disclaimer" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Disclaimer</a>
          <a href="/contact" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Contact</a>
          <a href="/dmca" style={{ color: BLUE, textDecoration: 'none' }}>DMCA</a>
        </div>
        <div>© 2025 AI Skills Agents</div>
      </footer>
    </div>
  )
}
