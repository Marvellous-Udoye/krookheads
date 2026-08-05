"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

interface SmokeLayerProps {
  className?: string;
}

/**
 * Ambient background atmosphere. Built from blurred radial-gradient
 * shapes animated via transform/opacity only (GPU-composited, never
 * layout-affecting). Kept deliberately subtle per the artwork-first
 * rule — this is peripheral texture, not a focal element.
 *
 * The third, heaviest layer is hidden below md to protect mobile
 * performance; the two lighter layers remain everywhere.
 */
export function SmokeLayer({ className }: SmokeLayerProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      <div
        className={cn(
          "absolute -left-1/4 top-0 h-[60%] w-[70%] rounded-full bg-olive-dim/30 blur-[120px]",
          !reducedMotion && "animate-drift"
        )}
      />
      <div
        className={cn(
          "absolute right-0 top-1/4 h-[50%] w-[60%] rounded-full bg-gunmetal-light/40 blur-[100px]",
          !reducedMotion && "animate-drift-slow"
        )}
      />
      <div
        className={cn(
          "hidden md:block absolute bottom-0 left-1/3 h-[40%] w-[50%] rounded-full bg-charcoal-soft/60 blur-[140px]",
          !reducedMotion && "animate-drift"
        )}
      />
    </div>
  );
}
