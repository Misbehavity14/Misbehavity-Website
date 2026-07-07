"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const methods = [
  {
    title: "Find the Moat",
    body: "Find the unfair advantage of your business.",
    distance: "54px",
    duration: "11s",
    delay: "-1s",
    className: "md:left-[48%] md:top-[19%]",
  },
  {
    title: "Sharpen the Moat",
    body: "Figure out how people understand your moat.",
    distance: "-44px",
    duration: "13s",
    delay: "-5s",
    className: "md:left-[39%] md:top-[36%]",
  },
  {
    title: "Build the Brand",
    body: "Crack strategy, positioning, architecture, GTM, & identity.",
    distance: "62px",
    duration: "12s",
    delay: "-2s",
    className: "md:left-[57%] md:top-[50%]",
  },
  {
    title: "Scale the Brand",
    body: "Execute efforts that lead to meaningful growth",
    distance: "-50px",
    duration: "14s",
    delay: "-7s",
    className: "md:left-[50%] md:top-[68%]",
  },
];

export function MisbehaveSection() {
  return (
    <section
      id="misbehave"
      className="relative min-h-screen overflow-hidden px-6 py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-divider" />
      <div className="mx-auto flex min-h-[calc(100svh-12rem)] w-full max-w-7xl flex-col justify-center md:block">
        <h2 className="pointer-events-none select-none text-6xl font-black uppercase leading-none tracking-[0.12em] text-foreground sm:text-8xl lg:text-[8.6rem]">
          How We Misbehave
        </h2>
        <div className="mt-12 grid w-full gap-5 md:absolute md:inset-0 md:mt-0 md:block">
          {methods.map((method, index) => (
            <motion.article
              key={method.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 420, damping: 18 },
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`drift-card rounded-md bg-accent p-5 text-background shadow-2xl md:absolute md:w-[31rem] ${method.className}`}
              style={
                {
                  "--drift-distance": method.distance,
                  "--drift-duration": method.duration,
                  "--drift-delay": method.delay,
                } as CSSProperties
              }
            >
              <h3 className="text-xl font-black">{method.title}</h3>
              <p className="mt-1 text-xl leading-snug text-background/65">
                {method.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
