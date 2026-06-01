"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * İlk yüklemede kısa, markalı açılış animasyonu.
 * prefers-reduced-motion aktifse hiç gösterilmez.
 */
export default function IntroLoader() {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => setDone(true), 1600);
    return () => clearTimeout(t);
  }, [reduce]);

  if (reduce) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-base"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.span
              className="text-4xl md:text-6xl font-extrabold text-gradient"
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              Eren OĞUZ
            </motion.span>
            {/* Neon yükleme çizgisi */}
            <div className="h-0.5 w-40 overflow-hidden rounded-full bg-surface-hi">
              <motion.div
                className="h-full bg-gradient-to-r from-accent to-purple"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
