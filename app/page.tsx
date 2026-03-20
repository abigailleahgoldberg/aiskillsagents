'use client';
import { useState, useEffect } from 'react';
import { CheckCircle, Phone, Clock, Users, TrendingUp, Star, ChevronDown } from 'lucide-react';

const BLUE = '#2563EB';
const BLUE_DARK = '#1D4ED8';
const GREEN = '#16A34A';
const GOLD = '#D4AF37';
const BORDER = '#E8E5E0';
const BG_WARM = '#FBF9F6';
const BG_ACCENT = '#F0EDE8';
const TEXT = '#1A1A1A';
const TEXT_SECONDARY = '#4A4A4A';
const TEXT_MUTED = '#7A7A7A';

const AGENTS = [
  {
    title: 'Someone Who Answers Every Call',
    subtitle: 'Lead Capture',
    desc: 'Never miss a lead again. Our system qualifies prospects 24/7 and sends the good ones straight to you.',
    saves: '12 hrs/week saved',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#EFF6FF" />
        <path d="M10 12h12M10 16h8M10 20h10" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Instant Customer Support',
    subtitle: 'Service Agent',
    desc: 'Your customers get answers in seconds, not hours. Common questions handled automatically. The tricky ones come to you.',
    saves: '8 hrs/week saved',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#F0FDF4" />
        <path d="M10 20c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke={GREEN} strokeWidth="2" strokeLinecap="round" />
        <circle cx="16" cy="11" r="2.5" stroke={GREEN} strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'A Calendar That Fills Itself',
    subtitle: 'Booking Agent',
    desc: 'Appointments scheduled, reminders sent, no-shows followed up. You just show up.',
    saves: '5 hrs/week saved',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#FFF7ED" />
        <rect x="9" y="10" width="14" height="14" rx="2" stroke={GOLD} strokeWidth="2" />
        <path d="M12 8v4M20 8v4M9 16h14" stroke={GOLD} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Your Back Office, Handled',
    subtitle: 'Operations Agent',
    desc: 'Invoices processed, records updated, exceptions flagged. The boring stuff runs itself.',
    saves: '10 hrs/week saved',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#F5F3FF" />
        <path d="M12 12h8M12 16h8M12 20h4" stroke="#7C3AED" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Marketing That Never Stops',
    subtitle: 'Content Agent',
    desc: 'Blog posts, emails, social media — always on brand, always on time, always done.',
    saves: '6 hrs/week saved',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#FFF0F0" />
        <path d="M10 22l4-4 3 3 5-6" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Eyes on Your Market',
    subtitle: 'Intelligence Agent',
    desc: 'Know what your competitors are doing before they do it. Daily briefings, trend alerts, opportunity flags.',
    saves: '4 hrs/week saved',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#EFF6FF" />
        <circle cx="15" cy="15" r="5" stroke={BLUE} strokeWidth="2" />
        <path d="M19 19l3 3" stroke={BLUE} strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const STATS = [
  { val: '544%', label: 'Average ROI from AI automation', context: 'Businesses that automate see returns far above the cost.', source: 'Nucleus Research' },
  { val: '240+', label: 'Hours saved per employee each year', context: 'That is 6 full work weeks handed back to your team.', source: 'McKinsey' },
  { val: '30%', label: 'Reduction in operating costs', context: 'Less overhead. Same output. Usually more.', source: 'Deloitte' },
  { val: '76%', label: 'See ROI in their first year', context: 'Most customers are in the green before year two.', source: 'Salesforce' },
];

const PAIN_POINTS = [
  { icon: <Phone size={24} color={BLUE} />, text: "You're losing leads because nobody answers the phone after hours" },
  { icon: <Clock size={24} color={BLUE} />, text: "Your inbox is a graveyard of missed follow-ups" },
  { icon: <TrendingUp size={24} color={BLUE} />, text: "You spend Sunday nights doing the bookkeeping you should have done Friday" },
  { icon: <Users size={24} color={BLUE} />, text: "You hired someone for $4,000/month who still can't keep up" },
];

const STEPS = [
  {
    n: '1',
    title: 'Tell Us What\'s Eating Your Time',
    desc: 'Fill out our form or give us a 15-minute call. Tell us what you wish would just handle itself.',
  },
  {
    n: '2',
    title: 'We Design Your System',
    desc: 'We map out exactly which AI tools your business needs and show you the plan. You approve every step.',
  },
  {
    n: '3',
    title: 'It Goes Live',
    desc: 'Your system goes live in about 14 days. We monitor it, support it, and make sure it keeps working.',
  },
];

const INDUSTRIES = [
  { name: 'Real Estate', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 9.5L12 3l9 6.5V21H3V9.5z" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round" /><rect x="9" y="14" width="6" height="7" stroke={BLUE} strokeWidth="1.5" /></svg>
  )},
  { name: 'Law Firms', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M5 7h14M5 12h14M5 17h14" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" /></svg>
  )},
  { name: 'Medical', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke={BLUE} strokeWidth="1.5" /><path d="M12 8v8M8 12h8" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" /></svg>
  )},
  { name: 'Restaurants', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 3v18M16 3v6a4 4 0 01-4 4v8" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" /></svg>
  )},
  { name: 'E-Commerce', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4H6z" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round" /><path d="M3 6h18M16 10a4 4 0 01-8 0" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" /></svg>
  )},
  { name: 'Financial Services', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 110 20A10 10 0 0112 2z" stroke={BLUE} strokeWidth="1.5" /><path d="M12 6v6l4 2" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" /></svg>
  )},
  { name: 'Contractors', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3-3a1 1 0 000-1.4l-1.6-1.6a1 1 0 00-1.4 0l-3 3z" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round" /><path d="M5 12l-2 9 9-2-7-7z" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round" /></svg>
  )},
  { name: 'Marketing Agencies', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 18l4-8 4 4 3-5 4 9H3z" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round" /></svg>
  )},
  { name: 'Retail', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2z" stroke={BLUE} strokeWidth="1.5" /><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  )},
  { name: 'Salons & Spas', icon: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke={BLUE} strokeWidth="1.5" /><path d="M4 20c0-4 3.58-7 8-7s8 3 8 7" stroke={BLUE} strokeWidth="1.5" strokeLinecap="round" /></svg>
  )},
];

