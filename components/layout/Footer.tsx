import { Container } from "@/components/ui/Container";
import { ArchiveStatus } from "@/components/ui/ArchiveStatus";
import { XIcon } from "@/components/icons/SocialIcons";
import { socialLinks } from "@/config/links";
import { archiveStatus } from "@/config/archive-status";
import { navItems } from "@/config/nav";

/**
 * V2 — complete redesign.
 *
 * Previously: a bordered two-column layout with a full data-grid
 * ArchiveStatus card and a rotating log ticker + live clock in their
 * own bordered box. That read as a terminal dashboard, not a footer.
 *
 * Now: one editorial column stack. Brand block, quick links, socials,
 * a single quiet Archive Status line, then legal. The log ticker and
 * clock are dropped entirely — the site doesn't need to keep proving
 * it's "alive" at the very bottom of the page after five sections of
 * saying so already.
 */
export function Footer() {
  const quickLinks = navItems.filter((item) => item.enabled);

  return (
    <footer className="border-t border-olive/20 bg-gunmetal">
      <Container className="py-16 md:py-24">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl tracking-wide text-beige-bright">KROOKHEADS</p>
            <p className="mt-3 font-body text-body-lg text-beige-dim">
              An underground archive. 5,555 subjects.
            </p>

            <div className="mt-6 flex items-center gap-5">
              <a
                href={socialLinks.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Krookheads on X (opens in a new tab)"
                className="text-beige-dim transition-colors duration-300 ease-archive hover:text-beige-bright"
              >
                <XIcon className="h-5 w-5" />
              </a>
              <a
                href={socialLinks.openSea}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Krookheads on OpenSea (opens in a new tab)"
                className="opacity-70 transition-opacity duration-300 ease-archive hover:opacity-100"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/opensea-logomark.svg"
                  alt="OpenSea"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </a>
            </div>
          </div>

          {quickLinks.length > 0 && (
            <nav aria-label="Footer" className="flex flex-col gap-2 md:items-end">
              {quickLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-body text-sm text-beige-dim transition-colors duration-300 ease-archive hover:text-beige-bright"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          )}
        </div>

        <div className="mt-14 border-t border-olive/10 pt-6">
          <ArchiveStatus data={archiveStatus} />
        </div>

        <div className="mt-8 flex flex-col-reverse items-center gap-3 border-t border-olive/10 pt-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-body text-xs uppercase tracking-wide text-beige-dim">
            © {new Date().getFullYear()} Krookheads — Classification: Public
          </p>
          <p className="font-body text-xs uppercase tracking-wide text-beige-dim">
            Operational Protocol
          </p>
        </div>
      </Container>
    </footer>
  );
}
