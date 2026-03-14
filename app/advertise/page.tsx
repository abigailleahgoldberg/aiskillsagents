import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advertise With Us | AI Skills Agents',
  description: 'Partner with AI Skills Agents. Reach business owners actively researching AI automation tools through sponsored content and link placements.',
  robots: 'noindex',
}

const BLUE = '#2563EB'
const BLUE_DARK = '#1D4ED8'
const GREEN = '#16A34A'
const TEXT = '#1A1A1A'
const TEXT_SECONDARY = '#4A4A4A'
const TEXT_MUTED = '#7A7A7A'
const BORDER = '#E8E5E0'
const BG_WARM = '#FBF9F6'
const BG_ACCENT = '#F0EDE8'

const stats = [
  { label: 'Niche', value: 'AI Tools & Business Automation' },
  { label: 'Content', value: '27+ In-Depth AI Blog Posts' },
  { label: 'Audience', value: 'Business Owners & Decision Makers' },
  { label: 'Publishing', value: 'Ongoing — New Posts Monthly' },
]

const options = [
  {
    name: 'Sponsored Post',
    price: '$350',
    desc: 'Full editorial article in the AI/automation niche. Written to rank. One dofollow link. Permanent placement.',
    includes: ['800–1,200 word article', '1 dofollow backlink', 'AI niche relevance', 'Permanent indexing'],
    featured: false,
  },
  {
    name: 'Link Insertion',
    price: '$150',
    desc: 'Contextual link added to one of our existing 27 AI-focused blog posts. Fast turnaround, permanent placement.',
    includes: ['Link in existing post', '1 dofollow backlink', 'Relevant anchor text', 'Permanent'],
    featured: false,
  },
  {
    name: 'Package Deal',
    price: '$500',
    desc: '1 sponsored post + 2 link insertions. Best value for agencies running multi-placement campaigns.',
    includes: ['1 full article', '3 total backlinks', 'Agency pricing', 'Priority turnaround'],
    featured: true,
  },
]

export default function AdvertisePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', color: TEXT, fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      {/* Nav */}
      <nav style={{ padding: '0 5vw', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${BORDER}`, background: '#FFFFFF' }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, textDecoration: 'none' }}>
          AI Skills Agents
        </a>
        <a href="/" style={{ fontSize: 14, color: TEXT_MUTED, textDecoration: 'none' }}>← Back to Home</a>
      </nav>

      {/* Hero */}
      <div style={{ borderBottom: `1px solid ${BORDER}`, padding: '72px 5vw 64px', maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: BLUE, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 20 }}>
          Partnerships
        </div>
        <h1 style={{
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 700,
          margin: '0 0 20px',
          letterSpacing: '-0.5px',
          lineHeight: 1.15,
          color: TEXT,
        }}>
          Reach AI-Ready<br />Business Owners
        </h1>
        <p style={{ fontSize: 18, color: TEXT_MUTED, maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          AI Skills Agents publishes in-depth content on AI tools and automation. Our readers are actively researching and buying. Get in front of them.
        </p>
      </div>

      {/* Stats bar */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 5vw' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: 1, border: `1px solid ${BORDER}`,
          background: BG_ACCENT,
          borderRadius: 12, overflow: 'hidden',
          marginTop: 40, marginBottom: 56,
        }}>
          {stats.map(s => (
            <div key={s.label} style={{ padding: '24px 20px', background: '#FFFFFF', margin: '1px' }}>
              <div style={{ fontSize: 11, color: BLUE, fontWeight: 700, marginBottom: 8, letterSpacing: '1px', textTransform: 'uppercase' }}>{s.label}</div>
              <div style={{ fontSize: 15, color: TEXT, fontWeight: 600 }}>{s.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 5vw 64px' }}>
        <h2 style={{
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: 28, fontWeight: 700, marginBottom: 32, color: TEXT,
        }}>
          Options and Pricing
        </h2>
        <div style={{ display: 'grid', gap: 20 }}>
          {options.map(o => (
            <div key={o.name} style={{
              border: `1px solid ${o.featured ? '#BFDBFE' : BORDER}`,
              borderRadius: 12, padding: '32px',
              background: o.featured ? '#EFF6FF' : BG_WARM,
              position: 'relative',
            }}>
              {o.featured && (
                <div style={{
                  position: 'absolute', top: -12, left: 28,
                  background: BLUE, color: '#FFFFFF',
                  fontSize: 11, fontWeight: 700, padding: '4px 14px',
                  borderRadius: 20, letterSpacing: '0.5px',
                }}>
                  Best Value
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                <h3 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 22, fontWeight: 700, margin: 0, color: TEXT }}>{o.name}</h3>
                <span style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 30, fontWeight: 700, color: BLUE }}>{o.price}</span>
              </div>
              <p style={{ color: TEXT_SECONDARY, lineHeight: 1.7, marginBottom: 20, fontSize: 16 }}>{o.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {o.includes.map(i => (
                  <span key={i} style={{
                    fontSize: 12, padding: '5px 12px',
                    background: '#FFFFFF', border: `1px solid ${BORDER}`,
                    color: TEXT_SECONDARY, fontWeight: 600, borderRadius: 20,
                  }}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: BG_ACCENT, borderTop: `1px solid ${BORDER}`, padding: '64px 5vw', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: 28, fontWeight: 700, marginBottom: 16, color: TEXT,
        }}>
          Ready to Get Started?
        </h2>
        <p style={{ color: TEXT_MUTED, marginBottom: 32, fontSize: 16, maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.65 }}>
          Send your target URL and the option you want. We respond within 48 hours.
        </p>
        <a
          href="mailto:hello@thevoiceofcash.com?subject=AI%20Skills%20Agents%20Advertising%20Inquiry"
          style={{
            display: 'inline-block', background: BLUE, color: '#FFFFFF',
            fontWeight: 700, fontSize: 16, padding: '16px 42px',
            textDecoration: 'none', borderRadius: 8, minHeight: 44,
          }}
        >
          Email to Get Started
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
