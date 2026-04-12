"use client";

import { useState } from "react";
import Image from "next/image";
import { notebooks, type NotebookCategory } from "@/data/notebooks";

const CATEGORIES = [
  "全部",
  "教師應用",
  "TBCL華語文教學",
  "學生學習",
  "國文科",
  "親師溝通",
] as const;
type FilterCategory = (typeof CATEGORIES)[number];

const categoryCount = (cat: NotebookCategory) =>
  notebooks.filter((n) => n.category === cat).length;

const statsBar = [
  { value: "22", label: "公開筆記本" },
  { value: "5",  label: "教師應用" },
  { value: "8",  label: "TBCL 華語" },
  { value: "5",  label: "學生學習" },
];

export default function ResourcesPage() {
  const [active, setActive] = useState<FilterCategory>("全部");

  const filtered =
    active === "全部"
      ? notebooks
      : notebooks.filter((n) => n.category === active);

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[50vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pt-32 pb-20"
        style={{
          backgroundImage: "url('/images/resources-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-bg-primary/60 to-bg-primary" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-text-tertiary uppercase mb-4">
            NotebookLM · Public Notebooks
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium text-text-primary leading-tight">
            資源中心
          </h1>
          <p className="mt-4 text-lg text-text-secondary max-w-xl leading-relaxed">
            22 本 NotebookLM 公開筆記本，涵蓋教師應用、TBCL 華語教學、學生學習、國文科等主題
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

      {/* ── Notebooks ─────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
                active === cat
                  ? "bg-[--color-gold] text-bg-primary font-medium"
                  : "border border-border-dark text-text-tertiary hover:text-text-secondary hover:border-text-tertiary"
              }`}
            >
              {cat}
              {cat !== "全部" && (
                <span className="ml-1.5 opacity-60 text-xs">
                  {categoryCount(cat as NotebookCategory)}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Notebook grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((nb) => (
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

        <p className="text-xs text-text-tertiary mt-10 pt-4 border-t border-border-dark">
          共 {notebooks.length} 本公開筆記本 · 由吳奇製作並持續更新
        </p>
      </section>
    </main>
  );
}
