"use client";
import { useState, useEffect } from "react";
import MatrixBackground from "./components/MatrixBackground";
import { useLanguage } from "./hooks/LanguageContext";


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
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-900/80 backdrop-blur border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center px-4 py-3 md:py-2">
        {/* Logo - sola hizalı */}
        <div className="flex flex-col items-start mr-auto">
          <a href="#" className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent select-none">Eren OĞUZ</a>
          <span className="text-xs font-medium bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-600 bg-clip-text text-transparent mt-1">Back-End Developer</span>
        </div>
        {/* Desktop links - ortada */}
        <div className="hidden md:flex gap-2 lg:gap-6 mx-auto">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-1.5 rounded-lg text-zinc-700 dark:text-zinc-200 font-medium transition-colors duration-200 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-700 dark:hover:text-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
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
          ))}
        </div>
        {/* Dil seçici - sağa hizalı */}
        <div className="flex items-center gap-4 ml-auto">
          <button
            className={`px-2 py-1 rounded-full flex items-center justify-center border-2 border-blue-700 transition-all duration-200 ${language === "tr" ? "bg-blue-700 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setLanguage("tr")}
            aria-label="Türkçe"
          >
            <img src="/tr.svg" alt="Türkçe" className="w-6 h-4" />
          </button>
          <button
            className={`px-2 py-1 rounded-full flex items-center justify-center border-2 border-blue-700 transition-all duration-200 ${language === "en" ? "bg-blue-700 text-white" : "bg-gray-200 text-black"}`}
            onClick={() => setLanguage("en")}
            aria-label="English"
          >
            <img src="/gb.svg" alt="English" className="w-6 h-4" />
          </button>
        </div>
        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-12 h-12 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label="Menüyü Aç"
          onClick={() => setOpen(!open)}
          type="button"
        >
          <span className="sr-only">Menüyü Aç</span>
          <div className="space-y-1">
            <span className={`block h-1 w-8 bg-blue-700 dark:bg-blue-400 transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-1 w-8 bg-blue-700 dark:bg-blue-400 transition-opacity ${open ? 'opacity-0' : ''}`}></span>
            <span className={`block h-1 w-8 bg-blue-700 dark:bg-blue-400 transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>
      {/* Mobil menü ve overlay sadece açıkken render edilir */}
      {open && (
        <div className="fixed inset-0 z-40 flex">
          {/* Matrix arka plan */}
          <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none">
            <MatrixBackground />
          </div>
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-10"
            onClick={() => setOpen(false)}
            aria-hidden={!open}
            role="button"
            tabIndex={0}
          />
          {/* Mobile menu */}
          <aside
              className="ml-auto h-full w-72 bg-zinc-900 dark:bg-zinc-900 shadow-2xl z-10 flex flex-col animate-slide-in"
              aria-hidden={!open}
          >
            <div className="flex items-center justify-between px-8 py-6 border-b border-zinc-200 dark:border-zinc-800">
              <span className="font-extrabold text-2xl text-blue-700 dark:text-blue-400">Eren</span>
              <button
                className="w-10 h-10 flex items-center justify-center rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Menüyü Kapat"
                onClick={() => setOpen(false)}
                type="button"
              >
                <span className="sr-only">Menüyü Kapat</span>
                <svg className="w-8 h-8 text-blue-700 dark:text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4 px-8 py-8 flex-1 justify-center bg-zinc-900/70 dark:bg-zinc-900/70 backdrop-blur-md shadow-2xl z-10 animate-slide-in">
              {NAV_LINKS.map((link: NavLink) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-4 rounded-xl text-zinc-100 dark:text-white text-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-200 text-center"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </nav>
  );
}
