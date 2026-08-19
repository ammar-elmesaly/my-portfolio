"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface HoverLiftLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function HoverLiftLink({ href, children, className }: HoverLiftLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}