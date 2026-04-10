import { Metadata } from "next";

export const metadata: Metadata = {
  title: "邀請演講",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
