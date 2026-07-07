const troubledLetters = [
  { letter: "t", className: "font-sans font-black -rotate-3 translate-y-1" },
  { letter: "r", className: "font-serif font-bold italic rotate-2 -translate-y-2" },
  { letter: "o", className: "font-mono font-black rotate-1 translate-y-1" },
  { letter: "u", className: "font-sans font-light italic -rotate-2 -translate-y-1" },
  { letter: "b", className: "font-serif font-black rotate-3 translate-y-2" },
  { letter: "l", className: "font-mono font-bold -rotate-1 -translate-y-2" },
  { letter: "e", className: "font-sans font-black italic rotate-2 translate-y-1" },
  { letter: "d", className: "font-serif font-bold -rotate-3" },
];

type TroubledWordProps = {
  className?: string;
};

export function TroubledWord({ className = "" }: TroubledWordProps) {
  return (
    <span
      className={`inline-flex items-baseline gap-[0.04em] ${className}`}
      aria-label="troubled"
    >
      {troubledLetters.map((item, index) => (
        <span key={`${item.letter}-${index}`} className={item.className}>
          {item.letter}
        </span>
      ))}
    </span>
  );
}
