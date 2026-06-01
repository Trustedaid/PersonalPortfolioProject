import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="z-20 w-full bg-elevated/60 border-t border-line py-8 px-4 flex flex-col items-center justify-center gap-4 text-text-sec text-sm mt-8 relative backdrop-blur-sm">
      <div className="flex flex-col items-center justify-center gap-3 w-full">
        <span id="footer-text">
          &copy; {new Date().getFullYear()} Eren OĞUZ. Tüm hakları saklıdır.
        </span>
        <div className="w-1/2 max-w-xs mx-auto">
          <hr className="border-t border-line" style={{ width: "100%" }} />
        </div>
        <div className="flex items-center justify-center gap-4 mt-2">
          <a
            href="https://github.com/trustedaid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-sec hover:text-accent hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] transition-all"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/ernoguz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-sec hover:text-accent hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)] transition-all"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
