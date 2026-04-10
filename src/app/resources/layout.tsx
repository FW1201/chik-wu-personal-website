import { Metadata } from "next";

export const metadata: Metadata = {
  title: "教學資源",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
