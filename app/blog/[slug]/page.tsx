import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts, getPostBySlug, getRelatedPosts } from '../data';

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `https://aiskillsagents.com/blog/${post.slug}` },
    openGraph: { title: post.seoTitle, description: post.seoDescription, type: "article", publishedTime: post.date },
  };
}

const G = "#D4AF37";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.slug, post.category);
  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <div style={{ minHeight:"100vh", background:"#080808", color:"#F0EEE8", fontFamily:"system-ui,sans-serif" }}>
      <style>{`
        body { background:#080808; }
        .post-body p { font-size:17px; line-height:1.85; color:#C8C4BC; margin-bottom:24px; }
        .post-body strong { color:#F0EEE8; }
        .post-body h2 { font-size:24px; font-weight:800; color:#F0EEE8; margin:40px 0 16px; letter-spacing:-0.5px; }
        @media (max-width:640px) {
          .post-hero { padding: 72px 18px 40px !important; }
          .post-body { padding: 40px 18px 60px !important; }
          .post-title { font-size: clamp(24px,7vw,40px) !important; }
          .post-excerpt { font-size: 15px !important; }
          .post-body p { font-size: 15px !important; }
          .related-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
      <nav style={{ padding:"16px 5vw", borderBottom:"1px solid #1a1a1a", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <a href="/" style={{ fontWeight:900, fontSize:17, color:"#F0EEE8", textDecoration:"none" }}>AI<span style={{color:G}}>Skills</span>Agents</a>
        <div style={{display:"flex",gap:20,alignItems:"center"}}>
          <a href="/blog" style={{fontSize:13,color:"rgba(240,238,232,0.4)",textDecoration:"none"}}>← Blog</a>
          <a href="/#get-started" style={{fontSize:13,color:G,textDecoration:"none",border:`1px solid ${G}44`,padding:"7px 18px"}}>Get Started</a>
        </div>
      </nav>
      <section className="post-hero" style={{ padding:"80px 5vw 48px", maxWidth:800 }}>
        <div style={{display:"flex",gap:12,alignItems:"center",marginBottom:20,flexWrap:"wrap"}}>
          <span style={{fontSize:10,letterSpacing:"1.5px",color:G,background:"rgba(212,175,55,0.1)",border:`1px solid ${G}33`,padding:"3px 10px"}}>{post.category}</span>
          <span style={{fontSize:12,color:"rgba(240,238,232,0.3)"}}>{post.date}</span>
          <span style={{fontSize:12,color:"rgba(240,238,232,0.3)"}}>{post.readTime}</span>
        </div>
        <h1 className="post-title" style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,lineHeight:1.05,letterSpacing:"-1px",marginBottom:20}}>{post.title}</h1>
        <p className="post-excerpt" style={{fontSize:18,color:"rgba(240,238,232,0.5)",lineHeight:1.7,paddingBottom:32,borderBottom:"1px solid #1a1a1a"}}>{post.excerpt}</p>
      </section>
      <section className="post-body" style={{padding:"48px 5vw 80px",maxWidth:800}}>
        {paragraphs.map((para, i) => {
          const isMid = i === Math.floor(paragraphs.length / 2);
          const isH2 = para.startsWith("**") && para.endsWith("**");
          const html = para
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, `<a href="$2" target="_blank" rel="noopener noreferrer" style="color:${G};text-decoration:underline;text-underline-offset:3px;">$1</a>`);
          return (
            <>
              {isMid && (
                <div key={`cta-${i}`} style={{margin:"40px 0",padding:"28px",background:"rgba(212,175,55,0.05)",borderLeft:`3px solid ${G}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16}}>
                  <div>
                    <div style={{fontSize:12,fontWeight:800,color:G,letterSpacing:"1px",textTransform:"uppercase",marginBottom:6}}>Ready to Get Started?</div>
                    <div style={{fontSize:16,fontWeight:700,color:"#F0EEE8"}}>Tell us your biggest time-waster. We will map out your AI skill stack.</div>
                  </div>
                  <a href="/#get-started" style={{background:G,color:"#080808",fontWeight:800,fontSize:13,letterSpacing:"1px",padding:"12px 24px",textDecoration:"none",whiteSpace:"nowrap"}}>BUILD MY STACK →</a>
                </div>
              )}
              {isH2
                ? <h2 key={i}>{para.replace(/\*\*/g,"")}</h2>
                : <p key={i} dangerouslySetInnerHTML={{__html:html}} />
              }
            </>
          );
        })}
      </section>
      <div style={{maxWidth:800,margin:"0 5vw",padding:"32px",background:"rgba(212,175,55,0.06)",border:`1px solid ${G}33`,marginBottom:60}}>
        <div style={{fontWeight:900,fontSize:20,marginBottom:8}}>Build Your AI Skill Stack</div>
        <p style={{color:"rgba(240,238,232,0.5)",fontSize:14,lineHeight:1.6,marginBottom:20}}>Fill out our form and we will map out exactly which AI skills your business needs. No obligation. Just clarity.</p>
        <a href="/#get-started" style={{background:G,color:"#080808",fontWeight:800,fontSize:14,padding:"14px 32px",textDecoration:"none",letterSpacing:"0.5px",display:"inline-block"}}>GET STARTED FREE →</a>
      </div>
      {related.length > 0 && (
        <section style={{padding:"0 5vw 80px",maxWidth:800}}>
          <div style={{fontSize:11,letterSpacing:"2px",color:G,marginBottom:20}}>MORE ARTICLES</div>
          <div className="related-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16}}>
            {related.map(r => (
              <a key={r.slug} href={`/blog/${r.slug}`} style={{textDecoration:"none"}}>
                <div style={{background:"#0F0F0F",border:"1px solid #1a1a1a",padding:"20px",height:"100%"}}>
                  <div style={{fontSize:10,color:G,letterSpacing:"1px",marginBottom:8}}>{r.category}</div>
                  <div style={{fontSize:14,fontWeight:700,color:"#F0EEE8",lineHeight:1.4}}>{r.title}</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
      <footer style={{background:"#080808",borderTop:"1px solid #1a1a1a",padding:"28px 5vw",display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:16,fontSize:12,color:"rgba(240,238,232,0.3)"}}>
        <div>AI<span style={{color:G}}>Skills</span>Agents</div>
        <div style={{display:"flex",gap:20}}><a href="/privacy" style={{color:"rgba(240,238,232,0.3)",textDecoration:"none"}}>Privacy</a><a href="/terms" style={{color:"rgba(240,238,232,0.3)",textDecoration:"none"}}>Terms</a></div>
        <div>© 2025 AI Skills Agents</div>
      </footer>
    </div>
  );
}
