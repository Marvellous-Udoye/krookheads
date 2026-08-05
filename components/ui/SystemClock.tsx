"use client";

import { useEffect, useState } from "react";
import { useMounted } from "@/lib/hooks/useMounted";
import { cn } from "@/lib/utils";

interface SystemClockProps {
  className?: string;
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

/**
 * Live, ticking local-time readout. Guarded by useMounted so the
 * server-rendered placeholder never mismatches the client's first tick
 * (avoids a Next.js hydration warning).
 */
export function SystemClock({ className }: SystemClockProps) {
  const mounted = useMounted();
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    if (!mounted) return;
    setTime(formatTime(new Date()));
    const interval = setInterval(() => setTime(formatTime(new Date())), 1000);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <span
      className={cn("font-body text-micro uppercase tracking-widest2 text-beige-dim", className)}
      aria-hidden="true"
    >
      LOCAL TIME: {mounted ? time : "--:--:--"}
    </span>
  );
}
