import { GrainOverlay } from "@/components/ui/GrainOverlay";

interface PageShellProps {
  children: React.ReactNode;
}

/**
 * Wraps every page with the persistent film-grain texture so it reads
 * as one continuous document rather than per-section treatments.
 */
export function PageShell({ children }: PageShellProps) {
  return (
    <div className="relative min-h-screen bg-charcoal">
      <GrainOverlay />
      {children}
    </div>
  );
}
