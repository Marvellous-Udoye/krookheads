import { cn } from "@/lib/utils";

type StampTone = "olive" | "crimson" | "beige";

interface StampProps {
  children: React.ReactNode;
  tone?: StampTone;
  className?: string;
}

const tones: Record<StampTone, string> = {
  olive: "border-olive/60 text-olive-bright",
  crimson: "border-crimson/70 text-crimson-bright",
  beige: "border-beige/40 text-beige/80",
};

/**
 * Reusable classification/sighting tag — the shared visual grammar
 * between the site and the X campaign. Used for things like
 * "SIGHTING #0001" or "CLASSIFIED" markers.
 */
export function Stamp({ children, tone = "olive", className }: StampProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-3 py-1 font-body text-micro uppercase tracking-widest2",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
