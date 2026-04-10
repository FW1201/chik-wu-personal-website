"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ExternalLink,
  Sparkles,
  BookOpen,
  Cpu,
  Palette,
  GraduationCap,
  Terminal,
  Copy,
  Check,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { projects, skillsOverview } from "@/data/projects";
import { useState } from "react";

export default function ResourcesPage() {
  const [copied, setCopied] = useState(false);

  const aiTools = [
    {
      name: "ChatGPT",
      org: "OpenAI",
      description: "對話式 AI 助手，支援文字、圖片、程式等多模態互動",
      category: "AI 助手",
      url: "https://chat.openai.com",
    },
    {
      name: "Gemini",
      org: "Google",
      description: "Google AI 整合工作流，深度連結 Google 生態系",
      category: "AI 助手",
      url: "https://gemini.google.com",
    },
    {
      name: "NotebookLM",
      org: "Google",
      description: "AI 驅動筆記與學習工具，自動摘要與對話式問答",
      category: "學習工具",
      url: "https://notebooklm.google.com",
    },
    {
      name: "Claude",
      org: "Anthropic",
      description: "AI 助手與開發平台，擅長長文分析與程式開發",
      category: "AI 助手",
      url: "https://claude.ai",
    },
    {
      name: "MagicSchool AI",
      org: "MagicSchool",
      description: "教師專用 AI 備課平台，一鍵生成教案與評量",
      category: "教育平台",
      url: "https://www.magicschool.ai",
    },
    {
      name: "Edcafe AI",
      org: "Edcafe",
      description: "教育評量 AI 工具，快速建立互動式測驗與練習",
      category: "教育平台",
      url: "https://www.edcafe.ai",
    },
    {
      name: "Canva AI",
      org: "Canva",
      description: "設計與教材製作，AI 輔助生成簡報、海報與視覺素材",
      category: "設計工具",
      url: "https://www.canva.com",
    },
    {
      name: "Google AI Studio",
      org: "Google",
      description: "AI 應用原型開發，快速打造 Gemini API 驅動的應用",
      category: "開發工具",
      url: "https://aistudio.google.com",
    },
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    "AI 助手": <Sparkles className="w-4 h-4" />,
    "學習工具": <BookOpen className="w-4 h-4" />,
    "教育平台": <GraduationCap className="w-4 h-4" />,
    "設計工具": <Palette className="w-4 h-4" />,
    "開發工具": <Cpu className="w-4 h-4" />,
  };

  const chromeExtensions = projects.filter(
    (p) => p.category === "Chrome Extension"
  );

  const installCommand = "npx skills add FW1201/tw-edu-skills --all";

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main>
      {/* Header */}
      <section className="bg-bg-primary pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium text-text-primary leading-none">
              教學資源
            </h1>
            <p className="mt-6 text-xl text-text-secondary">
              AI &times; 教育工具精選
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Tools Section (Dark) */}
      <section className="bg-bg-primary py-24 px-6 border-t border-border-dark">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="AI 工具精選"
            subtitle="教學場域中值得關注的 AI 工具與平台"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((tool) => (
              <Card key={tool.name}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text-primary">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-text-tertiary mt-0.5">
                      {tool.org}
                    </p>
                  </div>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-tertiary hover:text-text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {tool.description}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-text-tertiary border-t border-border-dark pt-3">
                  {categoryIcons[tool.category]}
                  <span>{tool.category}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Chrome Extensions Section (Light) */}
      <section className="bg-bg-light py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="Chrome 擴充功能"
            subtitle="為教育場景打造的瀏覽器工具"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chromeExtensions.map((ext) => (
              <Card key={ext.name} light>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text-dark leading-snug">
                    {ext.name}
                  </h3>
                  <a
                    href={ext.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-dark-secondary hover:text-text-dark transition-colors shrink-0 ml-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-sm text-text-dark-secondary leading-relaxed mb-4">
                  {ext.description}
                </p>
                <div className="flex items-center justify-between border-t border-border-light pt-3">
                  <span className="text-xs font-medium text-text-dark-secondary tracking-wide uppercase">
                    Chrome Extension
                  </span>
                  <span className="text-xs text-text-dark-secondary">
                    {ext.status}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* tw-edu-skills Section (Dark) */}
      <section className="bg-bg-primary py-24 px-6 border-t border-border-dark">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="tw-edu-skills"
            subtitle="臺灣首套開源教育 AI Skills — Claude Code 技能套組"
          />
          <Card className="p-8 md:p-10" hover={false}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Terminal className="w-6 h-6 text-text-primary" />
                  <span className="text-sm text-text-tertiary tracking-wide uppercase">
                    {skillsOverview.version} &middot; {skillsOverview.total}{" "}
                    Skills
                  </span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary mb-4">
                  {skillsOverview.total} 項教育技能
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  tw-edu-skills 含 3 套 {skillsOverview.twEduSkills.repoTotal} 個
                  Skills（K-12 教學、K-12 學習、學術研究），另有獨立 Skills
                  涵蓋知識工作者與知識庫，為臺灣教育工作者量身打造的 Claude Code
                  Skills 套組。
                </p>
                <a
                  href="https://github.com/FW1201/tw-edu-skills"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-text-primary text-text-primary px-6 py-2.5 text-sm tracking-wide hover:bg-text-primary hover:text-text-dark transition-colors duration-300"
                >
                  GitHub &rarr;
                </a>
              </div>
              {/* Right: Categories + Install */}
              <div>
                <div className="space-y-3 mb-8">
                  {skillsOverview.twEduSkills.sets.map((set) => (
                    <div key={set.name} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0 bg-text-primary" />
                      <span className="text-sm text-text-secondary flex-1">
                        {set.name}
                      </span>
                      <span className="text-sm text-text-tertiary">
                        {set.count} skills
                      </span>
                    </div>
                  ))}
                  {skillsOverview.otherSkills.map((cat) => (
                    <div key={cat.name} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full shrink-0 bg-text-tertiary" />
                      <span className="text-sm text-text-secondary flex-1">
                        {cat.name}
                      </span>
                      <span className="text-sm text-text-tertiary">
                        {cat.count} skills
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-bg-secondary rounded-lg p-4 border border-border-dark">
                  <p className="text-xs text-text-tertiary mb-2 uppercase tracking-wide">
                    安裝指令
                  </p>
                  <div className="flex items-center gap-2">
                    <code className="text-sm text-text-primary font-mono flex-1 overflow-x-auto">
                      {installCommand}
                    </code>
                    <button
                      onClick={handleCopy}
                      className="text-text-tertiary hover:text-text-primary transition-colors shrink-0"
                      aria-label="複製安裝指令"
                    >
                      {copied ? (
                        <Check className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}
