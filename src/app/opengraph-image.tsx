import { buildOgImage, ogSize } from "@/lib/og-template";

export const alt =
  "吳奇 Chi. K. Wu — AI Education Speaker • Researcher • Developer";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    title: "吳奇 Chi. K. Wu",
    subtitle: "AI × 教育講師 · 數位敘事力期刊主編 · 研究者 · 開發者",
    stats: [
      { value: "154+", label: "場演講" },
      { value: "21", label: "篇教育文章" },
      { value: "8", label: "篇學術論文" },
      { value: "92+", label: "個 AI Skills" },
    ],
  });
}
