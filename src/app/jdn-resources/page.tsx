import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "數位敘事力期刊資源",
};

const juniorHighSections = [
  "標點符號、工具書、書法",
  "造字／用字、構詞",
  "詞性、語法",
  "詞語運用",
  "書信、柬帖、便簽、啟事",
  "題詞、對聯",
  "文化常識",
  "韻文格律",
  "文學人物",
  "文學體裁、修辭",
];

const seniorHighTexts = [
  "燭之武退秦師", "諫逐客書", "大同與小康", "鴻門宴",
  "出師表", "師說", "桃花源記", "赤壁賦",
  "虯髯客傳", "晚遊六橋待月記", "項脊軒志", "勞山道士",
  "勸和論", "鹿港乘桴記", "畫菊自序",
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

const aiGuides = [
  { name: "AI 素養課程模組（Google）", desc: "Google 官方 AI 素養教學模組，適用 K-12 課堂" },
  { name: "AI K-12 教學者應用指引", desc: "K-12 教師融入 AI 教學的完整操作指南" },
  { name: "Google AI 大學生應用指引", desc: "大學生使用 Google AI 工具的學習資源" },
  { name: "Google AI 教育者開發指引", desc: "教育者開發 AI 融入課程的技術指南" },
  { name: "教育 AI 融入教育生態系五模態", desc: "AI 融入教育的五種應用模式分析框架" },
];

const aiToolSets = [
  { name: "生成式 AI 核心概念", desc: "生成式 AI 基礎理論與教育應用概述" },
  { name: "教育 AI 工具百寶箱", desc: "精選 100+ 款教育場景 AI 工具彙整" },
  { name: "教育應用 AI 筆記彙編", desc: "實際教學現場的 AI 工具使用心得紀錄" },
];

const googleCerts = [
  { name: "Google Certified Educator Level 01 & 02", desc: "Google 官方教育者認證備考資源" },
  { name: "Gemini & NotebookLM", desc: "Gemini 與 NotebookLM 教學應用指南" },
  { name: "Gemini in Workspace", desc: "Google Workspace 中 Gemini AI 功能教學" },
  { name: "Google Apps Script", desc: "GAS 自動化腳本教學與範例" },
  { name: "Google Reference School Guide", desc: "Google 參考學校計畫指引文件" },
  { name: "GFE Handbook by Gemini Deep Research", desc: "Gemini 深度研究生成的 GFE 完整手冊" },
];

export default function JdnResourcesPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary leading-tight">
          數位敘事力期刊資源
        </h1>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl">
          由吳奇主編彙整之教學資源站，涵蓋國高中國文教材、教學工具、AI 應用指引與 Google 認證備考資源。
        </p>
        <a
          href="https://sites.google.com/gtrainerdemo.jdn2023.com/jdn-sources/%E9%A6%96%E9%A0%81"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 border border-text-primary text-text-primary px-6 py-2.5 text-sm tracking-wide hover:bg-text-primary hover:text-text-dark transition-colors duration-300"
        >
          前往完整資源站 <ExternalLink size={14} />
        </a>
      </section>

      {/* Chrome Extensions — most actionable */}
      <section className="bg-bg-light px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Chrome 擴充功能"
            subtitle="教學現場實用的 Chrome 擴充功能，均已上架 Chrome Web Store"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {chromeExtensions.map((ext) => (
              <a
                key={ext.name}
                href={ext.cws}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-border-light bg-white p-5 hover:border-gray-400 transition-colors group"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-playfair)] text-base font-medium text-text-dark leading-snug">
                    {ext.name}
                  </h3>
                  <ExternalLink size={14} className="text-gray-400 group-hover:text-gray-600 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{ext.desc}</p>
                <span className="mt-3 inline-block text-xs text-blue-600 font-medium">Chrome Web Store ↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching DIY Web Tools */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="網頁教學工具"
            subtitle="免安裝、即開即用的瀏覽器教學工具"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {webTools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border border-border-dark bg-bg-card p-5"
              >
                <h3 className="text-sm font-medium text-text-primary">{tool.name}</h3>
                <p className="text-xs text-text-tertiary mt-1.5 leading-relaxed">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Application Guides */}
      <section className="bg-bg-light px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="教育 AI 應用指引"
            subtitle="彙整 Google 官方與教育社群的 AI 融入教學指南"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {aiGuides.map((guide) => (
              <div
                key={guide.name}
                className="rounded-xl border border-border-light bg-white p-5"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-base font-medium text-text-dark">
                  {guide.name}
                </h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{guide.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tool Sets */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="教育 AI 精選工具彙編"
            subtitle="系統化整理的教育 AI 工具與應用筆記"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {aiToolSets.map((set) => (
              <div
                key={set.name}
                className="rounded-xl border border-border-dark bg-bg-card p-5"
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-base font-medium text-text-primary">
                  {set.name}
                </h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">{set.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Materials */}
      <section className="bg-bg-light px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="國中國文教材資源"
            subtitle="依語文概念分類之國中國文補充教材"
            light
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {juniorHighSections.map((section) => (
              <div
                key={section}
                className="rounded-lg border border-border-light bg-white px-4 py-3 text-sm text-text-dark text-center"
              >
                {section}
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-dark mb-6">
              高中國文選文
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
              {seniorHighTexts.map((text) => (
                <div
                  key={text}
                  className="rounded-lg border border-border-light bg-white px-3 py-2.5 text-sm text-text-dark text-center"
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Certification */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Google 認證備考資源"
            subtitle="Google Certified Educator 及相關認證的學習材料"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {googleCerts.map((cert) => (
              <div
                key={cert.name}
                className="rounded-xl border border-border-dark bg-bg-card p-5"
              >
                <h3 className="text-sm font-medium text-text-primary">{cert.name}</h3>
                <p className="text-xs text-text-tertiary mt-2 leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-bg-light px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-text-dark-secondary text-sm">
            完整資源請前往 Google Sites 資源站瀏覽，持續更新中。
          </p>
          <a
            href="https://sites.google.com/gtrainerdemo.jdn2023.com/jdn-sources/%E9%A6%96%E9%A0%81"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-text-dark underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            前往完整資源站 <ExternalLink size={13} />
          </a>
        </div>
      </section>
    </main>
  );
}
