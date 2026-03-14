import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start Here — What Are AI Agents? | AI Skills Agents',
  description: 'New to AI agents for business? Start here. Plain English explanation of what AI agents are, how they work, and the fastest path to using them in your business.',
  alternates: { canonical: 'https://aiskillsagents.com/start-here' },
}

const BLUE = '#2563EB'
const BLUE_DARK = '#1D4ED8'
const TEXT = '#1A1A1A'
const TEXT_SECONDARY = '#4A4A4A'
const TEXT_MUTED = '#7A7A7A'
const BORDER = '#E8E5E0'
const BG_WARM = '#FBF9F6'
const BG_ACCENT = '#F0EDE8'

const steps = [
  {
    num: '01',
    title: 'What is an AI agent?',
    body: 'An AI agent is software that can take actions on your behalf. It reads your emails, answers your phones, updates your records, and follows up with customers — like a smart employee that never sleeps and never forgets.',
  },
  {
    num: '02',
    title: 'What is an AI skill?',
    body: 'A skill is a specific job trained into an agent. A lead qualification skill. A customer service skill. A scheduling skill. Each one is purpose-built to handle one thing really well.',
  },
  {
    num: '03',
    title: 'What can they actually do?',
    body: 'Respond to leads instantly. Answer customer questions 24/7. Write and schedule content. Track your operations. Send reports. Book appointments. Follow up on unpaid invoices. Almost any repetitive task your business does regularly.',
  },
  {
    num: '04',
    title: 'What do they cost?',
    body: 'Depends on the scope. Simple systems start under $500/month. Full custom AI builds run $799–$4,999/month. Most businesses find the cost is less than one part-time hire — but with more consistent results.',
  },
  {
    num: '05',
    title: 'Where do I start?',
    body: 'Pick the one thing in your business that eats the most time every week. That is your first AI system. Start specific. See the results. Then expand from there.',
  },
]

export default function StartHerePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', color: TEXT, fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      {/* Nav */}
      <nav style={{ padding: '0 5vw', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${BORDER}`, background: '#FFFFFF' }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, textDecoration: 'none' }}>
          AI Skills Agents
        </a>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="/blog" style={{ fontSize: 14, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500 }}>Blog</a>
          <a href="/tools" style={{ fontSize: 14, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500 }}>Tools</a>
          <a href="/#get-started" style={{
            fontSize: 14, fontWeight: 700, color: '#FFFFFF', textDecoration: 'none',
            background: BLUE, padding: '10px 20px', borderRadius: 6,
          }}>
            Free Consultation
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ padding: '72px 5vw 56px', maxWidth: 820, margin: '0 auto', textAlign: 'center', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: BLUE, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 20 }}>
          New Here?
        </div>
        <h1 style={{
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 700,
          margin: '0 0 20px',
          letterSpacing: '-0.5px',
          lineHeight: 1.15,
          color: TEXT,
        }}>
          Start Here
        </h1>
        <p style={{ fontSize: 18, color: TEXT_MUTED, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          Everything you need to know about AI systems for your business — in plain English, no tech jargon.
        </p>
      </div>

      {/* Steps */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '56px 5vw' }}>
        {steps.map((s, i) => (
          <div key={s.num} style={{
            display: 'flex', gap: 28, marginBottom: 40, alignItems: 'flex-start',
            paddingBottom: 40,
            borderBottom: i < steps.length - 1 ? `1px solid ${BORDER}` : 'none',
          }}>
            <div style={{
              fontFamily: 'var(--font-merriweather), serif',
              fontSize: 36, fontWeight: 700, color: '#BFDBFE',
              minWidth: 52, lineHeight: 1, flexShrink: 0,
            }}>{s.num}</div>
            <div>
              <h2 style={{
                fontFamily: 'var(--font-merriweather), serif',
                fontSize: 22, fontWeight: 700, color: TEXT, margin: '0 0 12px',
              }}>{s.title}</h2>
              <p style={{ color: TEXT_SECONDARY, lineHeight: 1.75, margin: 0, fontSize: 16 }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Read Next */}
      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 5vw 56px' }}>
        <div style={{ background: BG_ACCENT, border: `1px solid ${BORDER}`, borderRadius: 12, padding: '36px' }}>
          <h2 style={{
            fontFamily: 'var(--font-merriweather), serif',
            fontSize: 22, fontWeight: 700, marginBottom: 20, color: TEXT,
          }}>
            Read Next
          </h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              ['What Are AI Skills? The Plain English Guide', '/blog/what-are-ai-skills'],
              ['How AI Agents Actually Work', '/blog/how-ai-agents-work'],
              ['The Real Cost of AI Agents for Small Business', '/blog/ai-agent-cost-small-business'],
              ['AI Tools We Recommend', '/tools'],
            ].map(([label, href]) => (
              <a key={href} href={href} style={{
                color: BLUE, fontWeight: 600, fontSize: 15, textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 8, padding: '4px 0',
              }}>
                <span style={{ color: '#BFDBFE' }}>→</span> {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: BG_WARM, borderTop: `1px solid ${BORDER}`, padding: '72px 5vw', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: 30, fontWeight: 700, marginBottom: 16, color: TEXT,
        }}>
          Ready to build your first AI system?
        </h2>
        <p style={{ color: TEXT_MUTED, marginBottom: 32, fontSize: 17, lineHeight: 1.65, maxWidth: 480, margin: '0 auto 32px' }}>
          Tell us what is costing you the most time. We will put together a free plan — no obligation.
        </p>
        <a href="/#get-started"
          style={{
            display: 'inline-block', background: BLUE, color: '#FFFFFF',
            fontWeight: 700, fontSize: 16, padding: '16px 40px',
            textDecoration: 'none', borderRadius: 8, minHeight: 44,
          }}
        >
          Get My Free Plan
        </a>
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
