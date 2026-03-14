import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best AI Tools for Business 2025 | AI Skills Agents',
  description: 'The best AI tools for small and medium businesses in 2025. Automation, writing, project management, and deployment tools our team uses every day.',
  alternates: { canonical: 'https://aiskillsagents.com/tools' },
}

const BLUE = '#2563EB'
const BLUE_DARK = '#1D4ED8'
const TEXT = '#1A1A1A'
const TEXT_SECONDARY = '#4A4A4A'
const TEXT_MUTED = '#7A7A7A'
const BORDER = '#E8E5E0'
const BG_WARM = '#FBF9F6'
const BG_ACCENT = '#F0EDE8'

const categories = [
  {
    name: 'Automation',
    desc: 'Connect your tools and automate repetitive tasks without writing code.',
    tools: [
      {
        name: 'Zapier',
        tagline: 'Connect your apps without code',
        desc: 'The easiest way to automate workflows between apps. 5,000+ integrations. Most businesses can start free.',
        link: 'https://zapier.com/?utm_source=aiskillsagents',
        badge: 'Most Popular',
        badgeColor: '#EFF6FF',
        badgeText: BLUE,
      },
      {
        name: 'Make',
        tagline: 'Visual automation for complex workflows',
        desc: 'More powerful than Zapier for multi-step, data-heavy automations. Visual builder makes complex logic understandable.',
        link: 'https://www.make.com/?utm_source=aiskillsagents',
        badge: 'Best for Power Users',
        badgeColor: '#F0FDF4',
        badgeText: '#16A34A',
      },
    ],
  },
  {
    name: 'AI Writing',
    desc: 'Generate content, copy, and documents faster than any human can type.',
    tools: [
      {
        name: 'Jasper AI',
        tagline: 'AI content trained for business',
        desc: 'Marketing copy, blog posts, email sequences — Jasper is trained specifically for business content. Faster than starting from scratch.',
        link: 'https://www.jasper.ai/?utm_source=aiskillsagents',
        badge: 'Best for Marketing',
        badgeColor: '#FFF7ED',
        badgeText: '#EA580C',
      },
      {
        name: 'Claude',
        tagline: 'Advanced reasoning and long-form work',
        desc: "Anthropic's AI model. Best for complex analysis, coding, and long documents. What we use for most of our agent development.",
        link: 'https://claude.ai',
        badge: 'What We Use',
        badgeColor: '#F5F3FF',
        badgeText: '#7C3AED',
      },
    ],
  },
  {
    name: 'Operations',
    desc: 'Keep projects on track and your team in sync.',
    tools: [
      {
        name: 'Notion',
        tagline: 'All-in-one workspace with AI',
        desc: 'Docs, wikis, databases, and project tracking in one tool. The most versatile workspace on the market.',
        link: 'https://www.notion.so/?utm_source=aiskillsagents',
        badge: 'Best Value',
        badgeColor: '#F0FDF4',
        badgeText: '#16A34A',
      },
      {
        name: 'Monday.com',
        tagline: 'Visual project management',
        desc: 'Track projects, assign tasks, and manage client work visually. Strong for teams running multiple engagements.',
        link: 'https://monday.com/?utm_source=aiskillsagents',
        badge: 'Best for Teams',
        badgeColor: '#EFF6FF',
        badgeText: BLUE,
      },
    ],
  },
  {
    name: 'Development',
    desc: 'Build and deploy web apps without a big engineering team.',
    tools: [
      {
        name: 'Supabase',
        tagline: 'Open source database and auth',
        desc: 'PostgreSQL database with built-in auth, real-time, and storage. Free tier handles most early-stage apps.',
        link: 'https://supabase.com/?utm_source=aiskillsagents',
        badge: 'Free to Start',
        badgeColor: '#F0FDF4',
        badgeText: '#16A34A',
      },
      {
        name: 'Vercel',
        tagline: 'Deploy web apps instantly',
        desc: 'The fastest way to deploy Next.js, React, and other web apps. Instant deployments, global CDN, zero config.',
        link: 'https://vercel.com/?utm_source=aiskillsagents',
        badge: 'What We Deploy On',
        badgeColor: '#F5F3FF',
        badgeText: '#7C3AED',
      },
    ],
  },
]

