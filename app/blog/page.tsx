import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './data';

export const metadata: Metadata = {
  title: "AI Skills Blog: Guides, History, and Use Cases",
  description: "Practical guides on AI skills for business. Learn what they are, where they came from, and how businesses across every industry are using them to grow.",
  alternates: { canonical: "https://aiskillsagents.com/blog" },
};

const BLUE = '#2563EB';
const BLUE_DARK = '#1D4ED8';
const TEXT = '#1A1A1A';
const TEXT_SECONDARY = '#4A4A4A';
const TEXT_MUTED = '#7A7A7A';
const BORDER = '#E8E5E0';
const BG_WARM = '#FBF9F6';
const BG_ACCENT = '#F0EDE8';

export default function BlogPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FFFFFF', color: TEXT, fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
      <style>{`.blog-card:hover { box-shadow: 0 4px 20px rgba(37,99,235,0.1) !important; border-color: #BFDBFE !important; }`}</style>

      {/* Nav */}
      <nav style={{ padding: '0 5vw', height: 68, borderBottom: `1px solid ${BORDER}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF' }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, textDecoration: 'none' }}>
          AI Skills Agents
        </a>
        <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
          <a href="/start-here" style={{ fontSize: 14, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500 }}>Start Here</a>
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
      <section style={{ padding: '72px 5vw 48px', maxWidth: 960, margin: '0 auto' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: BLUE, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 16 }}>
          The AI Skills Blog
        </div>
        <h1 style={{
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: 'clamp(30px, 5vw, 48px)',
          fontWeight: 700,
          letterSpacing: '-0.5px',
          marginBottom: 16,
          color: TEXT,
          lineHeight: 1.15,
        }}>
          Guides, Histories, and<br />
          <span style={{ color: BLUE }}>Real Business Use Cases</span>
        </h1>
        <p style={{ fontSize: 18, color: TEXT_MUTED, maxWidth: 600, lineHeight: 1.65 }}>
          {posts.length} articles on what AI systems are, how they work, and how businesses like yours are using them right now.
        </p>
      </section>

      {/* Posts grid */}
      <section style={{ padding: '0 5vw 100px', maxWidth: 960, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: 24 }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
              <div className="blog-card" style={{
                background: BG_WARM,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: '28px 24px',
                height: '100%',
                transition: 'box-shadow 0.2s, border-color 0.2s',
              }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
                  <span style={{
                    fontSize: 11, fontWeight: 600,
                    color: BLUE,
                    background: '#EFF6FF',
                    border: `1px solid #BFDBFE`,
                    padding: '3px 10px',
                    borderRadius: 20,
                    letterSpacing: '0.5px',
                  }}>{post.category}</span>
                  <span style={{ fontSize: 12, color: TEXT_MUTED }}>{post.readTime}</span>
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-merriweather), serif',
                  fontSize: 17, fontWeight: 700, color: TEXT,
                  lineHeight: 1.35, marginBottom: 12,
                }}>{post.title}</h2>
                <p style={{ fontSize: 14, color: TEXT_SECONDARY, lineHeight: 1.65, marginBottom: 16 }}>{post.excerpt}</p>
                <div style={{ fontSize: 12, color: TEXT_MUTED }}>{post.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: BG_ACCENT, borderTop: `1px solid ${BORDER}`, padding: '72px 5vw', textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'var(--font-merriweather), serif',
          fontSize: 'clamp(24px, 4vw, 36px)',
          fontWeight: 700, marginBottom: 16, color: TEXT,
        }}>
          Ready to Build Your First AI System?
        </h2>
        <p style={{ color: TEXT_MUTED, fontSize: 17, marginBottom: 32, maxWidth: 480, margin: '0 auto 32px', lineHeight: 1.65 }}>
          Tell us your biggest time-waster. We will tell you exactly how to fix it.
        </p>
        <a href="/#get-started" style={{
          background: BLUE, color: '#FFFFFF', fontWeight: 700, fontSize: 16,
          padding: '16px 40px', textDecoration: 'none', borderRadius: 8, display: 'inline-block',
        }}
        >
          Quote My Agent
        </a>
      </section>

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
  );
}
