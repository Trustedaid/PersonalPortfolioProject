import { FaGraduationCap } from "react-icons/fa";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";

export default function Education() {
	const { language } = useLanguage();
	const t = translations[language];
	return (
		<section id="education" className="relative w-full min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 bg-white/80 dark:bg-zinc-900/80 overflow-hidden">
			<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
				<h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center drop-shadow-lg">
					{t.education.title}
				</h2>
				<p className="text-lg text-gray-700 dark:text-zinc-200 mb-10 text-center max-w-2xl">
					{t.education.description}
				</p>
				<div className="flex flex-col gap-10 w-full">
					{t.education.education.map((edu, idx) => (
						<div
							key={idx}
							className="bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-xl p-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border border-zinc-100 dark:border-zinc-800"
						>
							<div className="flex-shrink-0 flex items-center justify-center mb-4 md:mb-0">
								<FaGraduationCap className="w-7 h-7 text-purple-600" />
							</div>
							<div className="flex-1 flex flex-col gap-1">
								<h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-1">
									{edu.degree}{" "}
									<span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 ml-2">
										{edu.status}
									</span>
								</h3>
								<div className="flex flex-wrap items-center gap-2 mb-2">
									<span className="font-semibold text-zinc-700 dark:text-zinc-200">
										{edu.field}
									</span>
									<span className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-semibold">
										{edu.school}
									</span>
									<span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-semibold">
										{edu.location}
									</span>
									<span className="text-xs px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 font-semibold">
										{edu.date}
									</span>
									<span className="text-xs px-2 py-1 rounded bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 font-semibold">
										GPA: {edu.gpa}
									</span>
								</div>
								<p className="text-zinc-700 dark:text-zinc-200 mb-2">
									{edu.description}
								</p>
							</div>
						</div>
					))}
				</div>
				{/* Topluluk Faaliyetleri başlığı ve listesi kaldırıldı */}
			</div>
		</section>
	);
}
