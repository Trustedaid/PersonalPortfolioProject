"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { staggerContainer, staggerItem, viewport } from "../../lib/motion";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "div" | "section" | "ul";
}

/**
 * Çocuklarını sırayla (stagger) canlandıran konteyner.
 * Çocuklar <Stagger.Item> ile sarılmalıdır.
 */
export default function Stagger({
  children,
  className,
  stagger = 0.12,
  delay = 0.1,
  as = "div",
}: StaggerProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      variants={staggerContainer(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
    >
      {children}
    </MotionTag>
  );
}

interface ItemProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "span" | "li" | "article";
}

Stagger.Item = function Item({ children, className, as = "div" }: ItemProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag className={className} variants={staggerItem}>
      {children}
    </MotionTag>
  );
};
