"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Stamp } from "@/components/ui/Stamp";
import { SmokeLayer } from "@/components/ui/SmokeLayer";
import { CornerBrackets } from "@/components/ui/CornerBrackets";
import { BootSequence } from "@/components/ui/BootSequence";
import { ctaConfig } from "@/config/links";
import { fadeUp, staggerContainer } from "@/lib/motion";

/**
 * V2: dropped the compact ArchiveStatus module that used to sit below
 * the buttons — it competed with the headline for attention and made
 * Hero feel like a dashboard rather than a title page. Archive Status
 * now lives once, quietly, in the Footer. Stamp + CornerBrackets stay
 * here deliberately as the single "classified" signature moment on
 * the page — everywhere else has been softened.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] scroll-mt-18 items-center overflow-hidden bg-charcoal"
    >
      <SmokeLayer />
      <div className="pointer-events-none absolute inset-0 bg-vignette" aria-hidden="true" />

      <Container className="relative z-10">
        <BootSequence>
          <div className="relative px-4 py-16 sm:px-10 sm:py-24">
            <CornerBrackets />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mx-auto flex max-w-3xl flex-col items-center text-center"
            >
              <motion.div variants={fadeUp}>
                <Stamp tone="olive">Sighting #0001 // Access Point Logged // 41.87° N</Stamp>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-8 font-display text-hero-h1 uppercase text-beige-bright"
              >
                Access Granted
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl font-body text-body-lg text-beige/90"
              >
                Unauthorized access detected.
                <br />
                Archive records are now available for review.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-12 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
              >
                <Button
                  label={ctaConfig.primary.label}
                  href={ctaConfig.primary.href}
                  external={ctaConfig.primary.external}
                  variant="primary"
                />
                <Button
                  label={ctaConfig.secondary.label}
                  href={ctaConfig.secondary.href}
                  external={ctaConfig.secondary.external}
                  variant="secondary"
                />
              </motion.div>
            </motion.div>
          </div>
        </BootSequence>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-body text-xs uppercase tracking-wide text-beige-dim">
          Scroll
        </span>
        <span className="h-8 w-px bg-olive/50" />
      </motion.div>
    </section>
  );
}
