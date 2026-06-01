"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Sayfa genelinde sabit duran ambient arka plan:
 * deep purple sis + neon yeşil glow "blob"lar, scroll ile yavaşça kayar.
 */
export default function AmbientBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-base"
    >
      {/* Deep purple üst sis */}
      <motion.div
        style={reduce ? undefined : { y: y1 }}
        className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-purple/20 blur-[120px]"
      />
      {/* Neon yeşil sol blob */}
      <motion.div
        style={reduce ? undefined : { y: y2 }}
        className="absolute top-1/3 -left-32 h-[32rem] w-[32rem] rounded-full bg-accent/10 blur-[120px]"
      />
      {/* Deep purple sağ alt blob */}
      <motion.div
        style={reduce ? undefined : { y: y3 }}
        className="absolute bottom-0 -right-32 h-[36rem] w-[36rem] rounded-full bg-purple-deep/25 blur-[140px]"
      />
      {/* İnce grid dokusu */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:56px_56px]" />
    </div>
  );
}
