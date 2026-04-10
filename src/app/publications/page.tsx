"use client";

import { useState } from "react";
import { articles, papers } from "@/data/publications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const statusConfig: Record<string, { label: string; className: string }> = {
  published: { label: "已發表", className: "bg-[#2a2a2a] text-[#a0a0a0] border border-[#3a3a3a]" },
  thesis: { label: "碩士論文", className: "bg-[#1a1a1a] text-text-primary border border-[#4a4a4a]" },
  submitted: { label: "投稿中", className: "bg-[#2a2a1a] text-[#c0b060] border border-[#3a3a2a]" },
  pending: { label: "待發表", className: "bg-[#1a1a1a] text-text-tertiary border border-border-dark" },
};

export default function PublicationsPage() {
  const [activeTab, setActiveTab] = useState<"articles" | "papers">("articles");

  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <SectionHeading
          title="著作與研究"
          subtitle="17 篇翻轉教育文章 + 8 篇學術論文"
        />

        {/* Tab Switcher */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={() => setActiveTab("articles")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "articles"
                ? "bg-text-primary text-text-dark"
                : "border border-border-dark text-text-secondary hover:text-text-primary"
            }`}
          >
            翻轉教育專欄
          </button>
          <button
            onClick={() => setActiveTab("papers")}
            className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === "papers"
                ? "bg-text-primary text-text-dark"
                : "border border-border-dark text-text-secondary hover:text-text-primary"
            }`}
          >
            學術研究
          </button>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        {activeTab === "articles" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article) => (
              <Card key={article.id}>
                <p className="text-xs text-text-tertiary mb-3 tracking-wide">
                  {article.date}
                </p>
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
            ))}
          </div>
        )}

        {activeTab === "papers" && (
          <div className="flex flex-col gap-5">
            {papers.map((paper, i) => (
              <Card key={i}>
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-text-primary font-medium leading-relaxed">
                        {paper.title}
                      </h3>
                      {paper.titleEn && (
                        <p className="text-sm text-text-tertiary mt-1 italic">
                          {paper.titleEn}
                        </p>
                      )}
                    </div>
                    <span
                      className={`px-3 py-1 text-xs rounded-full whitespace-nowrap ${statusConfig[paper.status].className}`}
                    >
                      {statusConfig[paper.status].label}
                    </span>
                  </div>

                  <p className="text-sm text-text-secondary">{paper.authors}</p>

                  <div className="flex items-center gap-4 text-sm text-text-tertiary">
                    {paper.journal && <span>{paper.journal}</span>}
                    <span>{paper.year}</span>
                    {paper.doi && (
                      <a
                        href={`https://doi.org/${paper.doi}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-text-primary transition-colors underline underline-offset-4"
                      >
                        DOI ↗
                      </a>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {paper.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-bg-secondary text-text-tertiary border border-border-dark"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
