"use client";

import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  /** When false, returns the first word in full and runs no timers (reduced motion). */
  enabled?: boolean;
}

export function useTypewriter({
  words,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseDuration = 1800,
  enabled = true,
}: UseTypewriterOptions) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    let timer: NodeJS.Timeout;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
        }, deletingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 0);
      }
    }

    return () => clearTimeout(timer);
  }, [enabled, displayText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return enabled ? displayText : words[0];
}
