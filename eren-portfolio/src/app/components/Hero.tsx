import React from "react";
import { FaPython } from "react-icons/fa";
import {
  SiDotnet,
  SiFlutter,
  SiPostgresql,
  SiAngular,
  SiSharp,
  SiNodedotjs
} from "react-icons/si";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];

  // Profile verisini doğrudan tanımla
  const profile = {
    name: "Eren OĞUZ",
    title: language === "tr" ? "Yazılım Geliştirici" : "Software Developer"
  };

  // Teknoloji ikonlarını ve başlıklarını sabit tanımla
  const techIcons = [
    { icon: <SiDotnet className="w-8 h-8 text-blue-700 hover-scale transition-transform duration-300" />, title: ".NET Core" },
    { icon: <SiNodedotjs className="w-8 h-8 text-green-600 hover-scale transition-transform duration-300" />, title: "Node.js" },
    { icon: <SiAngular className="w-8 h-8 text-red-500 hover-scale transition-transform duration-300" />, title: "Angular" },
    { icon: <SiSharp className="w-8 h-8 text-purple-600 hover-scale transition-transform duration-300" />, title: "C#" },
    { icon: <SiFlutter className="w-8 h-8 text-sky-500 hover-scale transition-transform duration-300" />, title: "Flutter" },
    { icon: <FaPython className="w-8 h-8 text-yellow-600 hover-scale transition-transform duration-300" />, title: "Python" },
    { icon: <SiPostgresql className="w-8 h-8 text-blue-500 hover-scale transition-transform duration-300" />, title: "PostgreSQL" },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center z-10 px-4 bg-white/80 dark:bg-zinc-900/80 transition-colors duration-300">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center drop-shadow-lg animate-gradient">
          {t.hero.title.replace("{name}", profile.name)}
        </h1>
      </div>

      <div className="animate-fade-in-up delay-200">
        <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-blue-700 dark:text-blue-300 font-semibold text-base mb-3 shadow text-center animate-pulse-glow">
          {profile.title}
        </span>
      </div>

      <div className="animate-fade-in-up delay-300">
        <p className="text-zinc-700 dark:text-zinc-200 text-lg md:text-xl max-w-2xl mb-6 leading-relaxed text-center">
          <br />
          <br />
          {t.hero.description}
        </p>
      </div>

      <div className="animate-fade-in-up delay-400">
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center items-center mb-6">
          <a
            href="/Eren-OGUZ_Software-Engineer_Resume.pdf"
            download="Eren-OGUZ_Software-Engineer_Resume.pdf"
            className="flex-1 text-center px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 hover-glow animate-glow"
          >
            {t.hero.projectsBtn}
          </a>
          <a
            href="#contact"
            className="flex-1 text-center px-8 py-3 rounded-full border-2 border-blue-500 text-blue-700 dark:text-blue-300 font-semibold bg-white/60 dark:bg-zinc-900/60 hover:bg-blue-50 dark:hover:bg-blue-950 transition-all duration-300 shadow hover-scale"
          >
            {t.hero.contactBtn}
          </a>
        </div>
      </div>
<br/>
      <div className="animate-fade-in-up delay-500">
        <div className="flex flex-wrap gap-4 items-center justify-center mb-8">
          {techIcons.map((tech, idx) => (
            <div key={idx} className={`animate-float delay-${(idx + 1) * 100}`}>
              {React.cloneElement(tech.icon, { title: tech.title })}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20 animate-fade-in-up delay-500">
        <span className="animate-bounce">
          <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </div>
    </section>
  );
}
