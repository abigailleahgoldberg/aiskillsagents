import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AI Skills Agents — AI Skills for Real Work";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0A0F1E",
          color: "#00D4FF",
          fontFamily: "Arial Black, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 120,
            height: 120,
            borderRadius: "50%",
            backgroundColor: "#00D4FF",
            fontSize: 56,
            marginBottom: 24,
            color: "#0A0F1E",
          }}
        >
          ⚡
        </div>
        <div style={{ fontSize: 64, fontWeight: 900, marginBottom: 12 }}>
          AI Skills Agents
        </div>
        <div style={{ fontSize: 28, color: "#FFFFFF", marginBottom: 8 }}>
          AI Skills for Real Work
        </div>
        <div style={{ fontSize: 22, color: "#00D4FF", opacity: 0.8 }}>
          aiskillsagents.com
        </div>
      </div>
    ),
    { ...size }
  );
}
