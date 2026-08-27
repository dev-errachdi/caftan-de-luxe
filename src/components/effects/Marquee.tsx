"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({
  text,
  speed = 30,
  reverse = false,
  className = "",
}: MarqueeProps) {
  const repeated = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-flex"
        animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeated.map((i) => (
          <span
            key={i}
            className="inline-flex items-center mx-8 font-serif italic"
          >
            {text}
            <span className="mx-8 text-[#B89A55]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}