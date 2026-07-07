export function ParticleBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-50"
    >
      <div className="absolute left-[8%] top-[12%] h-1.5 w-1.5 rounded-full bg-accent" />
      <div className="absolute left-[22%] top-[72%] h-px w-10 bg-divider" />
      <div className="absolute right-[18%] top-[20%] h-1 w-1 rounded-full bg-foreground/35" />
      <div className="absolute right-[12%] top-[68%] h-px w-16 bg-divider" />
      <div className="absolute left-0 top-1/3 h-px w-full bg-divider/40" />
    </div>
  );
}
