"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { gems, gemCategories, type GemCategory } from "@/data/gems";
import { profile } from "@/data/profile";

/* ── Gems category colours ───────────────────────────────── */
const categoryColors: Record<GemCategory, string> = {
  繪圖: "text-[#f9a8d4] border-[#be185d]/40 bg-[#be185d]/10",
  教學: "text-[#86efac] border-[#15803d]/40 bg-[#15803d]/10",
  簡報: "text-[#93c5fd] border-[#1d4ed8]/40 bg-[#1d4ed8]/10",
  學術: "text-[#c4b5fd] border-[#6d28d9]/40 bg-[#6d28d9]/10",
  行政: "text-[#fcd34d] border-[#b45309]/40 bg-[#b45309]/10",
  趣味: "text-[#fb923c] border-[#c2410c]/40 bg-[#c2410c]/10",
  AI工具: "text-[#67e8f9] border-[#0e7490]/40 bg-[#0e7490]/10",
};

/* ── Static data ─────────────────────────────────────────── */
const coreBeliefs = [
  "AI 是媒介，不是目的 — 教學法永遠優先",
  "科技融入教育需以學習者為中心",
  "數位素養是現代公民的基本能力",
  "教師是教育創新的第一線推動者",
  "開源共享加速教育生態系進化",
  "跨域整合創造更深層的學習體驗",
  "持續反思與迭代是專業成長的核心",
];

