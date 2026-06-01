"use client";

import { FaAngular, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiDotnet, SiTailwindcss, SiPostgresql, SiRedis } from "react-icons/si";
import { FaFlutter } from "react-icons/fa6";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";
import Reveal from "./motion/Reveal";
import Stagger from "./motion/Stagger";
import TiltCard from "./motion/TiltCard";
import MagneticButton from "./motion/MagneticButton";

const projectsData = [
  {
    tech: [
      { name: "ASP.NET", icon: <SiDotnet className="w-4 h-4 text-accent" /> },
      { name: "React", icon: <FaReact className="w-4 h-4 text-accent" /> },
      { name: "Flutter", icon: <FaFlutter className="w-4 h-4 text-accent" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-accent" /> },
    ],
    demo: "https://cario.io/",
  },
  {
    tech: [
      { name: "ASP.NET", icon: <SiDotnet className="w-4 h-4 text-accent" /> },
      { name: "Flutter", icon: <FaFlutter className="w-4 h-4 text-accent" /> },
      { name: "React", icon: <FaReact className="w-4 h-4 text-accent" /> },
      { name: "Python", icon: <FaPython className="w-4 h-4 text-purple-300" /> },
    ],
    demo: "https://unilogistix.com/project/smartgatex/",
  },
  {
    tech: [
      { name: "Angular", icon: <FaAngular className="w-4 h-4 text-purple-400" /> },
      { name: "ASP.NET Core-7", icon: <SiDotnet className="w-4 h-4 text-accent" /> },
    ],
    demo: "https://github.com/Trustedaid/ETicaretAPI",
  },
  {
    tech: [
      { name: "React", icon: <FaReact className="w-4 h-4 text-accent" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
      { name: ".NET Core", icon: <SiDotnet className="w-4 h-4 text-accent" /> },
      { name: "MsSQL", icon: <SiPostgresql className="w-4 h-4 text-accent" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-accent" /> },
      {
        name: "MAUI (.NET Multi-platform App UI)",
        icon: <SiDotnet className="w-4 h-4 text-purple-400" />,
      },
    ],
    demo: "https://github.com/Trustedaid/FinancialTracker",
  },
  {
    tech: [
      { name: ".NET Core", icon: <SiDotnet className="w-4 h-4 text-accent" /> },
      { name: "React", icon: <FaReact className="w-4 h-4 text-accent" /> },
      { name: "ReactNative", icon: <FaReact className="w-4 h-4 text-accent" /> },
      { name: "Redis", icon: <SiRedis className="w-4 h-4 text-accent" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-accent" /> },
    ],
    demo: "https://github.com/Trustedaid/LapMate",
  },
  {
    tech: [
      { name: "React", icon: <FaReact className="w-4 h-4 text-accent" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-accent" /> },
    ],
    demo: "#",
  },
];

export default function Projects() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section
      id="projects"
      className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <Reveal className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6 text-gradient">
            {t.projects.title}
          </h2>
          <p className="text-xl text-text-sec max-w-3xl mx-auto">
            {t.projects.description}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-purple mx-auto rounded-full mt-6 shadow-[0_0_12px_rgba(16,185,129,0.5)]" />
        </Reveal>

        <Stagger
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          stagger={0.1}
        >
          {t.projects.projects.map((proj, idx) => (
            <Stagger.Item key={idx} className="h-full">
              <TiltCard className="group relative h-full overflow-hidden rounded-xl bg-surface/80 backdrop-blur-md border border-line hover:border-accent/50 shadow-lg hover:shadow-[0_20px_50px_-15px_rgba(16,185,129,0.25)] transition-colors duration-500 flex flex-col">
                {/* Üst neon çizgi */}
                <div className="absolute top-0 left-0 z-10 w-full h-0.5 bg-gradient-to-r from-accent to-purple scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="relative z-10 flex flex-col space-y-1.5 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="tracking-tight text-xl font-bold text-text group-hover:text-accent transition-colors duration-300">
                      {proj.title}
                    </h3>
                    <span className="w-3 h-3 rounded-full bg-accent opacity-60 group-hover:opacity-100 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)] transition-all" />
                  </div>
                  <p className="text-sm text-text-sec leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="relative z-10 p-6 pt-0 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {projectsData[idx].tech.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 px-3 py-1.5 bg-surface-hi/80 border border-line rounded-full text-xs font-medium text-text group-hover:border-accent/40 transition-colors duration-300"
                      >
                        {tech.icon}
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 items-center p-6 pt-0 flex gap-3 mt-auto">
                  <MagneticButton
                    href={projectsData[idx].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-gradient-to-r from-accent to-purple text-white h-9 rounded-md px-4 flex-1 shadow-[0_4px_20px_rgba(16,185,129,0.2)]"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    {t.projects.viewProject}
                  </MagneticButton>
                </div>
              </TiltCard>
            </Stagger.Item>
          ))}
        </Stagger>

        <Reveal className="text-center mt-12">
          <div className="bg-surface/60 neon-border rounded-2xl p-8 mb-6 backdrop-blur-sm">
            <div className="flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-accent mr-2 animate-float"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <h3 className="text-2xl font-bold text-text">{t.projects.moreProjects}</h3>
            </div>
            <p className="text-text-sec mb-6 max-w-2xl mx-auto">
              {t.projects.moreProjectsDescription}
            </p>
            <MagneticButton
              href="https://github.com/trustedaid"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap text-sm bg-transparent hover:bg-accent/10 h-11 border-2 border-accent/50 hover:border-accent text-accent px-8 py-3 rounded-2xl font-semibold transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-5 w-5"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              </svg>
              {t.projects.allProjectsGithub}
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
