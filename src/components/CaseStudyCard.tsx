"use client";

import { motion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  onSelect: (caseStudy: CaseStudy) => void;
};

export function CaseStudyCard({ caseStudy, onSelect }: CaseStudyCardProps) {
  return (
    <motion.button
      type="button"
      layoutId={`case-study-${caseStudy.slug}`}
      onClick={() => onSelect(caseStudy)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="group aspect-square w-full perspective-card"
      aria-label={`Open case study ${caseStudy.number}: ${caseStudy.title}`}
      data-image-path={caseStudy.imagePath}
    >
      <span className="relative block h-full w-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
        <span className="absolute inset-0 block backface-hidden border border-divider bg-surface p-4">
          <span className="flex h-full items-end border border-divider bg-background p-4">
            {/* Replace this placeholder block with the final image asset later: caseStudy.imagePath */}
            <span className="block text-left">
              <span className="block text-xs uppercase tracking-[0.2em] text-muted-copy">
                {caseStudy.category}
              </span>
              <span className="mt-3 block h-px w-14 bg-accent" />
            </span>
          </span>
        </span>
        <span className="absolute inset-0 block rotate-y-180 backface-hidden border border-accent bg-background p-5 text-left">
          <span className="text-sm font-black tracking-[0.24em] text-accent">
            {caseStudy.number}
          </span>
          <span className="mt-8 block text-xl font-black uppercase leading-tight text-foreground">
            {caseStudy.title}
          </span>
        </span>
      </span>
    </motion.button>
  );
}
