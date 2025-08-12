'use client';

import { useState } from 'react';
import MatrixBackground from "./components/MatrixBackground";
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
      <main className="relative min-h-screen w-full overflow-hidden">
        <MatrixBackground />
        <Hero />
        <section id="about">
          <AboutMe />
        </section>
        {/* Skills ile Matrix arasında blur divider */}
        <div className="w-full h-12 flex items-center justify-center">
          <div className="w-2/3 h-8 rounded-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md shadow-lg" />
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
