"use client";

import { StatCounter } from "@/components/ui/StatCounter";

export function SpeakingContent() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border border-border-dark rounded-xl p-8 bg-bg-secondary">
      <StatCounter value={134} suffix="+" label="場演講" />
      <div className="text-center">
        <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium block text-text-primary">
          309.5
        </span>
        <span className="text-sm mt-2 block text-text-secondary">小時</span>
      </div>
      <div className="text-center">
        <span className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium block text-text-primary">
          2023–2026
        </span>
        <span className="text-sm mt-2 block text-text-secondary">年份跨度</span>
      </div>
      <StatCounter value={38} suffix="+" label="機構" />
    </div>
  );
}
