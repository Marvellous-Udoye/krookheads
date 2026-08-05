"use client";

import { useEffect, useState } from "react";

/**
 * Guards against hydration mismatches for anything that renders
 * differently on server vs. client (live clocks, tickers, random values).
 * Consumers should render a static placeholder until this is true.
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
