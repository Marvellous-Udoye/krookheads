import Image from "next/image";
import { cn } from "@/lib/utils";
import { RedactedLine } from "./RedactedLine";
import type { RecoveredFileItem } from "@/config/recovered-files";

interface FileCardProps {
  item: RecoveredFileItem;
  className?: string;
}

const dotTone: Record<RecoveredFileItem["status"], string> = {
  DECLASSIFIED: "bg-olive-bright",
  PARTIAL: "bg-beige-dim",
  SEALED: "bg-crimson-bright",
};

/**
 * A single subject-file card. Renders real artwork via next/image once
 * `item.imageSrc` is populated; falls back to a redacted placeholder
 * panel until then, so the grid never looks broken while art is pending.
 *
 * V2: dropped the corner-bracket frame and the always-visible bordered
 * status stamp — those made a six-card grid feel like six separate
 * documents. The artwork now fills the card edge-to-edge with only a
 * soft caption gradient for the subject number; status is a small dot
 * that reveals its label on hover instead of shouting it by default.
 */
export function FileCard({ item, className }: FileCardProps) {
  const { subjectNumber, status, imageSrc } = item;

  return (
    <div
      className={cn(
        "group relative aspect-square overflow-hidden bg-gunmetal",
        className
      )}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={`Krookheads subject file ${subjectNumber}`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 ease-archive group-hover:scale-[1.03]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6" aria-hidden="true">
          <RedactedLine widths={[60, 40, 70]} className="w-2/3" />
        </div>
      )}

      {/* soft caption scrim — replaces the hard bordered label box */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-charcoal/80 to-transparent"
        aria-hidden="true"
      />
      <span className="absolute bottom-3 left-4 font-body text-xs uppercase tracking-wide text-beige-bright">
        {subjectNumber}
      </span>

      {/* status dot — label only on hover, keeps the default view quiet */}
      <div className="absolute right-3 top-3 flex items-center gap-1.5">
        <span
          className="font-body text-[10px] uppercase tracking-wide text-beige-bright opacity-0 transition-opacity duration-300 group-hover:opacity-90"
        >
          {status.toLowerCase()}
        </span>
        <span className={cn("h-1.5 w-1.5 rounded-full", dotTone[status])} aria-hidden="true" />
      </div>
    </div>
  );
}
