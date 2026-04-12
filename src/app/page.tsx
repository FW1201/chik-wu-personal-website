"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  PenLine,
  FlaskConical,
  GraduationCap,
  Code2,
  Mic2,
  BookOpen,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { StatCounter } from "@/components/ui/StatCounter";
import { profile } from "@/data/profile";

const roleIcons: Record<string, React.ReactNode> = {
  PenLine: <PenLine className="w-6 h-6" />,
  FlaskConical: <FlaskConical className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Mic2: <Mic2 className="w-6 h-6" />,
  BookOpen: <BookOpen className="w-6 h-6" />,
};

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
    title: "134+ 場 AI 教育演講",
    description: "橫跨全台各級學校與教育機構",
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
        className="relative min-h-screen flex items-center justify-center bg-bg-primary px-6"
        style={{ backgroundImage: "url('/hero-pattern.svg')", backgroundRepeat: "repeat" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-3xl"
        >
          <h1 className="font-[family-name:var(--font-playfair)] text-7xl md:text-8xl font-medium text-text-primary leading-none">
            {profile.name.zh}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-text-secondary tracking-widest">
            {profile.name.en}
          </p>
          <p className="mt-6 text-lg text-text-tertiary max-w-xl mx-auto">
            {profile.tagline}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-block border border-text-primary text-text-primary px-8 py-3 text-sm tracking-wide hover:bg-text-primary hover:text-text-dark transition-colors duration-300"
          >
            邀請演講 &rarr;
          </Link>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-bg-primary border-y border-border-dark py-12 px-6">
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

      {/* Roles Section (Light) */}
      <section className="bg-bg-light py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            title="六角色工作系統"
            subtitle="跨領域整合的教育工作者身份"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {profile.roles.map((role) => (
              <Card key={role.id} light>
                <div className="text-text-dark-secondary mb-4">
                  {roleIcons[role.icon]}
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-text-dark">
                  {role.name}
                </h3>
                <p className="text-sm text-text-dark-secondary mt-1">
                  {role.nameEn}
                </p>
                <p className="text-sm text-text-dark-secondary mt-3 leading-relaxed">
                  {role.description}
                </p>
                <p className="mt-4 text-xs font-medium text-text-dark-secondary tracking-wide uppercase border-t border-border-light pt-3">
                  {role.stat}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="bg-bg-primary py-24 px-6">
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
    </main>
  );
}
