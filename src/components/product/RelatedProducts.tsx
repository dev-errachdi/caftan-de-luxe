"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";
import { products as allProducts } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import WishlistButton from "@/components/wishlist/WishlistButton";
import RevealText from "@/components/effects/RevealText";

interface Props {
  currentProductId: string;
  category: string;
}

export default function RelatedProducts({
  currentProductId,
  category,
}: Props) {
  const related = allProducts
    .filter((p) => p.id !== currentProductId && p.category === category)
    .slice(0, 4);

  const fallback = allProducts
    .filter((p) => p.id !== currentProductId)
    .slice(0, 4);

  const productsToShow = related.length > 0 ? related : fallback;

  if (productsToShow.length === 0) return null;

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F2]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-4">
          <span className="block w-16 h-px bg-[#B89A55]" />
          <span className="text-[#B89A55] text-xs tracking-[0.4em] uppercase">
            Vous pourriez aimer
          </span>
        </div>

        <RevealText
          as="h2"
          className="font-serif text-4xl md:text-5xl text-[#111] mb-16 tracking-tight"
        >
          Pièces Complémentaires
        </RevealText>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {productsToShow.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link href={`/product/${product.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#211C17] mb-4">
                  <Image
                    src={product.images[0]?.src}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <WishlistButton product={product} size="md" />
                  </div>
                </div>

                <div>
                  <p className="text-[10px] text-[#B89A55] tracking-[0.3em] uppercase mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-serif text-lg md:text-xl text-[#111] group-hover:italic transition-all">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#111]/60 mt-1">
                    {formatPrice(product.price, product.currency)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}