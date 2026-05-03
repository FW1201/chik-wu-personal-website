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
          background: "#ffffff",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* 左側金色細線 */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "80px",
            width: "3px",
            height: "220px",
            background: "#C9A84C",
          }}
        />

        {/* 底部細線 */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#111111",
          }}
        />

        {/* 頂部網域標籤 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            marginLeft: "20px",
          }}
        >
          <span style={{ color: "#888888", fontSize: "18px", letterSpacing: "1px" }}>
            jdn2023.com
          </span>
        </div>

        {/* 主名稱 */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: "700",
            color: "#111111",
            lineHeight: 1.1,
            marginBottom: "18px",
            marginLeft: "20px",
          }}
        >
          吳奇 Chi. K. Wu
        </div>

        {/* 副標題 */}
        <div
          style={{
            fontSize: "26px",
            color: "#555555",
            marginBottom: "56px",
            marginLeft: "20px",
            letterSpacing: "0.3px",
          }}
        >
          AI Education Researcher • Speaker • Developer
        </div>

        {/* 分隔線 */}
        <div
          style={{
            width: "48px",
            height: "2px",
            background: "#C9A84C",
            marginBottom: "40px",
            marginLeft: "20px",
          }}
        />

        {/* 統計數據 */}
        <div style={{ display: "flex", gap: "52px", marginLeft: "20px" }}>
          {[
            { value: "134+", label: "場演講" },
            { value: "17", label: "篇教育文章" },
            { value: "8", label: "篇學術論文" },
            { value: "11", label: "個開發專案" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}
            >
              <span
                style={{
                  fontSize: "38px",
                  fontWeight: "700",
                  color: "#111111",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </span>
              <span style={{ fontSize: "15px", color: "#888888", marginTop: "6px" }}>
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
