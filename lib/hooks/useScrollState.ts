"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the page has scrolled past `threshold` px.
 * Used by Navbar to transition from transparent (over Hero) to
 * a solid gunmetal surface with a hairline border.
 */
export function useScrollState(threshold = 24): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
