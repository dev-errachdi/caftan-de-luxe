export const CATEGORIES = {
  ALL: "ALL",
  CAFTANS: "CAFTANS",
  TAKCHITAS: "TAKCHITAS",
  ROBES: "ROBES",
  ENSEMBLES: "ENSEMBLES",
  NEW_IN: "NEW_IN",
} as const;

export const CATEGORY_LABELS: Record<string, string> = {
  ALL: "Tout",
  CAFTANS: "Caftans",
  TAKCHITAS: "Takchitas",
  ROBES: "Robes",
  ENSEMBLES: "Ensembles",
  NEW_IN: "Nouveautés",
};

export const CATEGORY_LABELS_AR: Record<string, string> = {
  ALL: "الكل",
  CAFTANS: "قفاطين",
  TAKCHITAS: "تكاشط",
  ROBES: "فساتين",
  ENSEMBLES: "أطقم",
  NEW_IN: "جديد",
};

export const SORT_OPTIONS = [
  { value: "featured", label: "En vedette" },
  { value: "newest", label: "Nouveautés" },
  { value: "price-asc", label: "Prix croissant" },
  { value: "price-desc", label: "Prix décroissant" },
] as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;