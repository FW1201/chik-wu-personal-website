import { Metadata } from "next";

export const metadata: Metadata = {
  title: "著作與研究",
  description:
    "數位敘事力期刊 × 翻轉教育 21 篇 AI 教育文章，與 8 篇學術論文（含 CASLAR 2025 SSCI 發表）。",
  alternates: { canonical: "/publications" },
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
