"use client";

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

export default function AboutClient({ profile }: { profile: ProfileData }) {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pt-32 pb-20"
        style={{
          backgroundImage: "url('/images/about-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-bg-primary/60 to-bg-primary" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-text-tertiary uppercase mb-4">
            AI Educator · Researcher · Developer
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium text-text-primary leading-tight">
            關於吳奇
          </h1>
        </div>
      </section>

      {/* ── Bio ─────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-bg-primary">
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* 學歷 */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary mb-4">
              學歷
            </h3>
            <p className="text-text-secondary leading-relaxed">{profile.education}</p>
            <p className="text-text-tertiary mt-1">{profile.undergrad}</p>
          </div>

          {/* 認證資格 */}
          <div>
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary mb-4">
              認證資格
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-block text-xs text-text-secondary border border-border-dark rounded-full px-3 py-1"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* 自我介紹 — 文學性段落 + 條列 */}
          <div className="md:col-span-2">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary mb-4">
              自我介紹
            </h3>
            <p className="text-text-secondary leading-relaxed text-base mb-6">
              吳奇是一個在語言與科技之間尋找教育可能的人。從語料庫語言學的訓練，到站上 134 場演講的講台，他始終相信：認識數位科技的能與不能，是所有教學設計的起點。從師範大學的研究歲月到一次次走進教學現場的過程中，他學會了把複雜的技術，轉化為老師與學生都能握住的力量。
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              {[
                "國立臺灣師範大學 華語文教學研究所 碩士（2026）",
                "中原大學 應用華語文學系 學士",
                "Google Certified Trainer｜Gemini Academy 講師",
                "134+ 場 AI 教育演講，橫跨台灣各縣市與 USC、PSU 國際場域",
                "《數位敘事力期刊》創辦人 & 主編，翻轉教育 17 篇文章",
                "tw-edu-skills 開源 K-12 AI Skills 套組（5⭐ 7 forks）",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-[--color-gold] mt-0.5 flex-shrink-0">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Slogan 三段式 */}
          <div className="md:col-span-2">
            <div className="border-l-2 border-[--color-gold] pl-6 py-2 space-y-2">
              {(profile.beliefItems ?? [
                { key: "認識", value: "認識數位科技技術之能與不能" },
                { key: "理解", value: "理解數位科技於教學設計定位" },
                { key: "應用", value: "應用數位科技之對象性格特徵" },
              ]).map((item) => (
                <p
                  key={item.key}
                  className="font-[family-name:var(--font-playfair)] text-lg md:text-xl text-text-primary"
                >
                  <span className="text-[--color-gold]">{item.key}：</span>
                  {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs ─────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 pb-24 bg-bg-primary border-t border-border-dark">
        <div className="max-w-4xl pt-16">
          <AboutTabs roles={profile.roles} />
        </div>
      </section>
    </main>
  );
}
