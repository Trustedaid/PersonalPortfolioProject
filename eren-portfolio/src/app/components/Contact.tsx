import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";

type ContactDescKey = "linkedin" | "github" | "email";
const contactLinks = [
	{
		label: "LinkedIn",
		href: "https://www.linkedin.com/in/ernoguz/",
		icon: <FaLinkedin className="w-5 h-5 text-blue-600" />,
		descKey: "linkedin" as ContactDescKey,
	},
	{
		label: "GitHub",
		href: "https://github.com/trustedaid",
		icon: <FaGithub className="w-5 h-5 text-zinc-800 dark:text-zinc-100" />,
		descKey: "github" as ContactDescKey,
	},
	{
		label: "Email",
		href: "mailto:erenoguz.developer@gmail.com",
		icon: <FaEnvelope className="w-5 h-5 text-green-600" />,
		descKey: "email" as ContactDescKey,
	},
];

export default function Contact() {
	const { language } = useLanguage();
	const t = translations[language];
	return (
		<section
			id="contact"
			className="relative w-full min-h-[50vh] flex flex-col items-center justify-center py-20 px-4 bg-white/80 dark:bg-zinc-900/80 overflow-hidden"
		>
			<div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
				<h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 text-center drop-shadow-lg">
					{t.contact.heading}
				</h2>
				<p className="text-lg text-gray-700 dark:text-zinc-200 mb-8 text-center max-w-xl">
					{t.contact.description}
				</p>
				<div className="bg-white/90 dark:bg-zinc-900/90 rounded-2xl shadow-xl p-8 w-full flex flex-col gap-6 border border-zinc-100 dark:border-zinc-800">
					<h3 className="text-2xl font-bold mb-2 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
						{t.contact.getInTouch}
					</h3>
					<div className="flex flex-col gap-4">
						{contactLinks.map((link) => (
							<a
								key={link.label}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center gap-3 px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-blue-950 transition-colors"
							>
								{link.icon}
								<span className="font-semibold">{link.label}</span>
								<span className="text-sm text-zinc-500 dark:text-zinc-300">
									{t.contact[link.descKey as ContactDescKey]}
								</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
