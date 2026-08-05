"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FileCard } from "@/components/ui/FileCard";
import { recoveredFiles } from "@/config/recovered-files";
import { fadeUp, staggerContainer } from "@/lib/motion";

/**
 * RECOVERED FILES — purpose: showcase the art.
 *
 * A curated sneak-peek grid, not a full gallery (that's a later,
 * larger concern). Cards render real artwork once config/recovered-files.ts
 * has imageSrc values populated; until then they render as sealed/partial
 * placeholder files, which is in-universe correct rather than "unfinished."
 */
export function RecoveredFiles() {
  return (
    <section
      id="recovered-files"
      className="relative scroll-mt-18 border-t border-olive/10 bg-charcoal py-24 md:py-40"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>File 003 — Recovered Files</SectionLabel>
          </motion.div>

          <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <motion.h2
              variants={fadeUp}
              className="font-display text-section-h2 uppercase text-beige-bright"
            >
              Partial Recovery
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="max-w-sm font-body text-body-lg text-beige/90"
            >
              A limited set of subjects has been cleared for preview.
              Everything else stays sealed until the Archive says otherwise.
            </motion.p>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8"
          >
            {recoveredFiles.map((item) => (
              <FileCard key={item.id} item={item} />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
