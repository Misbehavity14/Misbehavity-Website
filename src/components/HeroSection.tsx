"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const marqueeLines = [
  { direction: "normal", duration: 34, yellow: [0] },
  { direction: "reverse", duration: 47, yellow: [1, 2] },
  { direction: "normal", duration: 61, yellow: [3, 4] },
  { direction: "reverse", duration: 39, yellow: [5] },
  { direction: "normal", duration: 72, yellow: [6] },
];

const words = "WITHOUT A MOAT, THERE IS NO BRAND".split(" ");

function MarqueeLine({
  line,
  index,
}: {
  line: (typeof marqueeLines)[number];
  index: number;
}) {
  const phrase = [...words, ...words];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.11, ease: "easeOut" }}
      className="marquee-line"
      style={{
        "--marquee-duration": `${line.duration}s`,
        "--marquee-direction": line.direction,
      } as CSSProperties}
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-copy">
            {phrase.map((word, wordIndex) => {
              const normalizedIndex = wordIndex % words.length;
              const isYellow = line.yellow.includes(normalizedIndex);

              return (
                <span
                  key={`${copy}-${wordIndex}`}
                  className={isYellow ? "text-accent" : "text-foreground/95"}
                >
                  {word}
                </span>
              );
            })}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="snap-section relative grid min-h-screen grid-rows-[auto_1fr] overflow-hidden"
      aria-label="Hero section with moving moat statement"
    >
      <h1 className="sr-only">
        Without a moat, there is no brand. We find your moat and build a brand
        out of it.
      </h1>
      <div className="-mt-1 space-y-2 sm:-mt-2 sm:space-y-4">
        {marqueeLines.map((line, index) => (
          <MarqueeLine
            key={`${line.direction}-${line.duration}`}
            line={line}
            index={index}
          />
        ))}
      </div>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.05, ease: "easeOut" }}
        className="mx-auto flex max-w-3xl items-center px-6 text-center font-serif text-base font-normal tracking-wide text-foreground/82 sm:text-xl md:text-2xl"
      >
        We find your moat and build a brand out of it.
      </motion.p>
    </section>
  );
}
