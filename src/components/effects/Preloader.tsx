"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] bg-[#111111] flex flex-col items-center justify-center"
          exit={{
            y: "-100%",
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Logo/Text Animation */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="font-serif text-4xl md:text-6xl text-[#B89A55] tracking-[0.2em]"
            >
              CAFTAN
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{
                duration: 1,
                delay: 0.2,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-white/60 text-sm tracking-[0.3em] uppercase"
            >
              DE LUXE
            </motion.p>
          </div>

          {/* Arabic */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-[#B89A55]/80 text-lg"
            style={{ fontFamily: "Noto Naskh Arabic, serif" }}
            dir="rtl"
          >
            قفطان الفخامة
          </motion.p>

          {/* Progress Bar */}
          <div className="absolute bottom-20 w-64 md:w-96">
            <div className="flex justify-between text-white/40 text-xs mb-3 tracking-widest">
              <span>LOADING</span>
              <span>{progress}%</span>
            </div>
            <div className="h-px w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[#B89A55] to-[#D8C8A5]"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}