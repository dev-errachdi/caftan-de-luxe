"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useUIStore } from "@/store/uiStore";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/lib/utils";
import WishlistButton from "@/components/wishlist/WishlistButton";
import toast from "react-hot-toast";

export default function QuickView() {
  const { isQuickViewOpen, quickViewProduct, closeQuickView, openCart } =
    useUIStore();
  const { addItem } = useCartStore();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleAddToCart = () => {
    if (!quickViewProduct) return;
    if (quickViewProduct.sizes.length > 0 && !selectedSize) {
      toast.error("Veuillez sélectionner une taille");
      return;
    }

    addItem(quickViewProduct, selectedSize, selectedColor, 1);
    toast.success("Ajouté au panier");
    closeQuickView();
    setTimeout(() => openCart(), 300);
  };

  return (
    <AnimatePresence>
      {isQuickViewOpen && quickViewProduct && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeQuickView}
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAF8F2] w-[95vw] max-w-5xl max-h-[90vh] overflow-y-auto z-[90] shadow-2xl"
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[3/4] md:aspect-auto bg-[#211C17]">
                <Image
                  src={quickViewProduct.images[0]?.src}
                  alt={quickViewProduct.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                <div className="absolute top-4 left-4">
                  <WishlistButton product={quickViewProduct} size="md" />
                </div>
              </div>

              {/* Info */}
              <div className="p-8 md:p-12 relative">
                <button
                  onClick={closeQuickView}
                  className="absolute top-4 right-4 text-2xl hover:text-[#B89A55] transition-colors"
                >
                  ×
                </button>

                <p className="text-[10px] tracking-[0.3em] uppercase text-[#B89A55] mb-2">
                  Quick View
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-[#111] mb-2">
                  {quickViewProduct.name}
                </h2>
                {quickViewProduct.nameAr && (
                  <p
                    className="font-arabic text-lg text-[#B89A55] mb-4"
                    dir="rtl"
                  >
                    {quickViewProduct.nameAr}
                  </p>
                )}

                <p className="font-serif text-2xl text-[#111] mb-6">
                  {formatPrice(
                    quickViewProduct.price,
                    quickViewProduct.currency
                  )}
                </p>

                <p className="text-sm text-[#111]/70 leading-relaxed mb-8 line-clamp-3">
                  {quickViewProduct.description}
                </p>

                {/* Colors */}
                {quickViewProduct.colors.length > 0 && (
                  <div className="mb-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#111]/60 mb-3">
                      Couleur {selectedColor && `— ${selectedColor}`}
                    </p>
                    <div className="flex gap-2">
                      {quickViewProduct.colors.map((color) => (
                        <button
                          key={color.name}
                          onClick={() => setSelectedColor(color.name)}
                          className={`w-10 h-10 rounded-full border-2 transition-all ${
                            selectedColor === color.name
                              ? "border-[#111] scale-110"
                              : "border-[#B89A55]/30"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Sizes */}
                {quickViewProduct.sizes.length > 0 && (
                  <div className="mb-8">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#111]/60 mb-3">
                      Taille
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {quickViewProduct.sizes.map((size) => (
                        <button
                          key={size.label}
                          onClick={() =>
                            size.available && setSelectedSize(size.label)
                          }
                          disabled={!size.available}
                          className={`min-w-[48px] px-4 py-2 border text-sm transition-all ${
                            selectedSize === size.label
                              ? "bg-[#111] text-white border-[#111]"
                              : size.available
                              ? "border-[#111]/30 hover:border-[#111]"
                              : "border-[#111]/10 text-[#111]/30 line-through cursor-not-allowed"
                          }`}
                        >
                          {size.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="space-y-3">
                  <button
                    onClick={handleAddToCart}
                    className="group relative w-full py-4 bg-[#111] text-white overflow-hidden"
                  >
                    <span className="relative z-10 text-xs tracking-[0.3em] uppercase">
                      Ajouter au Panier
                    </span>
                    <div className="absolute inset-0 bg-[#B89A55] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
                  </button>

                  <Link
                    href={`/product/${quickViewProduct.slug}`}
                    onClick={closeQuickView}
                    className="block w-full text-center py-4 border border-[#111] text-[#111] text-xs tracking-[0.3em] uppercase hover:bg-[#111] hover:text-white transition-all duration-500"
                  >
                    Voir tous les détails
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}