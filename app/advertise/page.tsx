import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Advertise With Us | AI Skills Agents',
  description: 'Partner with AI Skills Agents. Reach business owners actively researching AI automation tools through sponsored content and link placements.',
  robots: 'noindex',
}

const stats = [
  { label: 'Niche', value: 'AI Tools & Business Automation' },
  { label: 'Content', value: '27+ In-Depth AI Blog Posts' },
  { label: 'Audience', value: 'Business Owners & Decision Makers' },
  { label: 'Publishing', value: 'Ongoing — New Posts Monthly' },
]

const options = [
  { name: 'Sponsored Post', price: '$350', desc: 'Full editorial article in the AI/automation niche. Written to rank. One dofollow link. Permanent.', includes: ['800-1,200 word article', '1 dofollow backlink', 'AI niche relevance', 'Permanent indexing'] },
  { name: 'Link Insertion', price: '$150', desc: 'Contextual link added to one of our existing 27 AI-focused blog posts. Fast turnaround.', includes: ['Link in existing post', '1 dofollow backlink', 'Relevant anchor text', 'Permanent'] },
  { name: 'Package Deal', price: '$500', desc: '1 sponsored post + 2 link insertions. Best value for agencies running multi-placement campaigns.', includes: ['1 full article', '3 total backlinks', 'Agency pricing', 'Priority turnaround'] },
]

export default function AdvertisePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0f', color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ borderBottom: '1px solid rgba(212,175,55,0.2)', padding: '72px 5vw 64px', maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
        <div style={{ fontSize: 12, letterSpacing: '3px', color: '#D4AF37', fontWeight: 700, marginBottom: 20 }}>PARTNERSHIPS</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, margin: '0 0 20px', letterSpacing: '-1px', lineHeight: 1.1 }}>
          Reach AI-Ready<br />Business Owners
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          AI Skills Agents publishes in-depth content on AI tools and automation. Our audience is actively researching and buying. Get in front of them.
        </p>
      </div>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 5vw', display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 1, border: '1px solid rgba(212,175,55,0.15)', background: 'rgba(212,175,55,0.03)' }}>
        {stats.map(s => (
          <div key={s.label} style={{ padding: '24px 20px' }}>
            <div style={{ fontSize: 11, color: '#D4AF37', fontWeight: 700, marginBottom: 8, letterSpacing: '1px' }}>{s.label.toUpperCase()}</div>
            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>{s.value}</div>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '56px 5vw' }}>
        <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 32 }}>Options & Pricing</h2>
        <div style={{ display: 'grid', gap: 20 }}>
          {options.map(o => (
            <div key={o.name} style={{ border: '1px solid rgba(212,175,55,0.2)', padding: '32px', background: 'rgba(212,175,55,0.02)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
                <h3 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{o.name}</h3>
                <span style={{ fontSize: 26, fontWeight: 900, color: '#D4AF37' }}>{o.price}</span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: 16 }}>{o.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {o.includes.map(i => <span key={i} style={{ fontSize: 11, padding: '5px 10px', background: 'rgba(212,175,55,0.1)', color: '#D4AF37', fontWeight: 600 }}>{i}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: 'rgba(212,175,55,0.06)', borderTop: '1px solid rgba(212,175,55,0.2)', padding: '56px 5vw', textAlign: 'center' }}>
        <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 12 }}>Get Started</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontSize: 15 }}>Send your target URL and preferred option. We respond within 48 hours.</p>
        <a href="mailto:hello@thevoiceofcash.com?subject=AI%20Skills%20Agents%20Advertising%20Inquiry"
          style={{ display: 'inline-block', background: '#D4AF37', color: '#0a0a0f', fontWeight: 900, fontSize: 14, padding: '16px 42px', textDecoration: 'none', letterSpacing: '1px' }}>
          EMAIL TO GET STARTED
        </a>
      </div>
    </div>
  )
}
