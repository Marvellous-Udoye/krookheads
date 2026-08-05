import { cn } from "@/lib/utils";

interface RedactedLineProps {
  /** Relative widths (%) for each simulated redacted line. */
  widths?: number[];
  className?: string;
}

/**
 * Simulated redacted-document bars — the black-bar-over-text motif shared
 * with the X campaign's SIGHTING graphics. Purely decorative flourish,
 * used sparingly (one instance per section, not scattered) per the
 * artwork-first restraint rule.
 */
export function RedactedLine({ widths = [100, 72, 88], className }: RedactedLineProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)} aria-hidden="true">
      {widths.map((width, i) => (
        <span
          key={i}
          className="h-2 bg-charcoal-soft border border-olive/10"
          style={{ width: `${width}%` }}
        />
      ))}
    </div>
  );
}
