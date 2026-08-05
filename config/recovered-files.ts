export type FileStatus = "SEALED" | "PARTIAL" | "DECLASSIFIED";

export interface RecoveredFileItem {
  id: string;
  /** e.g. "0012" — displayed as SUBJECT // 0012 */
  subjectNumber: string;
  status: FileStatus;
  /** Card falls back to a redacted placeholder panel when this is omitted. */
  imageSrc?: string;
  /** e.g. "Class I" — shown as understated metadata in the Dossier lightbox. */
  recoveryClass?: string;
}

/**
 * SNEAK PEEK SET — six real Krookheads subject files.
 * Images live in public/subjects/, named by subjectNumber. Add more
 * entries the same way as new sneak peeks are cleared for preview —
 * this section previews, it doesn't inventory (that's a future
 * full-gallery concern, not today's scope).
 */
export const recoveredFiles: RecoveredFileItem[] = [
  { id: "rf-1", subjectNumber: "0012", status: "DECLASSIFIED", imageSrc: "/subjects/0012.jpeg", recoveryClass: "Class I" },
  { id: "rf-2", subjectNumber: "0047", status: "DECLASSIFIED", imageSrc: "/subjects/0047.jpeg", recoveryClass: "Class I" },
  { id: "rf-3", subjectNumber: "0103", status: "DECLASSIFIED", imageSrc: "/subjects/0103.jpeg", recoveryClass: "Class II" },
  // This subject's own artwork carries a literal "CENSORED" bar — keep
  // status SEALED so the card's stamp agrees with what the image shows.
  { id: "rf-4", subjectNumber: "0186", status: "SEALED", imageSrc: "/subjects/0186.jpeg" },
  { id: "rf-5", subjectNumber: "0214", status: "DECLASSIFIED", imageSrc: "/subjects/0214.jpeg", recoveryClass: "Class I" },
  { id: "rf-6", subjectNumber: "0339", status: "DECLASSIFIED", imageSrc: "/subjects/0339.jpeg", recoveryClass: "Class III" },
];
