import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };

interface OgStat {
  value: string;
  label: string;
}

interface OgTemplateProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  stats?: OgStat[];
}

const GOLD = "#C9A84C";
const GOLD_BRIGHT = "#E8D080";
const BG = "#0a0a0a";
const TEXT = "#F5F2EA";
const TEXT_MUTED = "#A8A29E";
const OG_BACKGROUND_PATH = join(process.cwd(), "public/images/og-background.png");

async function getOgBackgroundSrc() {
  const image = await readFile(OG_BACKGROUND_PATH);
  return `data:image/png;base64,${image.toString("base64")}`;
}

/** 黑金 Open Graph 模板（1200×630）— 各路由 opengraph-image.tsx 共用 */
export async function buildOgImage({
  eyebrow = "jdn2023.com",
  title,
  subtitle,
  stats,
}: OgTemplateProps) {
  const ogBackgroundSrc = await getOgBackgroundSrc();

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
          background: BG,
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src={ogBackgroundSrc}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(10,10,10,0.98) 0%, rgba(10,10,10,0.9) 47%, rgba(10,10,10,0.52) 78%, rgba(10,10,10,0.18) 100%)",
          }}
        />

        {/* 左側金色豎線 */}
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "80px",
            width: "3px",
            height: "240px",
            background: `linear-gradient(180deg, ${GOLD_BRIGHT}, ${GOLD})`,
          }}
        />

        {/* 底部金色細線 */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: GOLD,
          }}
        />

        {/* 頂部網域標籤 */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "40px",
            marginLeft: "24px",
          }}
        >
          <span
            style={{
              color: GOLD,
              fontSize: "18px",
              letterSpacing: "3px",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </span>
        </div>

        {/* 主標題 */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: TEXT,
            lineHeight: 1.1,
            marginBottom: "18px",
            marginLeft: "24px",
          }}
        >
          {title}
        </div>

        {/* 副標題 */}
        <div
          style={{
            fontSize: "26px",
            color: TEXT_MUTED,
            marginBottom: stats?.length ? "52px" : "0px",
            marginLeft: "24px",
            letterSpacing: "0.3px",
          }}
        >
          {subtitle}
        </div>

        {/* 統計數據 */}
        {stats?.length ? (
          <div style={{ display: "flex", gap: "52px", marginLeft: "24px" }}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "38px",
                    fontWeight: 700,
                    color: GOLD_BRIGHT,
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    color: TEXT_MUTED,
                    marginTop: "8px",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    ),
    { ...ogSize }
  );
}
