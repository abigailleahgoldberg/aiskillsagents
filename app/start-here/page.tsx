import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Start Here — What Are AI Agents? | AI Skills Agents',
  description: 'New to AI agents for business? Start here. Plain English explanation of what AI agents are, how they work, and the fastest path to using them in your business.',
  alternates: { canonical: 'https://aiskillsagents.com/start-here' },
}

const GOLD = '#D4AF37'
const DARK = '#0a0a0f'

const steps = [
  { num: '01', title: 'What is an AI agent?', body: 'An AI agent is software that can take actions on your behalf. It reads inputs, makes decisions, and executes tasks — like a smart employee that never sleeps and never forgets.' },
  { num: '02', title: 'What is an AI skill?', body: 'A skill is a specific capability trained into an agent. A lead qualification skill. A customer service skill. A content writing skill. Each one is purpose-built for a specific job.' },
  { num: '03', title: 'What can they actually do?', body: 'Respond to leads instantly. Answer customer questions 24/7. Write and schedule content. Track operations. Send reports. Qualify prospects. Almost any repetitive knowledge task.' },
  { num: '04', title: 'What do they cost?', body: 'Depends on complexity. Simple automations run on free tiers of tools like Zapier or Make. Full custom AI agents built by a team like ours run $799-$4,999/month depending on scope.' },
  { num: '05', title: 'Where do I start?', body: 'Pick one painful, repetitive task your team does every week. That is your first AI agent. Start specific. Prove value. Then expand.' },
]

export default function StartHerePage() {
  return (
    <div style={{ minHeight: '100vh', background: DARK, color: '#fff', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ padding: '72px 5vw 56px', maxWidth: 820, margin: '0 auto', textAlign: 'center', borderBottom: `1px solid ${GOLD}20` }}>
        <div style={{ fontSize: 12, letterSpacing: '3px', color: GOLD, fontWeight: 700, marginBottom: 20 }}>NEW HERE?</div>
        <h1 style={{ fontSize: 'clamp(32px,5vw,56px)', fontWeight: 900, margin: '0 0 20px', letterSpacing: '-1.5px', lineHeight: 1.1 }}>
          Start Here
        </h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.45)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
          Everything you need to know about AI agents for your business — in plain English, no hype.
        </p>
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '56px 5vw' }}>
        {steps.map(s => (
          <div key={s.num} style={{ display: 'flex', gap: 28, marginBottom: 40, alignItems: 'flex-start' }}>
            <div style={{ fontSize: 32, fontWeight: 900, color: `${GOLD}40`, minWidth: 48, lineHeight: 1 }}>{s.num}</div>
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 800, color: '#fff', margin: '0 0 10px' }}>{s.title}</h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, margin: 0, fontSize: 15 }}>{s.body}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 5vw 56px' }}>
        <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}20`, padding: '36px' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, marginBottom: 20, color: '#fff' }}>Read Next</h2>
          <div style={{ display: 'grid', gap: 12 }}>
            {[
              ['What Are AI Skills? The Plain English Guide', '/blog/what-are-ai-skills'],
              ['How AI Agents Actually Work', '/blog/how-ai-agents-work'],
              ['The Real Cost of AI Agents for Small Business', '/blog/ai-agent-cost-small-business'],
              ['AI Tools We Recommend', '/tools'],
            ].map(([label, href]) => (
              <a key={href} href={href} style={{ color: GOLD, fontWeight: 700, fontSize: 14, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ color: `${GOLD}50` }}>→</span> {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: `${GOLD}08`, borderTop: `1px solid ${GOLD}20`, padding: '56px 5vw', textAlign: 'center' }}>
        <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 12 }}>Ready to build your first AI agent?</h2>
        <p style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 28, fontSize: 15 }}>The Voice of Cash builds custom AI systems for businesses in Las Vegas. Book a free consultation.</p>
        <a href="https://www.thevoiceofcash.com/consultation" target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', background: GOLD, color: DARK, fontWeight: 900, fontSize: 14, padding: '16px 40px', textDecoration: 'none', letterSpacing: '1px' }}>
          BOOK FREE CONSULTATION
        </a>
      </div>
    </div>
  )
}
