import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "吳奇 Chi. K. Wu — AI Education Researcher • Speaker • Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "linear-gradient(135deg, #0D1117 0%, #1a2332 60%, #0D1117 100%)",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 裝飾線條 */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "4px",
            height: "100%",
            background: "linear-gradient(180deg, #00D4FF, #7B2FFF)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: "linear-gradient(90deg, #00D4FF, #7B2FFF, transparent)",
          }}
        />

        {/* 頂部標籤 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            background: "rgba(0, 212, 255, 0.1)",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            borderRadius: "6px",
            padding: "8px 18px",
          }}
        >
          <span style={{ color: "#00D4FF", fontSize: "16px", letterSpacing: "2px" }}>
            jdn2023.com
          </span>
        </div>

        {/* 主名稱 */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "700",
            color: "#E6EDF3",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          吳奇 Chi. K. Wu
        </div>

        {/* 副標題 */}
        <div
          style={{
            fontSize: "28px",
            color: "#00D4FF",
            marginBottom: "56px",
            letterSpacing: "0.5px",
          }}
        >
          AI Education Researcher • Speaker • Developer
        </div>

        {/* 統計數據 */}
        <div style={{ display: "flex", gap: "48px" }}>
          {[
            { value: "134+", label: "場演講" },
            { value: "17", label: "篇教育文章" },
            { value: "8", label: "篇學術論文" },
            { value: "11", label: "個開發專案" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  color: "#7B2FFF",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: "16px", color: "#8B949E", marginTop: "6px" }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
