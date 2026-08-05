import { cn } from "@/lib/utils";

interface CornerBracketsProps {
  className?: string;
}

const bracketBase = "absolute w-6 h-6 md:w-10 md:h-10 border-olive/40";

/**
 * Thin targeting-reticle style corner frame around a content zone.
 * Purely decorative chrome — frames the artwork/content, never
 * competes with it. Always aria-hidden.
 */
export function CornerBrackets({ className }: CornerBracketsProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0", className)} aria-hidden="true">
      <span className={cn(bracketBase, "top-0 left-0 border-t border-l")} />
      <span className={cn(bracketBase, "top-0 right-0 border-t border-r")} />
      <span className={cn(bracketBase, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(bracketBase, "bottom-0 right-0 border-b border-r")} />
    </div>
  );
}
