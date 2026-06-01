'use client';

import { useState, useEffect } from 'react';

export interface UseTypewriterProps {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 50, delay = 0 }: UseTypewriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayText('');
    setIsTyping(true);

    let interval: ReturnType<typeof setInterval> | undefined;

    const timeout = setTimeout(() => {
      let index = 0;
      interval = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          setIsTyping(false);
          if (interval) clearInterval(interval);
        }
      }, speed);
    }, delay);

    // Hem timeout hem interval temizlenir (metin değişince sızıntı olmaz)
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay]);

  return { displayText, isTyping };
};