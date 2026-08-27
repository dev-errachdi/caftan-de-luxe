"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
    ),
    title: "Emballage Premium",
    description: "Boîte cadeau signature",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Fait Main",
    description: "Broderie artisanale",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8l4 4-4 4M13 4L7 20M15 8l4 4-4 4" />
      </svg>
    ),
    title: "Sur Mesure",
    description: "Ajustements possibles",
  },
  {
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Authenticité",
    description: "Certificat inclus",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-y border-[#B89A55]/20">
      {features.map((feature, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          className="text-center"
        >
          <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center text-[#B89A55]">
            {feature.icon}
          </div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-[#111] mb-1">
            {feature.title}
          </h4>
          <p className="text-[10px] text-[#111]/60">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
}