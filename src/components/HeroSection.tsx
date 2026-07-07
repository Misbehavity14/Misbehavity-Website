"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const marqueeLines = [
  { direction: "normal", duration: 42, muted: [0, 8], yellow: [3] },
  { direction: "reverse", duration: 48, muted: [2, 6], yellow: [5] },
  { direction: "normal", duration: 54, muted: [1, 7], yellow: [8] },
  { direction: "reverse", duration: 46, muted: [4], yellow: [2] },
  { direction: "normal", duration: 58, muted: [5, 9], yellow: [0] },
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
              const isMuted = line.muted.includes(normalizedIndex);

              return (
                <span
                  key={`${copy}-${wordIndex}`}
                  className={
                    isYellow
                      ? "text-accent"
                      : isMuted
                        ? "text-foreground/25"
                        : "text-foreground"
                  }
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
      className="snap-section relative flex min-h-screen flex-col justify-center overflow-hidden py-8"
      aria-label="Hero section with moving moat statement"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-divider" />
      <h1 className="sr-only">
        Without a moat, there is no brand. We find your moat and build a brand
        out of it.
      </h1>
      <div className="space-y-3 sm:space-y-5">
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
        className="absolute inset-x-6 bottom-[13vh] mx-auto max-w-3xl text-center font-serif text-xl font-semibold tracking-wide text-foreground/85 sm:text-3xl"
      >
        We find your moat and build a brand out of it.
      </motion.p>
    </section>
  );
}
