"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  light?: boolean;
}

export function StatCounter({ value, suffix = "", label, light = false }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return unsub;
  }, [rounded]);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animate(count, value, { duration: 1.5, ease: "easeOut" });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [count, value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <motion.span
        className={`font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-medium block ${
          light ? "text-text-dark" : "text-text-primary"
        }`}
      >
        {display}
        {suffix}
      </motion.span>
      <span
        className={`text-sm mt-2 block ${
          light ? "text-text-dark-secondary" : "text-text-secondary"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
