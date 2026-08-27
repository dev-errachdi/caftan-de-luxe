"use client";

import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  productName: string;
  productUrl?: string;
}

export default function ShareButtons({ productName, productUrl }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const url =
    productUrl || (typeof window !== "undefined" ? window.location.href : "");

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url);
    toast.success("Lien copié !");
    setIsOpen(false);
  };

  const shareOptions = [
    {
      name: "WhatsApp",
      href: `https://wa.me/?text=${encodeURIComponent(`${productName} - ${url}`)}`,
    },
    {
      name: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      name: "Twitter",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(productName)}&url=${encodeURIComponent(url)}`,
    },
    {
      name: "Email",
      href: `mailto:?subject=${encodeURIComponent(productName)}&body=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 text-[#111] hover:text-[#B89A55] transition-colors"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
          />
        </svg>
        <span className="text-xs tracking-[0.2em] uppercase">Partager</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 bg-white shadow-xl border border-[#B89A55]/20 py-2 min-w-[180px] z-10">
          {shareOptions.map((option) => (
            <a
              key={option.name}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-xs tracking-[0.2em] uppercase text-[#111] hover:bg-[#B89A55]/10 hover:text-[#B89A55] transition-colors"
            >
              {option.name}
            </a>
          ))}
          <button
            onClick={handleCopyLink}
            className="block w-full text-left px-4 py-2 text-xs tracking-[0.2em] uppercase text-[#111] hover:bg-[#B89A55]/10 hover:text-[#B89A55] transition-colors border-t border-[#B89A55]/10"
          >
            Copier le lien
          </button>
        </div>
      )}
    </div>
  );
}