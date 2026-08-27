"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types/product";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { formatPrice } from "@/lib/utils";
import { generateWhatsAppURL } from "@/lib/whatsapp";
import WishlistButton from "@/components/wishlist/WishlistButton";
import StockIndicator from "./StockIndicator";
import ShareButtons from "./ShareButtons";
import FeaturesGrid from "./FeaturesGrid";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

export default function ProductInfoAdvanced({ product }: Props) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.colors[0]?.name || null
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"details" | "care" | "shipping">(
    "details"
  );

  const { addItem } = useCartStore();
  const { openCart, openSizeGuide } = useUIStore();

  const handleAddToCart = () => {
    if (product.sizes.length > 0 && !selectedSize) {
      toast.error("Veuillez sélectionner une taille");
      return;
    }
    addItem(product, selectedSize, selectedColor, quantity);
    toast.success(`${quantity} × ${product.name} ajouté(s) au panier`);
    setTimeout(() => openCart(), 300);
  };

  const handleWhatsApp = () => {
    const url = generateWhatsAppURL({
      productName: product.name,
      productRef: product.id,
      size: selectedSize || undefined,
      color: selectedColor || undefined,
      quantity,
      price: product.price,
      currency: product.currency,
    });
    window.open(url, "_blank");
  };

  return (
    <div className="space-y-8">
      {/* Category & Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#B89A55]">
          {product.category}
        </span>
        {product.isNew && (
          <span className="text-[10px] tracking-[0.3em] uppercase bg-[#111] text-white px-3 py-1">
            Nouveau
          </span>
        )}
      </motion.div>

      {/* Name */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {product.nameAr && (
          <p
            className="font-arabic text-2xl text-[#B89A55] mb-3"
            dir="rtl"
          >
            {product.nameAr}
          </p>
        )}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111] leading-[1.1] tracking-tight">
          {product.name}
        </h1>
      </motion.div>

      {/* Price */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-baseline gap-4"
      >
        <p className="font-serif text-3xl text-[#111]">
          {formatPrice(product.price, product.currency)}
        </p>
        {product.originalPrice && (
          <p className="text-lg text-[#111]/40 line-through">
            {formatPrice(product.originalPrice, product.currency)}
          </p>
        )}
      </motion.div>

      {/* Stock Indicator */}
      <StockIndicator availability={product.availability} />

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-base text-[#111]/70 leading-relaxed"
      >
        {product.description}
      </motion.p>

      {/* Divider */}
      <div className="h-px bg-[#B89A55]/20" />

      {/* Colors */}
      {product.colors.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#111]/60">
              Couleur{" "}
              {selectedColor && (
                <span className="text-[#111]">— {selectedColor}</span>
              )}
            </p>
          </div>
          <div className="flex gap-3">
            {product.colors.map((color) => (
              <motion.button
                key={color.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedColor(color.name)}
                className={`relative w-12 h-12 rounded-full transition-all ${
                  selectedColor === color.name
                    ? "ring-2 ring-[#111] ring-offset-4 ring-offset-[#FAF8F2]"
                    : ""
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      )}

      {/* Sizes */}
      {product.sizes.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#111]/60">
              Taille
            </p>
            <button
              onClick={openSizeGuide}
              className="text-[10px] tracking-[0.2em] uppercase text-[#B89A55] hover:text-[#111] transition-colors underline underline-offset-4"
            >
              Guide des tailles
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <motion.button
                key={size.label}
                whileTap={{ scale: 0.95 }}
                onClick={() =>
                  size.available && setSelectedSize(size.label)
                }
                disabled={!size.available}
                className={`min-w-[56px] px-4 py-3 text-sm border transition-all ${
                  selectedSize === size.label
                    ? "bg-[#111] text-white border-[#111]"
                    : size.available
                    ? "border-[#111]/20 hover:border-[#111]"
                    : "border-[#111]/10 text-[#111]/30 line-through cursor-not-allowed"
                }`}
              >
                {size.label}
              </motion.button>
            ))}
          </div>
        </div>
      )}

      {/* Quantity */}
      <div>
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#111]/60 mb-4">
          Quantité
        </p>
        <div className="inline-flex items-center border border-[#111]/20">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-12 h-12 flex items-center justify-center text-lg hover:bg-[#111] hover:text-white transition-colors"
          >
            −
          </button>
          <span className="w-16 text-center font-serif text-lg">
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="w-12 h-12 flex items-center justify-center text-lg hover:bg-[#111] hover:text-white transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 pt-4">
        <div className="flex gap-3">
          <button
            onClick={handleAddToCart}
            disabled={product.availability === "out_of_stock"}
            className="group relative flex-1 py-5 bg-[#111] text-white overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="relative z-10 text-xs tracking-[0.3em] uppercase">
              {product.availability === "out_of_stock"
                ? "Épuisé"
                : "Ajouter au Panier"}
            </span>
            <div className="absolute inset-0 bg-[#B89A55] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </button>

          <div className="border border-[#111]/20 aspect-square flex items-center justify-center hover:border-[#B89A55] transition-colors">
            <WishlistButton
              product={product}
              size="lg"
              className="!bg-transparent !shadow-none"
            />
          </div>
        </div>

        <button
          onClick={handleWhatsApp}
          className="w-full py-5 border border-[#111] text-[#111] hover:bg-[#111] hover:text-white transition-all duration-500 flex items-center justify-center gap-3"
        >
          <svg
            className="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
          </svg>
          <span className="text-xs tracking-[0.3em] uppercase">
            Commander via WhatsApp
          </span>
        </button>
      </div>

      {/* Share */}
      <div className="pt-4">
        <ShareButtons productName={product.name} />
      </div>

      {/* Features */}
      <FeaturesGrid />

      {/* Tabs */}
      <div>
        <div className="flex border-b border-[#B89A55]/20">
          {[
            { key: "details" as const, label: "Détails" },
            { key: "care" as const, label: "Entretien" },
            { key: "shipping" as const, label: "Livraison" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-4 text-xs tracking-[0.3em] uppercase transition-all border-b-2 -mb-px ${
                activeTab === tab.key
                  ? "border-[#B89A55] text-[#111]"
                  : "border-transparent text-[#111]/40 hover:text-[#111]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="py-6"
          >
            {activeTab === "details" && (
              <div className="space-y-3">
                {product.material && (
                  <p className="text-sm text-[#111]/70">
                    <span className="text-[#B89A55] font-medium">Matière:</span>{" "}
                    {product.material}
                  </p>
                )}
                {product.details?.map((detail, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[#B89A55]">✦</span>
                    <p className="text-sm text-[#111]/70">{detail}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "care" && (
              <div className="space-y-3">
                {product.careInstructions?.map((instruction, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[#B89A55]">◇</span>
                    <p className="text-sm text-[#111]/70">{instruction}</p>
                  </div>
                )) || (
                  <p className="text-sm text-[#111]/50">
                    Instructions d&apos;entretien non disponibles.
                  </p>
                )}
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="space-y-3">
                {[
                  "Livraison disponible partout au Maroc",
                  "Confection sur mesure en 2-4 semaines",
                  "Livraison internationale sur demande",
                  "Emballage cadeau premium inclus",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-[#B89A55]">◇</span>
                    <p className="text-sm text-[#111]/70">{item}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}