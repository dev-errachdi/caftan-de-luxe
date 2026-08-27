"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types/product";
import { useWishlistStore } from "@/store/wishlistStore";
import toast from "react-hot-toast";

interface Props {
  product: Product;
  size?: "sm" | "md" | "lg";
  className?: string;
  showLabel?: boolean;
}

export default function WishlistButton({
  product,
  size = "md",
  className = "",
  showLabel = false,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const { isInWishlist, toggleItem } = useWishlistStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  const inWishlist = mounted ? isInWishlist(product.id) : false;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleItem(product);

    if (inWishlist) {
      toast.success("Retiré de la wishlist", {
        icon: "✕",
      });
    } else {
      toast.success("Ajouté à la wishlist", {
        icon: "♥",
      });
    }
  };

  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  if (showLabel) {
    return (
      <button
        onClick={handleClick}
        className={`group flex items-center gap-3 transition-colors ${className}`}
      >
        <div className="relative">
          <AnimatePresence mode="wait">
            {inWishlist ? (
              <motion.svg
                key="filled"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
                className={`${iconSizes[size]} text-[#B89A55]`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </motion.svg>
            ) : (
              <motion.svg
                key="empty"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", damping: 15, stiffness: 300 }}
                className={`${iconSizes[size]}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </div>
        <span className="text-xs tracking-[0.2em] uppercase">
          {inWishlist ? "Dans la Wishlist" : "Ajouter à la Wishlist"}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`${sizes[size]} flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 shadow-md ${className}`}
      aria-label={inWishlist ? "Retirer de la wishlist" : "Ajouter à la wishlist"}
    >
      <AnimatePresence mode="wait">
        {inWishlist ? (
          <motion.svg
            key="filled"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className={`${iconSizes[size]} text-[#B89A55]`}
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </motion.svg>
        ) : (
          <motion.svg
            key="empty"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className={`${iconSizes[size]} text-[#111]`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}