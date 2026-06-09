"use client";

import { useState } from "react";
import Image from "next/image";
import { notebooks, type NotebookCategory } from "@/data/notebooks";
import { gems, gemCategories, type GemCategory } from "@/data/gems";
import { CTASection } from "@/components/ui/CTASection";

/* ── Notebook filter ────────────────────────────────────── */
const NB_CATEGORIES = [
  "全部",
  "教師應用",
  "TBCL華語文教學",
  "學生學習",
  "國文科",
  "親師溝通",
] as const;
type NbFilter = (typeof NB_CATEGORIES)[number];

const nbCount = (cat: NotebookCategory) =>
  notebooks.filter((n) => n.category === cat).length;

/* ── Gem filter ─────────────────────────────────────────── */
const GEM_ALL = "全部" as const;
type GemFilter = GemCategory | typeof GEM_ALL;

export default function ResourcesPage() {
  const [nbActive, setNbActive]   = useState<NbFilter>("全部");
  const [gemActive, setGemActive] = useState<GemFilter>(GEM_ALL);

  const filteredNb =
    nbActive === "全部"
      ? notebooks
      : notebooks.filter((n) => n.category === nbActive);

  const filteredGems =
    gemActive === GEM_ALL
      ? gems
      : gems.filter((g) => g.cat === gemActive);

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[50vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pt-32 pb-20"
        style={{
          backgroundImage: "url('/images/resources-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-bg-primary" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-4">
            NotebookLM · Gemini Gems
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
            資源中心
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            22 本 NotebookLM 公開筆記本 · 22 個 Gemini Gems 工具集
          </p>
        </div>
      </section>

      {/* ── JDN Intro ────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 py-14 bg-bg-secondary border-b border-border-dark">
        <div className="max-w-4xl flex flex-col md:flex-row items-start gap-10">
          <Image
            src="/images/jdn-logo.jpg"
            width={80}
            height={80}
            alt="數位敘事力期刊"
            className="rounded-lg opacity-90 flex-shrink-0"
          />
          <div>
            <p className="text-xs tracking-[0.3em] text-text-tertiary uppercase mb-4">
              數位敘事力期刊 · Journal of Digital Narrative
            </p>
            <div className="space-y-2 border-l-2 border-[--color-gold] pl-5">
              <p className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-text-primary">
                <span className="text-[--color-gold]">認識：</span>認識數位科技技術之能與不能
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-text-primary">
                <span className="text-[--color-gold]">理解：</span>理解數位科技於教學設計定位
              </p>
              <p className="font-[family-name:var(--font-playfair)] text-base md:text-lg text-text-primary">
                <span className="text-[--color-gold]">應用：</span>應用數位科技之對象性格特徵
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────── */}
      <section className="border-b border-border-dark bg-bg-primary">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "22", label: "公開筆記本" },
            { value: "22", label: "Gemini Gems" },
            { value: "5",  label: "筆記本分類" },
            { value: "7",  label: "Gems 分類" },
          ].map((s) => (
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

      {/* ══════════════════════════════════════════════════════ */}
      {/* ── NotebookLM ───────────────────────────────────────  */}
      {/* ══════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        {/* Section label */}
        <div className="mb-8">
          <p className="text-xs tracking-[0.3em] text-[--color-gold] uppercase mb-1">
            Section 01
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-medium text-text-primary">
            NotebookLM 公開筆記本
          </h2>
          <p className="text-sm text-text-secondary mt-1">22 本 · 5 分類 · 持續更新</p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {NB_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setNbActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                nbActive === cat
                  ? "bg-[--color-gold] text-bg-primary font-medium"
                  : "border border-border-dark text-text-tertiary hover:text-text-secondary hover:border-text-tertiary"
              }`}
            >
              {cat}
              {cat !== "全部" && (
                <span className="ml-1.5 opacity-60 text-xs">
                  {nbCount(cat as NotebookCategory)}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Notebook grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredNb.map((nb) => (
            <a
              key={nb.url}
              href={nb.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border-dark bg-bg-secondary rounded-xl p-5 hover:border-text-tertiary transition-colors group block"
            >
              <span className="text-3xl mb-3 block">{nb.emoji}</span>
              <h3 className="text-sm font-medium text-text-primary mb-1 leading-snug">
                {nb.title}
              </h3>
              <span className="text-xs text-text-tertiary">{nb.category}</span>
              <p className="text-xs text-[--color-gold] mt-3 group-hover:opacity-70 transition-opacity">
                前往查看 →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════ */}
      {/* ── Gemini Gems ──────────────────────────────────────  */}
      {/* ══════════════════════════════════════════════════════ */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-bg-secondary border-t border-border-dark">
        {/* Section label */}
        <div className="mb-8">
          <p className="text-xs tracking-[0.3em] text-[--color-gold] uppercase mb-1">
            Section 02
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-medium text-text-primary">
            Gemini Gems 工具集
          </h2>
          <p className="text-sm text-text-secondary mt-1">22 個工具 · 7 分類</p>
        </div>

        {/* Gem category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setGemActive(GEM_ALL)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              gemActive === GEM_ALL
                ? "bg-[--color-gold] text-bg-primary font-medium"
                : "border border-border-dark text-text-tertiary hover:text-text-secondary hover:border-text-tertiary"
            }`}
          >
            全部
          </button>
          {gemCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setGemActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                gemActive === cat
                  ? "bg-[--color-gold] text-bg-primary font-medium"
                  : "border border-border-dark text-text-tertiary hover:text-text-secondary hover:border-text-tertiary"
              }`}
            >
              {cat}
              <span className="ml-1.5 opacity-60 text-xs">
                {gems.filter((g) => g.cat === cat).length}
              </span>
            </button>
          ))}
        </div>

        {/* Gems grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredGems.map((gem) => (
            <a
              key={gem.url + gem.name}
              href={gem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border-dark bg-bg-primary rounded-xl p-5 hover:border-text-tertiary transition-colors group block"
            >
              <span className="text-3xl mb-3 block">{gem.icon}</span>
              <h3 className="text-sm font-medium text-text-primary mb-1 leading-snug">
                {gem.name}
              </h3>
              <span className="text-xs text-text-tertiary">{gem.cat}</span>
              <p className="text-xs text-[--color-gold] mt-3 group-hover:opacity-70 transition-opacity">
                開啟 Gem →
              </p>
            </a>
          ))}
        </div>

        <p className="text-xs text-text-tertiary mt-10 pt-4 border-t border-border-dark">
          共 {notebooks.length} 本筆記本 · {gems.length} 個 Gems · 由吳奇製作並持續更新
        </p>
      </section>

      <CTASection />
    </main>
  );
}
