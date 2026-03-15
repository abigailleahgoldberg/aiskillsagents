"use client";

import { useState, useEffect } from "react";

const LINKS = [
  { label: "AnthropicAISkills", href: "https://anthropicaiskills.com" },
  { label: "ClaudeAISkills", href: "https://claudeaiskills.com" },
  { label: "Search Performance Marketing", href: "https://searchperformancemarketing.com" },
];

export default function NetworkBar() {
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    const val = localStorage.getItem("aiskills-network-bar-dismissed");
    if (val !== "1") setDismissed(false);
  }, []);

  const dismiss = () => {
    localStorage.setItem("aiskills-network-bar-dismissed", "1");
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div style={{
      background: "#0F1723",
      height: 28,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 24,
      position: "relative",
      fontSize: 11,
      letterSpacing: "0.5px",
      fontFamily: "var(--font-inter), system-ui, sans-serif",
    }}>
      <span style={{ color: "rgba(255,255,255,0.4)", whiteSpace: "nowrap" }}>
        Part of The Voice of Cash Network
      </span>
      <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "rgba(37,99,235,0.8)",
              textDecoration: "none",
              fontSize: 11,
              fontWeight: 600,
              transition: "color 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#2563EB")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(37,99,235,0.8)")}
          >
            {l.label}
          </a>
        ))}
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss network bar"
        style={{
          position: "absolute",
          right: 12,
          background: "none",
          border: "none",
          color: "rgba(255,255,255,0.3)",
          cursor: "pointer",
          fontSize: 14,
          lineHeight: 1,
          padding: "0 4px",
        }}
      >
        &times;
      </button>
    </div>
  );
}
