"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaPython } from "react-icons/fa";
import {
  SiDotnet,
  SiFlutter,
  SiPostgresql,
  SiAngular,
  SiSharp,
  SiNodedotjs,
} from "react-icons/si";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";
import MagneticButton from "./motion/MagneticButton";
import { ease } from "../lib/motion";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const reduce = useReducedMotion();

  const profile = {
    name: "Eren OĞUZ",
    title: language === "tr" ? "Yazılım Geliştirici" : "Software Developer",
  };

  const techIcons = [
    { icon: <SiDotnet className="w-8 h-8 text-accent" />, title: ".NET Core" },
    { icon: <SiNodedotjs className="w-8 h-8 text-accent" />, title: "Node.js" },
    { icon: <SiAngular className="w-8 h-8 text-purple-400" />, title: "Angular" },
    { icon: <SiSharp className="w-8 h-8 text-purple-400" />, title: "C#" },
    { icon: <SiFlutter className="w-8 h-8 text-accent" />, title: "Flutter" },
    { icon: <FaPython className="w-8 h-8 text-purple-300" />, title: "Python" },
    { icon: <SiPostgresql className="w-8 h-8 text-accent" />, title: "PostgreSQL" },
  ];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center z-10 px-4">
      <motion.div
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
        className="flex flex-col items-center"
      >
        <motion.h1
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gradient mb-4 text-center drop-shadow-[0_0_25px_rgba(16,185,129,0.25)]"
        >
          {t.hero.title.replace("{name}", profile.name)}
        </motion.h1>

        <motion.div variants={item}>
          <span className="inline-block px-5 py-1.5 rounded-full border border-accent/30 bg-surface/60 text-accent font-semibold text-base mb-3 shadow-[0_0_18px_rgba(16,185,129,0.15)] backdrop-blur-sm animate-neon-pulse">
            {profile.title}
          </span>
        </motion.div>

        <motion.p
          variants={item}
          className="text-text-sec text-lg md:text-xl max-w-2xl mt-4 mb-8 leading-relaxed text-center"
        >
          {t.hero.description}
        </motion.p>

        <motion.div variants={item}>
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center items-center mb-10">
            <MagneticButton
              href="/Eren-OGUZ_SoftwareDeveloper_Resume.pdf"
              download="Eren-OGUZ_SoftwareDeveloper_Resume.pdf"
              className="flex-1 text-center px-8 py-3 rounded-full bg-gradient-to-r from-accent to-purple text-white font-semibold shadow-[0_8px_30px_rgba(16,185,129,0.25)]"
            >
              {t.hero.projectsBtn}
            </MagneticButton>
            <MagneticButton
              href="mailto:erenoguz.developer@gmail.com"
              className="flex-1 text-center px-8 py-3 rounded-full border-2 border-accent/50 text-accent font-semibold bg-surface/40 backdrop-blur-sm hover:bg-accent/10 transition-colors"
            >
              {t.hero.contactBtn}
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div variants={item}>
          <div className="flex flex-wrap gap-5 items-center justify-center mb-8">
            {techIcons.map((tech, idx) => (
              <motion.div
                key={idx}
                title={tech.title}
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={
                  reduce
                    ? undefined
                    : {
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.2,
                      }
                }
                whileHover={{ scale: 1.25 }}
                className="p-2 rounded-xl hover:drop-shadow-[0_0_12px_rgba(16,185,129,0.5)] transition-all"
              >
                {React.cloneElement(tech.icon, { title: tech.title })}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center z-20"
        animate={reduce ? undefined : { y: [0, 10, 0] }}
        transition={
          reduce ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
        }
      >
        <svg
          className="w-8 h-8 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
