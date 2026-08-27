"use client";

import { ProductColor } from "@/types/product";
import { cn } from "@/lib/utils";

interface ColorSelectorProps {
  colors: ProductColor[];
  selectedColor: string | null;
  onSelect: (color: string) => void;
}

export default function ColorSelector({
  colors,
  selectedColor,
  onSelect,
}: ColorSelectorProps) {
  return (
    <div>
      <h4 className="text-caption tracking-[0.15em] uppercase text-gray-500 mb-3">
        Couleur{" "}
        {selectedColor && (
          <span className="normal-case tracking-normal text-brand-deep-black">
            — {selectedColor}
          </span>
        )}
      </h4>
      <div className="flex gap-3">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => onSelect(color.name)}
            className={cn(
              "w-10 h-10 rounded-full border-2 transition-all duration-300",
              selectedColor === color.name
                ? "border-brand-deep-black scale-110"
                : "border-gray-200 hover:border-gray-400"
            )}
            style={{ backgroundColor: color.hex }}
            aria-label={`Couleur ${color.name}`}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
}