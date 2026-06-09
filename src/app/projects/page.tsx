import { projects, skillsOverview } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/ui/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "氛圍開發專案",
  description:
    "12 個 Vibe Coding 開發專案與 92+ 個開源 AI Skills：Chrome Extension、GAS 系統、AI Studio App 與 tw-edu-skills 教育技能包。",
  alternates: { canonical: "/projects" },
};

/* ── Category config ────────────────────────────────────── */
const categoryOrder = ["Web App", "Chrome Extension", "GAS System", "AI Studio App", "Gemini Gems"] as const;
type Category = (typeof categoryOrder)[number];

const categoryLabels: Record<Category, string> = {
  "Web App":          "整合展示 Web App",
  "Chrome Extension": "Chrome 擴充功能",
  "GAS System":       "GAS 自動化系統",
  "AI Studio App":    "AI Studio 應用",
  "Gemini Gems":      "Gemini Gems 資源",
};

const categoryDescriptions: Record<Category, string> = {
  "Web App":          "可直接操作與投影的整合開發成果，串接教學工具、公開筆記本與資源入口",
  "Chrome Extension": "部署於 Chrome Web Store，為教師與學習者打造的瀏覽器原生工具",
  "GAS System":       "Google Apps Script 驅動的行政自動化系統，減少重複性工作",
  "AI Studio App":    "Google AI Studio 整合應用，探索生成式 AI 於教育情境的可能",
  "Gemini Gems":      "已整併至教學工具箱的 Gemini Gems 入口與教學資源索引",
};

/* ── Install commands ───────────────────────────────────── */
const skillGroups = [
  {
    label: "教學 Skills",
    note: "Claude Code 為最佳使用環境",
    cmds: [
      { tool: "Claude Code", cmd: "npx skills add FW1201/tw-edu-skills --all -a claude-code" },
      { tool: "Codex CLI",   cmd: "npx skills add FW1201/tw-edu-skills --all -a codex" },
      { tool: "Antigravity", cmd: "npx skills add FW1201/tw-edu-skills --all -a antigravity" },
    ],
  },
  {
    label: "學習 Skills",
    note: "Claude Code 為最佳使用環境",
    cmds: [
      { tool: "Claude Code", cmd: "npx skills add FW1201/tw-stu-skills --all -a claude-code" },
      { tool: "Codex CLI",   cmd: "npx skills add FW1201/tw-stu-skills --all -a codex" },
      { tool: "Antigravity", cmd: "npx skills add FW1201/tw-stu-skills --all -a antigravity" },
    ],
  },
  {
    label: "學術研究 Skills",
    note: "Claude Code 為最佳使用環境",
    cmds: [
      { tool: "Claude Code", cmd: "npx skills add FW1201/tw-research-skills --all -a claude-code" },
      { tool: "Codex CLI",   cmd: "npx skills add FW1201/tw-research-skills --all -a codex" },
      { tool: "Antigravity", cmd: "npx skills add FW1201/tw-research-skills --all -a antigravity" },
    ],
  },
];

