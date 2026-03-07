"use client";
import { useState, useEffect, useRef } from "react";

const G = "#D4AF37";
const DARK = "#080808";
const CARD = "#0F0F0F";
const BORDER = "#1a1a1a";
const TEXT = "#F0EEE8";
const MUTED = "rgba(240,238,232,0.45)";

const AGENTS = [
  { emoji:"🎯", name:"Lead Agent", desc:"Qualifies inbound leads 24/7. Scores prospects, routes hot ones to your team, kills time-wasters before they reach you.", saves:"12 hrs/week" },
  { emoji:"💬", name:"Service Agent", desc:"Handles tier-1 customer questions instantly. Never misses an inquiry. Escalates the right stuff to the right person.", saves:"8 hrs/week" },
  { emoji:"📅", name:"Booking Agent", desc:"Schedules calls, sends reminders, confirms attendance, reschedules automatically. Your calendar fills itself.", saves:"5 hrs/week" },
  { emoji:"📊", name:"Ops Agent", desc:"Processes invoices, updates your CRM, monitors pipelines, flags exceptions. Runs the back office while you run the business.", saves:"10 hrs/week" },
  { emoji:"✍️", name:"Content Agent", desc:"Drafts blog posts, social content, email sequences, ad copy. On-brand, always ready, never blocked.", saves:"6 hrs/week" },
  { emoji:"🔍", name:"Intel Agent", desc:"Watches your competitors, tracks mentions, monitors trends, delivers daily briefings. You never miss a market move.", saves:"4 hrs/week" },
];

const STEPS = [
  { n:"01", title:"Tell Us What's Broken", desc:"Fill out the form. Tell us your biggest time-wasters, your most painful processes, and what you wish ran itself." },
  { n:"02", title:"We Map Your Agent Stack", desc:"We design the exact agents your business needs — what they do, how they connect, and what you can expect in week one." },
  { n:"03", title:"Agents Go Live", desc:"We build, test, and deploy. Your agents start running. We stay to make sure they keep running." },
];

const STATS = [
  { val:"544%", label:"Average ROI from AI automation", source:"Nucleus Research" },
  { val:"240+", label:"Hours saved per employee annually", source:"McKinsey" },
  { val:"30%", label:"Operational cost reduction", source:"Deloitte" },
  { val:"76%", label:"See ROI within the first year", source:"Salesforce" },
];

const INDUSTRIES = ["Real Estate","Law Firms","Medical Practices","Restaurants & Hospitality","E-Commerce","Financial Services","Contractors","Marketing Agencies","SaaS Companies","Retail"];

