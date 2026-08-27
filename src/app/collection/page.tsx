"use client";

import { useState } from "react";
import { getProductsByCategory } from "@/data/products";
import { ProductFilterState } from "@/types/product";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProductFilters from "@/components/products/ProductFilters";
import ProductGrid from "@/components/products/ProductGrid";

export default function CollectionPage() {
  const [filters, setFilters] = useState<ProductFilterState>({
    category: "ALL",
    sortBy: "featured",
  });

  const filteredProducts = getProductsByCategory(filters.category);

  // Sort
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (filters.sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "newest":
        return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
      case "featured":
      default:
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    }
  });

  return (
    <div className="pt-24 md:pt-28 pb-section-y">
      <Container>
        <SectionHeading
          title="Notre Collection"
          titleAr="مجموعتنا"
          subtitle="Découvrez l'ensemble de nos créations d'exception"
        />

        <ProductFilters filters={filters} onFilterChange={setFilters} />

        <p className="text-center text-body-sm text-gray-400 mb-8">
          {sortedProducts.length} pièce{sortedProducts.length > 1 ? "s" : ""}
        </p>

        <ProductGrid products={sortedProducts} />
      </Container>
    </div>
  );
}