export default function ToolsPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', color: TEXT, fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      {/* Nav */}
      <nav style={{ padding: '0 5vw', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${BORDER}`, background: '#FFFFFF' }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, textDecoration: 'none' }}>
          AI Skills Agents
        </a>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="/start-here" style={{ fontSize: 14, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500 }}>Start Here</a>
          <a href="/blog" style={{ fontSize: 14, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500 }}>Blog</a>
          <a href="/#get-started" style={{
            fontSize: 14, fontWeight: 700, color: '#FFFFFF', textDecoration: 'none',
            background: BLUE, padding: '10px 20px', borderRadius: 6,
          }}>
            Free Consultation
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div style={{ padding: '72px 5vw 56px', maxWidth: 900, margin: '0 auto', textAlign: 'center', borderBottom: `1px solid ${BORDER}` }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: BLUE, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 20 }}>
          AI Toolkit
        </div>
        <h1 style={{
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: 'clamp(32px, 5vw, 52px)',
          fontWeight: 700,
          margin: '0 0 20px',
          letterSpacing: '-0.5px',
          color: TEXT,
        }}>
          Best AI Tools for Business
        </h1>
        <p style={{ fontSize: 17, color: TEXT_MUTED, maxWidth: 520, margin: '0 auto 12px', lineHeight: 1.7 }}>
          Tested by our team. Used in production. No filler — these are tools we actually recommend.
        </p>
        <p style={{ fontSize: 13, color: TEXT_MUTED }}>
          Some links are affiliate links. Commissions help keep this site free.
        </p>
      </div>

      {/* Tool categories */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 5vw' }}>
        {categories.map(cat => (
          <div key={cat.name} style={{ marginBottom: 56 }}>
            <div style={{ marginBottom: 24 }}>
              <h2 style={{
                fontFamily: 'var(--font-merriweather), serif',
                fontSize: 22, fontWeight: 700, color: TEXT, marginBottom: 6,
              }}>{cat.name}</h2>
              <p style={{ fontSize: 15, color: TEXT_MUTED }}>{cat.desc}</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))', gap: 16 }}>
              {cat.tools.map(t => (
                <a key={t.name} href={t.link} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: '28px',
                    background: BG_WARM,
                    textDecoration: 'none',
                    transition: 'box-shadow 0.2s, border-color 0.2s',
                  }}

                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <span style={{
                      fontFamily: 'var(--font-merriweather), serif',
                      fontSize: 19, fontWeight: 700, color: TEXT,
                    }}>{t.name}</span>
                    <span style={{
                      fontSize: 11, padding: '4px 10px',
                      background: t.badgeColor,
                      color: t.badgeText,
                      fontWeight: 700,
                      borderRadius: 20,
                      whiteSpace: 'nowrap',
                      marginLeft: 8,
                    }}>{t.badge}</span>
                  </div>
                  <div style={{ fontSize: 14, color: BLUE, fontWeight: 600, marginBottom: 10 }}>{t.tagline}</div>
                  <p style={{ color: TEXT_SECONDARY, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{t.desc}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: BG_ACCENT, borderTop: `1px solid ${BORDER}`, padding: '64px 5vw', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: 28, fontWeight: 700, marginBottom: 16, color: TEXT,
        }}>
          Want someone to set all this up for you?
        </h2>
        <p style={{ color: TEXT_MUTED, marginBottom: 32, fontSize: 16, maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.65 }}>
          We build and manage AI systems for small businesses. Free consultation, no obligation.
        </p>
        <a href="/#get-started"
          style={{
            display: 'inline-block', background: BLUE, color: '#FFFFFF',
            fontWeight: 700, fontSize: 16, padding: '16px 40px',
            textDecoration: 'none', borderRadius: 8, minHeight: 44,
          }}
        >
          Get a Free Consultation
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
