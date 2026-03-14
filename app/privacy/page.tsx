import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | AI Skills Agents',
  description: 'Privacy policy for AI Skills Agents. How we collect, use, and protect your information.',
  alternates: { canonical: 'https://aiskillsagents.com/privacy' },
}

const BLUE = '#2563EB'
const TEXT = '#1A1A1A'
const TEXT_SECONDARY = '#4A4A4A'
const TEXT_MUTED = '#7A7A7A'
const BORDER = '#E8E5E0'
const BG_WARM = '#FBF9F6'

export default function Privacy() {
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
        }}>Privacy Policy</h1>
        <p style={{ color: TEXT_MUTED, lineHeight: 1.8, marginBottom: 36, fontSize: 15 }}>Last updated: February 2025</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>
              What We Collect
            </h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>
              AI Skills Agents collects only the information you provide through our contact forms — your name, email address, and business details. We do not collect data passively or run advertising trackers on this site.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>
              How We Use It
            </h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>
              We use your information solely to respond to your inquiry and, if you agree, to follow up about our services. We will never sell your data to third parties. Period.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>
              Email
            </h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>
              We may follow up on your inquiry by email. You can opt out at any time by replying to any email we send and asking us to stop. We will honor that immediately.
            </p>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>
              Questions
            </h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>
              If you have any questions about how we handle your information, reach out:{' '}
              <a href="mailto:thevoiceofcash@gmail.com" style={{ color: BLUE, textDecoration: 'underline' }}>
                thevoiceofcash@gmail.com
              </a>
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
