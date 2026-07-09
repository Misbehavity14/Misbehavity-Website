"use client";

import { motion } from "framer-motion";

const methods = [
  {
    title: "Find the Moat",
    body: "Find the unfair advantage of your business.",
  },
  {
    title: "Sharpen the Moat",
    body: "Figure out how people understand your moat.",
  },
  {
    title: "Build the Brand",
    body: "Crack strategy, positioning, architecture, GTM, & identity.",
  },
  {
    title: "Scale the Brand",
    body: "Execute efforts that lead to meaningful growth.",
  },
];

export function MisbehaveSection() {
  return (
    <section
      id="misbehave"
      className="relative min-h-screen overflow-hidden px-5 py-24 sm:px-8 lg:px-12"
      aria-labelledby="misbehave-heading"
    >
      <div className="mx-auto grid min-h-[calc(100svh-12rem)] w-full max-w-7xl content-center gap-14 lg:grid-cols-[minmax(18rem,0.72fr)_minmax(34rem,1.28fr)] lg:items-center lg:gap-16 xl:gap-24">
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span
            aria-hidden="true"
            className="mb-7 block h-1 w-16 bg-accent"
          />
          <h2
            id="misbehave-heading"
            className="text-5xl font-black uppercase leading-[0.92] tracking-[0.06em] text-foreground sm:text-7xl lg:text-[5.15rem]"
          >
            How We
            <br />
            Misbehave
          </h2>
        </motion.div>

        <div className="border-b border-divider">
          {methods.map((method, index) => (
            <motion.article
              key={method.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.45 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="grid gap-x-5 gap-y-3 border-t border-divider py-6 sm:grid-cols-[3rem_1fr] sm:py-7 xl:grid-cols-[3rem_minmax(10rem,0.8fr)_minmax(15rem,1.2fr)] xl:items-baseline"
            >
              <span className="font-mono text-xs font-bold tracking-[0.16em] text-accent">
                0{index + 1}
              </span>
              <h3 className="text-xl font-semibold text-accent sm:text-2xl">
                {method.title}
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-muted-copy sm:col-start-2 sm:text-lg xl:col-start-auto">
                {method.body}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
