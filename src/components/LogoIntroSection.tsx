"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { SideNav } from "@/components/SideNav";

export function LogoIntroSection() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <section
      id="intro"
      className="snap-section relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-24"
      aria-labelledby="positioning-heading"
    >
      <SideNav />
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto"
        >
          <div className="mx-auto flex w-72 flex-col items-center sm:w-96">
            {!logoFailed ? (
              <Image
                src="/images/logos/misbehavity-logo.png"
                alt="Misbehavity"
                width={471}
                height={326}
                priority
                className="h-auto w-full"
                onError={() => setLogoFailed(true)}
              />
            ) : (
              <div className="text-center">
                {/* Replace this fallback with the final transparent Misbehavity logo asset when available. */}
                <div className="text-[7.5rem] font-black leading-[0.7] tracking-[-0.14em] text-accent sm:text-[9rem]">
                  mb
                </div>
                <p className="mt-8 text-lg tracking-[0.55em] text-muted-copy sm:text-2xl">
                  Misbehavity
                </p>
              </div>
            )}
          </div>
        </motion.div>
        <motion.p
          id="positioning-heading"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.75, delay: 0.28, ease: "easeOut" }}
          className="mt-8 font-serif text-xl font-normal italic text-foreground/88 sm:text-3xl"
        >
          Cooler than consulting. Sharper than agencies
        </motion.p>
      </div>
    </section>
  );
}
