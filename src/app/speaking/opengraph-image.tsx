import { buildOgImage, ogSize } from "@/lib/og-template";

export const alt = "演講培訓 — 吳奇 Chi. K. Wu";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    eyebrow: "Speaking · Training",
    title: "演講培訓",
    subtitle: "吳奇 Chi. K. Wu — AI × 教育講師 · Google Certified Trainer",
    stats: [
      { value: "154+", label: "場演講" },
      { value: "358.5", label: "累計小時" },
      { value: "38+", label: "合作機構" },
      { value: "2023–2026", label: "持續深耕" },
    ],
  });
}
