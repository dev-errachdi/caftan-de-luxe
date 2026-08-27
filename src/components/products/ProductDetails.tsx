"use client";

import { useState } from "react";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

interface ProductDetailsProps {
  product: Product;
}

type Tab = "details" | "care" | "shipping";

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("details");

  const tabs: { key: Tab; label: string }[] = [
    { key: "details", label: "Détails" },
    { key: "care", label: "Entretien" },
    { key: "shipping", label: "Livraison" },
  ];

  return (
    <div className="border-t border-gray-200 mt-8 pt-8">
      {/* Tab Headers */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={cn(
              "px-6 py-3 text-caption tracking-[0.15em] uppercase border-b-2 -mb-px transition-all duration-300",
              activeTab === tab.key
                ? "border-brand-gold text-brand-deep-black"
                : "border-transparent text-gray-400 hover:text-gray-600"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-6">
        {activeTab === "details" && (
          <div className="space-y-4">
            {product.details && product.details.length > 0 ? (
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-body-md text-gray-600"
                  >
                    <span className="text-brand-gold mt-1">✦</span>
                    {detail}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">Détails non disponibles.</p>
            )}

            {/* Arabic Details */}
            {product.detailsAr && product.detailsAr.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-100">
                <ul className="space-y-2" dir="rtl">
                  {product.detailsAr.map((detail, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-body-md text-gray-500 font-arabic"
                    >
                      <span className="text-brand-gold mt-1">✦</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {activeTab === "care" && (
          <div>
            {product.careInstructions &&
            product.careInstructions.length > 0 ? (
              <ul className="space-y-2">
                {product.careInstructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-body-md text-gray-600"
                  >
                    <span className="text-brand-gold mt-1">◇</span>
                    {instruction}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">
                Instructions d&apos;entretien non disponibles.
              </p>
            )}
          </div>
        )}

        {activeTab === "shipping" && (
          <div className="space-y-3 text-body-md text-gray-600">
            <p className="flex items-start gap-3">
              <span className="text-brand-gold mt-1">◇</span>
              Livraison disponible partout au Maroc
            </p>
            <p className="flex items-start gap-3">
              <span className="text-brand-gold mt-1">◇</span>
              Délai de confection : 2 à 4 semaines pour les pièces sur mesure
            </p>
            <p className="flex items-start gap-3">
              <span className="text-brand-gold mt-1">◇</span>
              Livraison internationale sur demande
            </p>
            <p className="flex items-start gap-3">
              <span className="text-brand-gold mt-1">◇</span>
              Contactez-nous via WhatsApp pour plus de détails
            </p>
          </div>
        )}
      </div>
    </div>
  );
}