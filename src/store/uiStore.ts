import { create } from "zustand";
import { Product } from "@/types/product";

interface UIStore {
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isQuickViewOpen: boolean;
  quickViewProduct: Product | null;
  isSizeGuideOpen: boolean;

  openCart: () => void;
  closeCart: () => void;
  openWishlist: () => void;
  closeWishlist: () => void;
  openQuickView: (product: Product) => void;
  closeQuickView: () => void;
  openSizeGuide: () => void;
  closeSizeGuide: () => void;
  closeAll: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isCartOpen: false,
  isWishlistOpen: false,
  isQuickViewOpen: false,
  quickViewProduct: null,
  isSizeGuideOpen: false,

  openCart: () =>
    set({
      isCartOpen: true,
      isWishlistOpen: false,
      isQuickViewOpen: false,
    }),
  closeCart: () => set({ isCartOpen: false }),

  openWishlist: () =>
    set({
      isWishlistOpen: true,
      isCartOpen: false,
      isQuickViewOpen: false,
    }),
  closeWishlist: () => set({ isWishlistOpen: false }),

  openQuickView: (product) =>
    set({
      isQuickViewOpen: true,
      quickViewProduct: product,
      isCartOpen: false,
      isWishlistOpen: false,
    }),
  closeQuickView: () =>
    set({ isQuickViewOpen: false, quickViewProduct: null }),

  openSizeGuide: () => set({ isSizeGuideOpen: true }),
  closeSizeGuide: () => set({ isSizeGuideOpen: false }),

  closeAll: () =>
    set({
      isCartOpen: false,
      isWishlistOpen: false,
      isQuickViewOpen: false,
      isSizeGuideOpen: false,
      quickViewProduct: null,
    }),
}));