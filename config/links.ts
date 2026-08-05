import type { CtaConfig, SocialLinks } from "@/types";

/**
 * PRIMARY / SECONDARY CTA — CONFIG-DRIVEN, NOT HARDCODED IN COMPONENTS.
 *
 * Today (pre-launch): both CTAs navigate within the site.
 * At mint launch: update `primary` only —
 *
 *   primary: {
 *     label: "Mint on OpenSea",
 *     href: "https://opensea.io/collection/krookheads",
 *     external: true,
 *   }
 *
 * `Button` and `Navbar` already branch on `external` to render a
 * new-tab external link vs. an internal <Link>. No component changes
 * are required to flip this switch.
 */
export const ctaConfig: CtaConfig = {
  primary: {
    label: "Enter Archive",
    href: "#dossier",
    external: false,
  },
  secondary: {
    label: "View Files",
    href: "#recovered-files",
    external: false,
  },
};

/**
 * Official platform links — used as-is (no in-universe relabeling)
 * in Footer. Update URLs here only.
 */
export const socialLinks: SocialLinks = {
  x: "https://x.com/krookheadsnft?s=11",
  discord: "https://discord.gg/krookheads",
  openSea: "https://opensea.io/collection/krookheads",
};
