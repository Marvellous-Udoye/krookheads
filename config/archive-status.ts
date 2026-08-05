import type { ArchiveStatusData } from "@/types";

/**
 * ARCHIVE STATUS — living bridge between the X campaign and the site.
 *
 * Update these values whenever a new SIGHTING post goes out, so the
 * website "catches up" to the campaign instead of sitting static.
 * Both the compact (Hero) and full (Footer) <ArchiveStatus /> instances
 * read from this single object.
 */
export const archiveStatus: ArchiveStatusData = {
  status: "ONLINE",
  recoveredFiles: 4,
  archiveIntegrity: 97,
  latestRecovery: "SIGHTING // 004",
  lastUpdated: "2h ago",
};
