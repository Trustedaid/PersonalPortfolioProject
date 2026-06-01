"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp, viewport } from "../../lib/motion";

interface RevealProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  /** Tekil eleman gecikmesi (saniye) */
  delay?: number;
  as?: "div" | "section" | "span" | "li" | "article";
}

/**
 * Scroll'a girince içeriği canlandıran sarmalayıcı.
 * prefers-reduced-motion aktifse animasyon devre dışı kalır.
 */
export default function Reveal({
  children,
  variants = fadeUp,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  );
}
