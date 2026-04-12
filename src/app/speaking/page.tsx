import type { Metadata } from "next";
import {
  speakingStats,
  milestones,
  topicEvolution,
  featuredTalks,
} from "@/data/speaking";
import { SpeakingContent } from "./SpeakingContent";

export const metadata: Metadata = {
  title: "演講與培訓",
};

const audienceData = [
  { label: "K-12 學校", count: speakingStats.audience.k12 },
  { label: "大學院校", count: speakingStats.audience.university },
  { label: "職業學校", count: speakingStats.audience.vocational },
  { label: "企業機構", count: speakingStats.audience.corporate },
];

const maxAudience = Math.max(...audienceData.map((d) => d.count));

export default function SpeakingPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* ── Header ────────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <h1 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl lg:text-6xl font-medium text-text-primary leading-tight">
          演講與培訓
        </h1>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl">
          自 2023 年起，累積 {speakingStats.totalEvents}+ 場演講與工作坊、
          {speakingStats.totalHours} 小時授課時數，橫跨教育、企業、政府與國際場域。
        </p>
      </section>

      {/* ── Stats Row ─────────────────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 pb-16">
        <SpeakingContent />
      </section>

      {/* ── Audience Distribution ─────────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 pb-20">
        <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-medium text-text-primary mb-8">
          聽眾分佈
        </h2>
        <div className="max-w-2xl space-y-5">
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
                  className="h-full bg-text-primary rounded-full"
                  style={{ width: `${(item.count / maxAudience) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Milestones (light bg) ─────────────────────────── */}
      <section className="bg-bg-light px-6 md:px-12 lg:px-24 py-20">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium text-text-dark mb-12">
          重要里程碑
        </h2>
        <MilestonesTimeline />
      </section>

      {/* ── Topic Evolution (dark bg) ─────────────────────── */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium text-text-primary mb-12">
          主題演進
        </h2>
        <TopicEvolutionFlow />
      </section>

      {/* ── Featured Talks (light bg) ─────────────────────── */}
      <section className="bg-bg-light px-6 md:px-12 lg:px-24 py-20">
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium text-text-dark mb-12">
          精選演講
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredTalks.map((talk, i) => (
            <div
              key={i}
              className="rounded-xl border border-border-light bg-white p-6 hover:border-gray-400 transition-colors"
            >
              <span className="text-xs text-gray-500 font-mono">
                {talk.date}
              </span>
              <h3 className="font-[family-name:var(--font-playfair)] text-base font-medium text-text-dark mt-2 leading-snug">
                {talk.topic}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{talk.venue}</p>
              <p className="text-xs text-gray-400 mt-1">{talk.hours} 小時</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

/* ── Server sub-components ───────────────────────────────── */

function MilestonesTimeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300" />

      <div className="flex flex-col gap-8">
        {milestones.map((item, i) => (
          <div key={i} className="relative pl-12">
            {/* Dot */}
            <div className="absolute left-[11px] top-1.5 w-[10px] h-[10px] rounded-full border-2 border-text-dark bg-bg-light" />

            <span className="text-xs text-gray-500 font-mono">
              {item.date}
            </span>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text-dark mt-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TopicEvolutionFlow() {
  const icons: Record<string, string> = {
    Monitor: "M 3 4 H 21 V 16 H 3 Z M 8 20 H 16 M 12 16 V 20",
    MessageSquare:
      "M 21 15 a 2 2 0 0 1 -2 2 H 7 l -4 4 V 5 a 2 2 0 0 1 2 -2 h 14 a 2 2 0 0 1 2 2 z",
    BookOpen:
      "M 2 3 h 6 a 4 4 0 0 1 4 4 v 14 a 3 3 0 0 0 -3 -3 H 2 z M 22 3 h -6 a 4 4 0 0 0 -4 4 v 14 a 3 3 0 0 1 3 -3 h 7 z",
    Shield:
      "M 12 22 s 8 -4 8 -10 V 5 l -8 -3 -8 3 v 7 c 0 6 8 10 8 10 z",
    Layers:
      "M 12 2 l 10 6.5 v 7 L 12 22 2 15.5 v -7 L 12 2 z M 12 22 V 15.5 M 22 8.5 l -10 7 -10 -7",
    Code2:
      "M 17 17 l 5 -5 -5 -5 M 7 7 l -5 5 5 5 M 14 3 l -4 18",
  };

  return (
    <div className="flex flex-wrap items-stretch gap-0">
      {topicEvolution.map((step, i) => (
        <div key={i} className="flex items-center">
          <div className="bg-bg-card border border-border-dark rounded-xl p-5 w-48 flex-shrink-0">
            {/* Icon */}
            <svg
              className="w-6 h-6 text-text-secondary mb-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={icons[step.icon] || icons.Monitor} />
            </svg>

            <span className="text-xs text-text-tertiary font-mono block mb-1">
              {step.period}
            </span>
            <p className="text-sm text-text-primary leading-snug">
              {step.topic}
            </p>
          </div>

          {/* Arrow between steps */}
          {i < topicEvolution.length - 1 && (
            <svg
              className="w-8 h-8 text-text-tertiary flex-shrink-0 mx-1 hidden md:block"
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
