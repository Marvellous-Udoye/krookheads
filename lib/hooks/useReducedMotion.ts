"use client";

import { useEffect, useState } from "react";

/**
 * SSR-safe prefers-reduced-motion check.
 * Defaults to false on the server / first client render to avoid
 * hydration mismatches, then syncs immediately on mount.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return reduced;
}
