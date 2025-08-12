import {FaReact, FaRobot, FaCode, FaDocker, FaJira, FaCloud} from "react-icons/fa";
import {SiFastapi} from "react-icons/si";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";
import MatrixBackground from "./MatrixBackground";

export default function AboutMe() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 bg-white/80 dark:bg-zinc-900/80 transition-colors duration-300">
      {/* Matrix arka plan */}
      <MatrixBackground />
      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center justify-center py-16 px-6 rounded-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6 text-center drop-shadow-lg">
          {t.about.title}
        </h1>
        <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-blue-700 dark:text-blue-300 font-semibold text-base mb-6 shadow text-center">
          {t.about.career}
        </span>

        <div className="bg-white/70 dark:bg-zinc-900/70 rounded-xl p-8 shadow-lg border border-zinc-100 dark:border-zinc-800 mb-8 max-w-3xl mx-auto">
          {(t.about.descriptionParts ?? [t.about.description]).map((part: string, idx: number) => (
            <p key={idx} className="text-zinc-700 dark:text-zinc-200 text-lg md:text-xl leading-relaxed text-center mb-4 last:mb-0">
              {part}
            </p>
          ))}
        </div>
        <div className="w-full flex flex-col items-center gap-8">
          <h2 className="text-2xl font-bold mb-2 text-center">{t.about.passionsTitle}</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {t.about.passions.map((passion, idx) => (
              <span key={idx} className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold text-sm shadow">{passion}</span>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {t.about.cards.map((card, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center bg-white/70 dark:bg-zinc-800/70 rounded-xl p-6 md:p-8 shadow hover:scale-105 hover:shadow-xl transition-transform duration-200 text-center min-h-[200px]">
                {/* İkonlar sabit kalabilir, metinler dinamik */}
                {idx === 0 && <FaCode className="w-8 h-8 mb-2 text-blue-600 dark:text-blue-300" />}
                {idx === 1 && <FaReact className="w-8 h-8 mb-2 text-blue-500" />}
                {idx === 2 && <FaDocker className="w-8 h-8 mb-2 text-blue-500" />}
                {idx === 3 && <FaReact className="w-8 h-8 mb-2 text-blue-500" />}
                {idx === 4 && <FaRobot className="w-8 h-8 mb-2 text-green-500 dark:text-green-300" />}
                {idx === 5 && <SiFastapi className="w-8 h-8 mb-2 text-zinc-800 dark:text-white" />}
                {idx === 6 && <FaJira className="w-8 h-8 mb-2 text-zinc-800 dark:text-white" />}
                {idx === 7 && <FaCloud className="w-8 h-8 mb-2 text-zinc-800 dark:text-white" />}
                <span className="text-lg md:text-xl font-bold mb-1">{card.title}</span>
                <p className="text-gray-700 dark:text-zinc-200 text-center text-sm md:text-base">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
