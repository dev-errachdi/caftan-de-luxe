"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CartItem as CartItemType, useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { formatPrice } from "@/lib/utils";

interface Props {
  item: CartItemType;
}

export default function CartItem({ item }: Props) {
  const { removeItem, updateQuantity } = useCartStore();
  const { closeCart } = useUIStore();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="flex gap-4 p-6 border-b border-[#B89A55]/10"
    >
      {/* Image */}
      <Link
        href={`/product/${item.product.slug}`}
        onClick={closeCart}
        className="relative w-24 h-32 flex-shrink-0 overflow-hidden bg-[#211C17]"
      >
        <Image
          src={item.product.images[0]?.src}
          alt={item.product.name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-700"
          sizes="96px"
        />
      </Link>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <Link
            href={`/product/${item.product.slug}`}
            onClick={closeCart}
            className="block"
          >
            <p className="text-[#B89A55] text-[10px] tracking-[0.3em] uppercase mb-1">
              {item.product.category}
            </p>
            <h3 className="font-serif text-lg text-[#111] hover:text-[#B89A55] transition-colors">
              {item.product.name}
            </h3>
          </Link>

          <div className="flex items-center gap-3 mt-2 text-xs text-[#111]/60">
            {item.size && (
              <>
                <span>Taille: {item.size}</span>
                {item.color && <span>·</span>}
              </>
            )}
            {item.color && <span>{item.color}</span>}
          </div>
        </div>

        {/* Quantity & Price */}
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center border border-[#B89A55]/30">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="w-8 h-8 flex items-center justify-center text-[#111] hover:bg-[#B89A55] hover:text-white transition-colors"
              aria-label="Diminuer"
            >
              −
            </button>
            <span className="w-8 h-8 flex items-center justify-center text-sm">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="w-8 h-8 flex items-center justify-center text-[#111] hover:bg-[#B89A55] hover:text-white transition-colors"
              aria-label="Augmenter"
            >
              +
            </button>
          </div>

          <p className="font-serif text-lg text-[#111]">
            {formatPrice(item.product.price * item.quantity, item.product.currency)}
          </p>
        </div>

        {/* Remove */}
        <button
          onClick={() => removeItem(item.id)}
          className="text-[10px] tracking-[0.2em] uppercase text-[#111]/40 hover:text-[#B89A55] transition-colors mt-2 self-start"
        >
          Retirer
        </button>
      </div>
    </motion.div>
  );
}