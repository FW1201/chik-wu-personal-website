"use client";

import { useState } from "react";
import { gems, gemCategories, type GemCategory } from "@/data/gems";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const categoryColors: Record<GemCategory, string> = {
  繪圖: "text-[#f9a8d4] border-[#be185d]/40 bg-[#be185d]/10",
  教學: "text-[#86efac] border-[#15803d]/40 bg-[#15803d]/10",
  簡報: "text-[#93c5fd] border-[#1d4ed8]/40 bg-[#1d4ed8]/10",
  學術: "text-[#c4b5fd] border-[#6d28d9]/40 bg-[#6d28d9]/10",
  行政: "text-[#fcd34d] border-[#b45309]/40 bg-[#b45309]/10",
  趣味: "text-[#fb923c] border-[#c2410c]/40 bg-[#c2410c]/10",
  AI工具: "text-[#67e8f9] border-[#0e7490]/40 bg-[#0e7490]/10",
};

export default function GemsPage() {
  const [activeCategory, setActiveCategory] = useState<GemCategory | "all">("all");

  const filtered = activeCategory === "all" ? gems : gems.filter((g) => g.cat === activeCategory);

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <SectionHeading
          title="Gemini Gems 工具集"
          subtitle="22 個 AI 工具 · 7 分類 · 涵蓋教學、繪圖、簡報、學術、行政等應用"
        />

        {/* Stats row */}
        <div className="flex flex-wrap gap-4 mt-8 text-sm text-text-tertiary">
          <span>共 <span className="text-text-primary font-medium">22</span> 個工具</span>
          <span className="text-border-dark">·</span>
          {gemCategories.map((cat) => {
            const count = gems.filter((g) => g.cat === cat).length;
            return (
              <span key={cat}>
                {cat} <span className="text-text-secondary">{count}</span>
              </span>
            );
          })}
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mt-6">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-text-primary text-text-dark"
                : "border border-border-dark text-text-secondary hover:text-text-primary"
            }`}
          >
            全部 ({gems.length})
          </button>
          {gemCategories.map((cat) => {
            const count = gems.filter((g) => g.cat === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-text-primary text-text-dark"
                    : "border border-border-dark text-text-secondary hover:text-text-primary"
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Gems Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((gem) => (
            <a
              key={gem.name}
              href={gem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <Card className="h-full flex flex-col transition-colors group-hover:border-text-tertiary">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-2xl leading-none">{gem.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-text-primary font-medium text-sm leading-snug">
                      {gem.name}
                    </h3>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-auto pt-3">
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full border ${categoryColors[gem.cat]}`}
                  >
                    {gem.cat}
                  </span>
                  <span className="text-xs text-text-tertiary group-hover:text-text-secondary transition-colors">
                    開啟 ↗
                  </span>
                </div>
              </Card>
            </a>
          ))}
        </div>

        {/* Footer links */}
        <div className="mt-12 pt-8 border-t border-border-dark flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/FW1201/gemini-gems-portal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-text-primary transition-colors"
          >
            GitHub 原始碼 ↗
          </a>
          <a
            href="https://gems-portal.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-tertiary hover:text-text-primary transition-colors"
          >
            Gems Portal 完整版 ↗
          </a>
        </div>
      </section>
    </main>
  );
}
