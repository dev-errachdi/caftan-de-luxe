"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { instagramPosts } from "@/data/instagram";
import { siteConfig } from "@/config/site.config";
import RevealText from "@/components/effects/RevealText";
import MagneticButton from "@/components/effects/MagneticButton";
import Marquee from "@/components/effects/Marquee";

export default function InstagramLookbook() {
  return (
    <section className="relative py-32 md:py-48 bg-[#211C17] overflow-hidden">
      {/* Marquee Top */}
      <div className="absolute top-0 left-0 right-0 py-6 border-b border-white/10 text-white/80">
        <Marquee
          text="Follow @kaftanelfakhama"
          speed={35}
          className="text-2xl md:text-3xl font-serif italic"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-24">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <span className="block w-16 h-px bg-[#B89A55]" />
            <span className="text-[#B89A55] text-xs tracking-[0.4em] uppercase">
              Instagram — 05
            </span>
            <span className="block w-16 h-px bg-[#B89A55]" />
          </motion.div>

          <RevealText
            as="h2"
            className="font-serif text-5xl md:text-7xl text-white tracking-tight"
          >
            Notre Univers
          </RevealText>

          <motion.a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="inline-block mt-6 text-[#B89A55] text-lg tracking-[0.3em] hover:text-[#D8C8A5] transition-colors"
          >
            @kaftanelfakhama
          </motion.a>
        </div>

        {/* Grid — Editorial */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post, i) => {
            // Editorial spans
            const spans = [
              "md:col-span-2 md:row-span-2",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-2",
              "md:col-span-4",
            ];
            const aspects = [
              "aspect-square",
              "aspect-square",
              "aspect-square",
              "aspect-square",
              "aspect-square",
              "aspect-[2/1]",
            ];

            return (
              <motion.a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className={`group relative overflow-hidden ${spans[i]} ${aspects[i]}`}
                data-cursor-text="VIEW"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                  className="w-full h-full"
                >
                  <Image
                    src={post.image}
                    alt={post.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </motion.div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-[0.3em] uppercase">
                      View
                    </span>
                    <span className="text-lg">↗</span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <MagneticButton>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-4 px-12 py-5 border border-[#B89A55] text-white overflow-hidden"
              data-cursor-text="FOLLOW"
            >
              <span className="relative z-10 text-xs tracking-[0.3em] uppercase transition-colors duration-700 group-hover:text-[#111]">
                Follow on Instagram
              </span>
              <div className="absolute inset-0 bg-[#B89A55] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}