const socialLinks = [
  {
    platform: "Facebook",
    stat: "1,265 篇",
    url: profile.facebook,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    platform: "Instagram",
    stat: "530 篇",
    url: `https://www.instagram.com/${profile.instagram}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    platform: "YouTube",
    stat: "影音頻道",
    url: `https://www.youtube.com/@${profile.youtube}`,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0a0a0a" />
      </svg>
    ),
  },
  {
    platform: "Threads",
    stat: "社群討論",
    url: profile.threads,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017C1.5 8.418 2.35 5.564 3.995 3.516 5.845 1.212 8.598.031 12.179.007h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.784 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.104-1.138 3.54-1.197 1.047-.044 2.018.065 2.897.321-.065-1.358-.494-2.378-1.27-3.018-.692-.57-1.676-.874-2.933-.886h-.057c-1.04.011-1.878.288-2.494.822l-1.322-1.57c.934-.809 2.16-1.24 3.658-1.28h.08c1.728.017 3.116.531 4.125 1.524 1.073 1.054 1.636 2.56 1.67 4.468v.235c.586.31 1.1.704 1.527 1.18.726.809 1.194 1.861 1.39 3.127.196 1.27.046 2.755-.988 4.091-1.396 1.804-3.574 2.766-6.478 2.86zM14.73 14c-.78-.033-1.432.073-1.888.31-.478.247-.734.622-.717 1.055.019.435.262.787.686 1.062.494.32 1.13.462 1.779.427 1.053-.057 1.858-.449 2.393-1.165.355-.476.594-1.073.718-1.765-.939-.272-1.94-.416-2.971-.382z" />
      </svg>
    ),
  },
  {
    platform: "翻轉教育",
    stat: "17 篇",
    url: profile.flipedu,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

const chromeExtensions = [
  {
    name: "ChatGPT 教育提示詞助理",
    desc: "ChatGPT 教育場景專用提示詞面板",
    cws: "https://chromewebstore.google.com/detail/chatgpt-edu-prompt-assist/hnnlhchjbkebmlbfpalgamheklhhibmd",
  },
  {
    name: "Gemini 教育提示詞助理",
    desc: "Gemini 教育場景專用提示詞面板",
    cws: "https://chromewebstore.google.com/detail/gemini-edu-prompt-assista/hdgldjckecimnemejlogfiiebpbdnapa",
  },
  {
    name: "NotebookLM 匯出工具",
    desc: "NotebookLM 筆記與摘要匯出增強器",
    cws: "https://chromewebstore.google.com/detail/notebooklm-%E5%8C%AF%E5%87%BA%E5%B7%A5%E5%85%B7/modkfkgmcjbkjhjmhjakohhnfbleghoj",
  },
  {
    name: "Chrome 白板工具",
    desc: "瀏覽器內嵌教育白板工具箱",
    cws: "https://chromewebstore.google.com/detail/chrome-edu-toolbox/ghcbaidbgmbjembobdhpjlieopcnacoi",
  },
  {
    name: "Chrome 筆記工具",
    desc: "瀏覽器內嵌快速筆記工具箱",
    cws: "https://chromewebstore.google.com/detail/chrome-note-toolbox/adfhmlcncdkgplckblejoggnmjekakkd",
  },
];

const webTools = [
  { name: "蕃茄鐘", desc: "番茄工作法計時器" },
  { name: "彩色轉盤", desc: "隨機選取教學輔助工具" },
  { name: "抽獎 & 抽籤工具", desc: "課堂互動抽選工具" },
  { name: "影片轉截圖簡報", desc: "快速截取影片畫面製作簡報" },
  { name: "自定義大富翁遊戲", desc: "自製教學主題大富翁" },
  { name: "簡易電子白板工具", desc: "輕量級數位白板" },
  { name: "自定義翻牌遊戲", desc: "配對記憶翻牌遊戲" },
  { name: "PDF 多工編輯工具", desc: "線上 PDF 編輯與拼接" },
];

const aiGuides = [
  { name: "AI 素養課程模組（Google）", desc: "Google 官方 AI 素養教學模組，適用 K-12 課堂" },
  { name: "AI K-12 教學者應用指引", desc: "K-12 教師融入 AI 教學的完整操作指南" },
  { name: "Google AI 大學生應用指引", desc: "大學生使用 Google AI 工具的學習資源" },
  { name: "Google AI 教育者開發指引", desc: "教育者開發 AI 融入課程的技術指南" },
  { name: "教育 AI 融入教育生態系五模態", desc: "AI 融入教育的五種應用模式分析框架" },
];

/* ── page ────────────────────────────────────────────────── */
export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState<GemCategory | "all">("all");
  const filtered = activeCategory === "all" ? gems : gems.filter((g) => g.cat === activeCategory);

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* ── Hero Header ──────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16 border-b border-border-dark">
        <p className="text-xs tracking-[0.3em] text-text-tertiary uppercase mb-4">Resources</p>
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium text-text-primary leading-none">
          資源中心
        </h1>
        <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
          數位敘事力期刊 · Gemini Gems 工具集 · 教學資源站
        </p>
        {/* Section anchor nav */}
        <div className="flex flex-wrap gap-3 mt-8">
          {["數位敘事力期刊", "Gemini Gems", "教學資源"].map((label, i) => (
            <a
              key={label}
              href={`#section-${i + 1}`}
              className="px-5 py-2 text-sm border border-border-dark text-text-tertiary hover:text-text-primary hover:border-text-tertiary transition-colors rounded-full"
            >
              {label}
            </a>
          ))}
        </div>
      </section>

      {/* ══ Section 1: 數位敘事力期刊 ═══════════════════════ */}
      <section id="section-1" className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          {/* Section label */}
          <p className="text-xs tracking-[0.3em] text-[--color-gold] uppercase mb-8">01 · Journal</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="/images/jdn-logo.jpg"
                  alt="數位敘事力期刊 Logo"
                  width={56}
                  height={56}
                  className="rounded-lg object-cover"
                />
                <div>
                  <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-medium text-text-primary">
                    數位敘事力期刊
                  </h2>
                  <p className="text-sm text-text-tertiary mt-1">Journal of Digital Narrative</p>
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-8">
                以翻轉教育平台為發表園地，關注 AI 與教育的交叉地帶，
                主編吳奇以實踐者視角持續記錄教學現場的數位敘事。
              </p>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { v: "2024", label: "創刊" },
                  { v: "17", label: "篇文章" },
                  { v: "1,265+", label: "FB 貼文" },
                ].map((s) => (
                  <div key={s.label}>
                    <span className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary block">
                      {s.v}
                    </span>
                    <span className="text-xs text-text-tertiary tracking-wide uppercase mt-1 block">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.platform}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 text-sm text-text-secondary border border-border-dark hover:text-text-primary hover:border-text-tertiary transition-colors"
                  >
                    <span className="text-text-tertiary">{s.icon}</span>
                    {s.platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: core beliefs */}
            <div>
              <h3 className="text-xs tracking-[0.2em] text-text-tertiary uppercase mb-6">
                七項辦刊信念
              </h3>
              <ul className="space-y-4">
                {coreBeliefs.map((belief, i) => (
                  <li key={i} className="flex items-start gap-4 border-b border-border-dark pb-4 last:border-0">
                    <span className="font-[family-name:var(--font-playfair)] text-xl text-text-tertiary font-medium leading-none min-w-[2rem]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-sm text-text-secondary leading-relaxed">{belief}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══ Section 2: Gemini Gems ═══════════════════════════ */}
      <section id="section-2" className="bg-bg-secondary border-t border-border-dark px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-[--color-gold] uppercase mb-8">02 · Gemini Gems</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium text-text-primary">
                Gemini Gems 工具集
              </h2>
              <p className="text-text-secondary mt-2">
                {gems.length} 個 AI 工具 · {gemCategories.length} 分類
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
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
                    className={`px-4 py-1.5 rounded-lg text-xs font-medium transition-colors ${
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
          </div>

          {/* Gems grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((gem) => (
              <a
                key={gem.name}
                href={gem.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col border border-border-dark bg-bg-card rounded-xl p-5 hover:border-text-tertiary transition-colors"
              >
                <div className="flex items-start gap-3 mb-3 flex-1">
                  <span className="text-2xl leading-none">{gem.icon}</span>
                  <h3 className="text-text-primary font-medium text-sm leading-snug">{gem.name}</h3>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-border-dark">
                  <span
                    className={`px-2 py-0.5 text-xs rounded-full border ${categoryColors[gem.cat]}`}
                  >
                    {gem.cat}
                  </span>
                  <span className="text-xs text-text-tertiary group-hover:text-text-secondary transition-colors">
                    開啟 ↗
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Gems footer links */}
          <div className="mt-10 flex gap-4 text-sm border-t border-border-dark pt-8">
            <a
              href="https://github.com/FW1201/gemini-gems-portal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
            >
              GitHub <ExternalLink size={12} />
            </a>
            <a
              href="https://gems-portal.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-text-primary transition-colors inline-flex items-center gap-1.5"
            >
              完整 Gems Portal <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* ══ Section 3: 教學資源 ══════════════════════════════ */}
      <section id="section-3" className="border-t border-border-dark px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.3em] text-[--color-gold] uppercase mb-8">03 · Teaching Resources</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
            <div>
              <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium text-text-primary">
                教學資源
              </h2>
              <p className="text-text-secondary mt-2">Chrome 擴充、網頁工具、AI 指引、認證備考</p>
            </div>
            <a
              href="https://sites.google.com/gtrainerdemo.jdn2023.com/jdn-sources/%E9%A6%96%E9%A0%81"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border-dark text-text-secondary px-5 py-2.5 text-sm hover:border-text-tertiary hover:text-text-primary transition-colors self-start"
            >
              前往完整資源站 <ExternalLink size={13} />
            </a>
          </div>

          {/* Chrome Extensions */}
          <div className="mb-16">
            <h3 className="text-xs tracking-[0.2em] text-text-tertiary uppercase mb-6">Chrome 擴充功能</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {chromeExtensions.map((ext) => (
                <a
                  key={ext.name}
                  href={ext.cws}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border border-border-dark bg-bg-card rounded-xl p-5 hover:border-text-tertiary transition-colors"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="text-sm font-medium text-text-primary leading-snug">{ext.name}</h4>
                    <ExternalLink
                      size={13}
                      className="text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5"
                    />
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed">{ext.desc}</p>
                  <span className="mt-3 inline-block text-xs text-[--color-gold]">Chrome Web Store ↗</span>
                </a>
              ))}
            </div>
          </div>

          {/* Web Tools */}
          <div className="mb-16">
            <h3 className="text-xs tracking-[0.2em] text-text-tertiary uppercase mb-6">網頁教學工具</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {webTools.map((tool) => (
                <div
                  key={tool.name}
                  className="border border-border-dark bg-bg-card rounded-xl p-4"
                >
                  <h4 className="text-sm font-medium text-text-primary">{tool.name}</h4>
                  <p className="text-xs text-text-tertiary mt-1.5 leading-relaxed">{tool.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* AI Guides */}
          <div className="mb-16">
            <h3 className="text-xs tracking-[0.2em] text-text-tertiary uppercase mb-6">教育 AI 應用指引</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiGuides.map((guide) => (
                <div
                  key={guide.name}
                  className="border border-border-dark bg-bg-card rounded-xl p-5"
                >
                  <h4 className="text-sm font-medium text-text-primary">{guide.name}</h4>
                  <p className="text-xs text-text-secondary mt-2 leading-relaxed">{guide.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="border-t border-border-dark pt-10 text-center">
            <p className="text-sm text-text-tertiary mb-4">
              完整資源請前往 Google Sites 資源站瀏覽，持續更新中。
            </p>
            <a
              href="https://sites.google.com/gtrainerdemo.jdn2023.com/jdn-sources/%E9%A6%96%E9%A0%81"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[--color-gold] text-[--color-gold] px-8 py-3 text-sm tracking-wide hover:bg-[--color-gold] hover:text-bg-primary transition-colors duration-300"
            >
              前往完整資源站 →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
