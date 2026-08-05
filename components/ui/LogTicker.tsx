"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useMounted } from "@/lib/hooks/useMounted";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

interface LogTickerProps {
  messages: string[];
  className?: string;
  intervalMs?: number;
}

/**
 * Rotates through short ambient log lines, implying constant background
 * system activity without ever explaining the story outright. Purely
 * atmospheric — hidden from assistive tech, since it's not information
 * a screen reader user needs announced on a loop.
 */
export function LogTicker({ messages, className, intervalMs = 4000 }: LogTickerProps) {
  const mounted = useMounted();
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!mounted || messages.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % messages.length);
    }, intervalMs);
    return () => clearInterval(interval);
  }, [mounted, messages.length, intervalMs]);

  if (!mounted) {
    return (
      <div className={cn("h-4 font-body text-micro uppercase tracking-widest2 text-beige-dim", className)} aria-hidden="true" />
    );
  }

  return (
    <div
      className={cn("relative h-4 overflow-hidden font-body text-micro uppercase tracking-widest2 text-beige-dim", className)}
      aria-hidden="true"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex items-center"
        >
          {messages[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
