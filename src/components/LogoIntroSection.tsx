"use client";

import { motion } from "framer-motion";
import { SideNav } from "@/components/SideNav";

export function LogoIntroSection() {
  return (
    <section
      id="intro"
      className="snap-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-divider" />
      <SideNav />
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto"
        >
          {/* Replace this stylised placeholder with the final Misbehavity logo asset later. */}
          <div className="mx-auto flex h-28 w-72 items-end justify-center text-[8rem] font-black leading-none tracking-[-0.12em] text-accent sm:h-36 sm:w-96 sm:text-[10rem]">
            mb
          </div>
          <p className="mt-2 text-lg tracking-[0.55em] text-muted-copy sm:text-2xl">
            Misbehavity
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.75, delay: 0.28, ease: "easeOut" }}
          className="mt-10 font-serif text-2xl font-semibold italic text-foreground/90 sm:text-4xl"
        >
          Cooler than consulting. Sharper than agencies
        </motion.p>
      </div>
    </section>
  );
}
