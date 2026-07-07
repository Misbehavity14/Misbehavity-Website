"use client";

import { motion } from "framer-motion";
import { clientLogos } from "@/data/clientLogos";

export function PastSection() {
  return (
    <section id="past" className="relative min-h-screen px-6 py-24">
      <div className="absolute inset-x-0 top-0 h-px bg-divider" />
      <div className="mx-auto flex min-h-[calc(100svh-12rem)] w-full max-w-7xl flex-col justify-center">
        <h2 className="max-w-5xl text-4xl font-black uppercase tracking-[0.14em] text-foreground sm:text-6xl">
          Our <span className="font-serif italic tracking-[0.3em]">Troubled</span>{" "}
          (successful) Past
        </h2>
        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {clientLogos.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 0.45, y: 0 }}
              whileHover={{ opacity: 0.86, y: -3, scale: 1.025 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.035 }}
              className="flex min-h-20 items-center justify-center text-center grayscale transition"
            >
              {/* Replace placeholder text with the real logo image later: client.logoPath */}
              <span className="text-3xl font-black tracking-tight text-foreground/65">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
