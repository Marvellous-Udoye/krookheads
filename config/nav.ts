export interface NavItem {
  label: string;
  href: string;
  /** True once the section is actually built and in app/page.tsx */
  enabled: boolean;
}

/**
 * Canonical IA order. Flip `enabled: true` and set the real `href`
 * (e.g. "#recovered-files") as each section ships — Navbar renders
 * live links and locked placeholders from this single list.
 */
export const navItems: NavItem[] = [
  { label: "The Dossier", href: "#dossier", enabled: true },
  { label: "Recovered Files", href: "#recovered-files", enabled: true },
  { label: "Collection Information", href: "#collection-information", enabled: true },
  { label: "Operation Timeline", href: "#operation-timeline", enabled: true },
];
