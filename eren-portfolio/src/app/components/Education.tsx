"use client";

import { FaGraduationCap } from "react-icons/fa";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";
import Reveal from "./motion/Reveal";
import Stagger from "./motion/Stagger";

export default function Education() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section
      id="education"
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient mb-4 text-center">
            {t.education.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-text-sec mb-10 text-center max-w-2xl">
            {t.education.description}
          </p>
        </Reveal>

        <Stagger className="flex flex-col gap-10 w-full" stagger={0.15}>
          {t.education.education.map((edu, idx) => (
            <Stagger.Item key={idx}>
              <div className="group bg-surface/80 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 neon-border backdrop-blur-sm hover:-translate-y-1 transition-transform duration-300">
                <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-accent/10 border border-accent/20 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-shadow">
                  <FaGraduationCap className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-accent mb-1">
                    {edu.degree}{" "}
                    <span className="text-sm font-semibold text-text-muted ml-2">
                      {edu.status}
                    </span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="font-semibold text-text">{edu.field}</span>
                    <span className="text-xs px-2 py-1 rounded bg-purple/15 text-purple-300 font-semibold">
                      {edu.school}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-surface-hi text-text-muted font-semibold">
                      {edu.location}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-surface-hi text-text-muted font-semibold">
                      {edu.date}
                    </span>
                    <span className="text-xs px-2 py-1 rounded bg-accent/15 text-accent font-semibold">
                      GPA: {edu.gpa}
                    </span>
                  </div>
                  <p className="text-text-sec mb-2">{edu.description}</p>
                </div>
              </div>
            </Stagger.Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
