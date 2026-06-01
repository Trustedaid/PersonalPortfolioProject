'use client';

import { useState } from 'react';
import AmbientBackground from "./components/AmbientBackground";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CLI from "./components/CLI";
import CLIToggle from "./components/CLIToggle";

export default function Home() {
  const [isCLIActive, setIsCLIActive] = useState(false);

  const activateCLI = () => setIsCLIActive(true);
  const deactivateCLI = () => setIsCLIActive(false);

  return (
    <>
      <AmbientBackground />
      <main className="relative z-10 min-h-screen w-full overflow-hidden">
        <Hero />
        <section id="about">
          <AboutMe />
        </section>
        {/* Bölüm ayracı — neon gradient ince çizgi */}
        <div className="w-full h-16 flex items-center justify-center">
          <div className="w-1/2 max-w-xs h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
        </div>
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
        <Footer />
        
        {/* CLI Toggle Button - only show when CLI is not active */}
        {!isCLIActive && <CLIToggle onToggleAction={activateCLI} />}
      </main>

      {/* CLI Component */}
      <CLI isActive={isCLIActive} onDeactivateAction={deactivateCLI} />
    </>
  );
}
