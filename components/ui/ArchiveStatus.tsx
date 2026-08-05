import { cn } from "@/lib/utils";
import type { ArchiveStatusData, ArchiveState } from "@/types";

interface ArchiveStatusProps {
  data: ArchiveStatusData;
  variant?: "minimal" | "full";
  className?: string;
}

const statusColor: Record<ArchiveState, string> = {
  ONLINE: "text-olive-bright",
  OFFLINE: "text-crimson-bright",
  RESTRICTED: "text-crimson-bright",
};

const dotColor: Record<ArchiveState, string> = {
  ONLINE: "bg-olive-bright",
  OFFLINE: "bg-crimson-bright",
  RESTRICTED: "bg-crimson-bright",
};

/**
 * ARCHIVE STATUS — the living bridge between the X campaign and the site.
 * Reads from config/archive-status.ts. Update that file whenever a new
 * SIGHTING post goes out.
 *
 * `minimal` (default, used in Footer): one plain line, no border or
 * box — a status signal, not another document. `full` is kept for a
 * future spot that genuinely wants the detailed breakdown (e.g. a
 * dedicated dashboard), but nothing on the page uses it right now —
 * per the V2 chrome-reduction pass, a bordered data-grid card in the
 * footer read as more "terminal readout" than the editorial tone we
 * want.
 */
export function ArchiveStatus({ data, variant = "minimal", className }: ArchiveStatusProps) {
  const { status, recoveredFiles, archiveIntegrity, lastUpdated } = data;

  if (variant === "minimal") {
    return (
      <div
        className={cn(
          "flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-xs uppercase tracking-wide text-beige-dim",
          className
        )}
      >
        <span className={cn("flex items-center gap-1.5", statusColor[status])}>
          <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse-dot", dotColor[status])} aria-hidden="true" />
          Archive {status.toLowerCase()}
        </span>
        <span aria-hidden="true">·</span>
        <span>{String(recoveredFiles).padStart(3, "0")} files recovered</span>
        <span aria-hidden="true">·</span>
        <span>{archiveIntegrity}% integrity</span>
        <span aria-hidden="true">·</span>
        <span>Updated {lastUpdated}</span>
      </div>
    );
  }

  return (
    <div className={cn("border border-olive/30 bg-gunmetal/60 px-6 py-5 backdrop-blur-sm", className)}>
      <div className="flex items-center justify-between gap-4 border-b border-olive/20 pb-2">
        <span className="font-body text-micro uppercase tracking-widest2 text-beige-dim">
          Archive Status
        </span>
        <span className={cn("flex items-center gap-1.5 font-body text-micro uppercase tracking-widest2", statusColor[status])}>
          <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse-dot", dotColor[status])} aria-hidden="true" />
          {status}
        </span>
      </div>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-2 pt-3 font-body text-micro uppercase tracking-widest2 lg:grid-cols-4">
        <div>
          <dt className="text-beige-dim">Recovered Files</dt>
          <dd className="pt-1 text-sm tracking-normal normal-case text-beige-bright">
            {String(recoveredFiles).padStart(3, "0")}
          </dd>
        </div>
        <div>
          <dt className="text-beige-dim">Archive Integrity</dt>
          <dd className="pt-1 text-sm tracking-normal normal-case text-beige-bright">{archiveIntegrity}%</dd>
        </div>
        <div>
          <dt className="text-beige-dim">Latest Recovery</dt>
          <dd className="pt-1 text-sm tracking-normal normal-case text-beige-bright">{data.latestRecovery}</dd>
        </div>
        <div>
          <dt className="text-beige-dim">Last Updated</dt>
          <dd className="pt-1 text-sm tracking-normal normal-case text-beige-bright">{lastUpdated}</dd>
        </div>
      </dl>
    </div>
  );
}
