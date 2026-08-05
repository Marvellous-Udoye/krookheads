"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { recoveredFiles } from "@/config/recovered-files";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { archiveEase, fadeUp, staggerContainer } from "@/lib/motion";

// Passive rotation set for the Dossier viewer — only fully cleared
// (DECLASSIFIED) subjects, so nothing censored surfaces unattended.
const featuredSubjects = recoveredFiles.filter(
  (item) => item.status === "DECLASSIFIED" && item.imageSrc
);

/**
 * THE DOSSIER — purpose: explain the world (briefly).
 *
 * Deliberately restrained: two short paragraphs, no supply/price facts
 * (those belong to Collection Information later), no full lore dump.
 * This section's job is identity, not exposition.
 *
 * V2: swapped the bordered Stamp header for a quiet SectionLabel,
 * dropped the corner-bracket frame and heavy "Image Pending
 * Declassification" stamp on the placeholder panel, and turned the
 * two tag stamps into plain inline text. One section that looks like
 * a document is fine; six in a row is what needed fixing.
 *
 * V3 — Archive Lightbox: the passive viewer is now presented as a
 * single subject under quiet examination rather than a slideshow.
 * The artwork sits inside a matted frame with generous negative
 * space; a slow opacity-only crossfade (8–10s hold) swaps subjects
 * with no controls of any kind. Metadata (subject, status, recovery
 * class) lives outside the frame — never overlaid on the artwork —
 * and updates with its own brief fade so it reads as an archivist
 * quietly swapping one recovered subject for another.
 */
export function Dossier() {
  const [index, setIndex] = useState(0);
  const reducedMotion = useReducedMotion();
  const current = featuredSubjects[index];

  useEffect(() => {
    if (featuredSubjects.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % featuredSubjects.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="dossier"
      className="relative scroll-mt-18 border-t border-olive/10 bg-charcoal-soft py-24 md:py-40"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
          className="grid gap-16 md:grid-cols-2 md:gap-24"
        >
          {/* Copy column */}
          <div className="flex flex-col justify-center">
            <motion.div variants={fadeUp}>
              <SectionLabel>File 002 — The Dossier</SectionLabel>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-section-h2 uppercase text-beige-bright"
            >
              What Was Found
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-8 font-display text-xl uppercase tracking-wide text-olive-bright"
            >
              Every Krookhead is a recovered subject — pulled from a system
              that was never supposed to let them out.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-6 max-w-lg space-y-4 font-body text-body-lg text-beige/90">
              <p>
                Before the leaks, before the sightings, there was only the
                Archive — a holding system built to contain what it found
                and forget that it had. No one built the Krookheads. They
                were catalogued.
              </p>
              <p>
                The Unit maintains what&apos;s left of the operation:
                recovering files, verifying subjects, and releasing what the
                Archive can no longer keep sealed. What you&apos;re looking at is
                the paper trail.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-body text-xs uppercase tracking-wide text-beige-dim"
            >
              <span>Classification: Restricted</span>
              <span>Field Operatives: The Unit</span>
            </motion.div>
          </div>

          {/* Archive Lightbox — a single subject under quiet examination.
              Generous matting around a perfect-square frame; a slow
              opacity-only crossfade holds each subject for 8-10s with
              no controls. Metadata sits outside the frame, never over
              the artwork, and fades independently on change. */}
          <motion.div variants={fadeUp} className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="border border-olive/15 bg-gunmetal p-4 md:p-8">
              <div className="relative aspect-square w-full overflow-hidden bg-charcoal">
                {current ? (
                  <AnimatePresence>
                    <motion.div
                      key={current.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: reducedMotion ? 0.01 : 2, ease: archiveEase }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={current.imageSrc as string}
                        alt={`Krookheads subject file ${current.subjectNumber}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-body text-xs uppercase tracking-wide text-beige-dim">
                      Artwork Pending
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Understated examination metadata — outside the frame */}
            {current && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0.01 : 0.8, ease: archiveEase }}
                  className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-1 font-body text-[11px] uppercase tracking-wide text-beige-dim"
                >
                  <span>Subject // {current.subjectNumber}</span>
                  <span>{current.status}</span>
                  {current.recoveryClass && <span>{current.recoveryClass}</span>}
                </motion.div>
              </AnimatePresence>
            )}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
