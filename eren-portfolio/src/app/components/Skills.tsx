import MatrixBackground from "./MatrixBackground";
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
   SiRider, SiSharp, SiClaude, SiUnity,
  SiDocker,
  SiRedis,
  SiRabbitmq,
  SiMongodb,
  SiElasticsearch
} from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";
import { AiOutlineApi } from "react-icons/ai";
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";

type CategoryKey = "backend" | "frontend" | "database" | "mobile" | "tools" | "devtools";
const skills = [
  {
    category: "backend" as CategoryKey,
    items: [
      { name: ".NET Core", icon: <SiDotnet className="w-5 h-5 text-blue-700" /> },
      { name: "C#", icon: <SiSharp className="w-5 h-5 text-purple-700" /> },
      { name: "Python", icon: <FaPython className="w-5 h-5 text-yellow-500" /> },
      { name: "RESTful API", icon: <AiOutlineApi className="w-5 h-5 text-green-600" /> },
      { name: "Docker", icon: <SiDocker className="w-5 h-5 text-blue-500" /> },
      { name: "RabbitMQ", icon: <SiRabbitmq className="w-5 h-5 text-orange-500" /> },
      { name: "ElasticSearch", icon: <SiElasticsearch className="w-5 h-5 text-orange-700" /> },
    ],
  },
  {
    category: "frontend" as CategoryKey,
    items: [
      { name: "React", icon: <FaReact className="w-5 h-5 text-blue-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-5 h-5 text-zinc-800 dark:text-white" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-5 h-5 text-blue-700" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-5 h-5 text-cyan-400" /> },
      { name: "HTML5", icon: <SiHtml5 className="w-5 h-5 text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="w-5 h-5 text-blue-600" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-5 h-5 text-yellow-400" /> },
    ],
  },
  {
    category: "database" as CategoryKey,
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5 text-blue-900" /> },
      { name: "MSSQL", icon: <BsFillTerminalFill className="w-5 h-5 text-blue-700" /> },
      { name: "Airtable", icon: <SiAirtable className="w-5 h-5 text-yellow-500" /> },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5 text-blue-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-5 h-5 text-green-700" /> },
    ],
  },
  {
    category: "mobile" as CategoryKey,
    items: [
      { name: "MAUI", icon: <SiDotnet className="w-5 h-5 text-cyan-700" /> },
      { name: "Flutter", icon: <SiFlutter className="w-5 h-5 text-sky-500" /> },
    ],
  },
  {
    category: "tools" as CategoryKey,
    items: [
      { name: "Claude Code", icon: <SiClaude className="w-5 h-5 text-green-500" /> },
      { name: "Gemini", icon: <BsFillTerminalFill className="w-5 h-5 text-purple-500" /> },
      { name: "Windsurf", icon: <BsFillTerminalFill className="w-5 h-5 text-blue-400" /> },
      { name: "GitHub Copilot", icon: <SiGithubcopilot className="w-5 h-5 text-green-400" /> },
      { name: "Chat GPT", icon: <BsFillTerminalFill className="w-5 h-5 text-emerald-500" /> },
    ],
  },
  {
    category: "devtools" as CategoryKey,
    items: [
      { name: "Git", icon: <FaGitAlt className="w-5 h-5 text-orange-500" /> },
      { name: "Rider", icon: <SiRider className="w-5 h-5 text-blue-500" /> },
      { name: "Postman", icon: <BsFillTerminalFill className="w-5 h-5 text-orange-400" /> },
      { name: "Unity", icon: <SiUnity className="w-5 h-5 text-pink-500" /> },
      { name: "RedisInsight", icon: <SiRedis className="w-5 h-5 text-red-500" /> },
    ],
  },
];

export default function Skills() {
  const { language } = useLanguage();
  const t = translations[language];
  useScrollReveal();
  return (
    <section id="skills" className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 bg-white/80 dark:bg-zinc-900/80 overflow-hidden">
      {/* Matrix arka plan */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
        <MatrixBackground />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center drop-shadow-lg">
          {t.skills.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {skills.map((group) => (
            <div key={group.category} className="bg-white/80 dark:bg-zinc-900/80 rounded-xl shadow p-8 flex flex-col items-center gap-6">
              <h3 className="text-xl font-bold mb-2 text-zinc-700 dark:text-zinc-200 text-center">
                {(group.category === "backend" && "Backend") ||
                 (group.category === "frontend" && "Frontend") ||
                 t.skills.categories[group.category as keyof typeof t.skills.categories] || group.category}
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-semibold text-sm shadow hover:shadow-lg transition-transform duration-200 hover:scale-105 border border-zinc-200 dark:border-zinc-700"
                  >
                    {item.icon}
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
