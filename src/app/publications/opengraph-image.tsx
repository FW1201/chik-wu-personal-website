import { buildOgImage, ogSize } from "@/lib/og-template";

export const alt = "著作與研究 — 吳奇 Chi. K. Wu";
export const size = ogSize;
export const contentType = "image/png";

export default async function Image() {
  return buildOgImage({
    eyebrow: "Publications · Research",
    title: "著作與研究",
    subtitle: "數位敘事力期刊 × 翻轉教育 — 吳奇 Chi. K. Wu",
    stats: [
      { value: "21", label: "篇翻轉教育文章" },
      { value: "8", label: "篇學術論文" },
      { value: "SSCI", label: "CASLAR 2025" },
    ],
  });
}
