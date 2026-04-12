"use client";

import { motion } from "framer-motion";
import {
  PenLine,
  FlaskConical,
  GraduationCap,
  Code2,
  Mic2,
  BookOpen,
  Trophy,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

const roleIcons: Record<string, React.ReactNode> = {
  PenLine: <PenLine className="w-7 h-7" />,
  FlaskConical: <FlaskConical className="w-7 h-7" />,
  GraduationCap: <GraduationCap className="w-7 h-7" />,
  Code2: <Code2 className="w-7 h-7" />,
  Mic2: <Mic2 className="w-7 h-7" />,
  BookOpen: <BookOpen className="w-7 h-7" />,
};

const roleDetails: Record<string, string> = {
  editor:
    "主編《數位敘事力期刊》，持續於翻轉教育平台發表教學現場觀察與 AI 融入教育的實踐文章，同時經營社群媒體推廣教育創新理念。",
  researcher:
    "以語料庫語言學為核心方法論，研究華語文教學與語言習得議題，成果發表於 CASLAR 等國際 SSCI 期刊與學術研討會。",
  teacher:
    "具備合格中等學校國文教師證與華語文教學能力認證，專注於 K-12 國語文與華語文教學設計，將 AI 工具融入 108 課綱素養導向教學。",
  developer:
    "開發 Chrome Extension、Claude Skills 與教育科技工具，以 Vibe Coding 理念打造實用的開源教育資源，專案獲社群廣泛採用。",
  admin:
    "在全台各級學校與教育機構進行超過 134 場 AI 與教育主題演講及工作坊，擔任 Google Certified Trainer 與 Gemini Academy 講師。",
  learner:
    "持續學習與建構 K-12 教育所需的 AI Skills，開發並分享超過 45 個教學技能包，實踐終身學習理念。",
};

const researchAreas = [
  { title: "語料庫語言學", description: "運用大型語料庫分析華語語法與詞彙使用模式" },
  { title: "AI 輔助語言教學", description: "探索生成式 AI 在華語文教學中的應用與效果" },
  { title: "數位素養教育", description: "研究 AI 時代下的數位素養框架與教學策略" },
  { title: "教育科技開發", description: "以實證研究驅動教育工具的設計與迭代" },
];

const awards = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "國立臺灣師範大學 碩士學位",
    year: "2026",
    desc: "華語文教學研究所，專攻語料庫語言學與 AI 教育應用",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "CASLAR 2025 SSCI 論文發表",
    year: "2025",
    desc: "語料庫語言學研究成果於國際 SSCI 期刊發表",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Google Certified Trainer",
    year: "2024",
    desc: "Google 官方認證教育培訓師，具備 Workspace for Education 培訓資格",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Gemini Academy 講師",
    year: "2024",
    desc: "受邀擔任 Gemini Academy 教育應用課程講師",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "tw-edu-skills 開源社群 5⭐",
    year: "2024",
    desc: "台灣首套 K-12 教師開源 Claude Code Skills，獲社群 5 星評分與 7 次 Fork",
  },
  {
    icon: <Mic2 className="w-5 h-5" />,
    title: "134+ 場 AI 教育演講",
    year: "2023–2026",
    desc: "橫跨台灣各縣市學校、企業與國際場域（USC、PSU）",
  },
];

interface ProfileData {
  name: { zh: string; en: string };
  tagline: string;
  education: string;
  undergrad: string;
  certifications: string[];
  belief: string;
  roles: {
    id: string;
    name: string;
    nameEn: string;
    icon: string;
    description: string;
    stat: string;
  }[];
}

export default function AboutClient({ profile }: { profile: ProfileData }) {
  return (
    <main>
      {/* Header */}
      <section className="bg-bg-primary pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl font-medium text-text-primary">
              關於我
            </h1>
            <p className="mt-4 text-lg text-text-secondary">
              AI 教育研究者、講師、開發者 — 以跨領域視角推動教育創新
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="bg-bg-primary pb-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary mb-4">
              學歷
            </h3>
            <p className="text-text-secondary leading-relaxed">
              {profile.education}
            </p>
            <p className="text-text-tertiary mt-1">{profile.undergrad}</p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-medium text-text-primary mb-4">
              認證資格
            </h3>
            <div className="flex flex-wrap gap-2">
              {profile.certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-block text-xs text-text-secondary border border-border-dark rounded-full px-3 py-1"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Belief Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 border-l-2 border-text-tertiary pl-6 py-2"
          >
            <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-text-primary italic">
              &ldquo;{profile.belief}&rdquo;
            </p>
          </motion.div>
        </div>
      </section>

      {/* 榮譽與成就 */}
      <section className="bg-bg-light py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="榮譽與成就"
            subtitle="學術、教育與開發領域的重要里程碑"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {awards.map((award) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45 }}
                className="rounded-xl border border-border-light bg-white p-5 flex gap-4"
              >
                <div className="text-gray-400 flex-shrink-0 mt-0.5">{award.icon}</div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-[family-name:var(--font-playfair)] text-base font-medium text-text-dark">
                      {award.title}
                    </h3>
                    <span className="text-xs text-gray-400 font-mono">{award.year}</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">{award.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Six Roles Detail */}
      <section className="bg-bg-primary py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="六角色工作系統"
            subtitle="每個角色代表一個專業面向，彼此交織形成完整的教育實踐"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.roles.map((role) => (
              <Card key={role.id} className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-text-secondary">
                    {roleIcons[role.icon]}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-xl font-medium text-text-primary">
                      {role.name}
                    </h3>
                    <p className="text-xs text-text-tertiary">
                      {role.nameEn}
                    </p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {roleDetails[role.id]}
                </p>
                <p className="mt-4 text-xs font-medium text-text-tertiary tracking-wide border-t border-border-dark pt-3">
                  {role.stat}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-bg-light py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="研究領域"
            subtitle="聚焦語言學與教育科技的交叉地帶"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchAreas.map((area) => (
              <Card key={area.title} light>
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium text-text-dark">
                  {area.title}
                </h3>
                <p className="text-sm text-text-dark-secondary mt-2 leading-relaxed">
                  {area.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
