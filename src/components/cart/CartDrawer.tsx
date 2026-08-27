"use client";

import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useUIStore } from "@/store/uiStore";
import { formatPrice } from "@/lib/utils";
import { generateGeneralWhatsAppURL } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site.config";
import Drawer from "@/components/ui/Drawer";
import CartItem from "./CartItem";

export default function CartDrawer() {
  const { isCartOpen, closeCart } = useUIStore();
  const { items, getTotalPrice, getTotalItems, clearCart } = useCartStore();

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

  const handleWhatsAppOrder = () => {
    let message = `Bonjour ${siteConfig.name} 👋,\n\nJe souhaite commander :\n\n`;

    items.forEach((item, i) => {
      message += `${i + 1}. ${item.product.name}\n`;
      if (item.size) message += `   Taille: ${item.size}\n`;
      if (item.color) message += `   Couleur: ${item.color}\n`;
      message += `   Quantité: ${item.quantity}\n`;
      message += `   Prix: ${formatPrice(item.product.price * item.quantity, item.product.currency)}\n\n`;
    });

    message += `━━━━━━━━━━━━━\n`;
    message += `Total: ${formatPrice(totalPrice, siteConfig.currency)}\n\n`;
    message += `Merci de me confirmer la disponibilité et les détails de livraison. 🙏`;

    const url = `https://wa.me/${siteConfig.social.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Drawer
      isOpen={isCartOpen}
      onClose={closeCart}
      title="Votre Sélection"
      subtitle={`Panier — ${totalItems} article${totalItems > 1 ? "s" : ""}`}
    >
      {items.length === 0 ? (
        // Empty State
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <div className="w-20 h-20 border border-[#B89A55]/30 rounded-full flex items-center justify-center mb-6">
            <svg
              className="w-8 h-8 text-[#B89A55]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </div>
          <h3 className="font-serif text-2xl text-[#111] mb-3">
            Votre panier est vide
          </h3>
          <p className="text-[#111]/60 text-sm mb-8 max-w-xs">
            Explorez notre collection et découvrez des pièces uniques.
          </p>
          <Link
            href="/collection"
            onClick={closeCart}
            className="group relative inline-flex items-center gap-3 px-8 py-4 border border-[#111] text-[#111] overflow-hidden"
          >
            <span className="relative z-10 text-xs tracking-[0.3em] uppercase transition-colors duration-700 group-hover:text-white">
              Découvrir la Collection
            </span>
            <div className="absolute inset-0 bg-[#111] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
          </Link>
        </div>
      ) : (
        <>
          {/* Items */}
          <div>
            <AnimatePresence mode="popLayout">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="border-t border-[#B89A55]/20 p-6 md:p-8 bg-white space-y-4">
            {/* Subtotal */}
            <div className="flex items-baseline justify-between">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#111]/60">
                Sous-total
              </span>
              <span className="font-serif text-2xl text-[#111]">
                {formatPrice(totalPrice, siteConfig.currency)}
              </span>
            </div>

            <p className="text-xs text-[#111]/50 italic">
              Livraison et taxes calculées lors de la commande via WhatsApp
            </p>

            {/* Actions */}
            <button
              onClick={handleWhatsAppOrder}
              className="group relative w-full py-4 bg-[#111] text-white overflow-hidden"
            >
              <span className="relative z-10 text-xs tracking-[0.3em] uppercase flex items-center justify-center gap-3">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
                </svg>
                Commander via WhatsApp
              </span>
              <div className="absolute inset-0 bg-[#B89A55] -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </button>

            <div className="flex items-center justify-between text-xs">
              <button
                onClick={closeCart}
                className="text-[#111]/60 hover:text-[#B89A55] tracking-[0.2em] uppercase transition-colors"
              >
                ← Continuer
              </button>
              <button
                onClick={clearCart}
                className="text-[#111]/40 hover:text-red-500 tracking-[0.2em] uppercase transition-colors"
              >
                Vider le panier
              </button>
            </div>
          </div>
        </>
      )}
    </Drawer>
  );
}