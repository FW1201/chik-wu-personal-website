import { projects, skillsOverview } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "開發成果",
};

const categoryOrder = ["Chrome Extension", "GAS System", "AI Studio App", "Skills Repo", "Gemini Gems"] as const;
const categoryLabels: Record<string, string> = {
  "Chrome Extension": "Chrome 擴充功能",
  "GAS System": "Google Apps Script 系統",
  "AI Studio App": "AI Studio 應用",
  "Skills Repo": "Skills 套組",
  "Gemini Gems": "Gemini Gems 工具",
};

const techStack = [
  "Chrome Extension",
  "Google Apps Script",
  "Claude Code",
  "Vercel",
  "JavaScript",
  "Python",
  "Manifest V3",
  "Gemini API",
];

function ProjectLinks({ project }: { project: { github?: string; cws?: string; live?: string } }) {
  const hasLinks = project.github || project.cws || project.live;
  if (!hasLinks) {
    return <span className="text-xs text-text-tertiary">私有工具</span>;
  }
  return (
    <div className="flex flex-wrap gap-2">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md border border-border-dark text-text-tertiary hover:text-text-primary hover:border-text-tertiary transition-colors"
        >
          GitHub ↗
        </a>
      )}
      {project.cws && (
        <a
          href={project.cws}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md border border-[#4285f4]/40 text-[#8ab4f8] hover:border-[#4285f4] hover:text-[#4285f4] transition-colors"
        >
          CWS ↗
        </a>
      )}
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-md border border-[#34a853]/40 text-[#81c995] hover:border-[#34a853] hover:text-[#34a853] transition-colors"
        >
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
    items: projects.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <SectionHeading
          title="開發成果"
          subtitle="Chrome 擴充、GAS 自動化、AI 應用、開源 Skills 與 Gemini Gems"
        />
      </section>

      {/* Project Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        {grouped.map((group) => (
          <div key={group.category} className="mb-16">
            <h3 className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-text-primary mb-6 pb-3 border-b border-border-dark">
              {group.label}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {group.items.map((project) => (
                <Card key={project.name} className="flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="text-text-primary font-medium leading-snug">
                      {project.name}
                    </h4>
                    <span className="text-xs text-text-tertiary whitespace-nowrap shrink-0">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-bg-secondary text-text-tertiary border border-border-dark"
                      >
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

      {/* Skills Overview — Light */}
      <section className="bg-bg-light px-6 md:px-12 lg:px-24 py-24">
        <SectionHeading
          title={`${skillsOverview.total} 個 Claude Code Skills`}
          subtitle={`${skillsOverview.version} — 台灣首套開源教育 AI Skills`}
          light
        />

        {/* tw-edu-skills: 3 套 37 Skills */}
        <div className="mb-12">
          <h3 className="font-[family-name:var(--font-playfair)] text-2xl text-text-dark mb-2">
            tw-edu-skills — 3 套 {skillsOverview.twEduSkills.repoTotal} Skills
          </h3>
          <p className="text-sm text-text-dark-secondary mb-8">
            開源 GitHub Repo：
            <a
              href="https://github.com/FW1201/tw-edu-skills"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-text-dark transition-colors"
            >
              FW1201/tw-edu-skills
            </a>
            {" "}(5⭐ 7 forks)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsOverview.twEduSkills.sets.map((set) => (
              <Card key={set.name} light>
                <p className="text-3xl font-[family-name:var(--font-playfair)] text-text-dark font-medium">
                  {set.count}
                </p>
                <p className="text-text-dark font-medium mt-2 text-lg">{set.name}</p>
                <p className="text-sm text-text-dark-secondary mt-2 leading-relaxed">
                  {set.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {set.examples.map((ex) => (
                    <span
                      key={ex}
                      className="px-2 py-0.5 text-xs rounded bg-bg-light text-text-dark-secondary border border-border-light font-mono"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* 其他獨立 Skills */}
        <div>
          <h3 className="font-[family-name:var(--font-playfair)] text-xl text-text-dark mb-4">
            其他 Skills — {skillsOverview.otherSkills.reduce((a, b) => a + b.count, 0)} 個
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {skillsOverview.otherSkills.map((cat) => (
              <Card key={cat.name} light>
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-[family-name:var(--font-playfair)] text-text-dark font-medium">
                    {cat.count}
                  </span>
                  <span className="text-text-dark font-medium">{cat.name}</span>
                </div>
                <p className="text-sm text-text-dark-secondary mt-2">{cat.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <SectionHeading title="技術棧" subtitle="核心開發技術與平台" />
        <div className="flex flex-wrap gap-3 mt-4">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2.5 rounded-lg text-sm text-text-secondary border border-border-dark hover:text-text-primary hover:border-text-tertiary transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