/* ── Link badges ────────────────────────────────────────── */
function ProjectLinks({ project }: { project: { github?: string; cws?: string; live?: string } }) {
  const hasLinks = project.github || project.cws || project.live;
  if (!hasLinks) return <span className="text-xs text-text-tertiary">私有工具</span>;
  return (
    <div className="flex flex-wrap gap-2">
      {project.github && (
        <a href={project.github} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md border border-border-dark text-text-tertiary hover:text-text-primary hover:border-text-tertiary transition-colors">
          GitHub ↗
        </a>
      )}
      {project.cws && (
        <a href={project.cws} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md border border-[#4285f4]/40 text-[#8ab4f8] hover:border-[#4285f4] transition-colors">
          CWS ↗
        </a>
      )}
      {project.live && (
        <a href={project.live} target="_blank" rel="noopener noreferrer"
           className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md border border-[#34a853]/40 text-[#81c995] hover:border-[#34a853] transition-colors">
          網站 ↗
        </a>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const grouped = categoryOrder.map((cat) => ({
    category: cat,
    label: categoryLabels[cat],
    desc: categoryDescriptions[cat],
    items: projects.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  const { twEduSkills } = skillsOverview;

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pt-32 pb-20"
        style={{
          backgroundImage: "url('/images/projects-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-bg-primary" />
        <div className="relative z-10 max-w-4xl">
          <p className="text-xs tracking-[0.3em] text-white/50 uppercase mb-4">
            Vibe Coding · Open Source
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight">
            氛圍開發專案
          </h1>
          <p className="mt-4 text-lg text-white/70 max-w-xl leading-relaxed">
            Chrome 擴充、GAS 自動化、AI 應用與開源 Skills — 以 Vibe Coding 理念打造教育工具
          </p>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────── */}
      <section className="border-b border-border-dark bg-bg-secondary">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "1", label: "整合工具箱" },
            { value: "5", label: "Chrome 擴充" },
            { value: "2", label: "GAS 系統" },
            { value: "2", label: "AI 應用" },
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

      {/* ── Project Grid ─────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        {grouped.map((group) => (
          <div key={group.category} className="mb-16">
            <div className="flex items-end gap-4 mb-2 pb-3 border-b border-border-dark">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-text-primary">
                {group.label}
              </h3>
              <span className="text-xs text-text-tertiary mb-1 font-mono">
                {group.items.length} 個
              </span>
            </div>
            <p className="text-sm text-text-secondary mb-6">{group.desc}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.items.map((project) => (
                <Card key={project.name} className="flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="text-text-primary font-medium leading-snug">{project.name}</h4>
                    <span className="text-xs text-text-tertiary whitespace-nowrap shrink-0">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag}
                            className="px-2.5 py-1 text-xs rounded-full bg-bg-secondary text-text-tertiary border border-border-dark">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ProjectLinks project={project} />
                </Card>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── tw-edu-skills ────────────────────────────────── */}
      <section className="bg-bg-secondary px-6 md:px-12 lg:px-24 py-20 border-t border-border-dark">
        {/* Header row */}
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-xs tracking-[0.3em] text-text-tertiary uppercase mb-1">Open Source Skills</p>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium text-text-primary">
              tw-edu-skills
            </h2>
          </div>
          <a
            href="https://github.com/FW1201/tw-edu-skills"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-[--color-gold] text-[--color-gold] px-6 py-2.5 text-sm tracking-wide hover:bg-[--color-gold] hover:text-bg-primary transition-colors duration-300"
          >
            GitHub ↗
          </a>
        </div>
        <p className="text-sm text-text-secondary mb-10">
          台灣首套 K-12 教師開源 Claude Code Skills — {twEduSkills.repoTotal} 個技能包 · 5⭐ 7 forks
        </p>

        {/* 3 sub-set cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {twEduSkills.sets.map((set) => (
            <Card key={set.name} className="flex flex-col">
              <p className="text-3xl font-[family-name:var(--font-playfair)] text-text-primary font-medium">
                {set.count}
              </p>
              <p className="text-text-primary font-medium mt-2 text-lg">{set.name}</p>
              <p className="text-sm text-text-secondary mt-2 leading-relaxed flex-1">
                {set.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {set.examples.map((ex) => (
                  <span key={ex}
                        className="px-2 py-0.5 text-xs rounded bg-bg-secondary text-text-tertiary border border-border-dark font-mono">
                    {ex}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Install commands */}
        <div className="border-t border-border-dark pt-10 space-y-8">
          <h4 className="text-xs text-text-tertiary uppercase tracking-[0.2em]">
            安裝 Skills 套組
          </h4>
          {skillGroups.map((group) => (
            <div key={group.label}>
              <div className="flex items-baseline gap-3 mb-3">
                <h5 className="text-sm font-medium text-text-primary">{group.label}</h5>
                <span className="text-xs text-text-tertiary">{group.note}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {group.cmds.map((c) => (
                  <div key={c.tool}
                       className="border border-border-dark bg-bg-secondary rounded-xl p-4">
                    <p className="text-xs font-medium text-text-tertiary mb-2">{c.tool}</p>
                    <code className="text-xs text-[--color-gold] font-mono break-all leading-relaxed">
                      {c.cmd}
                    </code>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </main>
  );
}
