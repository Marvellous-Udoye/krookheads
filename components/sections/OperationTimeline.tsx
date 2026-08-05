"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { timelinePhases } from "@/config/operation-timeline";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { PhaseStatus } from "@/config/operation-timeline";

const statusColor: Record<PhaseStatus, string> = {
  COMPLETE: "text-olive-bright",
  UPCOMING: "text-crimson-bright",
  LOCKED: "text-beige-dim",
};

const dotTone: Record<PhaseStatus, string> = {
  COMPLETE: "bg-olive-bright",
  UPCOMING: "bg-crimson-bright animate-pulse-dot",
  LOCKED: "bg-beige-dim",
};

/**
 * OPERATION TIMELINE — purpose: build anticipation.
 *
 * Deliberately dateless — status (COMPLETE / UPCOMING / LOCKED) carries
 * the "where we are" information instead of real-world dates, since
 * exact launch timing isn't confirmed. Keep config/operation-timeline.ts
 * in sync with config/collection-info.ts's status field; see the
 * comment there for how the two relate.
 *
 * V2: five bordered status stamps in a row (one per phase) was the
 * single heaviest "document" moment on the page. The rail's colored
 * dot already carries the status signal — the stamp was redundant on
 * top of it. Status is now a plain small word, same color as the dot.
 */
export function OperationTimeline() {
  return (
    <section
      id="operation-timeline"
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
            <SectionLabel>File 005 — Operation Timeline</SectionLabel>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mt-4 max-w-2xl font-display text-section-h2 uppercase text-beige-bright"
          >
            What Comes Next
          </motion.h2>

          <div className="relative mt-16 max-w-3xl">
            {/* connecting rail */}
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px bg-olive/20"
              aria-hidden="true"
            />

            <div className="flex flex-col gap-12">
              {timelinePhases.map((phase) => (
                <motion.div
                  key={phase.id}
                  variants={fadeUp}
                  className="relative flex gap-6 pl-0"
                >
                  <div className="relative z-10 flex-shrink-0 pt-1.5">
                    <span
                      className={cn("block h-3.5 w-3.5 rounded-full border-2 border-charcoal", dotTone[phase.status])}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex-1 pb-2">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-display text-lg text-olive-bright">
                        {phase.phaseNumber}
                      </span>
                      <h3 className="font-display text-xl uppercase tracking-wide text-beige-bright md:text-2xl">
                        {phase.title}
                      </h3>
                      <span className={cn("font-body text-xs uppercase tracking-wide", statusColor[phase.status])}>
                        {phase.status}
                      </span>
                    </div>
                    <p className="mt-3 max-w-xl font-body text-body-lg text-beige/90">
                      {phase.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
