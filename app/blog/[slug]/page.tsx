import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts, getPostBySlug, getRelatedPosts } from "../data";
import { ArrowLeft, Clock, Calendar, CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const BASE = "https://aiskillsagents.com";
  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `${BASE}/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      publishedTime: post.date,
      url: `${BASE}/blog/${post.slug}`,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seoTitle,
      description: post.seoDescription,
      images: ["/og-image.png"],
    },
  };
}

const BLUE = "#2563EB";
const BLUE_DARK = "#1D4ED8";
const TEXT = "#1A1A1A";
const TEXT_SECONDARY = "#4A4A4A";
const TEXT_MUTED = "#7A7A7A";
const BORDER = "#E8E5E0";
const BG_WARM = "#FBF9F6";
const BG_ACCENT = "#F0EDE8";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.slug, post.category);
  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF", color: TEXT, fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
      {/* Nav */}
      <nav style={{ padding: "0 5vw", height: 68, borderBottom: `1px solid ${BORDER}`, display: "flex", justifyContent: "space-between", alignItems: "center", background: "#FFFFFF" }}>
        <a href="/" style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: 20, color: TEXT, textDecoration: "none" }}>
          AI Skills Agents
        </a>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a href="/blog" style={{ fontSize: 14, color: TEXT_SECONDARY, textDecoration: "none", display: "flex", alignItems: "center", gap: 6, fontWeight: 500 }}>
            <ArrowLeft size={14} /> Blog
          </a>
          <a href="/#get-started" style={{
            fontSize: 14, fontWeight: 700, color: "#FFFFFF", textDecoration: "none",
            background: BLUE, padding: "10px 20px", borderRadius: 6,
          }}>
            Free Consultation
          </a>
        </div>
      </nav>

      {/* Post header */}
      <section style={{ padding: "64px 5vw 40px", maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 20, flexWrap: "wrap" }}>
          <span style={{
            fontSize: 11, fontWeight: 600,
            color: BLUE, background: "#EFF6FF",
            border: `1px solid #BFDBFE`, padding: "3px 10px", borderRadius: 20,
            letterSpacing: "0.5px",
          }}>{post.category}</span>
          <span style={{ fontSize: 13, color: TEXT_MUTED, display: "flex", alignItems: "center", gap: 4 }}>
            <Calendar size={13} /> {post.date}
          </span>
          <span style={{ fontSize: 13, color: TEXT_MUTED, display: "flex", alignItems: "center", gap: 4 }}>
            <Clock size={13} /> {post.readTime}
          </span>
        </div>
        <h1 style={{
          fontFamily: "var(--font-merriweather), serif",
          fontSize: "clamp(26px, 4vw, 44px)",
          fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.5px",
          marginBottom: 20, color: TEXT,
        }}>{post.title}</h1>
        <p style={{
          fontSize: 19, color: TEXT_SECONDARY, lineHeight: 1.7,
          paddingBottom: 32, borderBottom: `1px solid ${BORDER}`,
        }}>{post.excerpt}</p>
      </section>

      {/* Post body */}
      <section style={{ padding: "40px 5vw 80px", maxWidth: 800, margin: "0 auto" }}>
        {paragraphs.map((para, i) => {
          const isMid = i === Math.floor(paragraphs.length / 2);
          const isH2 = para.startsWith("**") && para.endsWith("**");
          const isList = para.startsWith("- ");

          let contentNode;
          if (isList) {
            const items = para.split("\n").map(li => li.replace(/^- /, ""));
            contentNode = (
              <ul key={i} style={{ marginBottom: "24px", listStyle: "none", padding: 0 }}>
                {items.map((item, idx) => {
                  const html = item
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, `<a href="$2" target="_blank" rel="noopener noreferrer" style="color:${BLUE};text-decoration:underline;text-underline-offset:3px;">$1</a>`);
                  return (
                    <li key={idx} style={{
                      marginBottom: "12px", color: TEXT_SECONDARY,
                      paddingLeft: "28px", position: "relative", fontSize: 16, lineHeight: 1.7,
                    }}
                      dangerouslySetInnerHTML={{ __html: '• ' + html }}
                    />
                  );
                })}
              </ul>
            );
          } else if (isH2) {
            contentNode = (
              <h2 key={i} style={{
                fontFamily: "var(--font-merriweather), serif",
                fontSize: "24px", fontWeight: 700, color: TEXT,
                margin: "48px 0 18px",
                paddingLeft: "16px",
                borderLeft: `4px solid ${BLUE}`,
              }}>
                {para.replace(/\*\*/g, "")}
              </h2>
            );
          } else {
            const html = para
              .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
              .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, `<a href="$2" target="_blank" rel="noopener noreferrer" style="color:${BLUE};text-decoration:underline;text-underline-offset:3px;">$1</a>`);
            contentNode = (
              <p key={i} style={{
                fontSize: "17px", lineHeight: "1.85",
                color: TEXT_SECONDARY, marginBottom: "24px",
              }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          }

          return (
            <div key={i}>
              {isMid && (
                <div style={{
                  margin: "48px 0",
                  padding: "28px",
                  background: "#EFF6FF",
                  border: `1px solid #BFDBFE`,
                  borderRadius: 12,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 16,
                }}>
                  <div style={{ flex: "1 1 280px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 8 }}>
                      <CheckCircle2 size={16} /> Ready to Get Started?
                    </div>
                    <div style={{ fontSize: 17, fontWeight: 700, color: TEXT, lineHeight: 1.4 }}>
                      Tell us your biggest time-waster. We will map out your AI system.
                    </div>
                  </div>
                  <a href="/#get-started" style={{
                    background: BLUE, color: "#FFFFFF", fontWeight: 700,
                    fontSize: 14, letterSpacing: "0.5px",
                    padding: "14px 24px", textDecoration: "none",
                    borderRadius: 8, whiteSpace: "nowrap", minHeight: 44,
                    display: "inline-block",
                  }}

                  >
                    Get My Free Plan
                  </a>
                </div>
              )}
              {contentNode}
            </div>
          );
        })}
      </section>

      {/* Bottom CTA box */}
      <div style={{
        maxWidth: 800, margin: "0 5vw 60px",
        padding: "36px",
        background: BG_WARM,
        border: `1px solid ${BORDER}`,
        borderRadius: 12,
      }}>
        <div style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: 22, marginBottom: 10, color: TEXT }}>
          Build Your AI System
        </div>
        <p style={{ color: TEXT_SECONDARY, fontSize: 16, lineHeight: 1.65, marginBottom: 24 }}>
          Tell us what is costing you the most time. We will map out exactly what your business needs. Free, no obligation.
        </p>
        <a href="/#get-started" style={{
          background: BLUE, color: "#FFFFFF", fontWeight: 700, fontSize: 15,
          padding: "14px 32px", textDecoration: "none", borderRadius: 8,
          display: "inline-block", minHeight: 44,
        }}

        >
          Get Started Free
        </a>
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section style={{ padding: "0 5vw 80px", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: BLUE, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 20 }}>
            More Articles
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {related.map(r => (
              <a key={r.slug} href={"/blog/" + r.slug} style={{ textDecoration: "none" }}>
                <div style={{
                  background: BG_WARM, border: `1px solid ${BORDER}`,
                  borderRadius: 10, padding: "20px", height: "100%",
                  transition: "border-color 0.2s",
                }}

                >
                  <div style={{ fontSize: 11, color: BLUE, fontWeight: 600, letterSpacing: "0.5px", marginBottom: 8 }}>{r.category}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: TEXT, lineHeight: 1.4 }}>{r.title}</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* AI Network Footer Section */}
      <section style={{ padding: "32px 5vw", maxWidth: 800, margin: "0 auto 0" }}>
        <div style={{ background: BG_WARM, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "24px" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: BLUE, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 14 }}>AI Network</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a href="https://claudeaiskills.com" style={{ color: BLUE, textDecoration: "none", fontSize: 14 }}><strong>ClaudeAISkills.com</strong> — Build Claude skills and prompt frameworks for your specific business workflows</a>
            <a href="https://anthropicaiskills.com" style={{ color: BLUE, textDecoration: "none", fontSize: 14 }}><strong>AnthropicAISkills.com</strong> — Anthropic deep dives: model capabilities, API guides, and enterprise AI strategy</a>
            <a href="https://searchperformancemarketing.com" style={{ color: BLUE, textDecoration: "none", fontSize: 14 }}><strong>SearchPerformanceMarketing.com</strong> — AI-powered SEO and digital marketing systems that drive measurable results</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: BG_WARM, borderTop: `1px solid ${BORDER}`, padding: "28px 5vw", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, fontSize: 13, color: TEXT_MUTED }}>
        <a href="/" style={{ fontFamily: "var(--font-merriweather), serif", fontWeight: 700, fontSize: 16, color: TEXT, textDecoration: "none" }}>AI Skills Agents</a>
        <div style={{ display: "flex", gap: 20 }}>
          <a href="/privacy" style={{ color: TEXT_MUTED, textDecoration: "none" }}>Privacy</a>
          <a href="/terms" style={{ color: TEXT_MUTED, textDecoration: "none" }}>Terms</a>
        </div>
        <div>© 2025 AI Skills Agents</div>
      </footer>
    </div>
  );
}
