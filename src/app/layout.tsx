import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_TC } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-tc",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jdn2023.com"),
  title: {
    default: "吳奇 Chi. K. Wu — AI Education Researcher • Speaker • Developer",
    template: "%s | 吳奇 Chi. K. Wu",
  },
  description:
    "AI × 教育講師、研究者與開發者。134 場演講、17 篇翻轉教育文章、8 篇學術論文、11 個開發專案。",
  keywords: [
    "吳奇",
    "Kevin Wu",
    "AI教育",
    "講師",
    "Google Certified Trainer",
    "華語文教學",
    "Chrome Extension",
    "Claude Skills",
  ],
  openGraph: {
    title: "吳奇 Chi. K. Wu",
    description: "AI Education Researcher • Speaker • Developer",
    url: "https://www.jdn2023.com",
    siteName: "吳奇 Chi. K. Wu",
    type: "website",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "吳奇 Chi. K. Wu",
    description: "AI Education Researcher • Speaker • Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-TW"
      className={`${playfair.variable} ${inter.variable} ${notoSansTC.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-bg-primary text-text-primary">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
