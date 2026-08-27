"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { siteConfig } from "@/config/site.config";
import { useCartStore } from "@/store/cartStore";
import { useWishlistStore } from "@/store/wishlistStore";
import { useUIStore } from "@/store/uiStore";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  const cartCount = useCartStore((state) => state.getTotalItems());
  const wishlistCount = useWishlistStore((state) => state.getTotalItems());
  const { openCart, openWishlist } = useUIStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setIsScrolled(latest > 50);
    if (latest > previous && latest > 200) setHidden(true);
    else setHidden(false);
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          isScrolled
            ? "bg-[#FAF8F2]/90 backdrop-blur-xl border-b border-[#B89A55]/10"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 md:px-12">
          <nav className="flex items-center justify-between h-20">
            {/* Left: Menu */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`group flex items-center gap-3 transition-colors ${
                isScrolled ? "text-[#111]" : "text-white"
              }`}
              data-cursor-text="MENU"
            >
              <div className="flex flex-col gap-1.5">
                <span className="block w-8 h-px bg-current transition-all group-hover:w-6" />
                <span className="block w-6 h-px bg-current transition-all group-hover:w-8" />
              </div>
              <span className="hidden md:block text-xs tracking-[0.3em] uppercase">
                Menu
              </span>
            </button>

            {/* Center: Logo */}
            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
              <span
                className={`font-serif text-2xl md:text-3xl tracking-[0.25em] transition-colors ${
                  isScrolled ? "text-[#111]" : "text-white"
                }`}
              >
                CAFTAN
              </span>
              <span
                className={`text-[10px] tracking-[0.4em] mt-1 transition-colors ${
                  isScrolled ? "text-[#B89A55]" : "text-[#D8C8A5]"
                }`}
              >
                DE LUXE
              </span>
            </Link>

            {/* Right: Actions */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Wishlist */}
              <button
                onClick={openWishlist}
                className={`relative p-2 transition-colors hover:text-[#B89A55] ${
                  isScrolled ? "text-[#111]" : "text-white"
                }`}
                data-cursor-text="WISHLIST"
                aria-label="Wishlist"
              >
                <svg
                  className="w-5 h-5"
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
                </svg>
                <AnimatePresence>
                  {mounted && wishlistCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-[#B89A55] text-white text-[10px] rounded-full flex items-center justify-center font-medium"
                    >
                      {wishlistCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* Cart */}
              <button
                onClick={openCart}
                className={`relative flex items-center gap-2 p-2 transition-colors hover:text-[#B89A55] ${
                  isScrolled ? "text-[#111]" : "text-white"
                }`}
                data-cursor-text="CART"
                aria-label="Panier"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                <span className="hidden md:block text-xs tracking-[0.3em] uppercase">
                  Panier
                </span>
                <AnimatePresence>
                  {mounted && cartCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      key={cartCount}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-[#B89A55] text-white text-[10px] rounded-full flex items-center justify-center font-medium"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}