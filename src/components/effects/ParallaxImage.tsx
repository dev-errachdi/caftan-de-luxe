"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxImageProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export default function ParallaxImage({
  children,
  className = "",
  speed = 0.3,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="w-full h-[120%] -mt-[10%]">
        {children}
      </motion.div>
    </div>
  );
}