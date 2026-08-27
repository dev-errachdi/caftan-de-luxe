"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "@/store/uiStore";

const sizeData = [
  { size: "XS", chest: "82-86", waist: "62-66", hips: "88-92" },
  { size: "S", chest: "86-90", waist: "66-70", hips: "92-96" },
  { size: "M", chest: "90-94", waist: "70-74", hips: "96-100" },
  { size: "L", chest: "94-100", waist: "74-80", hips: "100-106" },
  { size: "XL", chest: "100-106", waist: "80-86", hips: "106-112" },
];

export default function SizeGuide() {
  const { isSizeGuideOpen, closeSizeGuide } = useUIStore();

  return (
    <AnimatePresence>
      {isSizeGuideOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeSizeGuide}
            className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FAF8F2] w-[90vw] max-w-2xl max-h-[85vh] overflow-y-auto z-[90] shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-[#FAF8F2] flex items-center justify-between p-6 md:p-8 border-b border-[#B89A55]/20">
              <div>
                <p className="text-[#B89A55] text-[10px] tracking-[0.3em] uppercase mb-1">
                  Guide
                </p>
                <h2 className="font-serif text-3xl text-[#111]">
                  Guide des Tailles
                </h2>
              </div>
              <button
                onClick={closeSizeGuide}
                className="text-2xl hover:text-[#B89A55] transition-colors"
              >
                ×
              </button>
            </div>

            <div className="p-6 md:p-8">
              <p className="text-sm text-[#111]/60 mb-8">
                Toutes les mesures sont en centimètres. Pour un ajustement
                parfait, contactez-nous pour un service sur mesure.
              </p>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-[#B89A55]">
                      <th className="text-left py-4 text-xs tracking-[0.2em] uppercase text-[#B89A55]">
                        Taille
                      </th>
                      <th className="text-left py-4 text-xs tracking-[0.2em] uppercase text-[#B89A55]">
                        Poitrine
                      </th>
                      <th className="text-left py-4 text-xs tracking-[0.2em] uppercase text-[#B89A55]">
                        Taille
                      </th>
                      <th className="text-left py-4 text-xs tracking-[0.2em] uppercase text-[#B89A55]">
                        Hanches
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeData.map((row, i) => (
                      <tr
                        key={row.size}
                        className="border-b border-[#B89A55]/10 hover:bg-white transition-colors"
                      >
                        <td className="py-4 font-serif text-lg text-[#111]">
                          {row.size}
                        </td>
                        <td className="py-4 text-[#111]/80">{row.chest}</td>
                        <td className="py-4 text-[#111]/80">{row.waist}</td>
                        <td className="py-4 text-[#111]/80">{row.hips}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Note */}
              <div className="mt-8 p-6 bg-[#B89A55]/5 border-l-2 border-[#B89A55]">
                <p className="text-xs tracking-[0.2em] uppercase text-[#B89A55] mb-2">
                  Sur Mesure
                </p>
                <p className="text-sm text-[#111]/70 leading-relaxed">
                  Toutes nos pièces peuvent être ajustées ou confectionnées
                  entièrement à vos mesures. Contactez-nous via WhatsApp pour un
                  service personnalisé.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}