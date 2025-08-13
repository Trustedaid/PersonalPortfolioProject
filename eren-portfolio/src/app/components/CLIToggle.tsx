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
      if (e.ctrlKey && e.key === '"') {
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
        className="fixed bottom-6 right-6 z-40 bg-green-500/90 hover:bg-green-400 text-black shadow-lg backdrop-blur-sm transition-all duration-500 ease-in-out group overflow-hidden rounded-full hover:rounded-xl hover:px-6 hover:py-3 p-3"
        title="CLI Modunu Aç (Ctrl + `)"
      >
        <div className="flex items-center justify-center transition-all duration-500 ease-in-out">
          <svg 
            className="w-6 h-6 flex-shrink-0 transition-all duration-500 ease-in-out" 
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
          
          {/* Expandable text */}
          <span className="font-semibold text-sm whitespace-nowrap ml-0 group-hover:ml-3 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out max-w-0 group-hover:max-w-[120px] overflow-hidden">
            CLI MODE
          </span>
        </div>
      </button>

      {/* Keyboard shortcut hint */}
      {showHint && (
        <div className="fixed bottom-20 right-6 z-50 px-3 py-2 bg-black/90 text-green-400 text-sm rounded-lg font-mono backdrop-blur-sm">
          Press &quot; to open CLI
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