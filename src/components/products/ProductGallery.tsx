"use client";

import { useState } from "react";
import Image from "next/image";
import { ProductImage } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: ProductImage[];
  productName: string;
}

export default function ProductGallery({
  images,
  productName,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-brand-ivory">
        <Image
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt || productName}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={90}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={cn(
                "relative w-20 h-24 overflow-hidden transition-all duration-300",
                selectedIndex === index
                  ? "ring-2 ring-brand-gold opacity-100"
                  : "opacity-50 hover:opacity-80"
              )}
              aria-label={`Vue ${index + 1} de ${productName}`}
            >
              <Image
                src={image.src}
                alt={image.alt || `${productName} - Vue ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}