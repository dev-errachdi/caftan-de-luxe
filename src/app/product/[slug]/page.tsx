import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { products, getProductBySlug } from "@/data/products";
import { siteConfig } from "@/config/site.config";
import ProductGalleryAdvanced from "@/components/product/ProductGalleryAdvanced";
import ProductInfoAdvanced from "@/components/product/ProductInfoAdvanced";
import RelatedProducts from "@/components/product/RelatedProducts";
import RecentlyViewed from "@/components/product/RecentlyViewed";
import ProductPageTracker from "./ProductPageTracker";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  return {
    title: `${product.name} | ${siteConfig.name}`,
    description: product.description,
    openGraph: {
      title: `${product.name} - ${siteConfig.name}`,
      description: product.description,
      images: product.images.map((img) => ({
        url: img.src,
        alt: img.alt,
      })),
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <>
      {/* Track for recently viewed */}
      <ProductPageTracker product={product} />

      <div className="pt-24 md:pt-32 pb-16 bg-[#FAF8F2]">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="mb-12 flex items-center gap-3 text-xs tracking-[0.2em] uppercase"
          >
            <Link
              href="/"
              className="text-[#111]/40 hover:text-[#B89A55] transition-colors"
            >
              Home
            </Link>
            <span className="text-[#B89A55]">/</span>
            <Link
              href="/collection"
              className="text-[#111]/40 hover:text-[#B89A55] transition-colors"
            >
              Collection
            </Link>
            <span className="text-[#B89A55]">/</span>
            <span className="text-[#111]">{product.name}</span>
          </nav>

          {/* Layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Gallery */}
            <div className="lg:sticky lg:top-32 h-fit">
              <ProductGalleryAdvanced
                images={product.images}
                productName={product.name}
              />
            </div>

            {/* Info */}
            <div>
              <ProductInfoAdvanced product={product} />
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      <RelatedProducts
        currentProductId={product.id}
        category={product.category}
      />

      {/* Recently Viewed */}
      <RecentlyViewed currentProductId={product.id} />
    </>
  );
}