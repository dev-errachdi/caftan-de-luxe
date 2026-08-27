"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { navigationItems, siteConfig } from "@/config/site.config";
import { useEffect } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      clipPath: "circle(0% at 50px 50px)",
      transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
    },
    open: {
      clipPath: `circle(150% at 50px 50px)`,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const linkVariants = {
    closed: { y: 80, opacity: 0 },
    open: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 bg-[#111111]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 left-8 md:top-10 md:left-12 flex items-center gap-3 text-white group"
            data-cursor-text="CLOSE"
          >
            <div className="relative w-8 h-8">
              <span className="absolute top-1/2 left-0 w-full h-px bg-white rotate-45" />
              <span className="absolute top-1/2 left-0 w-full h-px bg-white -rotate-45" />
            </div>
            <span className="text-xs tracking-[0.3em] uppercase">Close</span>
          </button>

          {/* Content */}
          <div className="h-full flex flex-col justify-center px-8 md:px-24">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Left: Navigation */}
              <div className="space-y-2">
                <p className="text-[#B89A55] text-xs tracking-[0.3em] uppercase mb-8">
                  Navigation
                </p>
                {navigationItems.map((item, i) => (
                  <div key={item.href} className="overflow-hidden">
                    <motion.div
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block group"
                        data-cursor-text="GO"
                      >
                        <div className="flex items-baseline gap-4 py-2">
                          <span className="text-[#B89A55]/40 text-xs">
                            0{i + 1}
                          </span>
                          <span className="font-serif text-5xl md:text-7xl lg:text-8xl text-white group-hover:text-[#B89A55] transition-colors duration-500 tracking-tight">
                            {item.label}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              {/* Right: Info */}
              <div className="flex flex-col justify-end space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <p className="text-[#B89A55] text-xs tracking-[0.3em] uppercase mb-4">
                    Contact
                  </p>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="block text-white/80 hover:text-[#B89A55] transition-colors mb-2"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="text-white/60 text-sm">
                    {siteConfig.contact.city}, {siteConfig.contact.country}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  <p className="text-[#B89A55] text-xs tracking-[0.3em] uppercase mb-4">
                    Follow
                  </p>
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-[#B89A55] transition-colors"
                  >
                    Instagram — @kaftanelfakhama
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="pt-8 border-t border-white/10"
                >
                  <p
                    className="font-arabic text-2xl text-[#B89A55]"
                    dir="rtl"
                  >
                    قفطان الفخامة
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}