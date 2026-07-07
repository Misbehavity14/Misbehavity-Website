import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyModalProps = {
  caseStudy: CaseStudy | null;
  onClose: () => void;
};

export function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  if (!caseStudy) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-background/80 px-6">
      <div className="surface-panel w-full max-w-xl p-6 shadow-xl">
        <p className="text-sm uppercase tracking-[0.16em] text-accent">
          Case Study Modal
        </p>
        <h3 className="mt-3 text-2xl font-semibold">{caseStudy.title}</h3>
        <p className="mt-4 leading-7 text-muted-copy">
          {caseStudy.summary}
        </p>
        <p className="mt-4 border-t border-divider pt-4 text-sm text-muted-copy">
          Placeholder image path: {caseStudy.imagePath}
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-6 border border-accent px-4 py-2 text-sm font-medium text-accent transition hover:bg-accent hover:text-background"
        >
          Close
        </button>
      </div>
    </div>
  );
}
