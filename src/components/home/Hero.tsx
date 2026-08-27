"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "@/components/effects/MagneticButton";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section
      ref={ref}
      className="relative h-screen w-full overflow-hidden bg-[#111111]"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y, scale }}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Caftan de Luxe"
          fill
          className="object-cover"
          priority
          quality={95}
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
      </motion.div>

      {/* Grain */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col justify-between px-6 md:px-12 py-24"
      >
        {/* Top: Small text */}
        <div className="pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex items-center gap-4"
          >
            <span className="block w-12 h-px bg-[#B89A55]" />
            <p className="text-[#D8C8A5] text-xs tracking-[0.4em] uppercase">
              Maison de Couture — Est. Morocco
            </p>
          </motion.div>
        </div>

        {/* Center: Main Title */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Arabic */}
          <div className="overflow-hidden mb-6">
            <motion.p
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ delay: 2.2, duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
              className="font-arabic text-3xl md:text-5xl text-[#B89A55]"
              dir="rtl"
            >
              قفطان الفخامة
            </motion.p>
          </div>

          {/* English Main */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ delay: 2.4, duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="font-serif text-white text-[15vw] md:text-[10vw] leading-[0.85] tracking-tight"
            >
              Caftan
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 200 }}
              animate={{ y: 0 }}
              transition={{ delay: 2.6, duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
              className="font-serif italic text-[#B89A55] text-[15vw] md:text-[10vw] leading-[0.85] tracking-tight pl-8 md:pl-32"
            >
              de Luxe
            </motion.h1>
          </div>
        </div>

        {/* Bottom: Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <p className="text-[#D8C8A5] text-xs tracking-[0.3em] uppercase mb-2">
              Collection
            </p>
            <p className="text-white font-serif text-lg">Automne / Hiver</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.1, duration: 1 }}
            className="hidden md:block"
          >
            <p className="text-[#D8C8A5] text-xs tracking-[0.3em] uppercase mb-2">
              Origin
            </p>
            <p className="text-white font-serif text-lg">Morocco</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 1 }}
            className="hidden md:block"
          >
            <p className="text-[#D8C8A5] text-xs tracking-[0.3em] uppercase mb-2">
              Craft
            </p>
            <p className="text-white font-serif text-lg">Fait Main</p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.3, duration: 1 }}
            className="flex justify-end"
          >
            <MagneticButton>
              <Link
                href="/collection"
                className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#B89A55] text-white overflow-hidden"
                data-cursor-text="EXPLORE"
              >
                <span className="relative z-10 text-xs tracking-[0.3em] uppercase">
                  Discover
                </span>
                <span className="relative z-10 text-lg group-hover:translate-x-2 transition-transform duration-500">
                  →
                </span>
                <div className="absolute inset-0 bg-[#B89A55] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/50 text-[10px] tracking-[0.4em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#B89A55] to-transparent"
        />
      </motion.div>
    </section>
  );
}