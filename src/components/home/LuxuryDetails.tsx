"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { specialMoments } from "@/data/site";
import RevealText from "@/components/effects/RevealText";

export default function LuxuryDetails() {
  return (
    <section className="relative py-32 md:py-48 bg-[#FAF8F2] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="block w-16 h-px bg-[#B89A55]" />
            <span className="text-[#B89A55] text-xs tracking-[0.4em] uppercase">
              Occasions — 04
            </span>
            <span className="block w-16 h-px bg-[#B89A55]" />
          </motion.div>

          <RevealText
            as="h2"
            className="font-serif text-5xl md:text-7xl text-[#111] tracking-tight"
          >
            Pour vos moments d'exception
          </RevealText>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialMoments.map((moment, i) => {
            const images = [
              "/images/collections/caftans.jpg",
              "/images/collections/takchitas.jpg",
              "/images/collections/robes.jpg",
              "/images/collections/new-collection.jpg",
            ];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 1,
                  delay: i * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="group relative aspect-[3/4] overflow-hidden cursor-pointer"
                data-cursor-text="VIEW"
              >
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={images[i]}
                    alt={moment.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-[#B89A55]/0 group-hover:bg-[#B89A55]/20 transition-colors duration-700" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                  <div className="flex justify-between items-start">
                    <span className="text-white/70 text-xs tracking-[0.3em] uppercase">
                      0{i + 1} / 04
                    </span>
                    <motion.span
                      className="text-white text-xl"
                      whileHover={{ rotate: 45 }}
                    >
                      ↗
                    </motion.span>
                  </div>

                  <div>
                    <p
                      className="font-arabic text-lg text-[#D8C8A5] mb-2"
                      dir="rtl"
                    >
                      {moment.titleAr}
                    </p>
                    <h3 className="font-serif text-3xl md:text-4xl text-white mb-2 group-hover:italic transition-all duration-500">
                      {moment.title}
                    </h3>
                    <p className="text-white/70 text-sm max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-700 overflow-hidden">
                      {moment.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}