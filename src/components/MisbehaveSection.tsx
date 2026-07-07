"use client";

import type { CSSProperties } from "react";
import { motion } from "framer-motion";

const methods = [
  {
    title: "Find the Moat",
    body: "Find the unfair advantage of your business.",
    top: "18%",
    duration: "15s",
    delay: "-2s",
    direction: "normal",
  },
  {
    title: "Sharpen the Moat",
    body: "Figure out how people understand your moat.",
    top: "36%",
    duration: "19s",
    delay: "-9s",
    direction: "reverse",
  },
  {
    title: "Build the Brand",
    body: "Crack strategy, positioning, architecture, GTM, & identity.",
    top: "53%",
    duration: "17s",
    delay: "-5s",
    direction: "normal",
  },
  {
    title: "Scale the Brand",
    body: "Execute efforts that lead to meaningful growth",
    top: "70%",
    duration: "22s",
    delay: "-13s",
    direction: "reverse",
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
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {methods.map((method, index) => (
            <div
              key={method.title}
              className="method-lane"
              style={{ top: method.top } as CSSProperties}
            >
              <motion.article
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="method-card-travel pointer-events-auto w-[31rem] rounded-md bg-accent p-5 text-background shadow-2xl"
                style={
                  {
                    "--method-duration": method.duration,
                    "--method-delay": method.delay,
                    "--method-direction": method.direction,
                  } as CSSProperties
                }
              >
                <h3 className="text-xl font-black">{method.title}</h3>
                <p className="mt-1 text-xl leading-snug text-background/65">
                  {method.body}
                </p>
              </motion.article>
            </div>
          ))}
        </div>

        <div className="mt-12 grid w-full gap-5 md:hidden">
          {methods.map((method, index) => (
            <motion.article
              key={method.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="method-card-mobile rounded-md bg-accent p-5 text-background shadow-2xl"
              style={
                {
                  "--method-duration": method.duration,
                  "--method-delay": method.delay,
                  "--method-direction": method.direction,
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
