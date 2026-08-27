import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/product";

export interface CartItem {
  id: string;
  product: Product;
  size: string | null;
  color: string | null;
  quantity: number;
  addedAt: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (
    product: Product,
    size: string | null,
    color: string | null,
    quantity?: number
  ) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product, size, color, quantity = 1) => {
        const id = `${product.id}-${size || "nosize"}-${color || "nocolor"}`;
        const existingItem = get().items.find((item) => item.id === id);

        if (existingItem) {
          set({
            items: get().items.map((item) =>
              item.id === id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
          });
        } else {
          set({
            items: [
              ...get().items,
              {
                id,
                product,
                size,
                color,
                quantity,
                addedAt: Date.now(),
              },
            ],
          });
        }
      },

      removeItem: (id) => {
        set({ items: get().items.filter((item) => item.id !== id) });
      },

      updateQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        set({
          items: get().items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        });
      },

      clearCart: () => set({ items: [] }),

      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      getTotalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        ),
    }),
    {
      name: "caftan-cart-storage",
    }
  )
);