"use client";

import { useState } from "react";
import {
  featuredTalks,
  milestones,
  topicEvolution,
  speakingStats,
} from "@/data/speaking";

const TABS = ["精選演講", "聽眾分佈", "主題演進", "里程碑"] as const;
type Tab = (typeof TABS)[number];

/* ── icon paths (inline SVG) ────────────────────────────── */
const iconPaths: Record<string, string> = {
  Monitor: "M 3 4 H 21 V 16 H 3 Z M 8 20 H 16 M 12 16 V 20",
  MessageSquare:
    "M 21 15 a 2 2 0 0 1 -2 2 H 7 l -4 4 V 5 a 2 2 0 0 1 2 -2 h 14 a 2 2 0 0 1 2 2 z",
  BookOpen:
    "M 2 3 h 6 a 4 4 0 0 1 4 4 v 14 a 3 3 0 0 0 -3 -3 H 2 z M 22 3 h -6 a 4 4 0 0 0 -4 4 v 14 a 3 3 0 0 1 3 -3 h 7 z",
  Shield:
    "M 12 22 s 8 -4 8 -10 V 5 l -8 -3 -8 3 v 7 c 0 6 8 10 8 10 z",
  Code2: "M 17 17 l 5 -5 -5 -5 M 7 7 l -5 5 5 5 M 14 3 l -4 18",
};

/* ── audience data ───────────────────────────────────────── */
const audienceData = [
  { label: "K-12 學校", count: speakingStats.audience.k12 },
  { label: "大學院校", count: speakingStats.audience.university },
  { label: "職業學校", count: speakingStats.audience.vocational },
  { label: "企業機構", count: speakingStats.audience.corporate },
];
const maxCount = Math.max(...audienceData.map((d) => d.count));

/* ── tab panels ─────────────────────────────────────────── */

function FeaturedTalks() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {featuredTalks.map((talk, i) => (
        <div
          key={i}
          className="border border-border-dark bg-bg-card rounded-xl p-6 hover:border-text-tertiary transition-colors"
        >
          <span className="text-xs text-text-tertiary font-mono tracking-wide">
            {talk.date}
          </span>
          <h3 className="font-[family-name:var(--font-playfair)] text-base font-medium text-text-primary mt-2 leading-snug">
            {talk.topic}
          </h3>
          <p className="text-sm text-text-secondary mt-2">{talk.venue}</p>
          <p className="text-xs text-text-tertiary mt-1">{talk.hours} 小時</p>
        </div>
      ))}
    </div>
  );
}

function AudienceChart() {
  return (
    <div className="max-w-2xl space-y-6">
      {audienceData.map((item) => (
        <div key={item.label}>
          <div className="flex justify-between mb-2">
            <span className="text-sm text-text-secondary">{item.label}</span>
            <span className="text-sm text-text-tertiary font-mono tabular-nums">
              {item.count} 場
            </span>
          </div>
          <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(item.count / maxCount) * 100}%`,
                background: "linear-gradient(90deg, #C9A84C, #E8D080)",
              }}
            />
          </div>
        </div>
      ))}
      <p className="text-xs text-text-tertiary pt-4 border-t border-border-dark">
        共 {speakingStats.totalEvents}+ 場，涵蓋 38+ 機構
      </p>
    </div>
  );
}

function TopicEvolutionPanel() {
  return (
    <div className="flex flex-wrap items-stretch gap-4">
      {topicEvolution.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="border border-border-dark bg-bg-card rounded-xl p-5 w-44 flex-shrink-0">
            <svg
              className="w-5 h-5 mb-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: "#C9A84C" }}
            >
              <path d={iconPaths[step.icon] || iconPaths.Monitor} />
            </svg>
            <span className="text-xs text-text-tertiary font-mono block mb-1">
              {step.period}
            </span>
            <p className="text-sm text-text-primary leading-snug">{step.topic}</p>
          </div>
          {i < topicEvolution.length - 1 && (
            <svg
              className="w-6 h-6 text-text-tertiary flex-shrink-0 hidden md:block"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function MilestonesPanel() {
  return (
    <div className="overflow-x-auto pb-6">
      <div className="flex items-start gap-4 min-w-max">
        {milestones.map((item, i) => (
          <div key={i} className="flex flex-col items-center" style={{ width: "17rem" }}>
            {/* Card */}
            <div className="border border-border-dark bg-bg-card rounded-xl p-5 w-full mb-5">
              <span className="text-xs text-text-tertiary font-mono block mb-1">{item.date}</span>
              <h3 className="font-[family-name:var(--font-playfair)] text-sm font-medium text-text-primary leading-snug">
                {item.title}
              </h3>
              <p className="text-xs text-text-secondary mt-1 leading-relaxed">{item.description}</p>
            </div>
            {/* Timeline connector row */}
            <div className="flex items-center w-full px-2">
              {/* Left line (hidden for first item) */}
              <div className={`flex-1 h-px ${i === 0 ? "invisible" : "bg-border-dark"}`} />
              {/* Gold dot */}
              <div
                className="w-3 h-3 rounded-full border-2 flex-shrink-0"
                style={{ borderColor: "#C9A84C", background: "var(--color-bg-primary)" }}
              />
              {/* Right line (hidden for last item) */}
              <div className={`flex-1 h-px ${i === milestones.length - 1 ? "invisible" : "bg-border-dark"}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── main export ─────────────────────────────────────────── */
export function SpeakingTabs() {
  const [active, setActive] = useState<Tab>("精選演講");

  return (
    <div>
      {/* Tab navigation */}
      <div className="flex gap-0 border-b border-border-dark mb-10 overflow-x-auto">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              active === tab
                ? "border-[--color-gold] text-[--color-gold]"
                : "border-transparent text-text-tertiary hover:text-text-secondary"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {active === "精選演講" && <FeaturedTalks />}
      {active === "聽眾分佈" && <AudienceChart />}
      {active === "主題演進" && <TopicEvolutionPanel />}
      {active === "里程碑" && <MilestonesPanel />}
    </div>
  );
}
