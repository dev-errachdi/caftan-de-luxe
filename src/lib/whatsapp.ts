import { siteConfig } from "@/config/site.config";

interface WhatsAppOrderParams {
  productName: string;
  productRef?: string;
  size?: string;
  color?: string;
  quantity?: number;
  price?: number;
  currency?: string;
}

export function generateWhatsAppURL(params: WhatsAppOrderParams): string {
  const phone = siteConfig.social.whatsapp;
  const message = generateOrderMessage(params);
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}

function generateOrderMessage(params: WhatsAppOrderParams): string {
  const {
    productName,
    productRef,
    size,
    color,
    quantity = 1,
    price,
    currency = siteConfig.currency,
  } = params;

  let message = `Bonjour ${siteConfig.name} 👋,\n\n`;
  message += `Je souhaite commander :\n\n`;
  message += `📌 Produit : ${productName}\n`;

  if (productRef) {
    message += `🔖 Réf : ${productRef}\n`;
  }
  if (size) {
    message += `📏 Taille : ${size}\n`;
  }
  if (color) {
    message += `🎨 Couleur : ${color}\n`;
  }
  message += `🔢 Quantité : ${quantity}\n`;
  if (price) {
    message += `💰 Prix : ${price} ${currency}\n`;
  }

  message += `\nMerci de me confirmer la disponibilité et les détails de livraison. 🙏`;

  return message;
}

export function generateGeneralWhatsAppURL(customMessage?: string): string {
  const phone = siteConfig.social.whatsapp;
  const message =
    customMessage ||
    `Bonjour ${siteConfig.name} 👋,\n\nJe souhaite avoir plus d'informations sur vos collections.\n\nMerci !`;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encodedMessage}`;
}