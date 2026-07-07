"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const methods = [
  {
    title: "Find the Moat",
    body: "Find the unfair advantage of your business.",
    className: "md:left-[54%] md:top-[18%]",
    distance: "72px",
    lift: "-10px",
    duration: "7.8s",
    delay: "-1.4s",
  },
  {
    title: "Sharpen the Moat",
    body: "Figure out how people understand your moat.",
    className: "md:left-[43%] md:top-[36%]",
    distance: "-66px",
    lift: "8px",
    duration: "9.2s",
    delay: "-4s",
  },
  {
    title: "Build the Brand",
    body: "Crack strategy, positioning, architecture, GTM, & identity.",
    className: "md:left-[59%] md:top-[51%]",
    distance: "84px",
    lift: "12px",
    duration: "8.4s",
    delay: "-2.6s",
  },
  {
    title: "Scale the Brand",
    body: "Execute efforts that lead to meaningful growth",
    className: "md:left-[50%] md:top-[69%]",
    distance: "-76px",
    lift: "-7px",
    duration: "10.1s",
    delay: "-5.2s",
  },
];

export function MisbehaveSection() {
  return (
    <section
      id="misbehave"
      className="relative min-h-screen overflow-hidden px-6 py-24"
      aria-labelledby="misbehave-heading"
    >
      <div className="relative mx-auto flex min-h-[calc(100svh-12rem)] w-full max-w-7xl flex-col justify-center">
        <h2
          id="misbehave-heading"
          className="pointer-events-none select-none text-center text-5xl font-black uppercase leading-none tracking-[0.12em] text-foreground sm:text-7xl lg:text-[6.6rem]"
        >
          How We Misbehave
        </h2>
        <div className="mt-12 grid w-full gap-5 md:absolute md:inset-0 md:mt-0 md:block">
          {methods.map((method, index) => (
            <motion.article
              key={method.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`method-card rounded-md bg-accent p-5 text-background shadow-2xl md:absolute md:w-[31rem] ${method.className}`}
              style={
                {
                  "--method-distance": method.distance,
                  "--method-lift": method.lift,
                  "--method-duration": method.duration,
                  "--method-delay": method.delay,
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
