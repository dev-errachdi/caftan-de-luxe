"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutContent } from "@/data/site";
import RevealText from "@/components/effects/RevealText";
import ParallaxImage from "@/components/effects/ParallaxImage";

export default function MoroccanCraftsmanship() {
  return (
    <section className="relative py-32 md:py-48 bg-[#111111] overflow-hidden">
      {/* Decorative Text Background */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <p className="font-serif italic text-white/[0.02] text-[20vw] leading-none">
          Craft
        </p>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-12 gap-8 mb-24">
          <div className="md:col-span-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="block w-16 h-px bg-[#B89A55]" />
              <span className="text-[#B89A55] text-xs tracking-[0.4em] uppercase">
                Savoir-Faire — 03
              </span>
            </motion.div>

            <RevealText
              as="h2"
              className="font-serif text-5xl md:text-7xl text-white tracking-tight"
            >
              L'Excellence de l'Artisanat
            </RevealText>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-8 font-arabic text-2xl text-[#B89A55]"
              dir="rtl"
            >
              تميز الصناعة التقليدية المغربية
            </motion.p>
          </div>

          <div className="md:col-span-5 md:col-start-8 md:pt-24">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-white/60 text-base leading-relaxed"
            >
              Chaque caftan raconte l'histoire d'un artisanat séculaire, où
              chaque geste, chaque broderie, chaque fil est le témoignage d'un
              héritage précieux transmis de génération en génération.
            </motion.p>
          </div>
        </div>

        {/* Craftsmanship Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          {/* Left: Big Image */}
          <div className="md:sticky md:top-24 h-fit">
            <ParallaxImage className="aspect-[3/4]" speed={0.15}>
              <Image
                src="/images/models/model-01.jpg"
                alt="Artisanat marocain"
                fill
                className="object-cover"
              />
            </ParallaxImage>
          </div>

          {/* Right: Features */}
          <div className="space-y-2">
            {aboutContent.craftsmanship.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group border-t border-white/10 py-8 hover:border-[#B89A55] transition-colors duration-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[#B89A55]/40 text-xs">
                    0{i + 1}
                  </span>
                  <span className="text-[#B89A55] text-xs tracking-[0.3em] uppercase">
                    Technique
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-8 items-baseline">
                  <div className="col-span-1">
                    <h3 className="font-serif text-3xl md:text-4xl text-white group-hover:italic transition-all duration-500">
                      {feature.name}
                    </h3>
                    <p
                      className="font-arabic text-lg text-[#B89A55] mt-2"
                      dir="rtl"
                    >
                      {feature.nameAr}
                    </p>
                  </div>
                  <p className="col-span-2 text-white/60 text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}