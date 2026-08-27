"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, ReactNode } from "react";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  subtitle?: string;
  side?: "left" | "right";
}

export default function Drawer({
  isOpen,
  onClose,
  children,
  title,
  subtitle,
  side = "right",
}: DrawerProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const slideDirection = side === "right" ? "100%" : "-100%";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: slideDirection }}
            animate={{ x: 0 }}
            exit={{ x: slideDirection }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className={`fixed top-0 ${
              side === "right" ? "right-0" : "left-0"
            } h-full w-full sm:w-[480px] bg-[#FAF8F2] z-[70] flex flex-col shadow-2xl`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 md:p-8 border-b border-[#B89A55]/20">
              <div>
                {subtitle && (
                  <p className="text-[#B89A55] text-[10px] tracking-[0.3em] uppercase mb-1">
                    {subtitle}
                  </p>
                )}
                {title && (
                  <h2 className="font-serif text-3xl text-[#111]">{title}</h2>
                )}
              </div>

              <button
                onClick={onClose}
                className="group flex items-center gap-3 text-[#111]"
                data-cursor-text="CLOSE"
              >
                <span className="text-[10px] tracking-[0.3em] uppercase group-hover:text-[#B89A55] transition-colors">
                  Close
                </span>
                <div className="relative w-6 h-6">
                  <span className="absolute top-1/2 left-0 w-full h-px bg-current rotate-45" />
                  <span className="absolute top-1/2 left-0 w-full h-px bg-current -rotate-45" />
                </div>
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">{children}</div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}