import Link from "next/link";

/** 全站統一的頁尾轉換 CTA — 講座邀約導流 */
export function CTASection() {
  return (
    <section className="bg-bg-secondary border-t border-border-dark px-6 py-20">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] text-gold uppercase mb-4">
          Invite · Collaborate
        </p>
        <h2 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-medium text-text-primary leading-snug">
          想為你的學校或團隊
          <br className="md:hidden" />
          安排一場 AI 講座？
        </h2>
        <p className="mt-4 text-text-secondary">
          154+ 場演講經驗 · 工作坊 2–6 小時 · 線上實體皆可配合
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