const FAQS = [
  { q: 'Will this replace my employees?', a: 'No. It handles the repetitive stuff they should not be wasting time on — answering the same questions, data entry, scheduling, follow-ups. Your people stay focused on the work that actually needs a human.' },
  { q: "I'm not technical. Can I use this?", a: "If you can use email, you can use this. We handle every bit of the technical setup. You just tell us what's taking too long, approve the plan, and we build it." },
  { q: 'What if something goes wrong?', a: "We monitor everything. If an agent makes a mistake, we fix it same day. You have a real team watching your system, not a help ticket queue." },
  { q: 'How much does it cost?', a: "Depends on what your business needs. Most businesses start at less than the cost of one part-time employee per month. We will give you a clear number before you commit to anything." },
  { q: 'Do I need a long-term contract?', a: "No. Month to month. If it is not saving you time and money, you can cancel anytime. We prefer to keep clients because it is working, not because of a contract." },
  { q: 'How do I know it is actually working?', a: "Weekly reports. You will see exactly how many leads were captured, calls handled, hours saved, and appointments booked. All of it, in plain English." },
];

const TESTIMONIALS = [
  { quote: "We were drowning in missed calls and follow-up emails. Now our system handles all of it. I got back my evenings.", name: 'Sarah M.', biz: 'Real Estate Broker, Nevada' },
  { quote: "I was skeptical at first — I am 58 and not exactly a tech person. But they set everything up and now it just runs.", name: 'David R.', biz: 'HVAC Contractor, Texas' },
  { quote: "My front desk was handling 60% appointment calls. Now the AI handles 90% of them automatically. My staff loves it.", name: 'Dr. Linda T.', biz: 'Family Practice, California' },
];

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', business: '', pain: '', size: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'done' | 'error'>('idle');
  const [err, setErr] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.business || !form.pain) {
      setErr('Please fill in all required fields.');
      return;
    }
    setErr('');
    setStatus('loading');
    try {
      const res = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      if (!res.ok) throw new Error();
      setStatus('done');
    } catch {
      setStatus('error');
      setErr('Something went wrong. Please try again or email us directly.');
    }
  }

  const inputStyle = {
    width: '100%',
    background: '#FFFFFF',
    border: `1px solid ${BORDER}`,
    color: TEXT,
    padding: '14px 16px',
    fontSize: 16,
    outline: 'none',
    fontFamily: 'var(--font-inter), system-ui, sans-serif',
    borderRadius: 6,
    minHeight: 44,
  };

  const labelStyle = {
    display: 'block',
    fontSize: 14,
    fontWeight: 600,
    color: TEXT_SECONDARY,
    marginBottom: 6,
  };

  return (
    <>
      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 5vw', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: '#FFFFFF',
        borderBottom: `1px solid ${BORDER}`,
        boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.07)' : 'none',
        transition: 'box-shadow 0.3s',
      }}>
        <a href="/" style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, textDecoration: 'none' }}>
          AI Skills Agents
        </a>

        {/* Desktop Nav */}
        <div className="desktop-only" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          <a href="#how" style={{ fontSize: 14, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500 }}>How It Works</a>
          <a href="#agents" style={{ fontSize: 14, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500 }}>What We Build</a>
          <a href="#results" style={{ fontSize: 14, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500 }}>Results</a>
          <a href="/blog" style={{ fontSize: 14, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500 }}>Blog</a>
          <a href="/start-here" style={{ fontSize: 14, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500 }}>Start Here</a>
          <a href="#get-started" style={{
            fontSize: 14, fontWeight: 700, color: '#FFFFFF', textDecoration: 'none',
            background: BLUE, padding: '10px 20px', borderRadius: 6,
            transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.background = BLUE_DARK)}
            onMouseLeave={e => (e.currentTarget.style.background = BLUE)}
          >
            Free Consultation
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(o => !o)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileMenuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" stroke={TEXT} strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke={TEXT} strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', top: 68, left: 0, right: 0, zIndex: 99,
          background: '#FFFFFF', borderBottom: `1px solid ${BORDER}`,
          padding: '20px 5vw', display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          {[['#how', 'How It Works'], ['#agents', 'What We Build'], ['#results', 'Results'], ['/blog', 'Blog'], ['/start-here', 'Start Here']].map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMobileMenuOpen(false)}
              style={{ fontSize: 16, color: TEXT_SECONDARY, textDecoration: 'none', fontWeight: 500, padding: '4px 0' }}>{label}</a>
          ))}
          <a href="#get-started" onClick={() => setMobileMenuOpen(false)}
            style={{ background: BLUE, color: '#fff', fontWeight: 700, fontSize: 16, padding: '14px', textDecoration: 'none', textAlign: 'center', borderRadius: 6 }}>
            Free Consultation
          </a>
        </div>
      )}

      {/* HERO */}
      <section style={{
        paddingTop: 68,
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: `linear-gradient(160deg, #FFFFFF 0%, ${BG_WARM} 100%)`,
      }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', padding: '80px 5vw 80px' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            {/* Left — copy */}
            <div>
              <div style={{
                display: 'inline-block',
                background: '#EFF6FF',
                border: `1px solid #BFDBFE`,
                color: BLUE,
                fontSize: 13,
                fontWeight: 600,
                padding: '6px 14px',
                borderRadius: 20,
                marginBottom: 28,
              }}>
                Trusted by businesses nationwide
              </div>

              <h1 style={{
                fontFamily: 'var(--font-merriweather), serif',
                fontSize: 'clamp(36px, 5vw, 60px)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: TEXT,
                marginBottom: 24,
                letterSpacing: '-0.5px',
              }}>
                We Handle the Work<br />
                <span style={{ color: BLUE }}>You Hate.</span>
              </h1>

              <p style={{
                fontSize: 'clamp(17px, 2vw, 20px)',
                color: TEXT_SECONDARY,
                lineHeight: 1.65,
                marginBottom: 36,
                maxWidth: 520,
              }}>
                Custom AI systems that answer your phones, book your appointments, follow up with leads, and run your back office — while you focus on what you do best.
              </p>

              <div className="mobile-stack" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
                <a href="#get-started" style={{
                  background: BLUE, color: '#FFFFFF', fontWeight: 700, fontSize: 17,
                  padding: '16px 32px', textDecoration: 'none', borderRadius: 8,
                  display: 'inline-block', minHeight: 44,
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={e => (e.currentTarget.style.background = BLUE_DARK)}
                  onMouseLeave={e => (e.currentTarget.style.background = BLUE)}
                >
                  Quote My Agent
                </a>
                <a href="#how" style={{
                  border: `2px solid ${BORDER}`, color: TEXT_SECONDARY, fontWeight: 600,
                  fontSize: 16, padding: '16px 28px', textDecoration: 'none',
                  borderRadius: 8, display: 'inline-block', minHeight: 44,
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = BLUE; e.currentTarget.style.color = BLUE; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = BORDER; e.currentTarget.style.color = TEXT_SECONDARY; }}
                >
                  Build An Agent
                </a>
              </div>

              <p style={{ fontSize: 14, color: TEXT_MUTED, marginBottom: 28 }}>
                No contracts. Setup in 2 weeks. Cancel anytime.
              </p>

              <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                {['50+ businesses served', 'Setup in 14 days', 'Human support included'].map(t => (
                  <div key={t} style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 14, color: TEXT_SECONDARY }}>
                    <CheckCircle size={16} style={{ color: GREEN }} /> {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div id="get-started" style={{
              background: '#FFFFFF',
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              padding: '40px 36px',
              boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
            }}>
              {status === 'done' ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <CheckCircle size={52} style={{ color: GREEN, margin: '0 auto 16px', display: 'block' }} />
                  <div style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 22, color: TEXT, marginBottom: 12 }}>
                    We got it.
                  </div>
                  <p style={{ color: TEXT_MUTED, fontSize: 16, lineHeight: 1.65 }}>
                    Someone from our team will be in touch within 24 hours to walk through your options. No pressure, no pitch.
                  </p>
                </div>
              ) : (
                <>
                  <h2 style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 22, color: TEXT, marginBottom: 6 }}>
                    Tell Us About Your Business
                  </h2>
                  <p style={{ fontSize: 14, color: TEXT_MUTED, marginBottom: 28 }}>
                    No pressure. Just a clear plan.
                  </p>
                  <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {[
                      { key: 'name', label: 'Your Name', placeholder: 'First Last', type: 'text' },
                      { key: 'email', label: 'Email Address', placeholder: 'you@yourcompany.com', type: 'email' },
                      { key: 'business', label: 'Business Name', placeholder: 'Your Business', type: 'text' },
                    ].map(f => (
                      <div key={f.key}>
                        <label style={labelStyle}>{f.label}</label>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={(form as Record<string, string>)[f.key]}
                          onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                          required
                          style={inputStyle}
                          onFocus={e => (e.currentTarget.style.borderColor = BLUE)}
                          onBlur={e => (e.currentTarget.style.borderColor = BORDER)}
                        />
                      </div>
                    ))}
                    <div>
                      <label style={labelStyle}>Company Size</label>
                      <select
                        value={form.size}
                        onChange={e => setForm(p => ({ ...p, size: e.target.value }))}
                        style={{ ...inputStyle, color: form.size ? TEXT : TEXT_MUTED }}
                        onFocus={e => (e.currentTarget.style.borderColor = BLUE)}
                        onBlur={e => (e.currentTarget.style.borderColor = BORDER)}
                      >
                        <option value="">How many employees?</option>
                        {['Just me', '2-10 people', '11-50 people', '51-200 people', '200+ people'].map(o => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>What is your biggest time-waster right now?</label>
                      <textarea
                        placeholder="Tell us what takes up too much of your day..."
                        value={form.pain}
                        onChange={e => setForm(p => ({ ...p, pain: e.target.value }))}
                        required
                        rows={3}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: 90 }}
                        onFocus={e => (e.currentTarget.style.borderColor = BLUE)}
                        onBlur={e => (e.currentTarget.style.borderColor = BORDER)}
                      />
                    </div>
                    {err && <p style={{ color: '#DC2626', fontSize: 14 }}>{err}</p>}
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      style={{
                        background: status === 'loading' ? '#93C5FD' : BLUE,
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: 17,
                        padding: '16px',
                        border: 'none',
                        cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                        borderRadius: 8,
                        minHeight: 52,
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        transition: 'background 0.2s',
                      }}
                      onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = BLUE_DARK; }}
                      onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.background = BLUE; }}
                    >
                      {status === 'loading' ? 'Sending...' : 'Quote My Agent'}
                    </button>
                    <p style={{ fontSize: 12, color: TEXT_MUTED, textAlign: 'center' }}>
                      No spam. Response within 24 hours.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section style={{ background: BG_WARM, borderTop: `1px solid ${BORDER}`, padding: '80px 5vw' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{
              fontFamily: 'var(--font-merriweather), serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700, color: TEXT, marginBottom: 16,
            }}>
              Sound Familiar?
            </h2>
            <p style={{ fontSize: 18, color: TEXT_MUTED, maxWidth: 560, margin: '0 auto' }}>
              If any of these hit close to home, you are exactly who we built this for.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
            {PAIN_POINTS.map((p, i) => (
              <div key={i} style={{
                background: '#FFFFFF',
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: '28px 24px',
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}>
                <div style={{ flexShrink: 0, marginTop: 2 }}>{p.icon}</div>
                <p style={{ fontSize: 16, color: TEXT_SECONDARY, lineHeight: 1.6, fontWeight: 500 }}>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AGENTS */}
      <section id="agents" style={{ padding: '100px 5vw', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: BLUE, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 16 }}>
              What We Build
            </div>
            <h2 style={{
              fontFamily: 'var(--font-merriweather), serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700, color: TEXT, marginBottom: 16,
            }}>
              What Your Business Gets
            </h2>
            <p style={{ fontSize: 18, color: TEXT_MUTED, maxWidth: 580, margin: '0 auto' }}>
              Six systems built around your workflows. Not software you have to learn. Systems that just run.
            </p>
          </div>
          <div className="agents-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {AGENTS.map(a => (
              <div key={a.title} style={{
                background: BG_WARM,
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: '32px 28px',
                transition: 'box-shadow 0.2s, border-color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,99,235,0.1)'; e.currentTarget.style.borderColor = '#BFDBFE'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = BORDER; }}
              >
                <div style={{ marginBottom: 16 }}>{a.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: BLUE, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 8 }}>
                  {a.subtitle}
                </div>
                <h3 style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 18, color: TEXT, marginBottom: 10, lineHeight: 1.3 }}>
                  {a.title}
                </h3>
                <p style={{ fontSize: 15, color: TEXT_SECONDARY, lineHeight: 1.65, marginBottom: 20 }}>{a.desc}</p>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: '#F0FDF4', border: `1px solid #BBF7D0`,
                  padding: '5px 12px', borderRadius: 20, fontSize: 13, color: GREEN, fontWeight: 600,
                }}>
                  <TrendingUp size={14} /> {a.saves}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <a href="#get-started" style={{
              background: BLUE, color: '#FFFFFF', fontWeight: 700, fontSize: 17,
              padding: '16px 40px', textDecoration: 'none', borderRadius: 8, display: 'inline-block',
              transition: 'background 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = BLUE_DARK)}
              onMouseLeave={e => (e.currentTarget.style.background = BLUE)}
            >
              Quote My Agent
            </a>
          </div>
        </div>
      </section>

      {/* STATS + TESTIMONIALS */}
      <section id="results" style={{ background: BG_ACCENT, borderTop: `1px solid ${BORDER}`, padding: '100px 5vw' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <h2 style={{
              fontFamily: 'var(--font-merriweather), serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700, color: TEXT, marginBottom: 16,
            }}>
              The Numbers Don't Lie
            </h2>
            <p style={{ fontSize: 18, color: TEXT_MUTED, maxWidth: 520, margin: '0 auto' }}>
              Research from the biggest consulting firms in the world — applied to businesses just like yours.
            </p>
          </div>

          <div className="stats-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginBottom: 64 }}>
            {STATS.map(s => (
              <div key={s.val} style={{
                background: '#FFFFFF', border: `1px solid ${BORDER}`, borderRadius: 12,
                padding: '32px 24px', textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 44, fontWeight: 700, color: BLUE, marginBottom: 8 }}>{s.val}</div>
                <div style={{ fontSize: 15, fontWeight: 600, color: TEXT, marginBottom: 8, lineHeight: 1.4 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.5, marginBottom: 8 }}>{s.context}</div>
                <div style={{ fontSize: 11, color: TEXT_MUTED, fontWeight: 600 }}>— {s.source}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: BLUE, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 8 }}>
              What Our Clients Say
            </div>
            <h3 style={{ fontFamily: 'var(--font-merriweather), serif', fontSize: 28, fontWeight: 700, color: TEXT }}>
              Don't Take Our Word For It
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{
                background: '#FFFFFF', border: `1px solid ${BORDER}`, borderRadius: 12, padding: '28px 24px',
              }}>
                <div style={{ display: 'flex', gap: 2, marginBottom: 16 }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={16} fill={GOLD} color={GOLD} />)}
                </div>
                <p style={{ fontSize: 16, color: TEXT_SECONDARY, lineHeight: 1.65, marginBottom: 20, fontStyle: 'italic' }}>
                  "{t.quote}"
                </p>
                <div style={{ fontWeight: 700, fontSize: 15, color: TEXT }}>{t.name}</div>
                <div style={{ fontSize: 13, color: TEXT_MUTED }}>{t.biz}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ background: '#FFFFFF', padding: '100px 5vw' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: BLUE, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 16 }}>
              The Process
            </div>
            <h2 style={{
              fontFamily: 'var(--font-merriweather), serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700, color: TEXT, marginBottom: 16,
            }}>
              From Phone Call to Running System in 14 Days
            </h2>
            <p style={{ fontSize: 18, color: TEXT_MUTED, maxWidth: 520, margin: '0 auto' }}>
              No long proposals, no 6-month timelines. We move fast because your time is money.
            </p>
          </div>

          <div className="steps-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 48, position: 'relative' }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ position: 'relative', textAlign: 'center' }}>
                {i < STEPS.length - 1 && (
                  <div className="step-connector" style={{
                    position: 'absolute',
                    top: 28,
                    left: '65%',
                    width: '70%',
                    height: 2,
                    background: `linear-gradient(90deg, ${BORDER} 0%, transparent 100%)`,
                  }} />
                )}
                <div style={{
                  width: 56, height: 56,
                  background: '#EFF6FF',
                  border: `2px solid #BFDBFE`,
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontFamily: 'var(--font-merriweather), serif',
                  fontSize: 22, fontWeight: 700, color: BLUE,
                }}>
                  {s.n}
                </div>
                <h3 style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 18, color: TEXT, marginBottom: 12 }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 15, color: TEXT_MUTED, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 56 }}>
            <a href="#get-started" style={{
              background: BLUE, color: '#FFFFFF', fontWeight: 700, fontSize: 17,
              padding: '16px 40px', textDecoration: 'none', borderRadius: 8, display: 'inline-block',
            }}
              onMouseEnter={e => (e.currentTarget.style.background = BLUE_DARK)}
              onMouseLeave={e => (e.currentTarget.style.background = BLUE)}
            >
              Start the Conversation
            </a>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ background: BG_WARM, borderTop: `1px solid ${BORDER}`, padding: '80px 5vw' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{
              fontFamily: 'var(--font-merriweather), serif',
              fontSize: 'clamp(26px, 4vw, 40px)',
              fontWeight: 700, color: TEXT, marginBottom: 16,
            }}>
              Industries We Serve
            </h2>
            <p style={{ fontSize: 17, color: TEXT_MUTED, maxWidth: 480, margin: '0 auto' }}>
              If you run a business and have repetitive tasks, we can help. Here is who we work with most.
            </p>
          </div>
          <div className="industries-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {INDUSTRIES.map(ind => (
              <div key={ind.name} style={{
                background: '#FFFFFF',
                border: `1px solid ${BORDER}`,
                borderRadius: 12,
                padding: '20px 16px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 10,
                textAlign: 'center',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#BFDBFE')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = BORDER)}
              >
                {ind.icon}
                <div style={{ fontSize: 13, fontWeight: 600, color: TEXT_SECONDARY }}>{ind.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#FFFFFF', padding: '100px 5vw' }}>
        <div style={{ maxWidth: 780, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{
              fontFamily: 'var(--font-merriweather), serif',
              fontSize: 'clamp(28px, 4vw, 40px)',
              fontWeight: 700, color: TEXT, marginBottom: 16,
            }}>
              Questions Everyone Asks
            </h2>
            <p style={{ fontSize: 17, color: TEXT_MUTED }}>
              Plain English answers to the things people actually want to know.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                overflow: 'hidden',
                marginBottom: 8,
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '20px 24px', background: openFaq === i ? BG_WARM : '#FFFFFF',
                    border: 'none', cursor: 'pointer', textAlign: 'left',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    minHeight: 44,
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: 16, color: TEXT, paddingRight: 16 }}>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{ color: BLUE, flexShrink: 0, transform: openFaq === i ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                  />
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', background: BG_WARM }}>
                    <p style={{ fontSize: 16, color: TEXT_SECONDARY, lineHeight: 1.7 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ background: '#EFF6FF', borderTop: `1px solid #BFDBFE`, padding: '100px 5vw' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">
          <div>
            <h2 style={{
              fontFamily: 'var(--font-merriweather), serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700, color: TEXT, marginBottom: 20, lineHeight: 1.2,
            }}>
              Ready to Get Your Time Back?
            </h2>
            <p style={{ fontSize: 18, color: TEXT_SECONDARY, lineHeight: 1.65, marginBottom: 28 }}>
              Fill out the form and someone from our team will reach out within 24 hours. Or just send us an email — we are real people on the other end.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a href="mailto:thevoiceofcash@gmail.com" style={{
                display: 'flex', alignItems: 'center', gap: 10,
                fontSize: 16, color: BLUE, textDecoration: 'none', fontWeight: 600,
              }}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M2 5l8 5 8-5M2 5v10a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H3a1 1 0 00-1 1z" stroke={BLUE} strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
                thevoiceofcash@gmail.com
              </a>
              <div style={{ fontSize: 15, color: TEXT_MUTED }}>
                Or use the form — we check it every day.
              </div>
            </div>
          </div>
          <div style={{
            background: '#FFFFFF', border: `1px solid ${BORDER}`, borderRadius: 12,
            padding: '36px 32px', boxShadow: '0 4px 24px rgba(37,99,235,0.08)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, marginBottom: 20 }}>
              Quote My Agent
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Your Name', placeholder: 'First Last', key: 'name', type: 'text' },
                { label: 'Email', placeholder: 'you@business.com', key: 'email', type: 'email' },
                { label: 'Business Name', placeholder: 'Your Business', key: 'business', type: 'text' },
              ].map(f => (
                <div key={f.key}>
                  <label style={labelStyle}>{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={(form as Record<string, string>)[f.key]}
                    onChange={e => setForm(p => ({ ...p, [f.key]: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = BLUE)}
                    onBlur={e => (e.currentTarget.style.borderColor = BORDER)}
                  />
                </div>
              ))}
              <a href="#get-started" style={{
                background: BLUE, color: '#FFFFFF', fontWeight: 700, fontSize: 16,
                padding: '16px', textDecoration: 'none', borderRadius: 8, display: 'block',
                textAlign: 'center', minHeight: 44,
              }}
                onMouseEnter={e => (e.currentTarget.style.background = BLUE_DARK)}
                onMouseLeave={e => (e.currentTarget.style.background = BLUE)}
              >
                Send My Info
              </a>
              <p style={{ fontSize: 12, color: TEXT_MUTED, textAlign: 'center' }}>
                Takes 30 seconds. We'll reach out within a business day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: BG_WARM, borderTop: `1px solid ${BORDER}`, padding: '48px 5vw 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 40 }} className="hero-grid">
            <div>
              <div style={{ fontFamily: 'var(--font-merriweather), serif', fontWeight: 700, fontSize: 20, color: TEXT, marginBottom: 12 }}>
                AI Skills Agents
              </div>
              <p style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.7, maxWidth: 280, marginBottom: 16 }}>
                Custom AI systems for small business owners who want to save time and make more money.
              </p>
              <p style={{ fontSize: 13, color: TEXT_MUTED }}>
                Part of the <a href="https://thevoiceofcash.com" target="_blank" rel="noopener noreferrer" style={{ color: BLUE, textDecoration: 'none' }}>The Voice of Cash</a> media network.
              </p>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: TEXT, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Quick Links</div>
              {[['/', 'Home'], ['/start-here', 'Start Here'], ['/tools', 'AI Tools'], ['/blog', 'Blog'], ['/advertise', 'Advertise']].map(([href, label]) => (
                <a key={href} href={href} style={{ display: 'block', fontSize: 14, color: TEXT_MUTED, textDecoration: 'none', marginBottom: 10 }}
                  onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                  onMouseLeave={e => (e.currentTarget.style.color = TEXT_MUTED)}
                >{label}</a>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: TEXT, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>AI Network</div>
              {[
                ['ClaudeAISkills', 'https://claudeaiskills.com'],
                ['AnthropicAISkills', 'https://anthropicaiskills.com'],
                ['AISkillsGenerator', 'https://aiskillsgenerator.com'],
                ['SearchPerformanceMarketing', 'https://searchperformancemarketing.com'],
                ['The Voice of Cash', 'https://thevoiceofcash.com'],
              ].map(([label, href]) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'block', fontSize: 14, color: TEXT_MUTED, textDecoration: 'none', marginBottom: 10 }}
                  onMouseEnter={e => (e.currentTarget.style.color = BLUE)}
                  onMouseLeave={e => (e.currentTarget.style.color = TEXT_MUTED)}
                >{label}</a>
              ))}
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: TEXT, marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contact</div>
              <a href="mailto:thevoiceofcash@gmail.com" style={{ display: 'block', fontSize: 14, color: TEXT_MUTED, textDecoration: 'none', marginBottom: 10 }}>
                thevoiceofcash@gmail.com
              </a>
              <a href="/privacy" style={{ display: 'block', fontSize: 14, color: TEXT_MUTED, textDecoration: 'none', marginBottom: 10 }}>Privacy Policy</a>
              <a href="/terms" style={{ display: 'block', fontSize: 14, color: TEXT_MUTED, textDecoration: 'none', marginBottom: 10 }}>Terms of Service</a>
              <a href="/disclaimer" style={{ display: 'block', fontSize: 14, color: TEXT_MUTED, textDecoration: 'none', marginBottom: 10 }}>Disclaimer</a>
              <a href="/affiliate-disclosure" style={{ display: 'block', fontSize: 14, color: TEXT_MUTED, textDecoration: 'none', marginBottom: 10 }}>Affiliate Disclosure</a>
              <a href="/contact" style={{ display: 'block', fontSize: 14, color: TEXT_MUTED, textDecoration: 'none', marginBottom: 10 }}>Contact</a>
              <a href="/dmca" style={{ display: 'block', fontSize: 14, color: TEXT_MUTED, textDecoration: 'none', marginBottom: 10 }}>DMCA</a>
            </div>
          </div>
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, marginBottom: 16, display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
            <span style={{ fontSize: 12, fontWeight: 700, color: TEXT_MUTED, letterSpacing: '1px', textTransform: 'uppercase' }}>Learn More</span>
            <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: BLUE, textDecoration: 'none', fontWeight: 600 }}>Anthropic — AI Safety Research →</a>
            <a href="https://openai.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: BLUE, textDecoration: 'none', fontWeight: 600 }}>OpenAI →</a>
            <a href="https://www.sba.gov/business-guide/manage-your-business/strengthen-your-cybersecurity" target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: BLUE, textDecoration: 'none', fontWeight: 600 }}>SBA: AI for Small Business →</a>
          </div>
          <div style={{ borderTop: `1px solid ${BORDER}`, paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ fontSize: 13, color: TEXT_MUTED }}>© 2025 AI Skills Agents. All rights reserved.</div>
            <div style={{ fontSize: 13, color: TEXT_MUTED }}>
              Powered by <a href="https://thevoiceofcash.com" target="_blank" rel="noopener noreferrer" style={{ color: BLUE, textDecoration: 'none' }}>The Voice of Cash</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .mobile-menu-btn { display: none !important; }
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          .desktop-only { display: none !important; }
        }
      `}</style>
    </>
  );
}
