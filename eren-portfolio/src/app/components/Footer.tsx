import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="z-20 w-full bg-white/80 dark:bg-zinc-900/80 border-t border-zinc-200 dark:border-zinc-800 py-6 px-4 flex flex-col items-center justify-center gap-4 text-zinc-700 dark:text-zinc-300 text-sm mt-8 relative">
      <div className="flex flex-col items-center justify-center gap-2 w-full">
        <span id="footer-text">&copy;  {new Date().getFullYear()} Eren OĞUZ. Tüm hakları saklıdır.</span>
        <div className="w-fit mx-auto">
          <hr className="border-t border-zinc-300 dark:border-zinc-700" style={{ width: '100%' }} />
        </div>
        <div className="flex items-center justify-center gap-4 mt-2">
          <a
            href="https://github.com/trustedaid"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ernoguz/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
