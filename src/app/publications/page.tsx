"use client";

import { useState } from "react";
import { articles, papers } from "@/data/publications";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/ui/CTASection";
import { ExternalLink } from "lucide-react";

const statusConfig: Record<string, { label: string; className: string }> = {
  published: { label: "已發表", className: "bg-gold-subtle text-gold border border-gold/40" },
  thesis:    { label: "碩士論文", className: "bg-bg-card text-text-primary border border-border-light" },
  submitted: { label: "投稿中", className: "bg-bg-card text-text-secondary border border-border-light" },
  pending:   { label: "待發表", className: "bg-bg-card text-text-tertiary border border-border-dark" },
};

const forumLinks = [
  { label: "翻轉教育作者頁", href: "https://flipedu.parenting.com.tw/author/1112" },
  { label: "2025 AI 素養教育論壇", href: "https://flipedu.parenting.com.tw/event/114" },
  { label: "2026 AI 素養教育論壇", href: "https://flipedu.parenting.com.tw/event/145" },
];

const visiblePapers = papers.filter(
  (p) => p.status === "published" || p.status === "thesis"
);

export default function PublicationsPage() {
  const [activeTab, setActiveTab] = useState<"articles" | "papers">("articles");

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Hero */}
      <section
        className="relative min-h-[40vh] flex flex-col justify-end px-6 md:px-12 lg:px-24 pt-32 pb-16"
        style={{
          backgroundImage: "url('/images/publications-hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 65%",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/60 to-bg-primary" />
        <div className="relative z-10">
          <p className="text-xs tracking-[0.3em] text-[--color-gold-bright] uppercase mb-4">
            Journal of Digital Narrative × FlipEdu
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-medium text-white leading-tight mb-3">
            著作與研究
          </h1>
          <p className="text-white/70">
            《數位敘事力期刊》21 篇翻轉教育專欄 · 8 篇學術論文
          </p>
        </div>
      </section>

      {/* Tab switcher */}
      <section className="px-6 md:px-12 lg:px-24 pt-10 pb-4">
        {/* Tab Switcher */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={() => setActiveTab("articles")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "articles"
                ? "bg-gold text-bg-primary"
                : "border border-border-dark text-text-secondary hover:text-gold hover:border-gold/50"
            }`}
          >
            翻轉教育專欄
          </button>
          <button
            onClick={() => setActiveTab("papers")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "papers"
                ? "bg-gold text-bg-primary"
                : "border border-border-dark text-text-secondary hover:text-gold hover:border-gold/50"
            }`}
          >
            學術研究
          </button>
        </div>

        {/* Forum links — shown on articles tab */}
        {activeTab === "articles" && (
          <div className="flex flex-wrap items-center gap-3 mt-5">
            {forumLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs text-text-secondary border border-border-dark rounded-full hover:text-text-primary hover:border-text-tertiary transition-colors"
              >
                {link.label}
                <ExternalLink size={11} />
              </a>
            ))}
          </div>
        )}
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        {activeTab === "articles" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) =>
              article.url ? (
                <a
                  key={article.id}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <Card className="h-full transition-colors group-hover:border-text-tertiary">
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <p className="text-xs text-text-tertiary tracking-wide">{article.date}</p>
                      <ExternalLink
                        size={13}
                        className="text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5"
                      />
                    </div>
                    <h3 className="text-text-primary font-medium leading-relaxed mb-4">
                      {article.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-full bg-bg-secondary text-text-tertiary border border-border-dark"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </Card>
                </a>
              ) : (
                <Card key={article.id}>
                  <p className="text-xs text-text-tertiary mb-3 tracking-wide">{article.date}</p>
                  <h3 className="text-text-primary font-medium leading-relaxed mb-4">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-bg-secondary text-text-tertiary border border-border-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              )
            )}
          </div>
        )}

        {activeTab === "papers" && (
          <div className="max-w-3xl">
            <ul className="divide-y divide-border-dark">
              {visiblePapers.map((paper, i) => (
                <li key={i} className="py-6 flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-text-primary leading-relaxed">
                      {paper.title}
                    </p>
                    {paper.titleEn && (
                      <p className="text-xs text-text-tertiary mt-0.5 italic">
                        {paper.titleEn}
                      </p>
                    )}
                    <p className="text-xs text-text-tertiary mt-2">
                      {paper.authors}
                      {paper.journal && ` · ${paper.journal}`}
                      {` · ${paper.year}`}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0 mt-0.5">
                    <span
                      className={`px-2.5 py-1 text-xs rounded-full whitespace-nowrap ${statusConfig[paper.status].className}`}
                    >
                      {statusConfig[paper.status].label}
                    </span>
                    {paper.doi && (
                      <a
                        href={
                          paper.doi.startsWith("http")
                            ? paper.doi
                            : `https://doi.org/${paper.doi}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[--color-gold] hover:opacity-70 transition-opacity whitespace-nowrap"
                      >
                        連結↗
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <CTASection />
    </main>
  );
}
