import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/effects/SmoothScroll";
import Cursor from "@/components/effects/Cursor";
import Preloader from "@/components/effects/Preloader";
import CartDrawer from "@/components/cart/CartDrawer";
import WishlistDrawer from "@/components/wishlist/WishlistDrawer";
import QuickView from "@/components/product/QuickView";
import SizeGuide from "@/components/product/SizeGuide";
import ToastProvider from "@/components/ui/ToastProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.name }],
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: siteConfig.url,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
    images: [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
  },
  robots: { index: true, follow: true },
  icons: { icon: siteConfig.favicon },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="bg-[#FAF8F2] text-[#111111] antialiased overflow-x-hidden">
        <Preloader />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>

        {/* Global Overlays */}
        <CartDrawer />
        <WishlistDrawer />
        <QuickView />
        <SizeGuide />
        <ToastProvider />
      </body>
    </html>
  );
}