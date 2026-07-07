"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { clientLogos } from "@/data/clientLogos";

const troubledLetters = [
  { letter: "T", className: "font-sans font-black -rotate-3 translate-y-1" },
  { letter: "R", className: "font-serif font-bold italic rotate-2 -translate-y-2" },
  { letter: "O", className: "font-mono font-black rotate-1 translate-y-1" },
  { letter: "U", className: "font-sans font-light italic -rotate-2 -translate-y-1" },
  { letter: "B", className: "font-serif font-black rotate-3 translate-y-2" },
  { letter: "L", className: "font-mono font-bold -rotate-1 -translate-y-2" },
  { letter: "E", className: "font-sans font-black italic rotate-2 translate-y-1" },
  { letter: "D", className: "font-serif font-bold -rotate-3" },
];

function ClientLogoTile({
  name,
  logoPath,
  index,
}: {
  name: string;
  logoPath: string;
  index: number;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 0.45, y: 0 }}
      whileHover={{ opacity: 0.86, y: -3, scale: 1.025 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, delay: index * 0.035 }}
      className="flex min-h-20 items-center justify-center text-center grayscale transition"
      aria-label={`${name} logo`}
    >
      {!imageFailed ? (
        <Image
          src={logoPath}
          alt={name}
          width={220}
          height={90}
          className="max-h-20 w-auto object-contain opacity-70"
          onError={() => setImageFailed(true)}
        />
      ) : (
        // Replace this text fallback with the final client logo asset when available.
        <span className="text-3xl font-black tracking-tight text-foreground/60">
          {name}
        </span>
      )}
    </motion.div>
  );
}

export function PastSection() {
  return (
    <section
      id="past"
      className="relative min-h-screen px-6 py-24"
      aria-labelledby="past-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-divider" />
      <div className="mx-auto flex min-h-[calc(100svh-12rem)] w-full max-w-7xl flex-col justify-center">
        <h2
          id="past-heading"
          className="max-w-6xl text-4xl font-black uppercase tracking-[0.12em] text-foreground sm:text-6xl"
        >
          Our{" "}
          <span
            className="mx-3 inline-flex items-baseline gap-1 tracking-[0.16em]"
            aria-label="Troubled"
          >
            {troubledLetters.map((item, index) => (
              <span key={`${item.letter}-${index}`} className={item.className}>
                {item.letter}
              </span>
            ))}
          </span>{" "}
          (successful) Past
        </h2>
        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {clientLogos.map((client, index) => (
            <ClientLogoTile
              key={client.name}
              name={client.name}
              logoPath={client.logoPath}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
