"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  /** "mount" animates immediately (above-the-fold content).
   *  "scroll" animates once when it enters the viewport (default). */
  mode?: "mount" | "scroll";
}

export function FadeIn({ children, delay = 0, y = 16, className, mode = "scroll" }: FadeInProps) {
  const trigger =
    mode === "mount"
      ? { animate: { opacity: 1, y: 0 } }
      : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.15 } };

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      {...trigger}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}