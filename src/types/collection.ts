export interface Collection {
  id: string;
  slug: string;
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  image: string;
  imageAlt: string;
  productCount?: number;
  featured: boolean;
}