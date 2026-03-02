import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './data';

export const metadata: Metadata = {
  title: "AI Skills Blog: Guides, History, and Use Cases",
  description: "Practical guides on AI skills for business. Learn what they are, where they came from, and how businesses across every industry are using them to grow.",
  alternates: { canonical: "https://aiskillsagents.com/blog" },
};

const CATS = ["All", ...Array.from(new Set(posts.map(p => p.category)))];
const G = "#D4AF37";

export default function BlogPage() {
  return (
    <div style={{ minHeight:"100vh", background:"#080808", color:"#F0EEE8", fontFamily:"system-ui,sans-serif" }}>
      <style>{`.blog-card:hover { border-color: rgba(212,175,55,0.4) !important; }`}</style>
      <nav style={{ padding:"16px 5vw", borderBottom:"1px solid #1a1a1a", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <a href="/" style={{ fontWeight:900, fontSize:17, color:"#F0EEE8", textDecoration:"none" }}>AI<span style={{color:G}}>Skills</span>Agents</a>
        <a href="/#get-started" style={{ fontSize:13, color:G, textDecoration:"none", border:`1px solid ${G}44`, padding:"7px 18px" }}>Get Started</a>
      </nav>
      <section style={{ padding:"80px 5vw 48px", maxWidth:960, margin:"0 auto" }}>
        <div style={{ fontSize:11, letterSpacing:"2px", color:G, marginBottom:16 }}>THE AI SKILLS BLOG</div>
        <h1 style={{ fontSize:"clamp(30px,5vw,52px)", fontWeight:900, letterSpacing:"-1px", marginBottom:16 }}>
          Guides, History, and<br/><span style={{color:G}}>Real Use Cases</span>
        </h1>
        <p style={{ fontSize:17, color:"rgba(240,238,232,0.5)", maxWidth:600, lineHeight:1.6 }}>
          {posts.length} articles on what AI skills are, where they came from, and how businesses across every industry are using them right now.
        </p>
      </section>
      <section style={{ padding:"0 5vw 100px", maxWidth:960, margin:"0 auto" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(290px,1fr))", gap:24 }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration:"none" }}>
              <div className="blog-card" style={{ background:"#0F0F0F", border:"1px solid #1a1a1a", padding:"28px 24px", height:"100%", transition:"border-color 0.2s" }}
>
                <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:16, flexWrap:"wrap" }}>
                  <span style={{ fontSize:10, letterSpacing:"1.5px", color:G, background:"rgba(212,175,55,0.1)", border:`1px solid ${G}33`, padding:"3px 10px" }}>{post.category}</span>
                  <span style={{ fontSize:11, color:"rgba(240,238,232,0.3)" }}>{post.readTime}</span>
                </div>
                <h2 style={{ fontSize:16, fontWeight:800, color:"#F0EEE8", lineHeight:1.3, marginBottom:12 }}>{post.title}</h2>
                <p style={{ fontSize:13, color:"rgba(240,238,232,0.45)", lineHeight:1.6, marginBottom:16 }}>{post.excerpt}</p>
                <div style={{ fontSize:11, color:"rgba(240,238,232,0.25)" }}>{post.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section style={{ background:"#001a0e", borderTop:`1px solid ${G}22`, padding:"72px 5vw", textAlign:"center" }}>
        <h2 style={{ fontSize:"clamp(24px,4vw,40px)", fontWeight:900, marginBottom:16 }}>Ready to Build Your First AI Skill?</h2>
        <p style={{ color:"rgba(240,238,232,0.5)", fontSize:16, marginBottom:32 }}>Tell us your biggest time-waster. We will tell you which AI skill fixes it.</p>
        <a href="/#get-started" style={{ background:G, color:"#080808", fontWeight:800, fontSize:15, padding:"16px 40px", textDecoration:"none", letterSpacing:"0.5px" }}>BUILD MY AGENT STACK →</a>
      </section>
      <footer style={{ background:"#080808", borderTop:"1px solid #1a1a1a", padding:"28px 5vw", display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:16, fontSize:12, color:"rgba(240,238,232,0.3)" }}>
        <div>AI<span style={{color:G}}>Skills</span>Agents</div>
        <div style={{display:"flex",gap:20}}><a href="/privacy" style={{color:"rgba(240,238,232,0.3)",textDecoration:"none"}}>Privacy</a><a href="/terms" style={{color:"rgba(240,238,232,0.3)",textDecoration:"none"}}>Terms</a></div>
        <div>© 2025 AI Skills Agents</div>
      </footer>
    </div>
  );
}
