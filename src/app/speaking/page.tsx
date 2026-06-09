import type { Metadata } from "next";
import Link from "next/link";
import { speakingStats } from "@/data/speaking";
import { SpeakingTabs } from "./SpeakingTabs";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "演講培訓",
  description:
    "154+ 場 AI 教育演講與工作坊、累計 358.5 小時，合作對象涵蓋 Google for Education、國家教育研究院、親子天下等 38+ 機構。",
  alternates: { canonical: "/speaking" },
};

const statsBar = [
  { value: `${speakingStats.totalEvents}+`, label: "場演講" },
  { value: `${speakingStats.totalHours}`, label: "小時授課" },
  { value: speakingStats.yearRange, label: "年份跨度" },
  { value: "38+", label: "合作機構" },
];

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* ── Hero with photo background ─────────────────────── */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pt-32 pb-20"
        style={{
          backgroundImage: "url('/images/speaking-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-bg-primary" />

        {/* Content */}
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-4">
            Speaker · Trainer · Curator
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
            演講培訓
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl leading-relaxed">
            自 2023 年起累積 {speakingStats.totalEvents}+ 場演講與工作坊、
            {speakingStats.totalHours} 小時授課時數，橫跨教育、企業、政府與國際場域。
          </p>
          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[--color-gold] text-[--color-gold] px-8 py-3 text-sm tracking-wide hover:bg-[--color-gold] hover:text-bg-primary transition-colors duration-300"
            >
              邀請演講 →
            </Link>
            <a
              href="mailto:kevinwu@gtrainerdemo.jdn2023.com"
              className="text-sm text-white/50 hover:text-white/80 transition-colors"
            >
              kevinwu@gtrainerdemo.jdn2023.com
            </a>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────── */}
      <section className="border-b border-border-dark bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsBar.map((s) => (
            <div key={s.label}>
              <span className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium text-text-primary block">
                {s.value}
              </span>
              <span className="text-xs text-text-tertiary mt-1 block tracking-wide uppercase">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Tabs ──────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <SpeakingTabs />
      </section>

      <CTASection />
    </main>
  );
}
