'use client';

import { useState, useEffect } from 'react';

interface CLIToggleProps {
  onToggleAction: () => void;
}

export default function CLIToggle({ onToggleAction }: CLIToggleProps) {
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl + ` (backtick) to toggle CLI
      if (e.ctrlKey && e.key === '`') {
        e.preventDefault();
        onToggleAction();
      }
      // Show hint when Ctrl is pressed
      if (e.key === 'Control') {
        setShowHint(true);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Control') {
        setShowHint(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [onToggleAction]);

  return (
    <>
      {/* Fixed CLI Toggle Button */}
      <button
        onClick={onToggleAction}
        className="fixed bottom-6 right-6 z-40 p-3 bg-green-500/90 hover:bg-green-400 text-black rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 group"
        title="CLI Modunu Aç (Ctrl + `)"
      >
        <svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </svg>
        
        {/* Floating label */}
        <div className="absolute bottom-full right-0 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          CLI Mode
        </div>
      </button>

      {/* Keyboard shortcut hint */}
      {showHint && (
        <div className="fixed bottom-20 right-6 z-50 px-3 py-2 bg-black/90 text-green-400 text-sm rounded-lg font-mono backdrop-blur-sm">
          Press ` to open CLI
        </div>
      )}

      {/* Matrix-style hint animation */}
      <div className="fixed bottom-4 left-4 z-40 text-green-400/60 font-mono text-xs animate-pulse">
        <div className="flex items-center space-x-2">
          <span className="animate-bounce">{'>'}</span>
          <span>Ctrl + ` for CLI</span>
        </div>
      </div>
    </>
  );
}