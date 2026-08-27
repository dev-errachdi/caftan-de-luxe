"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils";
import { useUIStore } from "@/store/uiStore";
import WishlistButton from "@/components/wishlist/WishlistButton";

interface ProductCardProps {
  product: Product;
  className?: string;
  index?: number;
}

export default function ProductCard({
  product,
  className,
  index = 0,
}: ProductCardProps) {
  const { openQuickView } = useUIStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={`group ${className || ""}`}
    >
      <Link href={`/product/${product.slug}`} className="block">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[#211C17] mb-4">
          <Image
            src={product.images[0]?.src}
            alt={product.images[0]?.alt || product.name}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Second image on hover */}
          {product.images[1] && (
            <Image
              src={product.images[1].src}
              alt={product.images[1].alt || product.name}
              fill
              className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          )}

          {/* Badges */}
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {product.isNew && (
              <span className="px-3 py-1 bg-[#111] text-white text-[10px] tracking-[0.3em] uppercase">
                Nouveau
              </span>
            )}
            {product.availability === "made_to_order" && (
              <span className="px-3 py-1 bg-[#B89A55] text-white text-[10px] tracking-[0.3em] uppercase">
                Sur Mesure
              </span>
            )}
          </div>

          {/* Wishlist */}
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <WishlistButton product={product} size="md" />
          </div>

          {/* Quick View Button */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
            <button
              onClick={(e) => {
                e.preventDefault();
                openQuickView(product);
              }}
              className="w-full py-4 bg-white/95 backdrop-blur-sm text-[#111] text-xs tracking-[0.3em] uppercase hover:bg-[#111] hover:text-white transition-colors duration-300"
            >
              Aperçu Rapide
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1">
          {product.nameAr && (
            <p
              className="font-arabic text-sm text-[#B89A55]"
              dir="rtl"
            >
              {product.nameAr}
            </p>
          )}
          <h3 className="font-serif text-xl text-[#111] group-hover:text-[#B89A55] transition-colors duration-500">
            {product.name}
          </h3>
          <p className="text-sm text-[#111]/60 font-light">
            {formatPrice(product.price, product.currency)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}