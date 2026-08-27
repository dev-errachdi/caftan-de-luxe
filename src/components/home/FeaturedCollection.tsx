"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import RevealText from "@/components/effects/RevealText";
import MagneticButton from "@/components/effects/MagneticButton";

export default function FeaturedCollection() {
  const products = getFeaturedProducts();

  return (
    <section className="relative py-32 md:py-48 bg-[#FAF8F2] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-24 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="flex items-center gap-4 mb-8"
            >
              <span className="block w-16 h-px bg-[#B89A55]" />
              <span className="text-[#B89A55] text-xs tracking-[0.4em] uppercase">
                Sélection — 02
              </span>
            </motion.div>

            <RevealText
              as="h2"
              className="font-serif text-5xl md:text-7xl text-[#111] tracking-tight"
            >
              Pièces d'Exception
            </RevealText>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <Link
              href="/collection"
              className="group inline-flex items-center gap-3 text-[#111]"
              data-cursor-text="VIEW ALL"
            >
              <span className="text-xs tracking-[0.3em] uppercase">
                Voir toute la collection
              </span>
              <span className="text-lg group-hover:translate-x-2 transition-transform duration-500">
                →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Products Grid — Editorial Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12">
          {products.slice(0, 4).map((product, i) => {
            // Editorial layout with varying sizes
            const layouts = [
              "md:col-span-7 md:mt-0",
              "md:col-span-5 md:mt-32",
              "md:col-span-5 md:-mt-16",
              "md:col-span-7 md:mt-8",
            ];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1,
                  delay: i * 0.15,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className={layouts[i % 4]}
              >
                <Link
                  href={`/product/${product.slug}`}
                  className="group block"
                  data-cursor-text="VIEW"
                >
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#211C17] mb-6">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
                      className="w-full h-full"
                    >
                      <Image
                        src={product.images[0]?.src}
                        alt={product.images[0]?.alt || product.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </motion.div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Badge */}
                    {product.isNew && (
                      <div className="absolute top-6 left-6">
                        <span className="inline-block px-4 py-1.5 bg-[#B89A55] text-white text-[10px] tracking-[0.3em] uppercase">
                          Nouveau
                        </span>
                      </div>
                    )}

                    {/* Number */}
                    <div className="absolute top-6 right-6 text-white/80 font-serif text-lg italic">
                      0{i + 1}
                    </div>

                    {/* Info on hover */}
                    <div className="absolute bottom-6 left-6 right-6 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                      <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        <span className="text-xs tracking-[0.3em] uppercase">
                          Voir détails
                        </span>
                        <span className="text-xl">→</span>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-[#B89A55] text-[10px] tracking-[0.3em] uppercase mb-2">
                        {product.category}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl text-[#111] group-hover:italic transition-all duration-500">
                        {product.name}
                      </h3>
                      {product.nameAr && (
                        <p
                          className="font-arabic text-base text-[#B89A55] mt-1"
                          dir="rtl"
                        >
                          {product.nameAr}
                        </p>
                      )}
                    </div>
                    <p className="font-serif text-lg text-[#111] mt-1">
                      {formatPrice(product.price, product.currency)}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-24">
          <MagneticButton>
            <Link
              href="/collection"
              className="group relative inline-flex items-center gap-4 px-12 py-5 border border-[#111] text-[#111] overflow-hidden"
              data-cursor-text="EXPLORE"
            >
              <span className="relative z-10 text-xs tracking-[0.3em] uppercase transition-colors duration-700 group-hover:text-white">
                Explorer la Collection
              </span>
              <div className="absolute inset-0 bg-[#111] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}