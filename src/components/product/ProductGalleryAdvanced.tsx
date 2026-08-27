"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProductImage } from "@/types/product";

interface Props {
  images: ProductImage[];
  productName: string;
}

export default function ProductGalleryAdvanced({
  images,
  productName,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current) return;
    const { left, top, width, height } = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className="flex gap-4 lg:gap-6">
        {/* Thumbnails Vertical */}
        <div className="hidden lg:flex flex-col gap-3 w-20 flex-shrink-0">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative aspect-[3/4] overflow-hidden bg-[#211C17] transition-all duration-500 ${
                selectedIndex === index
                  ? "ring-2 ring-[#B89A55] ring-offset-4 ring-offset-[#FAF8F2]"
                  : "opacity-40 hover:opacity-80"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt || `${productName} - ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>

        {/* Main Image */}
        <div className="flex-1 space-y-4">
          <div
            ref={imageRef}
            className="relative aspect-[3/4] overflow-hidden bg-[#211C17] cursor-zoom-in group"
            onMouseEnter={() => setIsZoomed(true)}
            onMouseLeave={() => setIsZoomed(false)}
            onMouseMove={handleMouseMove}
            onClick={() => setIsFullscreen(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt || productName}
                  fill
                  className="object-cover transition-transform duration-500"
                  style={{
                    transform: isZoomed ? "scale(1.5)" : "scale(1)",
                    transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  }}
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </motion.div>
            </AnimatePresence>

            {/* Zoom Indicator */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] uppercase px-3 py-2">
                <svg
                  className="w-3 h-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6M7 10h6"
                  />
                </svg>
                Zoom
              </div>
            </div>

            {/* Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm text-[#111] hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Précédente"
                >
                  ←
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/80 backdrop-blur-sm text-[#111] hover:bg-white transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Suivante"
                >
                  →
                </button>
              </>
            )}

            {/* Counter */}
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] tracking-[0.2em] px-3 py-2">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>

            {/* Fullscreen Icon */}
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 flex items-center justify-center bg-black/60 backdrop-blur-sm text-white">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Thumbnails Horizontal (Mobile) */}
          <div className="flex lg:hidden gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative flex-shrink-0 w-16 h-20 overflow-hidden bg-[#211C17] transition-all duration-500 ${
                  selectedIndex === index
                    ? "ring-2 ring-[#B89A55]"
                    : "opacity-40"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt || `${productName} - ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <button
              onClick={() => setIsFullscreen(false)}
              className="absolute top-8 right-8 text-white z-10 flex items-center gap-3"
            >
              <span className="text-xs tracking-[0.3em] uppercase">Close</span>
              <span className="text-2xl">×</span>
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-8">
              <motion.div
                key={selectedIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full h-full max-w-4xl max-h-[90vh]"
              >
                <Image
                  src={images[selectedIndex].src}
                  alt={images[selectedIndex].alt || productName}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </motion.div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-white text-2xl hover:bg-white/10 transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-white text-2xl hover:bg-white/10 transition-colors"
                  >
                    →
                  </button>
                </>
              )}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-[0.3em]">
              {String(selectedIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}