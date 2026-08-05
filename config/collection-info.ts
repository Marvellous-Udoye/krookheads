export type RecoveryStatus = "PENDING" | "ACTIVE" | "FULLY EXTRACTED";

export interface CollectionInfoData {
  totalSupply: number;
  chain: string;
  /** Full display string. Neutral placeholder until price is finalized —
   *  do not reference a currency ticker (collection launches on
   *  Robinhood L2, not Ethereum) until the real value is confirmed. */
  mintPriceDisplay: string;
  walletLimit: number;
  status: RecoveryStatus;
}

/**
 * COLLECTION INFORMATION — the single source of factual collection
 * details. This is the ONLY section allowed to state supply/price/chain
 * facts — Hero, Dossier, and Recovered Files are deliberately fact-free
 * per the locked pacing rule. Update this file as launch details
 * finalize; the section component re-renders from it automatically.
 *
 * Mint price is intentionally "Coming Soon" until the real figure and
 * currency are confirmed — swap `mintPriceDisplay` for the real value
 * (e.g. "0.25 Robinhood") when ready. No component changes required.
 */
export const collectionInfo: CollectionInfoData = {
  totalSupply: 5555,
  chain: "Robinhood L2",
  mintPriceDisplay: "Coming Soon",
  walletLimit: 3,
  status: "PENDING",
};
