"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRecentlyViewedStore } from "@/store/recentlyViewedStore";
import { formatPrice } from "@/lib/utils";

interface Props {
  currentProductId?: string;
}

export default function RecentlyViewed({ currentProductId }: Props) {
  const { items } = useRecentlyViewedStore();

  const filtered = items.filter((p) => p.id !== currentProductId).slice(0, 4);

  if (filtered.length === 0) return null;

  return (
    <section className="py-24 bg-[#211C17]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-12">
          <span className="block w-16 h-px bg-[#B89A55]" />
          <span className="text-[#B89A55] text-xs tracking-[0.4em] uppercase">
            Récemment consultés
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/product/${product.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#111] mb-3">
                  <Image
                    src={product.images[0]?.src}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <h3 className="font-serif text-base text-white group-hover:text-[#B89A55] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-white/60 mt-1">
                  {formatPrice(product.price, product.currency)}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}