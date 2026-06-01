"use client";

import { FaReact, FaRobot, FaCode, FaDocker, FaJira, FaCloud } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";
import Reveal from "./motion/Reveal";
import Stagger from "./motion/Stagger";

export default function AboutMe() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4">
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center py-16 px-6 rounded-2xl">
        <Reveal>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gradient mb-6 text-center">
            {t.about.title}
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="inline-block px-4 py-1 rounded-full border border-accent/30 bg-surface/60 text-accent font-semibold text-base mb-6 shadow-[0_0_18px_rgba(16,185,129,0.12)] backdrop-blur-sm text-center">
            {t.about.career}
          </span>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="bg-surface/70 rounded-xl p-8 shadow-lg neon-border mb-8 max-w-3xl mx-auto backdrop-blur-sm">
            {(t.about.descriptionParts ?? [t.about.description]).map(
              (part: string, idx: number) => (
                <p
                  key={idx}
                  className="text-text-sec text-lg md:text-xl leading-relaxed text-center mb-4 last:mb-0"
                >
                  {part}
                </p>
              )
            )}
          </div>
        </Reveal>

        <div className="w-full flex flex-col items-center gap-8">
          <Reveal>
            <h2 className="text-2xl font-bold mb-2 text-center text-text">
              {t.about.passionsTitle}
            </h2>
          </Reveal>

          <Stagger className="flex flex-wrap justify-center gap-4 mb-6">
            {t.about.passions.map((passion, idx) => (
              <Stagger.Item key={idx} as="span">
                <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-accent to-purple text-white font-semibold text-sm shadow-[0_4px_20px_rgba(16,185,129,0.2)]">
                  {passion}
                </span>
              </Stagger.Item>
            ))}
          </Stagger>

          <Stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
            stagger={0.1}
          >
            {t.about.cards.map((card, idx) => (
              <Stagger.Item key={idx}>
                <div className="flex flex-col items-center justify-center bg-surface/70 rounded-xl p-6 md:p-8 shadow neon-border hover:-translate-y-1.5 transition-transform duration-300 text-center min-h-[200px] backdrop-blur-sm h-full">
                  {idx === 0 && <FaCode className="w-8 h-8 mb-2 text-accent" />}
                  {idx === 1 && <FaReact className="w-8 h-8 mb-2 text-accent" />}
                  {idx === 2 && <FaDocker className="w-8 h-8 mb-2 text-purple-400" />}
                  {idx === 3 && <FaReact className="w-8 h-8 mb-2 text-accent" />}
                  {idx === 4 && <FaRobot className="w-8 h-8 mb-2 text-accent" />}
                  {idx === 5 && <SiFastapi className="w-8 h-8 mb-2 text-purple-300" />}
                  {idx === 6 && <FaJira className="w-8 h-8 mb-2 text-purple-400" />}
                  {idx === 7 && <FaCloud className="w-8 h-8 mb-2 text-accent" />}
                  <span className="text-lg md:text-xl font-bold mb-1 text-text">
                    {card.title}
                  </span>
                  <p className="text-text-sec text-center text-sm md:text-base">
                    {card.description}
                  </p>
                </div>
              </Stagger.Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
