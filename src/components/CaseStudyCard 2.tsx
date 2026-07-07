import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  onSelect: (caseStudy: CaseStudy) => void;
};

export function CaseStudyCard({ caseStudy, onSelect }: CaseStudyCardProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(caseStudy)}
      className={cn(
        "surface-panel p-5 text-left",
        "transition hover:-translate-y-1 hover:border-accent",
      )}
    >
      <div className="aspect-[4/3] border border-divider bg-background" />
      <p className="mt-5 text-sm uppercase tracking-[0.16em] text-accent">
        {caseStudy.category}
      </p>
      <h3 className="mt-2 text-xl font-semibold text-foreground">
        {caseStudy.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted-copy">
        {caseStudy.summary}
      </p>
    </button>
  );
}
