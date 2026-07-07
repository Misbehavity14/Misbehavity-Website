const letterStyles = [
  "font-sans font-black -rotate-3 translate-y-1",
  "font-serif font-bold italic rotate-2 -translate-y-2",
  "font-mono font-black rotate-1 translate-y-1",
  "font-sans font-light italic -rotate-2 -translate-y-1",
  "font-serif font-black rotate-3 translate-y-2",
  "font-mono font-bold -rotate-1 -translate-y-2",
  "font-sans font-black italic rotate-2 translate-y-1",
  "font-serif font-bold -rotate-3",
  "font-mono font-light italic rotate-1 translate-y-1",
];

type TroubledWordProps = {
  className?: string;
  word?: string;
};

export function TroubledWord({
  className = "",
  word = "TROUBLED",
}: TroubledWordProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-[0.04em] ${className}`}
      aria-label={word}
    >
      {[...word].map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={letterStyles[index % letterStyles.length]}
        >
          {letter}
        </span>
      ))}
    </span>
  );
}
