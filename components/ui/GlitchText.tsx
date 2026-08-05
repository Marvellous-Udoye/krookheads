"use client";

import { useState, useRef, useCallback } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GLITCH_CHARS = "!<>-_\\/[]{}—=+*^?#";
const SCRAMBLE_FRAMES = 5;
const FRAME_MS = 28;

/**
 * On hover, briefly scrambles each character before resolving back to
 * the real label — reads as a label "decrypting" into place. Used
 * inside Button and nav links instead of a plain color transition.
 * Fully inert (renders static text) when reduced motion is preferred.
 */
export function GlitchText({ text, className }: GlitchTextProps) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const reducedMotion = useReducedMotion();

  const scramble = useCallback(() => {
    if (reducedMotion) return;
    frame.current = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      frame.current += 1;
      if (frame.current >= SCRAMBLE_FRAMES) {
        setDisplay(text);
        if (intervalRef.current) clearInterval(intervalRef.current);
        return;
      }
      const progress = frame.current / SCRAMBLE_FRAMES;
      const revealCount = Math.floor(text.length * progress);
      const next = text
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < revealCount) return char;
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join("");
      setDisplay(next);
    }, FRAME_MS);
  }, [text, reducedMotion]);

  const settle = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplay(text);
  }, [text]);

  return (
    <span
      onMouseEnter={scramble}
      onFocus={scramble}
      onMouseLeave={settle}
      onBlur={settle}
      className={className}
    >
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
}
