"use client";

import { AnimatePresence, motion, useScroll, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

/**
 * Sayfa aşağı kaydırılınca beliren, tıklayınca en üste dönen neon buton.
 */
export default function ScrollToTop() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (y) => setVisible(y > 600));
  }, [scrollY]);

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={toTop}
          aria-label="Yukarı dön"
          className="fixed bottom-24 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-accent/40 bg-surface/80 text-accent backdrop-blur-sm shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:bg-accent/10"
        >
          <FaArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
