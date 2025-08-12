import MatrixBackground from "./MatrixBackground";
import {FaAngular, FaPython, FaReact} from "react-icons/fa";
import {SiNextdotjs, SiDotnet, SiTailwindcss, SiPostgresql, SiVuedotjs} from "react-icons/si";
import {FaFlutter} from "react-icons/fa6";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";

const projectsData = [
	{
		tech: [
			{ name: "ASP.NET", icon: <SiDotnet className="w-4 h-4 text-cyan-400" /> },
			{ name: "React", icon: <FaReact className="w-4 h-4 text-blue-500" /> },
			{ name: "Flutter", icon: <FaFlutter className="w-4 h-4 text-cyan-400" /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-cyan-400" /> },
		],
		demo: "https://cario.io/",
	},
	{
		tech: [
			{ name: "ASP.NET", icon: <SiDotnet className="w-4 h-4 text-cyan-400" /> },
			{ name: "Flutter", icon: <FaFlutter className="w-4 h-4 text-cyan-400" /> },
			{ name: "React", icon: <FaReact className="w-4 h-4 text-cyan-400" /> },
			{ name: "Python", icon: <FaPython className="w-4 h-4 text-blue-500" /> },
		],
		demo: "https://unilogistix.com/project/smartgatex/",
	},
	{
		tech: [
			{ name: "Angular", icon: <FaAngular className="w-4 h-4 text-red-500" /> },
			{ name: "ASP.NET Core-7", icon: <SiDotnet className="w-4 h-4 text-cyan-400" /> },
		],
		demo: "https://github.com/Trustedaid/ETicaretAPI",
	},
	{
		tech: [
			{ name: "React", icon: <FaReact className="w-4 h-4 text-blue-500" /> },
			{ name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-zinc-800 dark:text-white" /> },
			{ name: ".NET Core", icon: <SiDotnet className="w-4 h-4 text-blue-700" /> },
			{ name: "MsSQL", icon: <SiPostgresql className="w-4 h-4 text-blue-700" /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-cyan-400" /> },
			{ name:  "MAUI (.NET Multi-platform App UI)", icon: <SiDotnet className="w-4 h-4 text-red-700" /> ,}
		],
		demo: "#",
	},
	{
		tech: [
			{ name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-cyan-400" /> },
			{ name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-zinc-800 dark:text-white" /> },
			{ name: ".NET Core", icon: <SiDotnet className="w-4 h-4 text-blue-700" /> },
			{ name: "VueJs", icon: <SiVuedotjs className="w-4 h-4 text-green-900" /> },

		],
		demo: "#",
	},
	{
		tech: [
			{ name: "React", icon: <FaReact className="w-4 h-4 text-blue-500" /> },
			{ name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-cyan-400" /> },
		],
		demo: "#",
	},
];

export default function Projects() {
	const { language } = useLanguage();
	const t = translations[language];
	return (
		<section id="projects" className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden bg-white/80 dark:bg-zinc-900/80">
			{/* Matrix arka plan */}
			<div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
				<MatrixBackground />
			</div>
			<div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
				<div className="text-center mb-16 scroll-reveal">
					<h2 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-6 animate-fade-in-up">
						<span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent animate-gradient">{t.projects.title}</span>
					</h2>
					<p className="text-xl text-gray-700 dark:text-zinc-200 max-w-3xl mx-auto animate-fade-in-up delay-200">
						{t.projects.description}
					</p>
					<div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto rounded-full mt-6 animate-scale-in delay-300"></div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
					{t.projects.projects.map((proj, idx) => (
						<div key={idx} className={`rounded-lg border text-card-foreground shadow-lg bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-gray-200/50 dark:border-gray-700/50 hover:border-indigo-500/70 transition-all duration-500 h-full group overflow-hidden relative flex flex-col hover-glow animate-scale-in delay-${idx * 100} hover:shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-2`}>
							<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
							<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

							<div className="flex flex-col space-y-1.5 p-6 relative">
								<div className="flex items-center justify-between mb-2">
									<h3 className="tracking-tight text-xl font-bold text-zinc-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 animate-fade-in-up">
										{proj.title}
									</h3>
									<div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 opacity-60 group-hover:opacity-100 animate-pulse"></div>
								</div>
								<p className="text-sm text-zinc-700 dark:text-gray-300 leading-relaxed group-hover:text-zinc-600 dark:group-hover:text-gray-200 transition-colors duration-300">{proj.description}</p>
							</div>

							<div className="p-6 pt-0 relative flex-1">
								<div className="flex flex-wrap gap-2">
									{projectsData[idx].tech.map((tech, i) => (
										<span key={i} className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-700 border border-zinc-200/50 dark:border-zinc-600/50 rounded-full text-xs font-medium text-zinc-700 dark:text-zinc-100 group-hover:border-indigo-400/50 group-hover:bg-gradient-to-r group-hover:from-indigo-50/50 group-hover:to-purple-50/50 dark:group-hover:from-indigo-900/20 dark:group-hover:to-purple-900/20 transition-all duration-300 hover-scale">
											{tech.icon}
											{tech.name}
										</span>
									))}
								</div>
							</div>

							<div className="items-center p-6 pt-0 flex gap-3 relative mt-auto">
								<a href={projectsData[idx].demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white h-9 rounded-md px-3 flex-1 group/btn hover-scale shadow-md hover:shadow-lg animate-glow">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-globe mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
									{t.projects.viewProject}
								</a>
							</div>
						</div>
					))}
				</div>

				<div className="text-center mt-12 scroll-reveal">
					<div className="bg-gradient-to-r from-indigo-500/10 to-pink-500/10 border border-indigo-500/30 rounded-2xl p-8 mb-6 backdrop-blur-sm hover-glow transition-all duration-500 hover:border-indigo-500/50 animate-scale-in">
						<div className="flex items-center justify-center mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-6 w-6 text-yellow-400 mr-2 animate-float"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
							<h3 className="text-2xl font-bold text-zinc-900 dark:text-gray-100 animate-fade-in-up">{t.projects.moreProjects}</h3>
						</div>
						<p className="text-zinc-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto animate-fade-in-up delay-200">{t.projects.moreProjectsDescription}</p>
						<a href="https://github.com/trustedaid" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-transparent hover:bg-indigo-50 dark:hover:bg-indigo-950/30 h-11 border-2 border-indigo-500 hover:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 px-8 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover-scale group animate-pulse-glow">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
							{t.projects.allProjectsGithub}
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
