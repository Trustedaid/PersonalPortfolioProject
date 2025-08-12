import { FaReact, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiDotnet, SiTailwindcss, SiAntdesign, SiMaterialdesign, SiThreedotjs, SiDaisyui, SiGoogle, SiSlack, SiMoodle } from "react-icons/si";
import { BsFillTerminalFill } from "react-icons/bs";
import { TbApi } from "react-icons/tb";
import React from "react";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";

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
	React: <FaReact className="w-5 h-5 text-blue-500" />,
	"Next.js": <SiNextdotjs className="w-5 h-5 text-zinc-800 dark:text-white" />,
	".NET Core": <SiDotnet className="w-5 h-5 text-blue-700" />,
	SQL: <BsFillTerminalFill className="w-5 h-5 text-blue-700" />,
	"Tailwind CSS": <SiTailwindcss className="w-5 h-5 text-cyan-400" />,
	"Ant Design": <SiAntdesign className="w-5 h-5 text-purple-500" />,
	"Material UI": <SiMaterialdesign className="w-5 h-5 text-blue-500" />,
	"API Integration": <TbApi className="w-5 h-5 text-green-600" />,
	"Three.js": <SiThreedotjs className="w-5 h-5 text-black dark:text-white" />,
	"Daisyui": <SiDaisyui className="w-5 h-5 text-pink-400" />,
	"Google Workspace": <SiGoogle className="w-5 h-5 text-blue-500" />,
	"Slack": <SiSlack className="w-5 h-5 text-pink-500" />,
	"Moodle": <SiMoodle className="w-5 h-5 text-orange-500" />,
	"System Administration": (
		<BsFillTerminalFill className="w-5 h-5 text-zinc-700 dark:text-zinc-200" />
	),
	Py: <FaPython className="w-5 h-5 text-yellow-500" />,
	"Video Production": <BsFillTerminalFill className="w-5 h-5 text-red-500" />,
	Training: <BsFillTerminalFill className="w-5 h-5 text-green-500" />,
	Mentoring: <BsFillTerminalFill className="w-5 h-5 text-emerald-500" />,
	"Data Science": <BsFillTerminalFill className="w-5 h-5 text-blue-400" />,
	"Team Leadership": <BsFillTerminalFill className="w-5 h-5 text-purple-700" />,
	Education: <BsFillTerminalFill className="w-5 h-5 text-pink-500" />,
};

export default function Experience() {
	const { language } = useLanguage();
	const t = translations[language];
	return (
		<section
			id="experience"
			className="relative w-full min-h-[80vh] flex flex-col items-center justify-center py-20 px-4 bg-white/80 dark:bg-zinc-900/80 overflow-hidden"
		>
			<div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center">
				<h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center drop-shadow-lg">
					{t.experience.title}
				</h2>
				<p className="text-lg text-gray-700 dark:text-zinc-200 mb-10 text-center max-w-2xl">
					{t.experience.description}
				</p>
				<div className="flex flex-col gap-14 w-full">
					{t.experience.experiences.map((exp, idx) => (
						<div
							key={idx}
							className="bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 transition-transform duration-200 hover:scale-[1.025] hover:shadow-3xl border border-zinc-100 dark:border-zinc-800"
						>
							<div className="flex-1 flex flex-col gap-2">
								<h3 className="text-2xl font-extrabold text-blue-700 dark:text-blue-300 mb-1 tracking-tight">
									{exp.title}
								</h3>
								<div className="flex flex-wrap items-center gap-2 mb-3">
									<span className="font-semibold text-zinc-700 dark:text-zinc-200 text-base">
										{exp.company}
									</span>
									<span className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold tracking-wide">
										{exp.type}
									</span>
									<span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-semibold tracking-wide">
										{exp.location}
									</span>
									<span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-semibold tracking-wide">
										{exp.date}
									</span>
								</div>
								<p className="text-zinc-700 dark:text-zinc-200 mb-4 text-base md:text-lg leading-relaxed">
									{exp.description}
								</p>
								<ul className="list-disc pl-6 mb-4 text-zinc-700 dark:text-zinc-200 space-y-2 text-base md:text-lg">
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
											className="flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100 font-semibold text-xs shadow border border-zinc-200 dark:border-zinc-700"
										>
											{techIcons[tech]}
											{tech}
										</span>
									))}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
