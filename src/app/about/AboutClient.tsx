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

      {/* ── Hero（全螢幕）────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-24"
        style={{
          backgroundImage: "url('/images/about-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "50% 30%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/70" />

        {/* 主標 */}
        <div className="relative z-10 text-center max-w-4xl flex flex-col items-center">
          <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-4">
            AI Educator · Researcher · Developer
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-6xl md:text-7xl lg:text-8xl font-medium text-white leading-tight">
            關於吳奇
          </h1>
          <p className="mt-6 text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            在語言與科技之間，尋找教育的可能
          </p>

          {/* Stats strip */}
          <div className="grid grid-cols-4 gap-8 mt-14 pt-8 border-t border-white/20 w-full max-w-lg">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-white block">
                  {s.value}
                </span>
                <span className="text-[10px] text-white/50 mt-1 block tracking-widest uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 z-10 flex flex-col items-center gap-2 text-white/40">
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

      {/* ── 第一列：簡介（左）+ 學歷/認證（右，上下排）── */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-bg-primary">
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* 左：簡介 */}
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

          {/* 右：學歷（上）+ 認證（下）*/}
          <div className="flex flex-col gap-8">
            {/* 學歷 */}
            <div className="bg-bg-secondary rounded-xl p-6 border border-border-dark">
              <h3 className="text-xs tracking-[0.2em] text-text-tertiary uppercase mb-3">學歷</h3>
              <p className="text-sm font-medium text-text-primary">{profile.education}</p>
              <p className="text-xs text-text-tertiary mt-1">{profile.undergrad}</p>
            </div>

            {/* 認證 */}
            <div className="bg-bg-secondary rounded-xl p-6 border border-border-dark">
              <h3 className="text-xs tracking-[0.2em] text-text-tertiary uppercase mb-3">認證資格</h3>
              <div className="flex flex-wrap gap-2">
                {profile.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs text-text-secondary bg-bg-primary border border-border-dark rounded-full px-3 py-1.5"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 第二列：理念（左）+ 輪播 Tabs（右）────────── */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-bg-secondary border-t border-border-dark">
        <div className="max-w-5xl grid grid-cols-1 lg:grid-cols-[240px,1fr] gap-10 items-start">

          {/* 左：理念三段式 */}
          <div className="lg:sticky lg:top-24">
            <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary mb-6">
              理念
            </h2>
            <div className="border-l-2 border-[--color-gold] pl-5 py-1 space-y-5">
              {beliefItems.map((item) => (
                <div key={item.key}>
                  <span className="text-[--color-gold] block text-xs font-semibold tracking-[0.15em] uppercase mb-1">
                    {item.key}
                  </span>
                  <p className="font-[family-name:var(--font-playfair)] text-base text-text-primary leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 右：Tabs */}
          <div className="min-w-0">
            <AboutTabs roles={profile.roles} />
          </div>
        </div>
      </section>

      {/* ── 第三列（最後）：大型目錄按鈕 ───────────────── */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-bg-primary border-t border-border-dark">
        <div className="max-w-5xl">
          <p className="text-xs tracking-[0.3em] text-text-tertiary uppercase mb-8">深入了解</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {directoryLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-bg-secondary border border-border-dark rounded-xl p-7 hover:border-text-tertiary hover:bg-bg-card transition-colors group"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-text-primary mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-text-tertiary mb-4">{item.sub}</p>
                <span className="text-sm text-[--color-gold] group-hover:opacity-70 transition-opacity">
                  前往 →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
