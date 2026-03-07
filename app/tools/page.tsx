import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Best AI Tools for Business 2025 | AI Skills Agents',
  description: 'The best AI tools for small and medium businesses in 2025. Automation, writing, project management, and deployment tools our team uses every day.',
  alternates: { canonical: 'https://aiskillsagents.com/tools' },
}
const GOLD = '#D4AF37'
const DARK = '#0a0a0f'
const categories = [
  { name: 'Automation', tools: [
    { name: 'Zapier', tagline: 'Connect your apps without code', desc: 'The easiest way to automate workflows between apps. 5,000+ integrations. Most businesses can start free.', link: 'https://zapier.com/?utm_source=aiskillsagents', badge: 'Most Popular' },
    { name: 'Make', tagline: 'Visual automation for complex workflows', desc: 'More powerful than Zapier for multi-step, data-heavy automations. Visual builder makes complex logic understandable.', link: 'https://www.make.com/?utm_source=aiskillsagents', badge: 'Best for Power Users' },
  ]},
  { name: 'AI Writing', tools: [
    { name: 'Jasper AI', tagline: 'AI content trained for business', desc: 'Marketing copy, blog posts, email sequences — Jasper is trained specifically for business content. Faster than starting from scratch.', link: 'https://www.jasper.ai/?utm_source=aiskillsagents', badge: 'Best for Marketing' },
    { name: 'Claude', tagline: 'Advanced reasoning and long-form work', desc: 'Anthropic\'s AI model. Best for complex analysis, coding, and long documents. What we use for most of our agent development.', link: 'https://claude.ai', badge: 'What We Use' },
  ]},
  { name: 'Operations', tools: [
    { name: 'Notion', tagline: 'All-in-one workspace with AI', desc: 'Docs, wikis, databases, and project tracking in one tool. The most versatile workspace on the market.', link: 'https://www.notion.so/?utm_source=aiskillsagents', badge: 'Best Value' },
    { name: 'Monday.com', tagline: 'Visual project management', desc: 'Track projects, assign tasks, and manage client work visually. Strong for teams running multiple engagements.', link: 'https://monday.com/?utm_source=aiskillsagents', badge: 'Best for Teams' },
  ]},
  { name: 'Development', tools: [
    { name: 'Supabase', tagline: 'Open source database and auth', desc: 'PostgreSQL database with built-in auth, real-time, and storage. Free tier handles most early-stage apps.', link: 'https://supabase.com/?utm_source=aiskillsagents', badge: 'Free to Start' },
    { name: 'Vercel', tagline: 'Deploy web apps instantly', desc: 'The fastest way to deploy Next.js, React, and other web apps. Instant deployments, global CDN, zero config.', link: 'https://vercel.com/?utm_source=aiskillsagents', badge: 'What We Deploy On' },
  ]},
]
export default function ToolsPage() {
  return (
    <div style={{ minHeight: '100vh', background: DARK, color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ padding: '72px 5vw 56px', maxWidth: 900, margin: '0 auto', textAlign: 'center', borderBottom: `1px solid ${GOLD}20` }}>
        <div style={{ fontSize: 12, letterSpacing: '3px', color: GOLD, fontWeight: 700, marginBottom: 20 }}>AI TOOLKIT</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, margin: '0 0 20px', letterSpacing: '-1.5px' }}>Best AI Tools for Business</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.4)', maxWidth: 520, margin: '0 auto 12px', lineHeight: 1.7 }}>Tested by our team. Used in production. No affiliate-only placements — these are tools we actually recommend.</p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>Some links are affiliate links. Commissions help keep this site free.</p>
      </div>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '48px 5vw' }}>
        {categories.map(cat => (
          <div key={cat.name} style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 13, letterSpacing: '2px', color: GOLD, fontWeight: 700, marginBottom: 20, textTransform: 'uppercase' }}>{cat.name}</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(380px,1fr))', gap: 16 }}>
              {cat.tools.map(t => (
                <a key={t.name} href={t.link} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', border: `1px solid ${GOLD}20`, padding: '28px', background: `${GOLD}04`, textDecoration: 'none' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <span style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>{t.name}</span>
                    <span style={{ fontSize: 10, padding: '3px 8px', background: `${GOLD}20`, color: GOLD, fontWeight: 700, letterSpacing: '0.5px' }}>{t.badge}</span>
                  </div>
                  <div style={{ fontSize: 13, color: GOLD, fontWeight: 600, marginBottom: 10 }}>{t.tagline}</div>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.6, margin: 0 }}>{t.desc}</p>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ background: `${GOLD}08`, borderTop: `1px solid ${GOLD}20`, padding: '48px 5vw', textAlign: 'center' }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>Want someone to implement these for you?</h2>
        <p style={{ color: 'rgba(255,255,255,0.4)', marginBottom: 24, fontSize: 14 }}>The Voice of Cash builds AI systems for Las Vegas businesses. Free consultation.</p>
        <a href="https://www.thevoiceofcash.com/consultation" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', background: GOLD, color: DARK, fontWeight: 900, fontSize: 13, padding: '14px 36px', textDecoration: 'none', letterSpacing: '1px' }}>
          BOOK FREE CONSULTATION
        </a>
      </div>
    </div>
  )
}
