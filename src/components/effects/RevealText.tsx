"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export default function RevealText({
  children,
  className = "",
  delay = 0,
  as = "h2",
}: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = children.split(" ");

  const Component = motion[as];

  return (
    <Component ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden mr-[0.25em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={isInView ? { y: 0 } : { y: "110%" }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.08,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  );
}