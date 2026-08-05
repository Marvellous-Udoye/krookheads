"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GlitchText } from "@/components/ui/GlitchText";
import { useScrollState } from "@/lib/hooks/useScrollState";
import { ctaConfig } from "@/config/links";
import { navItems } from "@/config/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrollState();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ease-archive",
        scrolled ? "border-olive/20 bg-gunmetal/90 backdrop-blur-md" : "border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-18 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl tracking-widest2 text-beige-bright"
          aria-label="Krookheads — home"
        >
          KROOKHEADS
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          <nav aria-label="Primary" className="flex items-center gap-6">
            {navItems
              .filter((item) => item.enabled)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-xs uppercase tracking-wide text-beige-dim transition-colors duration-300 ease-archive hover:text-beige-bright"
                >
                  <GlitchText text={item.label} />
                </Link>
              ))}
          </nav>
          <Button
            label={ctaConfig.primary.label}
            href={ctaConfig.primary.href}
            external={ctaConfig.primary.external}
            variant="primary"
            className="px-6 py-2.5 text-xs"
          />
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center border border-beige/30 text-beige lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-3 w-4" aria-hidden="true">
            <span
              className={cn(
                "absolute left-0 top-0 h-px w-4 bg-beige transition-transform duration-300",
                menuOpen && "translate-y-1.5 rotate-45"
              )}
            />
            <span
              className={cn(
                "absolute left-0 bottom-0 h-px w-4 bg-beige transition-transform duration-300",
                menuOpen && "-translate-y-1.5 -rotate-45"
              )}
            />
          </span>
        </button>
      </Container>

      {menuOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="border-t border-olive/20 bg-gunmetal/95 backdrop-blur-md lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-6">
            {navItems.map((item) =>
              item.enabled ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 font-body text-sm uppercase tracking-wide text-beige transition-colors duration-300 ease-archive hover:text-beige-bright"
                >
                  <GlitchText text={item.label} />
                </Link>
              ) : (
                <span
                  key={item.href}
                  className="cursor-not-allowed py-3 font-body text-sm uppercase tracking-wide text-beige-dim/60"
                  aria-disabled="true"
                  title="Coming soon"
                >
                  <GlitchText text={item.label} />
                </span>
              )
            )}
            <Button
              label={ctaConfig.primary.label}
              href={ctaConfig.primary.href}
              external={ctaConfig.primary.external}
              variant="primary"
              className="mt-4"
            />
          </Container>
        </motion.div>
      )}
    </header>
  );
}
