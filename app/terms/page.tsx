import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | AI Skills Agents',
  description: 'Terms of service for AI Skills Agents.',
  alternates: { canonical: 'https://aiskillsagents.com/terms' },
}

const BLUE = '#2563EB'
const TEXT = '#1A1A1A'
const TEXT_SECONDARY = '#4A4A4A'
const TEXT_MUTED = '#7A7A7A'
const BORDER = '#E8E5E0'
const BG_WARM = '#FBF9F6'

export default function Terms() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      {/* Nav */}
      <nav style={{ padding: '0 5vw', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${BORDER}`, background: '#FFFFFF' }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, textDecoration: 'none' }}>
          AI Skills Agents
        </a>
        <a href="/" style={{ fontSize: 14, color: TEXT_MUTED, textDecoration: 'none' }}>← Back to Home</a>
      </nav>

      <div style={{ maxWidth: 700, margin: '0 auto', padding: '72px 5vw 80px' }}>
        <h1 style={{
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: 36, fontWeight: 700, marginBottom: 12, color: TEXT,
        }}>Terms of Service</h1>
        <p style={{ color: TEXT_MUTED, lineHeight: 1.8, marginBottom: 36, fontSize: 15 }}>Last updated: February 2025</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>
              Who We Are
            </h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>
              This site is operated by The Voice of Cash LLC. We provide AI implementation and automation services for businesses.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>
              Using This Site
            </h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>
              By using aiskillsagents.com, you agree to these terms. You may use this site for lawful purposes only. You may not use it in any way that could damage, disable, or impair the site or interfere with other users.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>
              Our Services
            </h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>
              All custom AI builds are governed by separate service agreements signed before work begins. This website does not constitute a contract or guarantee of specific results. Each engagement is different and outcomes vary by business.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>
              No Guarantees
            </h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>
              We work hard to deliver results for every client, but we cannot guarantee specific outcomes. Statistics cited on this site (ROI figures, hours saved, etc.) come from third-party research and represent averages across industries, not promises for your specific situation.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>
              Questions
            </h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>
              Contact us at{' '}
              <a href="mailto:thevoiceofcash@gmail.com" style={{ color: BLUE, textDecoration: 'underline' }}>
                thevoiceofcash@gmail.com
              </a>{' '}
              with any questions about these terms.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: BG_WARM, borderTop: `1px solid ${BORDER}`, padding: '28px 5vw', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 13, color: TEXT_MUTED }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 16, color: TEXT, textDecoration: 'none' }}>AI Skills Agents</a>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="/privacy" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Privacy</a>
          <a href="/terms" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Terms</a>
        </div>
        <div>© 2025 AI Skills Agents</div>
      </footer>
    </div>
  )
}
