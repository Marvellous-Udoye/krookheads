import { cn } from "@/lib/utils";

interface GrainOverlayProps {
  className?: string;
}

/**
 * Fixed, viewport-wide film grain texture. A single small tiled SVG,
 * not a canvas or JS noise generator — cheapest possible way to get
 * a persistent "scanned document" feel with zero runtime cost.
 */
export function GrainOverlay({ className }: GrainOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-[60] bg-grain bg-repeat opacity-[0.05] mix-blend-overlay",
        className
      )}
      aria-hidden="true"
    />
  );
}
