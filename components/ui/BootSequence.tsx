"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { archiveEase } from "@/lib/motion";

interface BootSequenceProps {
  children: React.ReactNode;
  lines?: string[];
}

const DEFAULT_LINES = ["INITIALIZING ARCHIVE...", "CLEARANCE VERIFIED"];
const LINE_MS = 420;

/**
 * Brief system-boot moment shown once before Hero content unlocks.
 * Instant (no flicker) when reduced motion is preferred — the
 * underlying content still renders immediately either way, so no
 * user is ever blocked from reading the page.
 */
export function BootSequence({ children, lines = DEFAULT_LINES }: BootSequenceProps) {
  const reducedMotion = useReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setDone(true);
      return;
    }
    if (lineIndex >= lines.length) {
      const timeout = setTimeout(() => setDone(true), 200);
      return () => clearTimeout(timeout);
    }
    const timeout = setTimeout(() => setLineIndex((i) => i + 1), LINE_MS);
    return () => clearTimeout(timeout);
  }, [lineIndex, lines.length, reducedMotion]);

  return (
    <div className="relative">
      <AnimatePresence>
        {!done && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.4, ease: archiveEase } }}
            className="absolute inset-0 z-10 flex items-center justify-center bg-charcoal"
            aria-hidden="true"
          >
            <div className="font-body text-micro uppercase tracking-widest2 text-olive-bright">
              {lines[Math.min(lineIndex, lines.length - 1)]}
              <span className="animate-pulse-dot">_</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: done ? 1 : 0 }}
        transition={{ duration: 0.5, ease: archiveEase }}
      >
        {children}
      </motion.div>
    </div>
  );
}
