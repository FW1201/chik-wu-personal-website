import { Metadata } from "next";

export const metadata: Metadata = {
  title: "邀請演講",
  description:
    "邀請吳奇進行 AI 教育講座、工作坊或論壇策展。154+ 場演講經驗，工作坊 2–6 小時，線上實體皆可配合。",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
