"use client";

import { ProductSize } from "@/types/product";
import { cn } from "@/lib/utils";

interface SizeSelectorProps {
  sizes: ProductSize[];
  selectedSize: string | null;
  onSelect: (size: string) => void;
}

export default function SizeSelector({
  sizes,
  selectedSize,
  onSelect,
}: SizeSelectorProps) {
  return (
    <div>
      <h4 className="text-caption tracking-[0.15em] uppercase text-gray-500 mb-3">
        Taille
      </h4>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size.label}
            onClick={() => size.available && onSelect(size.label)}
            disabled={!size.available}
            className={cn(
              "min-w-[48px] px-4 py-2 border text-body-sm transition-all duration-300",
              selectedSize === size.label
                ? "bg-brand-deep-black text-white border-brand-deep-black"
                : size.available
                ? "bg-white text-brand-deep-black border-gray-300 hover:border-brand-gold"
                : "bg-gray-100 text-gray-300 border-gray-200 cursor-not-allowed line-through"
            )}
            aria-label={`Taille ${size.label}${
              !size.available ? " - Indisponible" : ""
            }`}
          >
            {size.label}
          </button>
        ))}
      </div>
    </div>
  );
}