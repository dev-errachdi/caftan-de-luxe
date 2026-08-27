"use client";

import { ProductFilterState, ProductCategory } from "@/types/product";
import { CATEGORY_LABELS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ProductFiltersProps {
  filters: ProductFilterState;
  onFilterChange: (filters: ProductFilterState) => void;
}

const filterCategories: (ProductCategory | "ALL")[] = [
  "ALL",
  "CAFTANS",
  "TAKCHITAS",
  "ROBES",
  "ENSEMBLES",
  "NEW_IN",
];

export default function ProductFilters({
  filters,
  onFilterChange,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-10">
      {filterCategories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange({ ...filters, category })}
          className={cn(
            "px-4 py-2 text-caption tracking-[0.15em] uppercase border transition-all duration-300",
            filters.category === category
              ? "bg-brand-deep-black text-white border-brand-deep-black"
              : "bg-transparent text-gray-600 border-gray-300 hover:border-brand-gold hover:text-brand-gold"
          )}
        >
          {CATEGORY_LABELS[category]}
        </button>
      ))}
    </div>
  );
}