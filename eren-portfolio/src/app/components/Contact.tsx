"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../hooks/LanguageContext";
import translations from "../data/translations";
import Reveal from "./motion/Reveal";
import Stagger from "./motion/Stagger";

type ContactDescKey = "linkedin" | "github" | "email";
const contactLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ernoguz/",
    icon: <FaLinkedin className="w-5 h-5 text-accent" />,
    descKey: "linkedin" as ContactDescKey,
  },
  {
    label: "GitHub",
    href: "https://github.com/trustedaid",
    icon: <FaGithub className="w-5 h-5 text-text" />,
    descKey: "github" as ContactDescKey,
  },
  {
    label: "Email",
    href: "mailto:erenoguz.developer@gmail.com",
    icon: <FaEnvelope className="w-5 h-5 text-accent" />,
    descKey: "email" as ContactDescKey,
  },
];

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  return (
    <section
      id="contact"
      className="relative w-full min-h-[50vh] flex flex-col items-center justify-center py-20 px-4 overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gradient mb-4 text-center">
            {t.contact.heading}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg text-text-sec mb-8 text-center max-w-xl">
            {t.contact.description}
          </p>
        </Reveal>

        <Reveal
          delay={0.15}
          className="bg-surface/80 rounded-2xl shadow-xl p-8 w-full flex flex-col gap-6 neon-border backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-2 text-center text-gradient">
            {t.contact.getInTouch}
          </h3>
          <Stagger className="flex flex-col gap-4" stagger={0.1}>
            {contactLinks.map((link) => (
              <Stagger.Item key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-surface-hi/70 border border-line hover:border-accent/50 hover:bg-accent/5 hover:translate-x-1 transition-all duration-300"
                >
                  {link.icon}
                  <span className="font-semibold text-text">{link.label}</span>
                  <span className="text-sm text-text-muted">
                    {t.contact[link.descKey as ContactDescKey]}
                  </span>
                </a>
              </Stagger.Item>
            ))}
          </Stagger>
        </Reveal>
      </div>
    </section>
  );
}
