import { Metadata } from "next";

export const metadata: Metadata = {
  title: "資源中心",
  description:
    "22 本 NotebookLM 公開筆記本與 22 個 Gemini Gems，涵蓋教師應用、華語文教學、學生學習等主題。",
  alternates: { canonical: "/resources" },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
