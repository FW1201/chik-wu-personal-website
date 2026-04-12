"use client";

import Link from "next/link";
import { AboutTabs } from "./AboutTabs";

interface BeliefItem { key: string; value: string; }

interface ProfileData {
  name: { zh: string; en: string };
  tagline: string;
  education: string;
  undergrad: string;
  certifications: string[];
  belief: string;
  beliefItems?: BeliefItem[];
  roles: {
    id: string;
    name: string;
    nameEn: string;
    icon: string;
    description: string;
    stat: string;
  }[];
}

const defaultBeliefItems: BeliefItem[] = [
  { key: "認識", value: "認識數位科技技術之能與不能" },
  { key: "理解", value: "理解數位科技於教學設計定位" },
  { key: "應用", value: "應用數位科技之對象性格特徵" },
];

const bullets = [
  "國立臺灣師範大學 華語文教學研究所 碩士（2026）",
  "中原大學 應用華語文學系 學士",
  "Google Certified Trainer｜Gemini Academy 講師",
  "134+ 場 AI 教育演講，橫跨台灣各縣市與 USC、PSU 國際場域",
  "《數位敘事力期刊》創辦人 & 主編，翻轉教育 17 篇文章",
  "tw-edu-skills 開源 K-12 AI Skills 套組（5⭐ 7 forks）",
];

const directoryLinks = [
  { href: "/speaking",     label: "演講培訓",  sub: "134+ 場 · 38+ 機構" },
  { href: "/publications", label: "著作研究",  sub: "17 篇文章 · 8 篇論文" },
  { href: "/projects",     label: "氛圍開發",  sub: "Chrome + GAS + AI App" },
  { href: "/resources",    label: "資源中心",  sub: "22 本 NotebookLM" },
  { href: "/contact",      label: "邀請演講",  sub: "工作坊 · 專題演講" },
];

const stats = [
  { value: "134+", label: "場演講" },
  { value: "17",   label: "篇文章" },
  { value: "8",    label: "篇論文" },
  { value: "45+",  label: "Skills" },
];

export default function AboutClient({ profile }: { profile: ProfileData }) {
  const beliefItems = profile.beliefItems ?? defaultBeliefItems;

  return (
    <main className="min-h-screen bg-bg-primary">

      {/* ── Section 1: Full-screen Hero ───────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24"
        style={{
          backgroundImage: "url('/images/about-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/10 via-bg-primary/55 to-bg-primary" />
        <div className="relative z-10 text-center max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-text-tertiary uppercase mb-4">
            AI Educator · Researcher · Developer
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl lg:text-8xl font-medium text-text-primary leading-tight">
            關於吳奇
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto leading-relaxed">
            在語言與科技之間，尋找教育的可能
          </p>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-text-tertiary">
          <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
          <svg
            className="w-4 h-4 animate-bounce"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ── Section 2: Stats + Directory + Credentials ────── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-bg-primary">
        <div className="max-w-4xl">

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium text-text-primary block">
                  {s.value}
                </span>
                <span className="text-xs text-text-tertiary mt-1 block tracking-wide uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* Directory link cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
            {directoryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-border-dark rounded-xl p-5 hover:border-text-tertiary transition-colors group block"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-lg text-text-primary">
                  {item.label}
                </h3>
                <p className="text-xs text-text-tertiary mt-1">{item.sub}</p>
                <span className="text-xs text-[--color-gold] mt-3 block group-hover:opacity-70 transition-opacity">
                  前往 →
                </span>
              </Link>
            ))}
          </div>

          {/* 學歷 + 認證 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-border-dark">
            <div>
              <h3 className="text-xs tracking-[0.2em] text-text-tertiary uppercase mb-3">學歷</h3>
              <p className="text-sm text-text-secondary">{profile.education}</p>
              <p className="text-xs text-text-tertiary mt-1">{profile.undergrad}</p>
            </div>
            <div>
              <h3 className="text-xs tracking-[0.2em] text-text-tertiary uppercase mb-3">認證資格</h3>
              <div className="flex flex-wrap gap-2">
                {profile.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs text-text-secondary border border-border-dark rounded-full px-3 py-1"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: 簡介 + Slogan ──────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-bg-secondary border-t border-border-dark">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          {/* 左欄：簡介 */}
          <div>
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary mb-4">
              簡介
            </h2>
            <p className="text-text-secondary leading-relaxed text-base mb-6">
              吳奇是一個在語言與科技之間尋找教育可能的人。從語料庫語言學的訓練，到站上 134 場演講的講台，他始終相信：認識數位科技的能與不能，是所有教學設計的起點。從師範大學的研究歲月到一次次走進教學現場的過程中，他學會了把複雜的技術，轉化為老師與學生都能握住的力量。
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              {bullets.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[--color-gold] mt-0.5 flex-shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 右欄：Slogan 三段式 */}
          <div className="flex flex-col justify-center">
            <div className="border-l-2 border-[--color-gold] pl-6 py-2 space-y-4">
              {beliefItems.map((item) => (
                <p
                  key={item.key}
                  className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-text-primary leading-snug"
                >
                  <span className="text-[--color-gold] block text-sm font-medium tracking-wider uppercase mb-1">
                    {item.key}
                  </span>
                  {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Tabs ───────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 pb-24 bg-bg-primary border-t border-border-dark">
        <div className="max-w-4xl pt-16">
          <AboutTabs roles={profile.roles} />
        </div>
      </section>

    </main>
  );
}
