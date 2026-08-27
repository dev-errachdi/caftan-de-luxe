export interface ProductImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface ProductColor {
  name: string;
  nameAr?: string;
  hex: string;
}

export interface ProductSize {
  label: string;
  available: boolean;
}

export type ProductCategory =
  | "CAFTANS"
  | "TAKCHITAS"
  | "ROBES"
  | "ENSEMBLES"
  | "NEW_IN";

export type ProductAvailability =
  | "in_stock"
  | "made_to_order"
  | "out_of_stock"
  | "coming_soon";

export interface Product {
  id: string;
  slug: string;
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  price: number;
  originalPrice?: number;
  currency: string;
  category: ProductCategory;
  colors: ProductColor[];
  sizes: ProductSize[];
  images: ProductImage[];
  featured: boolean;
  isNew: boolean;
  availability: ProductAvailability;
  material?: string;
  materialAr?: string;
  details?: string[];
  detailsAr?: string[];
  careInstructions?: string[];
  careInstructionsAr?: string[];
  tags?: string[];
  createdAt?: string;
}

export interface ProductFilterState {
  category: ProductCategory | "ALL";
  sortBy: "newest" | "price-asc" | "price-desc" | "featured";
}