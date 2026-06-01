"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "./hooks/LanguageContext";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = ["about", "skills", "experience", "education", "projects", "contact"];


interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS_TR: NavLink[] = [
  { label: "Hakkımda", href: "#about" },
  { label: "Yetenekler", href: "#skills" },
  { label: "Deneyim", href: "#experience" },
  { label: "Eğitim", href: "#education" },
  { label: "Projeler", href: "#projects" },
  { label: "İletişim", href: "#contact" },
];
const NAV_LINKS_EN: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const { language, setLanguage } = useLanguage();
  const NAV_LINKS = language === "tr" ? NAV_LINKS_TR : NAV_LINKS_EN;
  const activeSection = useActiveSection(SECTION_IDS);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-base/70 backdrop-blur-md border-b border-line shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center px-4 py-3 md:py-2">
        {/* Logo - sola hizalı */}
        <div className="flex flex-col items-start mr-auto">
          <a href="#" className="font-extrabold text-xl tracking-tight text-gradient select-none">Eren OĞUZ</a>
          <span className="text-xs font-medium text-text-muted mt-1">Back-End Developer</span>
        </div>
        {/* Desktop links - ortada */}
        <div className="hidden md:flex gap-2 lg:gap-6 mx-auto">
          {NAV_LINKS.map((link: NavLink) => {
            const isActive = link.href === `#${activeSection}`;
            return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? "true" : undefined}
              className={`nav-underline relative px-3 py-1.5 font-medium transition-colors duration-200 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md ${
                isActive ? "text-accent" : "text-text-sec"
              }`}
              onClick={e => {
                const targetId = link.href.replace('#', '');
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                  e.preventDefault();
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                  setOpen(false); // Menü açıksa kapat
                }
              }}
            >
              {link.label}
            </a>
            );
          })}
        </div>
        {/* Dil seçici - sağa hizalı */}
        <div className="flex items-center gap-4 ml-auto">
          <button
            className={`px-2 py-1 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${language === "tr" ? "border-accent bg-accent/20 shadow-[0_0_12px_rgba(16,185,129,0.3)]" : "border-line bg-surface-hi opacity-70 hover:opacity-100"}`}
            onClick={() => setLanguage("tr")}
            aria-label="Türkçe"
          >
            <img src="/tr.svg" alt="Türkçe" className="w-6 h-4" />
          </button>
          <button
            className={`px-2 py-1 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${language === "en" ? "border-accent bg-accent/20 shadow-[0_0_12px_rgba(16,185,129,0.3)]" : "border-line bg-surface-hi opacity-70 hover:opacity-100"}`}
            onClick={() => setLanguage("en")}
            aria-label="English"
          >
            <img src="/gb.svg" alt="English" className="w-6 h-4" />
          </button>
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-12 h-12 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label="Menüyü Aç"
          onClick={() => setOpen(!open)}
          type="button"
        >
          <span className="sr-only">Menüyü Aç</span>
          <div className="space-y-1">
            <span className={`block h-1 w-8 bg-accent transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-1 w-8 bg-accent transition-opacity ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 w-8 bg-accent transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      {/* Mobil menü — glassmorphism panel + bulanık mozaik overlay */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-40 flex md:hidden">
            {/* Bulanık mozaik overlay: arkadaki içeriği yumuşatır */}
            <motion.div
              className="absolute inset-0 z-10 bg-base/40 backdrop-blur-xl backdrop-saturate-150"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: reduce ? 0 : 0.3 }}
              onClick={() => setOpen(false)}
              aria-hidden={!open}
              role="button"
              tabIndex={0}
            />

            {/* Buzlu cam panel */}
            <motion.aside
              className="relative ml-auto h-full w-72 z-20 flex flex-col overflow-hidden border-l border-white/10 bg-elevated/50 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_8px_60px_rgba(0,0,0,0.5)]"
              aria-hidden={!open}
              initial={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: reduce ? 0 : "100%", opacity: reduce ? 0 : 1 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 260, damping: 30 }
              }
            >
              {/* Cam üstü ince ışık çizgisi + neon kenar parıltısı */}
              <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
              <span className="pointer-events-none absolute inset-y-0 left-0 w-px bg-gradient-to-b from-accent/40 via-purple/30 to-transparent" />
              {/* Yumuşak neon hale */}
              <span className="pointer-events-none absolute -top-24 -right-16 h-56 w-56 rounded-full bg-accent/15 blur-3xl" />
              <span className="pointer-events-none absolute bottom-0 -left-16 h-56 w-56 rounded-full bg-purple/15 blur-3xl" />

              <div className="relative flex items-center justify-between px-8 py-6 border-b border-white/10">
                <span className="font-extrabold text-2xl text-gradient">Eren</span>
                <button
                  className="w-10 h-10 flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label="Menüyü Kapat"
                  onClick={() => setOpen(false)}
                  type="button"
                >
                  <span className="sr-only">Menüyü Kapat</span>
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>

              <motion.nav
                className="relative flex flex-col gap-3 px-6 py-8 flex-1 justify-center"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: 0.1 } },
                }}
              >
                {NAV_LINKS.map((link: NavLink) => {
                  const isActive = link.href === `#${activeSection}`;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      aria-current={isActive ? "true" : undefined}
                      variants={{
                        hidden: { opacity: 0, x: reduce ? 0 : 24 },
                        show: { opacity: 1, x: 0 },
                      }}
                      className={`px-4 py-3.5 rounded-xl text-lg font-semibold text-center border backdrop-blur-sm transition-colors duration-200 ${
                        isActive
                          ? "border-accent/50 bg-accent/10 text-accent shadow-[0_0_18px_rgba(16,185,129,0.15)]"
                          : "border-white/10 bg-white/5 text-text hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                      }`}
                      onClick={(e) => {
                        const targetId = link.href.replace('#', '');
                        const targetElement = document.getElementById(targetId);
                        if (targetElement) {
                          e.preventDefault();
                          targetElement.scrollIntoView({ behavior: 'smooth' });
                        }
                        setOpen(false);
                      }}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </motion.nav>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
}
