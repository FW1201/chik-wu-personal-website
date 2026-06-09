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
    "AI × 教育講師、數位敘事力期刊主編、研究者與開發者。154+ 場演講、21 篇翻轉教育文章、8 篇學術論文、92+ 個 AI Skills。歡迎講座課程邀約。",
  keywords: [
    "吳奇",
    "Kevin Wu",
    "AI教育",
    "講師",
    "講座邀約",
    "數位敘事力期刊",
    "AI素養",
    "Google Certified Trainer",
    "華語文教學",
    "Vibe Coding",
    "Chrome Extension",
    "Claude Skills",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "吳奇 Chi. K. Wu — AI × 教育講師・數位敘事力期刊主編",
    description:
      "154+ 場 AI 教育演講 · 21 篇翻轉教育文章 · 8 篇學術論文 · 92+ AI Skills。歡迎講座課程邀約。",
    url: "https://www.jdn2023.com",
    siteName: "吳奇 Chi. K. Wu",
    type: "website",
    locale: "zh_TW",
  },
  twitter: {
    card: "summary_large_image",
    title: "吳奇 Chi. K. Wu — AI × 教育講師・數位敘事力期刊主編",
    description:
      "154+ 場 AI 教育演講 · 21 篇翻轉教育文章 · 8 篇學術論文 · 92+ AI Skills",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "吳奇",
  alternateName: "Chi. K. Wu",
  url: "https://www.jdn2023.com",
  jobTitle: "AI Education Speaker & Trainer",
  description:
    "AI × 教育講師、數位敘事力期刊主編、研究者與開發者。Google Certified Trainer。",
  affiliation: {
    "@type": "Organization",
    name: "數位敘事力期刊 Journal of Digital Narrative",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "國立臺灣師範大學",
  },
  knowsAbout: [
    "AI 教育",
    "AI 素養",
    "華語文教學",
    "語料庫語言學",
    "Vibe Coding",
  ],
  email: "mailto:kevinwu@gtrainerdemo.jdn2023.com",
  sameAs: [
    "https://github.com/FW1201",
    "https://www.facebook.com/Journal.of.Digital.Narrative",
    "https://www.instagram.com/journal_of_digital_narrative/",
    "https://www.threads.net/@journal_of_digital_narrative",
    "https://www.youtube.com/@Journal_of_Digital_Narrative",
    "https://flipedu.parenting.com.tw/author/1112",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
