"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${align === "center" ? "text-center" : ""}`}
    >
      <h2
        className={`font-[family-name:var(--font-playfair)] text-3xl md:text-4xl lg:text-5xl font-medium leading-tight ${
          light ? "text-text-dark" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg ${
            light ? "text-text-dark-secondary" : "text-text-secondary"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
