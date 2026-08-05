import type { Variants, Transition } from "framer-motion";

/**
 * Krookheads motion system.
 * One easing curve, one vocabulary of durations. No magic numbers
 * should appear inline in components — reach for these tokens instead.
 */

// Expo-out — deliberate, unhurried, "expensive" rather than snappy.
export const archiveEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const duration = {
  fast: 0.25,
  base: 0.6,
  slow: 1,
  ambient: 14,
} as const;

export const transition: Transition = {
  duration: duration.base,
  ease: archiveEase,
};

/** Fade + rise — the standard reveal for text and content blocks. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

/** Parent wrapper for staggered children (e.g. Hero content group). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

/** Simple opacity-only fade, used for ambient/atmospheric layers. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.slow, ease: archiveEase },
  },
};
