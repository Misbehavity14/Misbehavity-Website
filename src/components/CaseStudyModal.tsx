"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyModalProps = {
  caseStudy: CaseStudy | null;
  onClose: () => void;
};

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-divider py-4">
      <dt className="text-xs font-black uppercase tracking-[0.22em] text-accent">
        {label}
      </dt>
      <dd className="mt-2 text-base leading-7 text-foreground/88">{value}</dd>
    </div>
  );
}

function EvidenceNote({
  label,
  children,
  className = "",
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={`evidence-note ${className}`}>
      <h4 className="inline-block bg-accent px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.24em] text-background">
        {label}
      </h4>
      <p className="mt-5 text-base leading-7 text-foreground/88">{children}</p>
    </article>
  );
}

export function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (!caseStudy) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  return (
    <AnimatePresence>
      {caseStudy ? (
        <motion.div
          className="fixed inset-0 z-40 overflow-y-auto bg-background/88 px-4 py-5 backdrop-blur-sm sm:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <motion.div
            layoutId={`case-study-${caseStudy.slug}`}
            className="relative mx-auto grid min-h-[calc(100svh-2.5rem)] max-w-[96rem] gap-6 border border-divider bg-[#090908] p-4 shadow-2xl sm:p-6 xl:grid-cols-[20rem_1fr_23rem]"
            initial={{ scale: 0.96, y: 18 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.96, y: 18 }}
            transition={{ type: "spring", stiffness: 180, damping: 24 }}
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 border border-divider px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground transition hover:border-accent hover:text-accent"
            >
              Close
            </button>

            <aside className="border border-divider p-5">
              <p className="inline-flex border border-divider px-3 py-2 font-mono text-sm uppercase tracking-[0.2em]">
                Case Study{" "}
                <span className="ml-2 text-accent">{caseStudy.number}</span>
              </p>
              <h3
                id="case-study-title"
                className="mt-8 text-4xl font-black leading-tight text-foreground"
              >
                {caseStudy.title}
              </h3>
              <div className="mt-6 h-px w-16 bg-foreground" />
              <dl className="mt-8">
                <DetailRow
                  label="Brand Details"
                  value={caseStudy.brandDetails}
                />
                <DetailRow label="The Moat" value={caseStudy.moat} />
                <DetailRow label="Misbehaviour" value={caseStudy.misbehaviour} />
                <DetailRow label="The Work" value={caseStudy.work} />
                <DetailRow label="The Shift" value={caseStudy.shift} />
              </dl>
            </aside>

            <main className="relative min-h-[42rem] border border-divider p-5">
              <div className="absolute left-4 top-4 h-5 w-px bg-divider" />
              <div className="absolute left-2 top-6 h-px w-5 bg-divider" />
              <div className="absolute right-4 bottom-4 h-5 w-px bg-divider" />
              <div className="absolute right-2 bottom-6 h-px w-5 bg-divider" />
              <EvidenceNote
                label="The Situation"
                className="mx-auto max-w-xl rotate-[-2deg]"
              >
                {caseStudy.situation}
              </EvidenceNote>
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                <EvidenceNote label="The Diagnosis" className="rotate-[1deg]">
                  {caseStudy.diagnosis}
                </EvidenceNote>
                <EvidenceNote
                  label="The Misbehaviour"
                  className="rotate-[-1deg]"
                >
                  {caseStudy.misbehaviour}
                </EvidenceNote>
              </div>
              <div className="mt-10 border-t border-divider pt-8 font-mono text-sm uppercase tracking-[0.22em] text-muted-copy">
                <span className="line-through decoration-accent decoration-2">
                  Wood
                </span>
                <span className="mx-5 line-through decoration-accent decoration-2">
                  Marble
                </span>
                <span className="line-through decoration-accent decoration-2">
                  Stone
                </span>
                <span className="ml-5 text-foreground">Other luxury materials</span>
              </div>
            </main>

            <aside className="border border-divider p-5">
              <h4 className="inline-block bg-accent px-3 py-1 font-mono text-xs font-black uppercase tracking-[0.24em] text-background">
                The Moves
              </h4>
              <ol className="mt-8 space-y-8">
                {caseStudy.moves.map((move, index) => (
                  <li
                    key={move}
                    className="grid grid-cols-[3rem_1fr] gap-5 border-t border-divider pt-6"
                  >
                    <span className="font-serif text-7xl leading-none text-accent">
                      {index + 1}
                    </span>
                    <p className="text-base leading-7 text-foreground/88">
                      {move}
                    </p>
                  </li>
                ))}
              </ol>
            </aside>

            <footer className="border border-divider p-5 xl:col-span-3">
              <div className="grid gap-5 lg:grid-cols-[9rem_1fr] lg:items-center">
                <p className="inline-block bg-accent px-3 py-2 font-mono text-xs font-black uppercase tracking-[0.24em] text-background">
                  Brand Idea
                </p>
                <p className="font-serif text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                  {caseStudy.brandIdea}
                </p>
              </div>
            </footer>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
