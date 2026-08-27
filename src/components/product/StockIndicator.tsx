"use client";

import { motion } from "framer-motion";
import { ProductAvailability } from "@/types/product";

interface Props {
  availability: ProductAvailability;
}

export default function StockIndicator({ availability }: Props) {
  const config = {
    in_stock: {
      label: "En stock",
      color: "bg-green-500",
      textColor: "text-green-700",
      description: "Disponible immédiatement",
    },
    made_to_order: {
      label: "Sur commande",
      color: "bg-[#B89A55]",
      textColor: "text-[#B89A55]",
      description: "Confection en 2-4 semaines",
    },
    out_of_stock: {
      label: "Épuisé",
      color: "bg-red-500",
      textColor: "text-red-700",
      description: "Actuellement indisponible",
    },
    coming_soon: {
      label: "Bientôt disponible",
      color: "bg-blue-500",
      textColor: "text-blue-700",
      description: "Nouvelle collection en préparation",
    },
  };

  const current = config[availability];

  return (
    <div className="flex items-center gap-3">
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className={`absolute w-3 h-3 rounded-full ${current.color}`}
        />
        <div className={`w-2 h-2 rounded-full ${current.color}`} />
      </div>
      <div>
        <p className={`text-xs tracking-[0.2em] uppercase font-medium ${current.textColor}`}>
          {current.label}
        </p>
        <p className="text-[10px] text-[#111]/50 mt-0.5">
          {current.description}
        </p>
      </div>
    </div>
  );
}