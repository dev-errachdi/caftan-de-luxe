"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Marquee from "@/components/effects/Marquee";
import RevealText from "@/components/effects/RevealText";

export default function BrandIntro() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={ref}
      className="relative py-32 md:py-48 bg-[#FAF8F2] overflow-hidden"
    >
      {/* Background Marquee */}
      <motion.div
        style={{ x }}
        className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none"
      >
        <p className="font-serif italic text-[#B89A55]/5 text-[20vw] whitespace-nowrap leading-none">
          Elegance · Luxury · Heritage
        </p>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Small heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center gap-4 mb-12"
        >
          <span className="block w-16 h-px bg-[#B89A55]" />
          <span className="text-[#B89A55] text-xs tracking-[0.4em] uppercase">
            Notre Philosophie — 01
          </span>
        </motion.div>

        {/* Main Text */}
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <RevealText
              as="h2"
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-[#111] leading-[1.1] tracking-tight"
            >
              L'art du caftan marocain, réinventé pour la femme contemporaine.
            </RevealText>
          </div>

          <div className="md:col-span-4 md:pt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <p className="text-[#211C17]/70 text-base leading-relaxed mb-8">
                Chaque création est le fruit d'un dialogue entre un savoir-faire
                séculaire et une vision résolument moderne. Des broderies les
                plus fines aux tissus les plus nobles.
              </p>
              <p
                className="font-arabic text-lg text-[#B89A55]"
                dir="rtl"
              >
                فن يلتقي فيه الماضي بالحاضر
              </p>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-16 border-t border-[#B89A55]/20">
          {[
            { value: "150+", label: "Créations Uniques" },
            { value: "20", label: "Artisans" },
            { value: "1000+", label: "Heures de Travail" },
            { value: "100%", label: "Fait Main" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
            >
              <p className="font-serif text-5xl md:text-6xl text-[#B89A55] mb-2">
                {stat.value}
              </p>
              <p className="text-[#211C17]/60 text-xs tracking-[0.2em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="mt-32 border-y border-[#B89A55]/20 py-6 text-[#111]">
        <Marquee
          text="Caftan de Luxe"
          speed={40}
          className="text-3xl md:text-5xl"
        />
      </div>
    </section>
  );
}