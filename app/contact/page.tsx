import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact | AI Skills Agents',
  description: 'Get in touch with AI Skills Agents.',
  alternates: { canonical: 'https://aiskillsagents.com/contact' },
}
const BLUE = '#2563EB'
const TEXT = '#1A1A1A'
const TEXT_SECONDARY = '#4A4A4A'
const TEXT_MUTED = '#7A7A7A'
const BORDER = '#E8E5E0'
const BG_WARM = '#FBF9F6'

export default function Contact() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      <nav style={{ padding: '0 5vw', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${BORDER}`, background: '#FFFFFF' }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, textDecoration: 'none' }}>AI Skills Agents</a>
        <a href="/" style={{ fontSize: 14, color: TEXT_MUTED, textDecoration: 'none' }}>← Back to Home</a>
      </nav>
      <div style={{ maxWidth: 700, margin: '0 auto', padding: '72px 5vw 80px' }}>
        <h1 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 36, fontWeight: 700, marginBottom: 12, color: TEXT }}>Contact Us</h1>
        <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, marginBottom: 36, fontSize: 16 }}>
          How can we help? Whether you have questions about AI automation, want to discuss a project, or are ready to get started — reach out and we will get back to you.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>Get In Touch</h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16, marginBottom: 8 }}>
              <strong>Email:</strong>{' '}
              <a href="mailto:thevoiceofcash@gmail.com" style={{ color: BLUE, textDecoration: 'underline' }}>thevoiceofcash@gmail.com</a>
            </p>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16, marginBottom: 8 }}>
              We typically respond within 1–2 business days.
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>Follow Us</h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16 }}>
              <a href="https://x.com/aiskillsagents" target="_blank" rel="noopener noreferrer" style={{ color: BLUE, textDecoration: 'underline' }}>@aiskillsagents on X (Twitter)</a>
            </p>
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 20, fontWeight: 700, color: TEXT, marginBottom: 10 }}>Ready to Start?</h2>
            <p style={{ color: TEXT_SECONDARY, lineHeight: 1.8, fontSize: 16, marginBottom: 16 }}>
              Tell us about your business and what you want to automate. We will put together a custom plan.
            </p>
            <a href="/start-here" style={{ display: 'inline-block', background: BLUE, color: '#fff', fontWeight: 700, fontSize: 15, padding: '12px 24px', textDecoration: 'none' }}>
              Start Here →
            </a>
          </div>
        </div>
      </div>
      <footer style={{ background: BG_WARM, borderTop: `1px solid ${BORDER}`, padding: '28px 5vw', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, fontSize: 13, color: TEXT_MUTED }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 16, color: TEXT, textDecoration: 'none' }}>AI Skills Agents</a>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href="/privacy" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Privacy</a>
          <a href="/terms" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Terms</a>
          <a href="/disclaimer" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>Disclaimer</a>
          <a href="/contact" style={{ color: BLUE, textDecoration: 'none' }}>Contact</a>
          <a href="/dmca" style={{ color: TEXT_MUTED, textDecoration: 'none' }}>DMCA</a>
        </div>
        <div>© 2025 AI Skills Agents</div>
      </footer>
    </div>
  )
}
