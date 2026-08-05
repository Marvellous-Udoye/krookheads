import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Quiet section eyebrow — no border, no box, light tracking. This is
 * the standard section-intro treatment; the bordered <Stamp /> is
 * reserved for the one or two moments on the page that should
 * actually feel like a classified marking (Hero), not every section
 * header. Repeating Stamp everywhere was what made each section read
 * as "another document" instead of one continuous site.
 */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-body text-xs uppercase tracking-wide text-beige-dim",
        className
      )}
    >
      {children}
    </p>
  );
}
