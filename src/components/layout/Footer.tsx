"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig, navigationItems } from "@/config/site.config";
import Marquee from "@/components/effects/Marquee";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#111111] text-white overflow-hidden">
      {/* Top Marquee */}
      <div className="border-y border-white/10 py-8 text-[#B89A55]">
        <Marquee
          text="Caftan de Luxe — قفطان الفخامة"
          speed={40}
          className="text-4xl md:text-6xl font-serif italic"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-24">
        {/* Big Brand Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <h2 className="font-serif text-[15vw] md:text-[10vw] text-white/5 leading-none tracking-tight">
            Caftan
          </h2>
          <h2 className="font-serif italic text-[15vw] md:text-[10vw] text-[#B89A55]/20 leading-none tracking-tight pl-16 md:pl-40 -mt-8">
            de Luxe
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* Navigation */}
          <div>
            <p className="text-[#B89A55] text-xs tracking-[0.3em] uppercase mb-6">
              Navigation
            </p>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/70 hover:text-[#B89A55] transition-colors duration-500 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <p className="text-[#B89A55] text-xs tracking-[0.3em] uppercase mb-6">
              Collections
            </p>
            <ul className="space-y-3">
              {["Caftans", "Takchitas", "Robes", "Nouveautés"].map((item) => (
                <li key={item}>
                  <Link
                    href="/collection"
                    className="text-white/70 hover:text-[#B89A55] transition-colors duration-500 text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[#B89A55] text-xs tracking-[0.3em] uppercase mb-6">
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-white/70 hover:text-[#B89A55] transition-colors duration-500"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="text-white/70">
                {siteConfig.contact.city}, {siteConfig.contact.country}
              </li>
              <li className="text-white/50 text-xs">
                {siteConfig.contact.workingHours}
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-[#B89A55] text-xs tracking-[0.3em] uppercase mb-6">
              Social
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#B89A55] transition-colors duration-500 text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${siteConfig.social.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#B89A55] transition-colors duration-500 text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>

            <p
              className="font-arabic text-2xl text-[#B89A55]/80 mt-8"
              dir="rtl"
            >
              قفطان الفخامة
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
          <p>© {year} Caftan de Luxe. Tous droits réservés.</p>
          <p className="tracking-[0.3em] uppercase">Made in Morocco</p>
        </div>
      </div>
    </footer>
  );
}