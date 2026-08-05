"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { collectionInfo } from "@/config/collection-info";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { RecoveryStatus } from "@/config/collection-info";

const statusLabel: Record<RecoveryStatus, string> = {
  PENDING: "Subject Recovery: Pending",
  ACTIVE: "Subject Recovery: Active",
  "FULLY EXTRACTED": "Fully Extracted",
};

const statusDot: Record<RecoveryStatus, string> = {
  PENDING: "bg-beige-dim",
  ACTIVE: "bg-olive-bright animate-pulse-dot",
  "FULLY EXTRACTED": "bg-crimson-bright",
};

/**
 * COLLECTION INFORMATION — purpose: present factual details.
 *
 * The only section permitted to state supply/price/chain facts, per
 * the locked pacing rule. Strictly informational: no wallet connect,
 * no on-site mint action. Data comes from config/collection-info.ts.
 *
 * V2: the stat grid used to be a bordered spreadsheet (hairlines
 * between every cell) — replaced with plain generously-spaced stat
 * pairs, which reads as an editorial fact sheet instead of a data
 * table. Status dropped its bordered stamp for the same dot+text
 * pattern used in Operation Timeline and the footer's Archive Status.
 */
export function CollectionInfo() {
  const { totalSupply, chain, mintPriceDisplay, walletLimit, status } = collectionInfo;

  const stats = [
    { label: "Subjects Catalogued", value: totalSupply.toLocaleString() },
    { label: "Network", value: chain },
    { label: "Recovery Cost", value: mintPriceDisplay },
    { label: "Recovery Limit", value: `${walletLimit} per wallet` },
  ];

  return (
    <section
      id="collection-information"
      className="relative scroll-mt-18 border-t border-olive/10 bg-charcoal-soft py-24 md:py-40"
    >
      <Container>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-15% 0px" }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel>File 004 — Collection Information</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-4 font-display text-section-h2 uppercase text-beige-bright"
          >
            The Record
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="border-b border-olive/15 pb-4">
                <p className="font-body text-xs uppercase tracking-wide text-beige-dim">
                  {stat.label}
                </p>
                <p className="mt-3 font-display text-2xl uppercase text-beige-bright md:text-3xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            className={cn(
              "mt-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
            )}
          >
            <span className="flex items-center gap-2 font-body text-xs uppercase tracking-wide text-beige-dim">
              <span className={cn("h-1.5 w-1.5 rounded-full", statusDot[status])} aria-hidden="true" />
              {statusLabel[status]}
            </span>
            <p className="max-w-md font-body text-sm text-beige-dim">
              This page does not process transactions. When Subject Recovery
              opens, it will take place exclusively on the official external
              platform.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
