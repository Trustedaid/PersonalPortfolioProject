'use client';

import { useEffect, useRef } from 'react';
import { useCLI } from '../hooks/useCLI';
import { useTypewriter } from '../hooks/useTypewriter';

interface CLIProps {
  isActive: boolean;
  onDeactivateAction: () => void;
}

interface TypewriterOutputProps {
  text: string;
  isLatest: boolean;
}

function TypewriterOutput({ text, isLatest }: TypewriterOutputProps) {
  const { displayText } = useTypewriter({
    text,
    speed: 30,
    delay: isLatest ? 100 : 0
  });

  return <span>{isLatest ? displayText : text}</span>;
}

export default function CLI({ isActive, onDeactivateAction }: CLIProps) {
  const {
    state, 
    executeCommand, 
    setCurrentInput, 
    inputRef 
  } = useCLI();
  
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when new content is added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [state.history]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onDeactivateAction();
      }
    };

    if (isActive) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isActive, onDeactivateAction]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (state.currentInput.trim()) {
      executeCommand(state.currentInput);
      if (state.currentInput.trim() === '/exit' || state.currentInput.trim() === '/web') {
        onDeactivateAction();
      }
    }
  };

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="h-full flex flex-col">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-zinc-800 border-b border-zinc-700">
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-zinc-300 text-sm font-mono ml-4">
              eren@portfolio ~ CLI Mode
            </span>
          </div>
          <div className="flex items-center space-x-2 text-zinc-400 text-xs">
            <span>ESC to exit</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div 
          ref={terminalRef}
          className="flex-1 overflow-y-auto p-4 font-mono text-sm bg-black"
        >
          {state.history.map((item, index) => {
            const isLatest = index === state.history.length - 1;
            return (
              <div key={index} className="mb-4">
                {item.command && (
                  <div className="flex items-center text-green-400 mb-1">
                    <span className="text-blue-400 mr-2">eren@portfolio:~$</span>
                    <span>{item.command}</span>
                  </div>
                )}
                <div className="text-gray-100 whitespace-pre-line pl-0">
                  <TypewriterOutput text={item.output} isLatest={isLatest} />
                </div>
              </div>
            );
          })}

          {/* Current Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="text-blue-400 mr-2">eren@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={state.currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              className="flex-1 bg-transparent text-green-400 outline-none font-mono"
              placeholder="Komut yazın... (yardım için /help)"
              autoComplete="off"
              spellCheck={false}
            />
            <div className="w-2 h-5 bg-green-400 ml-1 animate-pulse"></div>
          </form>
        </div>

        {/* Footer hints */}
        <div className="px-4 py-2 bg-zinc-900 border-t border-zinc-700">
          <div className="flex justify-between items-center text-xs text-zinc-400">
            <div className="flex space-x-4">
              <span>/help - Komutları listele</span>
              <span>/exit - CLI&apos;dan çık</span>
            </div>
            <div>
              <span>Eren OĞUZ Portfolio CLI v1.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}