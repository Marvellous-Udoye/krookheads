export type PhaseStatus = "COMPLETE" | "UPCOMING" | "LOCKED";

export interface TimelinePhase {
  id: string;
  phaseNumber: string;
  title: string;
  description: string;
  status: PhaseStatus;
}

/**
 * OPERATION TIMELINE — milestones leading to launch and beyond.
 * Purpose: build anticipation, not restate facts already covered in
 * Collection Information. No real-world dates are used here — status
 * carries the "where we are" information instead, since exact dates
 * aren't confirmed.
 *
 * IMPORTANT — keep in sync with config/collection-info.ts: that file's
 * `status` field ("PENDING" / "ACTIVE" / "FULLY EXTRACTED") describes
 * the same real-world mint state as whichever phase here covers
 * Subject Recovery. As of this file, collection-info.status is
 * "PENDING", so that phase is marked "UPCOMING" here, not "COMPLETE"
 * or a live-sounding status — update both together.
 */
export const timelinePhases: TimelinePhase[] = [
  {
    id: "phase-1",
    phaseNumber: "01",
    title: "Signal Detected",
    description:
      "The first sightings surface. Fragments, coordinates, unmarked faces — nothing official, nothing explained.",
    status: "COMPLETE",
  },
  {
    id: "phase-2",
    phaseNumber: "02",
    title: "Archive Opened",
    description:
      "The Archive goes live. The Dossier, early recovered files, and the collection record become available for review.",
    status: "COMPLETE",
  },
  {
    id: "phase-3",
    phaseNumber: "03",
    title: "Subject Recovery",
    description:
      "Public recovery opens on Robinhood L2. Every subject is pulled from the Archive and released to a new holder.",
    status: "UPCOMING",
  },
  {
    id: "phase-4",
    phaseNumber: "04",
    title: "Full Declassification",
    description:
      "All 5,555 files are unsealed. Complete trait data and the full catalogue become publicly viewable.",
    status: "LOCKED",
  },
  {
    id: "phase-5",
    phaseNumber: "05",
    title: "Beyond the Archive",
    description:
      "What holders unlock next. Details remain classified until Phase 04 closes.",
    status: "LOCKED",
  },
];
