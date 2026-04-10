"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
  hover?: boolean;
}

export function Card({ children, className = "", light = false, hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl border p-6 ${
        light
          ? "bg-bg-light-card border-border-light"
          : "bg-bg-card border-border-dark"
      } ${
        hover
          ? light
            ? "hover:border-text-dark-secondary transition-colors"
            : "hover:border-text-tertiary transition-colors"
          : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
