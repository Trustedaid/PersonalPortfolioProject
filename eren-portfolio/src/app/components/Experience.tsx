"use client";

import { FaReact, FaPython } from "react-icons/fa";
import {
  SiNextdotjs,
  SiDotnet,
  SiTailwindcss,
  SiAntdesign,
  SiMaterialdesign,
  SiThreedotjs,
  SiDaisyui,
  SiGoogle,
  SiSlack,
  SiMoodle,
} from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";
import Reveal from "./motion/Reveal";
import { slideLeft, slideRight } from "../lib/motion";

const technologies = [
  [
    ".NET Core",
    "PostgreSQL",
    "EntityFramework Core",
    "ASP.NET Core",
    "RESTful API",
    "Serilog",
    "JWT",
    "Unit Testing",
    "Jenkins",
    "Repository Design Pattern",
  ],
  [
    "C#",
    "Unity",
    "Algorithms",
    "AI Navigation",
    "Game Mechanics",
    "User Interface Design",
    "Version Control (Git)",
    "Unity Asset Store",
  ],
];

const techIcons: Record<string, React.ReactNode> = {
  React: <FaReact className="w-5 h-5 text-accent" />,
  "Next.js": <SiNextdotjs className="w-5 h-5 text-white" />,
  ".NET Core": <SiDotnet className="w-5 h-5 text-accent" />,
  SQL: <BsFillTerminalFill className="w-5 h-5 text-accent" />,
  "Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-accent" />,
  "Ant Design": <SiAntdesign className="w-5 h-5 text-purple-400" />,
  "Material UI": <SiMaterialdesign className="w-5 h-5 text-accent" />,
  "API Integration": <TbApi className="w-5 h-5 text-accent" />,
  "Three.js": <SiThreedotjs className="w-5 h-5 text-white" />,
  Daisyui: <SiDaisyui className="w-5 h-5 text-purple-300" />,
  "Google Workspace": <SiGoogle className="w-5 h-5 text-accent" />,
  Slack: <SiSlack className="w-5 h-5 text-purple-400" />,
  Moodle: <SiMoodle className="w-5 h-5 text-orange-400" />,
  "System Administration": <BsFillTerminalFill className="w-5 h-5 text-text-sec" />,
  Py: <FaPython className="w-5 h-5 text-purple-300" />,
  "Video Production": <BsFillTerminalFill className="w-5 h-5 text-purple-400" />,
  Training: <BsFillTerminalFill className="w-5 h-5 text-accent" />,
  Mentoring: <BsFillTerminalFill className="w-5 h-5 text-accent" />,
  "Data Science": <BsFillTerminalFill className="w-5 h-5 text-accent" />,
  "Team Leadership": <BsFillTerminalFill className="w-5 h-5 text-purple-400" />,
  Education: <BsFillTerminalFill className="w-5 h-5 text-purple-300" />,
};

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language];
  const reduce = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 60%"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="experience"
      className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient mb-4 text-center">
            {t.experience.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-text-sec mb-14 text-center max-w-2xl">
            {t.experience.description}
          </p>
        </Reveal>

        <div ref={timelineRef} className="relative w-full">
          {/* Dikey timeline çizgisi (sol tarafta md altında, ortada md üstünde) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-line">
            <motion.div
              style={{ scaleY: reduce ? 1 : lineScale }}
              className="absolute inset-0 origin-top bg-gradient-to-b from-accent-glow via-accent to-purple shadow-[0_0_12px_rgba(16,185,129,0.5)]"
            />
          </div>

          <div className="flex flex-col gap-14 w-full">
            {t.experience.experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <Reveal
                  key={idx}
                  variants={isLeft ? slideRight : slideLeft}
                  className={`relative pl-12 md:pl-0 md:w-1/2 ${
                    isLeft ? "md:pr-12 md:self-start md:text-right" : "md:pl-12 md:self-end"
                  }`}
                >
                  {/* Nokta */}
                  <span
                    className={`absolute top-6 left-4 md:left-auto h-4 w-4 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_14px_rgba(16,185,129,0.8)] ring-4 ring-base ${
                      isLeft ? "md:-right-2 md:left-auto md:translate-x-1/2" : "md:-left-2 md:translate-x-[-50%]"
                    }`}
                  />
                  <div className="bg-surface/80 rounded-2xl shadow-2xl p-8 neon-border backdrop-blur-sm text-left">
                    <h3 className="text-2xl font-extrabold text-accent mb-1 tracking-tight">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="font-semibold text-text text-base">
                        {exp.company}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-semibold tracking-wide">
                        {exp.type}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-surface-hi text-text-muted font-semibold tracking-wide">
                        {exp.location}
                      </span>
                      <span className="text-xs px-2 py-1 rounded bg-surface-hi text-text-muted font-semibold tracking-wide">
                        {exp.date}
                      </span>
                    </div>
                    <p className="text-text-sec mb-4 text-base md:text-lg leading-relaxed">
                      {exp.description}
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-text-sec space-y-2 text-base md:text-lg">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="leading-snug">
                          {ach}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {technologies[idx].map((tech) => (
                        <span
                          key={tech}
                          className="flex items-center gap-1 px-3 py-1 rounded-full bg-surface-hi/80 text-text font-semibold text-xs border border-line"
                        >
                          {techIcons[tech]}
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
