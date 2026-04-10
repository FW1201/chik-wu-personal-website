import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "數位敘事力期刊",
};

const coreBeliefs = [
  "AI 是媒介，不是目的 — 教學法永遠優先",
  "科技融入教育需以學習者為中心",
  "數位素養是現代公民的基本能力",
  "教師是教育創新的第一線推動者",
  "開源共享加速教育生態系進化",
  "跨域整合創造更深層的學習體驗",
  "持續反思與迭代是專業成長的核心",
];

const socialStats = [
  {
    platform: "Facebook",
    stat: "1,265 篇",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    url: `https://www.facebook.com/${profile.facebook}`,
  },
  {
    platform: "Instagram",
    stat: "530 篇",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    url: `https://www.instagram.com/${profile.instagram}`,
  },
  {
    platform: "YouTube",
    stat: "影音頻道",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="#0a0a0a" />
      </svg>
    ),
    url: `https://www.youtube.com/@${profile.youtube}`,
  },
  {
    platform: "Threads",
    stat: "社群討論",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017C1.5 8.418 2.35 5.564 3.995 3.516 5.845 1.212 8.598.031 12.179.007h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.59 12c.025 3.086.718 5.496 2.057 7.164 1.432 1.784 3.631 2.698 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.685-1.74-1.752-2.96-.065-1.187.408-2.26 1.33-3.017.88-.724 2.104-1.138 3.54-1.197 1.047-.044 2.018.065 2.897.321-.065-1.358-.494-2.378-1.27-3.018-.692-.57-1.676-.874-2.933-.886h-.057c-1.04.011-1.878.288-2.494.822l-1.322-1.57c.934-.809 2.16-1.24 3.658-1.28h.08c1.728.017 3.116.531 4.125 1.524 1.073 1.054 1.636 2.56 1.67 4.468v.235c.586.31 1.1.704 1.527 1.18.726.809 1.194 1.861 1.39 3.127.196 1.27.046 2.755-.988 4.091-1.396 1.804-3.574 2.766-6.478 2.86zM14.73 14c-.78-.033-1.432.073-1.888.31-.478.247-.734.622-.717 1.055.019.435.262.787.686 1.062.494.32 1.13.462 1.779.427 1.053-.057 1.858-.449 2.393-1.165.355-.476.594-1.073.718-1.765-.939-.272-1.94-.416-2.971-.382z" />
      </svg>
    ),
    url: `https://www.threads.net/@${profile.instagram}`,
  },
];

export default function JournalPage() {
  return (
    <main className="min-h-screen bg-bg-primary">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 pt-32 pb-16">
        <SectionHeading
          title="數位敘事力期刊"
          subtitle="Journal of Digital Narrative"
        />
      </section>

      {/* About */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <Card>
            <p className="text-xs text-text-tertiary mb-2 uppercase tracking-widest">創刊</p>
            <p className="text-2xl font-[family-name:var(--font-playfair)] text-text-primary font-medium">2024-01</p>
          </Card>
          <Card>
            <p className="text-xs text-text-tertiary mb-2 uppercase tracking-widest">平台</p>
            <p className="text-lg text-text-primary font-medium">翻轉教育</p>
            <p className="text-sm text-text-secondary">親子天下</p>
          </Card>
          <Card>
            <p className="text-xs text-text-tertiary mb-2 uppercase tracking-widest">文章數</p>
            <p className="text-2xl font-[family-name:var(--font-playfair)] text-text-primary font-medium">17</p>
          </Card>
          <Card>
            <p className="text-xs text-text-tertiary mb-2 uppercase tracking-widest">設計系統</p>
            <p className="text-lg text-text-primary font-medium">Neon Circuit</p>
          </Card>
        </div>
      </section>

      {/* Core Beliefs — Light */}
      <section className="bg-bg-light px-6 md:px-12 lg:px-24 py-24">
        <SectionHeading title="核心理念" subtitle="七項辦刊信念" light />
        <div className="flex flex-col gap-4 mt-8 max-w-3xl">
          {coreBeliefs.map((belief, i) => (
            <Card key={i} light>
              <div className="flex items-start gap-5">
                <span className="text-2xl font-[family-name:var(--font-playfair)] text-text-dark-secondary font-medium leading-none min-w-[2rem]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-text-dark leading-relaxed">{belief}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Social Stats */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <SectionHeading title="社群經營" subtitle="跨平台數位內容發佈" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-4">
          {socialStats.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card>
                <div className="flex flex-col items-start gap-3">
                  <span className="text-text-secondary">{s.icon}</span>
                  <p className="text-xs text-text-tertiary uppercase tracking-widest">
                    {s.platform}
                  </p>
                  <p className="text-xl font-[family-name:var(--font-playfair)] text-text-primary font-medium">
                    {s.stat}
                  </p>
                </div>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* Social Links */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="flex flex-wrap gap-3">
          {socialStats.map((s) => (
            <a
              key={s.platform}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm text-text-secondary border border-border-dark hover:text-text-primary hover:border-text-tertiary transition-colors"
            >
              {s.platform}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
