import type { Variants, Transition } from "framer-motion";

// "expo-out" hissi veren standart easing
export const ease = [0.22, 1, 0.36, 1] as const;

// Yumuşak spring (mıknatıs/tilt etkileşimleri için)
export const spring: Transition = { type: "spring", stiffness: 120, damping: 18 };

// Tekrar kullanılabilir variant'lar
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
};

// Alt elemanları sırayla canlandıran konteyner
export const staggerContainer = (stagger = 0.12, delay = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
});

// Stagger içindeki tekil eleman
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

// whileInView için ortak viewport ayarı
export const viewport = { once: true, margin: "-80px" } as const;
