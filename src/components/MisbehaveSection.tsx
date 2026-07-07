"use client";

import { motion } from "framer-motion";

const methods = [
  {
    title: "Find the Moat",
    body: "Find the unfair advantage of your business.",
    className: "md:left-[54%] md:top-[18%]",
    hoverX: [0, 18, -10, 8, 0],
    hoverY: [0, -10, 7, -4, 0],
    hoverRotate: [0, 1.2, -0.7, 0.4, 0],
  },
  {
    title: "Sharpen the Moat",
    body: "Figure out how people understand your moat.",
    className: "md:left-[43%] md:top-[36%]",
    hoverX: [0, -20, 8, -6, 0],
    hoverY: [0, 8, -12, 5, 0],
    hoverRotate: [0, -1.4, 0.8, -0.4, 0],
  },
  {
    title: "Build the Brand",
    body: "Crack strategy, positioning, architecture, GTM, & identity.",
    className: "md:left-[59%] md:top-[51%]",
    hoverX: [0, 22, -12, 10, 0],
    hoverY: [0, 11, -9, 4, 0],
    hoverRotate: [0, 1.1, -1.2, 0.5, 0],
  },
  {
    title: "Scale the Brand",
    body: "Execute efforts that lead to meaningful growth",
    className: "md:left-[50%] md:top-[69%]",
    hoverX: [0, -16, 12, -8, 0],
    hoverY: [0, -9, 10, -5, 0],
    hoverRotate: [0, -0.9, 1.3, -0.5, 0],
  },
];

export function MisbehaveSection() {
  return (
    <section
      id="misbehave"
      className="relative min-h-screen overflow-hidden px-6 py-24"
      aria-labelledby="misbehave-heading"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-divider" />
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                x: method.hoverX,
                y: method.hoverY,
                rotate: method.hoverRotate,
                transition: {
                  duration: 0.9,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                },
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`rounded-md bg-accent p-5 text-background shadow-2xl md:absolute md:w-[31rem] ${method.className}`}
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
