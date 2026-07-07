"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

export function CaseStudyGrid() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <section
      id="case-studies"
      className="relative min-h-screen px-6 py-24"
      aria-labelledby="case-studies-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-divider" />
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-10 flex items-end justify-between gap-8">
          <div>
            <p className="section-kicker">Case Studies</p>
            <h2
              id="case-studies-heading"
              className="mt-4 max-w-4xl text-4xl font-black uppercase tracking-[0.08em] text-foreground sm:text-6xl"
            >
              A wall of work, not a trophy shelf.
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm uppercase leading-6 tracking-[0.16em] text-muted-copy md:block">
            Click any board to open the evidence.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {caseStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              caseStudy={study}
              onSelect={setSelectedStudy}
            />
          ))}
        </div>
      </div>

      <CaseStudyModal
        caseStudy={selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />
    </section>
  );
}