export default function Home() {
  const [form, setForm] = useState({ name:"", email:"", business:"", pain:"", size:"" });
  const [status, setStatus] = useState<"idle"|"loading"|"done"|"error">("idle");
  const [err, setErr] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.business || !form.pain) { setErr("Please fill in all required fields."); return; }
    setErr(""); setStatus("loading");
    try {
      const res = await fetch("/api/lead", { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      if (!res.ok) throw new Error();
      setStatus("done");
    } catch { setStatus("error"); setErr("Something went wrong. Please try again."); }
  }

  return (
    <>
      {/* NAV */}
      <nav style={{ position:"fixed", top:0, left:0, right:0, zIndex:100, padding:"0 5vw", height:60, display:"flex", alignItems:"center", justifyContent:"space-between",
        background: scrolled ? "rgba(8,8,8,0.97)" : "transparent",
        borderBottom: scrolled ? `1px solid ${BORDER}` : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none", transition:"all 0.3s" }}>
        <a href="/" style={{ fontWeight:900, fontSize:17, color:TEXT, textDecoration:"none", letterSpacing:"-0.5px" }}>
          AI<span style={{ color:G }}>Skills</span>Agents
        </a>
        <div style={{ display:"flex", gap:28, alignItems:"center" }}>
          <a href="#how" style={{ fontSize:13, color:MUTED, textDecoration:"none" }}>How It Works</a>
          <a href="#agents" style={{ fontSize:13, color:MUTED, textDecoration:"none" }}>Agents</a>
          <a href="/blog" style={{ fontSize:13, color:MUTED, textDecoration:"none" }}>Blog</a>
          <a href="#get-started" style={{ fontSize:13, fontWeight:700, color:G, textDecoration:"none", border:`1px solid ${G}44`, padding:"7px 18px" }}>Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="section-pad" style={{ minHeight:"100vh", display:"flex", alignItems:"center", padding:"120px 5vw 80px", position:"relative", overflow:"hidden", maxWidth:"100vw" }}>
        {/* Grid background */}
        <div style={{ position:"absolute", inset:0, backgroundImage:`linear-gradient(${BORDER} 1px, transparent 1px), linear-gradient(90deg, ${BORDER} 1px, transparent 1px)`, backgroundSize:"60px 60px", opacity:0.4, overflow:"hidden" }} />
        {/* Glow */}
        <div style={{ position:"absolute", top:"20%", left:"50%", transform:"translateX(-50%)", width:600, height:400, background:`radial-gradient(ellipse, ${G}18 0%, transparent 70%)`, pointerEvents:"none" }} />

        <div className="hero-main" style={{ maxWidth:1100, margin:"0 auto", width:"100%", position:"relative", zIndex:1, display:"grid", gridTemplateColumns:"1fr 1fr", gap:64, alignItems:"center" }}>
          {/* Left */}
          <div>
            <div style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#001a12", border:`1px solid ${G}33`, padding:"6px 14px", fontSize:11, letterSpacing:"2px", color:G, marginBottom:28 }}>
              <span style={{ width:6, height:6, borderRadius:"50%", background:G, display:"inline-block", animation:"pulse 2s infinite" }} />
              AGENTS DEPLOYED NATIONWIDE
            </div>
            <h1 style={{ fontSize:"clamp(38px, 5vw, 66px)", fontWeight:900, lineHeight:0.95, letterSpacing:"-2px", marginBottom:24 }}>
              Your Business.<br/>
              <span style={{ color:G }}>On Autopilot.</span>
            </h1>
            <p className="hero-p" style={{ fontSize:18, color:MUTED, lineHeight:1.6, marginBottom:12, maxWidth:480 }}>
              We build custom AI agents that handle your lead gen, customer service, scheduling, and ops — without adding headcount.
            </p>
            <p className="hero-tagline" style={{ fontSize:16, color:TEXT, fontWeight:700, marginBottom:36 }}>
              Built for your business. Running in 2 weeks.
            </p>
            <div className="hero-cta-row" style={{ display:"flex", gap:16, flexWrap:"wrap" }}>
              <a href="#get-started" style={{ background:G, color:DARK, fontWeight:800, fontSize:15, padding:"16px 32px", textDecoration:"none", letterSpacing:"0.5px", display:"inline-block" }}>
                BUILD MY AGENT STACK →
              </a>
              <a href="#agents" style={{ border:`1px solid ${BORDER}`, color:MUTED, fontSize:14, padding:"16px 28px", textDecoration:"none", display:"inline-block" }}>
                See What We Build
              </a>
            </div>
            <div className="hero-trust" style={{ display:"flex", gap:24, marginTop:32, flexWrap:"wrap" }}>
              {["No long-term contracts","Setup in 2 weeks","Human support included"].map(t => (
                <div key={t} style={{ display:"flex", gap:6, alignItems:"center", fontSize:12, color:MUTED }}>
                  <span style={{ color:G }}>✓</span> {t}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div id="get-started" style={{ background:CARD, border:`1px solid ${BORDER}`, padding:"36px 32px" }}>
            {status === "done" ? (
              <div style={{ textAlign:"center", padding:"20px 0" }}>
                <div style={{ fontSize:40, marginBottom:16 }}>✓</div>
                <div style={{ fontWeight:800, fontSize:20, color:G, marginBottom:12 }}>We got it.</div>
                <p style={{ color:MUTED, fontSize:14, lineHeight:1.6 }}>
                  Someone from the Voice of Cash team will be in touch within 24 hours to talk through your agent stack.
                </p>
              </div>
            ) : (
              <>
                <div style={{ fontWeight:800, fontSize:18, marginBottom:6 }}>Tell Us About Your Business</div>
                <p style={{ fontSize:12, color:MUTED, marginBottom:24 }}>Free discovery. No sales pitch. Just a plan.</p>
                <form onSubmit={submit} style={{ display:"flex", flexDirection:"column", gap:14 }}>
                  {[
                    { key:"name", label:"YOUR NAME", placeholder:"First Last", type:"text" },
                    { key:"email", label:"WORK EMAIL", placeholder:"you@company.com", type:"email" },
                    { key:"business", label:"BUSINESS NAME", placeholder:"Acme Corp", type:"text" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ display:"block", fontSize:10, letterSpacing:"1.5px", color:MUTED, marginBottom:6 }}>{f.label}</label>
                      <input type={f.type} placeholder={f.placeholder} value={(form as any)[f.key]}
                        onChange={e => setForm(p => ({...p,[f.key]:e.target.value}))} required
                        style={{ width:"100%", background:DARK, border:`1px solid ${BORDER}`, color:TEXT, padding:"11px 14px", fontSize:14, outline:"none", fontFamily:"inherit" }}
                        onFocus={e => e.currentTarget.style.borderColor=G}
                        onBlur={e => e.currentTarget.style.borderColor=BORDER}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display:"block", fontSize:10, letterSpacing:"1.5px", color:MUTED, marginBottom:6 }}>COMPANY SIZE</label>
                    <select value={form.size} onChange={e => setForm(p => ({...p,size:e.target.value}))}
                      style={{ width:"100%", background:DARK, border:`1px solid ${BORDER}`, color: form.size ? TEXT : MUTED, padding:"11px 14px", fontSize:14, outline:"none", fontFamily:"inherit" }}>
                      <option value="">Select...</option>
                      {["Solo / 1-person","2-10 employees","11-50 employees","51-200 employees","200+ employees"].map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label style={{ display:"block", fontSize:10, letterSpacing:"1.5px", color:MUTED, marginBottom:6 }}>BIGGEST TIME-WASTER IN YOUR BUSINESS *</label>
                    <textarea placeholder="Tell us what's costing you the most time right now..." value={form.pain}
                      onChange={e => setForm(p => ({...p,pain:e.target.value}))} required rows={3}
                      style={{ width:"100%", background:DARK, border:`1px solid ${BORDER}`, color:TEXT, padding:"11px 14px", fontSize:14, outline:"none", resize:"vertical", fontFamily:"inherit" }}
                      onFocus={e => e.currentTarget.style.borderColor=G}
                      onBlur={e => e.currentTarget.style.borderColor=BORDER}
                    />
                  </div>
                  {err && <p style={{ color:"#ff6b6b", fontSize:12 }}>{err}</p>}
                  <button type="submit" disabled={status==="loading"}
                    style={{ background: status==="loading" ? "#005540" : G, color:DARK, fontWeight:800, fontSize:15, padding:"16px", border:"none", cursor:"pointer", letterSpacing:"0.5px", marginTop:4 }}>
                    {status==="loading" ? "SENDING..." : "BUILD MY AGENT STACK →"}
                  </button>
                  <p style={{ fontSize:10, color:"#333", textAlign:"center", lineHeight:1.5 }}>
                    No spam. No pitch. Response within 24 hours.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section" style={{ background:CARD, borderTop:`1px solid ${BORDER}`, borderBottom:`1px solid ${BORDER}`, padding:"48px 5vw" }}>
        <div className="stats-grid" style={{ maxWidth:1100, margin:"0 auto", width:"100%", display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:32, textAlign:"center" }}>
          {STATS.map(s => (
            <div key={s.val}>
              <div style={{ fontSize:40, fontWeight:900, color:G, letterSpacing:"-1px" }}>{s.val}</div>
              <div style={{ fontSize:13, color:MUTED, marginTop:6, lineHeight:1.4 }}>{s.label}</div>
              <div style={{ fontSize:10, color:"#333", marginTop:6, letterSpacing:"0.5px" }}>{s.source}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AGENTS */}
      <section id="agents" className="section-pad" style={{ padding:"100px 5vw" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div style={{ fontSize:11, letterSpacing:"2px", color:G, marginBottom:16 }}>WHAT WE BUILD</div>
            <h2 style={{ fontSize:"clamp(28px, 4vw, 48px)", fontWeight:900, letterSpacing:"-1px", marginBottom:16 }}>
              Six Agents.<br/><span style={{ color:G }}>One Mission: Run Your Business.</span>
            </h2>
            <p style={{ fontSize:16, color:MUTED, maxWidth:540, margin:"0 auto" }}>
              Every agent is purpose-built for your workflows. Not templates. Not plugins. Custom-built systems that know your business.
            </p>
          </div>
          <div className="agents-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
            {AGENTS.map(a => (
              <div key={a.name} style={{ background:CARD, border:`1px solid ${BORDER}`, padding:"32px 28px", transition:"border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor=`${G}66`)}
                onMouseLeave={e => (e.currentTarget.style.borderColor=BORDER)}>
                <div style={{ fontSize:32, marginBottom:16 }}>{a.emoji}</div>
                <div style={{ fontWeight:800, fontSize:17, marginBottom:10 }}>{a.name}</div>
                <p style={{ fontSize:13, color:MUTED, lineHeight:1.6, marginBottom:20 }}>{a.desc}</p>
                <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:"#001a12", border:`1px solid ${G}33`, padding:"5px 12px", fontSize:11, color:G }}>
                  Saves ~{a.saves}
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign:"center", marginTop:48 }}>
            <a href="#get-started" style={{ background:G, color:DARK, fontWeight:800, fontSize:15, padding:"16px 40px", textDecoration:"none", letterSpacing:"0.5px" }}>
              BUILD MY AGENT STACK →
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="section-pad" style={{ background:CARD, borderTop:`1px solid ${BORDER}`, padding:"100px 5vw" }}>
        <div style={{ maxWidth:900, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:64 }}>
            <div style={{ fontSize:11, letterSpacing:"2px", color:G, marginBottom:16 }}>THE PROCESS</div>
            <h2 style={{ fontSize:"clamp(26px, 4vw, 44px)", fontWeight:900, letterSpacing:"-1px" }}>
              From Idea to<span style={{ color:G }}> Running Agent</span> in 2 Weeks
            </h2>
          </div>
          <div className="steps-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:48 }}>
            {STEPS.map((s, i) => (
              <div key={s.n} style={{ position:"relative" }}>
                {i < STEPS.length - 1 && (
                  <div className="step-connector" style={{ position:"absolute", top:20, left:"calc(100% + 24px)", width:"calc(100% - 48px)", height:1, background:`linear-gradient(90deg, ${G}66, transparent)` }} />
                )}
                <div style={{ fontSize:11, fontWeight:800, color:G, letterSpacing:"2px", marginBottom:16 }}>{s.n}</div>
                <div style={{ fontWeight:800, fontSize:18, marginBottom:12 }}>{s.title}</div>
                <p style={{ fontSize:13, color:MUTED, lineHeight:1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="industry-section" style={{ padding:"100px 5vw" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:48 }}>
            <div style={{ fontSize:11, letterSpacing:"2px", color:G, marginBottom:16 }}>WHO WE BUILD FOR</div>
            <h2 style={{ fontSize:"clamp(26px, 4vw, 44px)", fontWeight:900, letterSpacing:"-1px" }}>
              Any Industry.<br/><span style={{ color:G }}>Any Size.</span>
            </h2>
          </div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center" }}>
            {INDUSTRIES.map(ind => (
              <div key={ind} style={{ background:CARD, border:`1px solid ${BORDER}`, padding:"12px 20px", fontSize:13, color:MUTED }}>
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bottom-cta" style={{ background:"#001a12", borderTop:`1px solid ${G}22`, padding:"100px 5vw", textAlign:"center" }}>
        <div style={{ maxWidth:700, margin:"0 auto" }}>
          <div style={{ fontSize:11, letterSpacing:"2px", color:G, marginBottom:20 }}>READY TO BUILD</div>
          <h2 style={{ fontSize:"clamp(28px, 5vw, 52px)", fontWeight:900, letterSpacing:"-1px", marginBottom:20 }}>
            Stop Doing Work<br/>A Machine Can Handle.
          </h2>
          <p style={{ fontSize:17, color:MUTED, lineHeight:1.6, marginBottom:40 }}>
            Fill out the form above and we will map out exactly which agents your business needs. No obligation. Just a clear picture of what is possible.
          </p>
          <a href="#get-started" style={{ background:G, color:DARK, fontWeight:800, fontSize:16, padding:"18px 48px", textDecoration:"none", letterSpacing:"0.5px", display:"inline-block" }}>
            BUILD MY AGENT STACK →
          </a>
          <p style={{ fontSize:13, color:"#333", marginTop:20 }}>
            Powered by <a href="https://thevoiceofcash.com" target="_blank" rel="noopener noreferrer" style={{ color:`${G}88`, textDecoration:"none" }}>The Voice of Cash</a> — Las Vegas AI Implementation
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background:DARK, borderTop:`1px solid ${BORDER}`, padding:"32px 5vw", display:"flex", justifyContent:"space-between", alignItems:"center", flexWrap:"wrap", gap:16 }}>
        <div style={{ fontWeight:900, fontSize:15, color:TEXT }}>AI<span style={{ color:G }}>Skills</span>Agents</div>
        <div style={{ display:"flex", gap:24, fontSize:12, color:MUTED }}>
          <a href="/privacy" style={{ color:MUTED, textDecoration:"none" }}>Privacy</a>
          <a href="/terms" style={{ color:MUTED, textDecoration:"none" }}>Terms</a>
          <a href="https://thevoiceofcash.com/consultation" target="_blank" rel="noopener noreferrer" style={{ color:G, textDecoration:"none" }}>Book a Call</a>
        </div>
        <div style={{ display:"flex", gap:20, flexWrap:"wrap", alignItems:"center" }}>
          <span style={{ fontSize:11, letterSpacing:"2px", fontWeight:700, color:"rgba(212,175,55,0.5)" }}>OUR NETWORK</span>
          {[["The Voice of Cash","https://www.thevoiceofcash.com"],["WeBearish","https://www.webearish.com"],["JewSA","https://www.jewsa.com"],["U-God","https://u-god.com"]].map(([label,href]) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" style={{ fontSize:12, color:"rgba(255,255,255,0.35)", textDecoration:"none", fontWeight:600 }}>{label}</a>
          ))}
        </div>
        <div style={{ fontSize:12, color:"#333" }}>© 2025 AI Skills Agents. All rights reserved.</div>
      </footer>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        html, body { overflow-x: hidden; max-width: 100vw; }

        /* Nav */
        @media (max-width: 640px) {
          nav { padding: 0 18px !important; height: 52px !important; }
          nav a:not([href="#get-started"]) { display: none; }
        }

        /* Hero — single column, tighten padding */
        @media (max-width: 900px) {
          .hero-main { grid-template-columns: 1fr !important; gap: 36px !important; }
          .hero-main > div:first-child { text-align: center; }
          .hero-cta-row { justify-content: center !important; }
          .hero-cta-row a { width: 100%; max-width: 320px; text-align: center; justify-content: center; }
          .hero-trust { justify-content: center !important; flex-wrap: wrap; gap: 16px !important; }
        }
        @media (max-width: 640px) {
          .section-pad { padding: 80px 18px 60px !important; }
          h1 { font-size: clamp(32px, 10vw, 50px) !important; letter-spacing: -1px !important; }
          .badge-pill { font-size: 10px !important; padding: 5px 10px !important; }
          .hero-p { font-size: 15px !important; }
          .hero-tagline { font-size: 14px !important; }
          .form-wrap { padding: 24px 18px !important; }
        }

        /* Stats */
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: 1fr 1fr !important; gap: 20px !important; padding: 40px 18px !important; }
        }

        /* Agents */
        @media (max-width: 900px) {
          .agents-grid { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
        }
        @media (max-width: 560px) {
          .agents-grid { grid-template-columns: 1fr !important; }
        }

        /* How it works */
        @media (max-width: 700px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
          .step-connector { display: none !important; }
        }

        /* Industries */
        @media (max-width: 640px) {
          .industry-section { padding: 64px 18px !important; }
        }

        /* Bottom CTA */
        @media (max-width: 640px) {
          .bottom-cta { padding: 72px 18px !important; }
          .bottom-cta h2 { font-size: clamp(26px, 8vw, 44px) !important; }
          .bottom-cta p { font-size: 15px !important; }
          .bottom-cta a { display: block !important; width: 100% !important; text-align: center !important; padding: 16px 20px !important; }
        }

        /* Footer */
        @media (max-width: 640px) {
          footer { flex-direction: column !important; align-items: flex-start !important; gap: 20px !important; padding: 28px 18px !important; }
        }

        /* CTA buttons — never overflow */
        @media (max-width: 640px) {
          a[href="#get-started"] { display: block !important; width: calc(100% - 36px) !important; margin: 0 auto !important; text-align: center !important; padding: 16px 12px !important; font-size: 14px !important; letter-spacing: 0.3px !important; }
          section[id] > div > div[style*="textAlign"] { padding: 0 18px; }
        }

        /* Form inputs full width */
        @media (max-width: 640px) {
          input, select, textarea { font-size: 16px !important; }
        }
      `}</style>
    </>
  );
}
