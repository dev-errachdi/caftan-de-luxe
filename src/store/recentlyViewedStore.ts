import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";

interface RecentlyViewedStore {
  items: Product[];
  addItem: (product: Product) => void;
  clearAll: () => void;
}

const MAX_ITEMS = 8;

export const useRecentlyViewedStore = create<RecentlyViewedStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        const filtered = get().items.filter((p) => p.id !== product.id);
        const updated = [product, ...filtered].slice(0, MAX_ITEMS);
        set({ items: updated });
      },

      clearAll: () => set({ items: [] }),
    }),
    {
      name: "caftan-recently-viewed",
    }
  )
);