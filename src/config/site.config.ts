import { SiteConfig, NavigationItem } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Caftan de Luxe",
  nameAr: "قفطان الفخامة",
  tagline: "Moroccan Elegance. Timeless Luxury.",
  taglineAr: "أناقة مغربية. فخامة خالدة.",
  description:
    "Maison de mode marocaine spécialisée dans les caftans, takchitas et tenues traditionnelles féminines haut de gamme.",
  descriptionAr:
    "دار أزياء مغربية متخصصة في القفاطين والتكاشط والأزياء التقليدية النسائية الراقية.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.caftandeluxe.ma",
  logo: "/logo/logo.png",
  logoWhite: "/logo/logo-white.png",
  favicon: "/logo/favicon.ico",
  currency: "MAD",
  defaultLocale: "fr",
  social: {
    instagram:
      process.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      "https://www.instagram.com/kaftanelfakhama",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212600000000",
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "212600000000",
    email:
      process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@caftandeluxe.ma",
    city: "Casablanca",
    cityAr: "الدار البيضاء",
    country: "Morocco",
    countryAr: "المغرب",
    workingHours: "Lun - Sam: 10h00 - 19h00",
    workingHoursAr: "الإثنين - السبت: 10:00 - 19:00",
  },
  seo: {
    title: "Caftan de Luxe – قفطان الفخامة | Mode Marocaine Haut de Gamme",
    description:
      "Découvrez les caftans marocains de luxe, takchitas et tenues traditionnelles féminines haut de gamme. L'élégance marocaine réinventée.",
    keywords: [
      "caftan marocain",
      "caftan luxe",
      "takchita marocaine",
      "caftan femme",
      "caftan mariage",
      "caftan cérémonie",
      "mode marocaine",
      "قفطان مغربي",
      "قفطان فاخر",
      "تكشيطة مغربية",
      "قفطان نسائي",
      "أزياء مغربية",
    ],
    ogImage: "/images/hero/hero-main.jpg",
  },
};

export const navigationItems: NavigationItem[] = [
  { label: "Home", labelAr: "الرئيسية", href: "/" },
  { label: "Collection", labelAr: "المجموعة", href: "/collection" },
  { label: "About", labelAr: "من نحن", href: "/about" },
  { label: "Contact", labelAr: "اتصل بنا", href: "/contact" },
];