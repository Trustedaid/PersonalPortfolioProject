"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  /** Mıknatıs çekim gücü (px) */
  strength?: number;
}

/**
 * İmlece manyetik çekim gösteren buton/link.
 * Mobil ve reduced-motion'da statik davranır.
 */
export default function MagneticButton({
  children,
  href,
  className,
  target,
  rel,
  download,
  strength = 0.4,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      download={download}
      className={className}
      style={reduce ? undefined : { x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={reduce ? undefined : { scale: 1.05 }}
      whileTap={reduce ? undefined : { scale: 0.97 }}
    >
      {children}
    </motion.a>
  );
}
