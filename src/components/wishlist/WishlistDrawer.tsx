"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useWishlistStore } from "@/store/wishlistStore";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { formatPrice } from "@/lib/utils";
import Drawer from "@/components/ui/Drawer";
import toast from "react-hot-toast";

export default function WishlistDrawer() {
  const { isWishlistOpen, closeWishlist } = useUIStore();
  const { items, removeItem, clearWishlist } = useWishlistStore();
  const { addItem: addToCart } = useCartStore();

  const handleMoveToCart = (product: any) => {
    addToCart(product, null, null, 1);
    removeItem(product.id);
    toast.success("Déplacé vers le panier", { icon: "🛍" });
  };

  return (
    <Drawer
      isOpen={isWishlistOpen}
      onClose={closeWishlist}
      title="Ma Wishlist"
      subtitle={`${items.length} pièce${items.length > 1 ? "s" : ""} favorite${
        items.length > 1 ? "s" : ""
      }`}
    >
      {items.length === 0 ? (
        // Empty State
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <div className="w-20 h-20 border border-[#B89A55]/30 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-[#B89A55]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="font-serif text-2xl text-[#111] mb-3">
            Aucune pièce dans votre wishlist
          </h3>
          <p className="text-[#111]/60 text-sm mb-8 max-w-xs">
            Ajoutez vos pièces préférées et retrouvez-les à tout moment.
          </p>
          <Link
            href="/collection"
            onClick={closeWishlist}
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#111] text-[#111] overflow-hidden"
          >
            <span className="relative z-10 text-xs tracking-[0.3em] uppercase transition-colors duration-700 group-hover:text-white">
              Explorer
            </span>
            <div className="absolute inset-0 bg-[#111] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 p-6">
            <AnimatePresence mode="popLayout">
              {items.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <Link
                    href={`/product/${product.slug}`}
                    onClick={closeWishlist}
                    className="block relative aspect-[3/4] overflow-hidden bg-[#211C17] mb-3"
                  >
                    <Image
                      src={product.images[0]?.src}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="200px"
                    />
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        removeItem(product.id);
                        toast.success("Retiré de la wishlist");
                      }}
                      className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white/90 hover:bg-white transition-colors rounded-full"
                    >
                      <span className="text-sm">×</span>
                    </button>
                  </Link>

                  <div>
                    <h3 className="font-serif text-sm text-[#111] truncate">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#B89A55] mt-1">
                      {formatPrice(product.price, product.currency)}
                    </p>
                    <button
                      onClick={() => handleMoveToCart(product)}
                      className="w-full mt-2 py-2 border border-[#111] text-[#111] text-[10px] tracking-[0.2em] uppercase hover:bg-[#111] hover:text-white transition-all duration-500"
                    >
                      + Panier
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="border-t border-[#B89A55]/20 p-6 bg-white">
            <button
              onClick={() => {
                clearWishlist();
                toast.success("Wishlist vidée");
              }}
              className="w-full text-xs text-[#111]/60 hover:text-red-500 tracking-[0.2em] uppercase transition-colors"
            >
              Vider la wishlist
            </button>
          </div>
        </>
      )}
    </Drawer>
  );
}