"use client";

import { motion } from "framer-motion";

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border-dark" />

      <div className="flex flex-col gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative pl-12"
          >
            {/* Dot */}
            <div className="absolute left-[11px] top-1.5 w-[10px] h-[10px] rounded-full border-2 border-text-primary bg-bg-primary" />

            <span className="text-xs text-text-tertiary font-mono">{item.date}</span>
            <h3 className="font-[family-name:var(--font-playfair)] text-lg font-medium mt-1">
              {item.title}
            </h3>
            <p className="text-sm text-text-secondary mt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
