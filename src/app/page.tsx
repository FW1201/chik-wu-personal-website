"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  PenLine,
  FlaskConical,
  GraduationCap,
  Code2,
  Mic2,
  BookOpen,
  ExternalLink,
  Camera,
  Video,
  AtSign,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StatCounter } from "@/components/ui/StatCounter";
import { CTASection } from "@/components/ui/CTASection";
import { profile } from "@/data/profile";
import { articles } from "@/data/publications";

const roleIcons: Record<string, React.ReactNode> = {
  PenLine: <PenLine className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Mic2: <Mic2 className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
};

const partners = [
  "Google for Education",
  "親子天下 · 翻轉教育",
  "國家教育研究院",
  "龍騰文化",
  "AIT × 關鍵評論網",
  "USC 南加州中文教師聯合會",
];

const journalPlatforms = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/Journal.of.Digital.Narrative",
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/journal_of_digital_narrative/",
    icon: <Camera className="w-4 h-4" />,
  },
  {
    name: "Threads",
    url: "https://www.threads.net/@journal_of_digital_narrative",
    icon: <AtSign className="w-4 h-4" />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/@Journal_of_Digital_Narrative",
    icon: <Video className="w-4 h-4" />,
  },
];

const latestArticles = [...articles]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

const highlights = [
  {
    title: "碩士學位畢業（2026.03）",
    description: "國立臺灣師範大學華語文教學碩士，完成語料庫語言學研究",
  },
  {
    title: "CASLAR 2025 SSCI 論文發表",
    description: "語料庫語言學研究成果登上國際 SSCI 期刊",
  },
  {
    title: "tw-edu-skills 5⭐ 7 forks",
    description: "開源 AI 教育技能包獲社群高度關注",
  },
  {
    title: "154+ 場 AI 教育演講",
    description: "橫跨全台各級學校與教育機構，累計 358.5 小時",
  },
  {
    title: "2025 AI 素養教育論壇策展",
    description: "策劃並主持大型 AI 教育主題論壇",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center md:justify-start bg-bg-primary bg-[image:url('/images/home-hero.jpg')] bg-cover bg-[position:35%_45%] md:bg-[position:65%_45%] px-6 md:px-12 lg:px-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/55" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center md:text-left max-w-2xl"
        >
          <p className="text-xs tracking-[0.3em] text-gold uppercase mb-6">
            {profile.tagline}
          </p>
          <h1 className="font-[family-name:var(--font-playfair)] text-7xl md:text-8xl font-medium text-text-primary leading-none">
            {profile.name.zh}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-text-secondary tracking-widest">
            {profile.name.en}
          </p>
          <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto">
            AI × 教育講師 ・《數位敘事力期刊》主編
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
              href="/contact"
              className="inline-block bg-gold text-bg-primary px-8 py-3 text-sm font-medium tracking-wide hover:bg-gold-bright transition-colors duration-300"
            >
              邀請演講 →
            </Link>
            <a
              href="https://www.tibame.com/teacher/20d3094c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold/50 text-gold px-8 py-3 text-sm tracking-wide hover:border-gold hover:bg-gold-subtle transition-colors duration-300"
            >
              合作課程 ↗
            </a>
          </div>
        </motion.div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-bg-secondary border-y border-border-dark py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-[11px] tracking-[0.3em] text-text-tertiary uppercase mb-5">
            曾合作機構
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {partners.map((name) => (
              <span
                key={name}
                className="text-sm text-text-secondary whitespace-nowrap"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-bg-primary border-b border-border-dark py-12 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
          {profile.stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </section>

      {/* Journal Section */}
      <section className="bg-bg-light py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="flex items-center gap-5">
              <Image
                src="/images/jdn-logo.jpg"
                alt="數位敘事力期刊"
                width={64}
                height={64}
                className="rounded-xl border border-border-light"
              />
              <div>
                <p className="text-xs tracking-[0.3em] text-gold uppercase mb-2">
                  Journal of Digital Narrative
                </p>
                <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium text-text-primary">
                  數位敘事力期刊
                </h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {journalPlatforms.map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border-light rounded-full px-4 py-2 text-xs text-text-secondary hover:text-gold hover:border-gold/50 transition-colors"
                >
                  {p.icon}
                  {p.name}
                </a>
              ))}
            </div>
          </div>
          <p className="text-text-secondary leading-relaxed max-w-2xl mb-10">
            為 K-12 教師而寫的 AI × 教育知識社群：AI 工具評測、Vibe Coding
            教學、教育科技新知，與翻轉教育平台 21 篇深度專欄。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="h-full">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <p className="text-xs text-gold tracking-wide">
                      {article.date}
                    </p>
                    <ExternalLink
                      size={13}
                      className="text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-0.5"
                    />
                  </div>
                  <h3 className="text-text-primary font-medium leading-relaxed">
                    {article.title}
                  </h3>
                </Card>
              </a>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/publications"
              className="text-sm text-gold hover:text-gold-bright transition-colors"
            >
              閱讀全部 21 篇文章 →
            </Link>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="bg-bg-primary py-24 px-6 border-t border-border-dark">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="六角色工作系統"
            subtitle="跨領域整合的教育工作者身份"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.roles.map((role) => (
              <Card key={role.id}>
                <div className="text-gold mb-4">{roleIcons[role.icon]}</div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-text-primary">
                  {role.name}
                </h3>
                <p className="text-sm text-text-tertiary mt-1">{role.nameEn}</p>
                <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                  {role.description}
                </p>
                <p className="mt-4 text-xs font-medium text-text-tertiary tracking-wide uppercase border-t border-border-dark pt-3">
                  {role.stat}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="bg-bg-light py-24 px-6 border-t border-border-dark">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="近期亮點"
            subtitle="研究、開發與教育推廣的最新成果"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((item) => (
              <Card key={item.title}>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary mt-2 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection />
    </main>
  );
}
