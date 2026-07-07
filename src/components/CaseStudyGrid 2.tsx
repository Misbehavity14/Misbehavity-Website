"use client";

import { useState } from "react";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { CaseStudyModal } from "@/components/CaseStudyModal";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

export function CaseStudyGrid() {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="section-shell">
      <div className="divider-line mb-10" />
      <p className="section-kicker">
        Case Study Grid
      </p>
      <h2 className="section-heading">
        Placeholder case study cards.
      </h2>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {caseStudies.map((study) => (
          <CaseStudyCard
            key={study.slug}
            caseStudy={study}
            onSelect={setSelectedStudy}
          />
        ))}
      </div>
      <CaseStudyModal
        caseStudy={selectedStudy}
        onClose={() => setSelectedStudy(null)}
      />
    </section>
  );
}
