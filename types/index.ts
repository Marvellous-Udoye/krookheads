export interface LinkConfig {
  label: string;
  href: string;
  /** When true, renders as target="_blank" rel="noopener noreferrer" */
  external: boolean;
}

export interface CtaConfig {
  primary: LinkConfig;
  secondary: LinkConfig;
}

export interface SocialLinks {
  x: string;
  discord: string;
  openSea: string;
}

export type ArchiveState = "ONLINE" | "OFFLINE" | "RESTRICTED";

export interface ArchiveStatusData {
  status: ArchiveState;
  recoveredFiles: number;
  archiveIntegrity: number;
  latestRecovery: string;
  lastUpdated: string;
}
