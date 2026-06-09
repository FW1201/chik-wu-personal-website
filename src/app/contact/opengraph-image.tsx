import { buildOgImage, ogSize } from "@/lib/og-template";

export const alt = "邀請演講 — 吳奇 Chi. K. Wu";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    eyebrow: "Invite · Collaborate",
    title: "邀請演講",
    subtitle: "AI 教育講座 · 工作坊 · 論壇策展 — 歡迎來信洽詢",
    stats: [
      { value: "154+", label: "場演講經驗" },
      { value: "2–6hr", label: "工作坊 / 專題" },
      { value: "線上/實體", label: "皆可配合" },
    ],
  });
}
