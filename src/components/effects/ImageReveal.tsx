"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export default function ImageReveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
}: ImageRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { initial: "100%", final: "0%", axis: "y" },
    down: { initial: "-100%", final: "0%", axis: "y" },
    left: { initial: "100%", final: "0%", axis: "x" },
    right: { initial: "-100%", final: "0%", axis: "x" },
  };

  const dir = directions[direction];

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-[#B89A55] z-10 origin-bottom"
        initial={{ scaleY: 1 }}
        animate={isInView ? { scaleY: 0 } : { scaleY: 1 }}
        transition={{
          duration: 1.2,
          delay: delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{ transformOrigin: "top" }}
      />

      {/* Content */}
      <motion.div
        initial={{ scale: 1.3 }}
        animate={isInView ? { scale: 1 } : { scale: 1.3 }}
        transition={{
          duration: 1.5,
          delay: delay + 0.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}