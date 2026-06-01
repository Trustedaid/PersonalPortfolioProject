"use client";

import { FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiDotnet,
  SiPostgresql,
  SiMysql,
  SiAirtable,
  SiFlutter,
  SiGithubcopilot,
  SiRider,
  SiSharp,
  SiClaude,
  SiUnity,
  SiDocker,
  SiRedis,
  SiRabbitmq,
  SiMongodb,
  SiElasticsearch,
} from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";
import Reveal from "./motion/Reveal";
import Stagger from "./motion/Stagger";
import { slideLeft } from "../lib/motion";

type CategoryKey = "backend" | "frontend" | "database" | "mobile" | "tools" | "devtools";
const skills = [
  {
    category: "backend" as CategoryKey,
    items: [
      { name: ".NET Core", icon: <SiDotnet className="w-5 h-5 text-accent" /> },
      { name: "C#", icon: <SiSharp className="w-5 h-5 text-purple-400" /> },
      { name: "Python", icon: <FaPython className="w-5 h-5 text-purple-300" /> },
      { name: "RESTful API", icon: <AiOutlineApi className="w-5 h-5 text-accent" /> },
      { name: "Docker", icon: <SiDocker className="w-5 h-5 text-accent" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="w-5 h-5 text-orange-400" /> },
      { name: "ElasticSearch", icon: <SiElasticsearch className="w-5 h-5 text-accent" /> },
    ],
  },
  {
    category: "frontend" as CategoryKey,
    items: [
      { name: "React", icon: <FaReact className="w-5 h-5 text-accent" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-purple-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-accent" /> },
      { name: "HTML5", icon: <SiHtml5 className="w-5 h-5 text-orange-400" /> },
      { name: "CSS3", icon: <SiCss3 className="w-5 h-5 text-purple-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-yellow-400" /> },
    ],
  },
  {
    category: "database" as CategoryKey,
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 text-accent" /> },
      { name: "MSSQL", icon: <BsFillTerminalFill className="w-5 h-5 text-purple-400" /> },
      { name: "Airtable", icon: <SiAirtable className="w-5 h-5 text-yellow-400" /> },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-accent" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-accent" /> },
    ],
  },
  {
    category: "mobile" as CategoryKey,
    items: [
      { name: "MAUI", icon: <SiDotnet className="w-5 h-5 text-accent" /> },
      { name: "Flutter", icon: <SiFlutter className="w-5 h-5 text-accent" /> },
    ],
  },
  {
    category: "tools" as CategoryKey,
    items: [
      { name: "Claude Code", icon: <SiClaude className="w-5 h-5 text-accent" /> },
      { name: "Gemini", icon: <BsFillTerminalFill className="w-5 h-5 text-purple-400" /> },
      { name: "Windsurf", icon: <BsFillTerminalFill className="w-5 h-5 text-accent" /> },
      { name: "GitHub Copilot", icon: <SiGithubcopilot className="w-5 h-5 text-accent" /> },
      { name: "Chat GPT", icon: <BsFillTerminalFill className="w-5 h-5 text-accent" /> },
    ],
  },
  {
    category: "devtools" as CategoryKey,
    items: [
      { name: "Git", icon: <FaGitAlt className="w-5 h-5 text-orange-400" /> },
      { name: "Rider", icon: <SiRider className="w-5 h-5 text-purple-400" /> },
      { name: "Postman", icon: <BsFillTerminalFill className="w-5 h-5 text-orange-400" /> },
      { name: "Unity", icon: <SiUnity className="w-5 h-5 text-purple-300" /> },
      { name: "RedisInsight", icon: <SiRedis className="w-5 h-5 text-accent" /> },
    ],
  },
];

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section
      id="skills"
      className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient mb-12 text-center">
            {t.skills.title}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {skills.map((group, gi) => (
            <Reveal
              key={group.category}
              variants={slideLeft}
              delay={gi * 0.05}
              className="bg-surface/70 rounded-xl shadow p-8 flex flex-col items-center gap-6 neon-border backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold mb-2 text-text text-center">
                {(group.category === "backend" && "Backend") ||
                  (group.category === "frontend" && "Frontend") ||
                  t.skills.categories[
                    group.category as keyof typeof t.skills.categories
                  ] ||
                  group.category}
              </h3>
              <Stagger className="flex flex-wrap justify-center gap-3" stagger={0.06}>
                {group.items.map((item) => (
                  <Stagger.Item key={item.name} as="span">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-hi/80 text-text font-semibold text-sm border border-line hover:border-accent/60 hover:shadow-[0_0_16px_rgba(16,185,129,0.2)] hover:-translate-y-0.5 transition-all duration-300">
                      {item.icon}
                      {item.name}
                    </span>
                  </Stagger.Item>
                ))}
              </Stagger>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
