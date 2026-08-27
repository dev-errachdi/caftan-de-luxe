"use client";

import { useEffect } from "react";
import { Product } from "@/types/product";
import { useRecentlyViewedStore } from "@/store/recentlyViewedStore";

interface Props {
  product: Product;
}

export default function ProductPageTracker({ product }: Props) {
  const addItem = useRecentlyViewedStore((state) => state.addItem);

  useEffect(() => {
    addItem(product);
  }, [product, addItem]);

  return null;
}