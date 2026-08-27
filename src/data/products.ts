import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "caf-001",
    slug: "caftan-royal-gold",
    name: "Caftan Royal Gold",
    nameAr: "قفطان رويال ذهبي",
    description:
      "Un caftan majestueux brodé à la main avec des fils d'or, inspiré de l'artisanat marocain ancestral. Chaque détail reflète un savoir-faire exceptionnel et une élégance intemporelle.",
    descriptionAr:
      "قفطان فاخر مطرز يدوياً بخيوط ذهبية، مستوحى من التراث المغربي العريق. كل تفصيل يعكس حرفية استثنائية وأناقة خالدة.",
    price: 15000,
    currency: "MAD",
    category: "CAFTANS",
    colors: [
      { name: "Gold", nameAr: "ذهبي", hex: "#B89A55" },
      { name: "Champagne", nameAr: "شامبانيا", hex: "#D8C8A5" },
    ],
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
      { label: "Sur Mesure", available: true },
    ],
    images: [
      {
        src: "/images/products/caftan-royal-gold-01.jpg",
        alt: "Caftan Royal Gold - Vue de face",
      },
      {
        src: "/images/products/caftan-royal-gold-02.jpg",
        alt: "Caftan Royal Gold - Détail broderie",
      },
      {
        src: "/images/products/caftan-royal-gold-03.jpg",
        alt: "Caftan Royal Gold - Vue complète",
      },
    ],
    featured: true,
    isNew: false,
    availability: "made_to_order",
    material: "Satin de soie avec broderies en fil d'or",
    materialAr: "ساتان حرير مع تطريز بخيوط ذهبية",
    details: [
      "Broderie artisanale à la main",
      "Fil d'or véritable",
      "Doublure en soie naturelle",
      "Sfifa et Aakad traditionnels",
      "Finitions cousues main",
    ],
    detailsAr: [
      "تطريز يدوي حرفي",
      "خيوط ذهبية أصلية",
      "بطانة حرير طبيعي",
      "سفيفة وعقاد تقليديين",
      "تشطيبات مخيطة يدوياً",
    ],
    careInstructions: [
      "Nettoyage à sec uniquement",
      "Conserver dans une housse",
      "Éviter l'exposition directe au soleil",
      "Repasser à basse température avec protection",
    ],
    careInstructionsAr: [
      "تنظيف جاف فقط",
      "الحفظ في غطاء واقي",
      "تجنب التعرض المباشر لأشعة الشمس",
      "كي على درجة حرارة منخفضة مع حماية",
    ],
    tags: ["gold", "royal", "wedding", "luxury", "handmade"],
  },
  {
    id: "tak-001",
    slug: "takchita-emerald-elegance",
    name: "Takchita Emerald Élégance",
    nameAr: "تكشيطة الزمرد الأنيقة",
    description:
      "Une takchita deux pièces d'une sophistication rare, alliant le vert émeraude profond à des broderies dorées raffinées. Pièce idéale pour les grandes cérémonies.",
    descriptionAr:
      "تكشيطة من قطعتين ذات رقي نادر، تجمع بين الأخضر الزمردي العميق والتطريز الذهبي الراقي. قطعة مثالية للمناسبات الكبرى.",
    price: 18000,
    currency: "MAD",
    category: "TAKCHITAS",
    colors: [
      { name: "Emerald", nameAr: "زمردي", hex: "#2D6A4F" },
      { name: "Forest Green", nameAr: "أخضر غامق", hex: "#1B4332" },
    ],
    sizes: [
      { label: "XS", available: false },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
      { label: "Sur Mesure", available: true },
    ],
    images: [
      {
        src: "/images/products/takchita-emerald-01.jpg",
        alt: "Takchita Emerald Élégance - Vue principale",
      },
      {
        src: "/images/products/takchita-emerald-02.jpg",
        alt: "Takchita Emerald Élégance - Détails",
      },
    ],
    featured: true,
    isNew: true,
    availability: "made_to_order",
    material: "Brocart de soie et velours brodé",
    materialAr: "بروكار حرير ومخمل مطرز",
    details: [
      "Deux pièces : Tahtia et Dfina",
      "Brocart de soie importé",
      "Broderie en perles et cristaux",
      "Ceinture Mdamma ornée",
      "Finitions haute couture",
    ],
    detailsAr: [
      "قطعتان: التحتية والدفينة",
      "بروكار حرير مستورد",
      "تطريز بالخرز والكريستال",
      "حزام مضمة مزين",
      "تشطيبات هوت كوتور",
    ],
    careInstructions: [
      "Nettoyage à sec uniquement",
      "Rangement à plat recommandé",
      "Ne pas repasser directement sur les broderies",
    ],
    tags: ["emerald", "ceremony", "takchita", "elegant"],
  },
  {
    id: "caf-002",
    slug: "caftan-ivory-pearl",
    name: "Caftan Ivory Pearl",
    nameAr: "قفطان عاجي لؤلؤي",
    description:
      "Un caftan d'une blancheur nacrée, sublimé par des détails en perles naturelles et une broderie fine. L'incarnation de la pureté et de l'élégance marocaine.",
    descriptionAr:
      "قفطان بلونه العاجي اللؤلؤي، مزين بتفاصيل من اللؤلؤ الطبيعي وتطريز دقيق. تجسيد للنقاء والأناقة المغربية.",
    price: 12000,
    currency: "MAD",
    category: "CAFTANS",
    colors: [
      { name: "Ivory", nameAr: "عاجي", hex: "#FAF8F2" },
      { name: "Pearl White", nameAr: "أبيض لؤلؤي", hex: "#F0EAD6" },
    ],
    sizes: [
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
      { label: "Sur Mesure", available: true },
    ],
    images: [
      {
        src: "/images/products/caftan-ivory-pearl-01.jpg",
        alt: "Caftan Ivory Pearl - Vue de face",
      },
      {
        src: "/images/products/caftan-ivory-pearl-02.jpg",
        alt: "Caftan Ivory Pearl - Détails perles",
      },
    ],
    featured: true,
    isNew: false,
    availability: "made_to_order",
    material: "Crêpe de soie avec perles naturelles",
    materialAr: "كريب حرير مع لؤلؤ طبيعي",
    details: [
      "Perles naturelles cousues main",
      "Broderie ton sur ton",
      "Tissu crêpe de soie premium",
      "Coupe ajustée et fluide",
    ],
    detailsAr: [
      "لؤلؤ طبيعي مخيط يدوياً",
      "تطريز بنفس درجة اللون",
      "قماش كريب حرير فاخر",
      "قصة محددة وانسيابية",
    ],
    careInstructions: [
      "Nettoyage à sec uniquement",
      "Conserver à l'abri de l'humidité",
    ],
    tags: ["ivory", "pearl", "wedding", "bridal", "elegant"],
  },
  {
    id: "caf-003",
    slug: "caftan-midnight-blue",
    name: "Caftan Midnight Blue",
    nameAr: "قفطان أزرق منتصف الليل",
    description:
      "Un caftan bleu nuit profond, orné de motifs géométriques inspirés du zellige marocain. Pièce unique pour les soirées de prestige.",
    descriptionAr:
      "قفطان بلون أزرق ليلي عميق، مزين بزخارف هندسية مستوحاة من الزليج المغربي. قطعة فريدة لسهرات الفخامة.",
    price: 14000,
    currency: "MAD",
    category: "CAFTANS",
    colors: [
      { name: "Midnight Blue", nameAr: "أزرق ليلي", hex: "#191970" },
      { name: "Navy", nameAr: "كحلي", hex: "#0D1B3E" },
    ],
    sizes: [
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "Sur Mesure", available: true },
    ],
    images: [
      {
        src: "/images/products/caftan-midnight-blue-01.jpg",
        alt: "Caftan Midnight Blue - Vue principale",
      },
      {
        src: "/images/products/caftan-midnight-blue-02.jpg",
        alt: "Caftan Midnight Blue - Détails zellige",
      },
    ],
    featured: false,
    isNew: true,
    availability: "made_to_order",
    material: "Velours de soie avec broderies géométriques",
    materialAr: "مخمل حرير مع تطريز هندسي",
    details: [
      "Motifs inspirés du zellige de Fès",
      "Velours de soie premium",
      "Broderie fil d'argent",
      "Doublure satinée",
    ],
    detailsAr: [
      "زخارف مستوحاة من زليج فاس",
      "مخمل حرير فاخر",
      "تطريز بخيوط فضية",
      "بطانة ساتان",
    ],
    careInstructions: [
      "Nettoyage à sec uniquement",
      "Conserver dans un endroit sec",
    ],
    tags: ["blue", "zellige", "soiree", "prestige"],
  },
  {
    id: "tak-002",
    slug: "takchita-blush-romance",
    name: "Takchita Blush Romance",
    nameAr: "تكشيطة الوردي الرومانسي",
    description:
      "Une takchita d'une douceur envoûtante en rose poudré, ornée de cristaux Swarovski et de broderies florales. Parfaite pour les fiançailles et cérémonies de mariage.",
    descriptionAr:
      "تكشيطة بنعومة ساحرة بلون وردي بودري، مزينة بكريستال سواروفسكي وتطريز زهري. مثالية لحفلات الخطوبة والأعراس.",
    price: 20000,
    currency: "MAD",
    category: "TAKCHITAS",
    colors: [
      { name: "Blush Pink", nameAr: "وردي بودري", hex: "#E8C4C4" },
      { name: "Dusty Rose", nameAr: "وردي مغبر", hex: "#C9A0A0" },
    ],
    sizes: [
      { label: "XS", available: true },
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "Sur Mesure", available: true },
    ],
    images: [
      {
        src: "/images/products/takchita-blush-01.jpg",
        alt: "Takchita Blush Romance - Vue principale",
      },
      {
        src: "/images/products/takchita-blush-02.jpg",
        alt: "Takchita Blush Romance - Détails cristaux",
      },
    ],
    featured: true,
    isNew: true,
    availability: "made_to_order",
    material: "Organza de soie avec cristaux Swarovski",
    materialAr: "أورجانزا حرير مع كريستال سواروفسكي",
    details: [
      "Cristaux Swarovski authentiques",
      "Broderie florale artisanale",
      "Organza de soie importée",
      "Ceinture ornée de pierreries",
      "Traîne légère",
    ],
    detailsAr: [
      "كريستال سواروفسكي أصلي",
      "تطريز زهري حرفي",
      "أورجانزا حرير مستوردة",
      "حزام مزين بالأحجار الكريمة",
      "ذيل خفيف",
    ],
    careInstructions: [
      "Nettoyage à sec professionnel",
      "Manipulation délicate des cristaux",
      "Stockage dans une housse rembourrée",
    ],
    tags: ["blush", "romance", "wedding", "engagement", "swarovski"],
  },
  {
    id: "rob-001",
    slug: "robe-champagne-soiree",
    name: "Robe Champagne Soirée",
    nameAr: "فستان شامبانيا للسهرة",
    description:
      "Une robe marocaine élégante couleur champagne, alliant modernité et tradition. Silhouette fluide et détails dorés subtils pour des soirées inoubliables.",
    descriptionAr:
      "فستان مغربي أنيق بلون الشامبانيا، يجمع بين الحداثة والتقليد. قوام انسيابي وتفاصيل ذهبية راقية لسهرات لا تُنسى.",
    price: 8500,
    currency: "MAD",
    category: "ROBES",
    colors: [
      { name: "Champagne", nameAr: "شامبانيا", hex: "#D8C8A5" },
      { name: "Soft Gold", nameAr: "ذهبي فاتح", hex: "#C9AD6A" },
    ],
    sizes: [
      { label: "S", available: true },
      { label: "M", available: true },
      { label: "L", available: true },
      { label: "XL", available: true },
      { label: "Sur Mesure", available: true },
    ],
    images: [
      {
        src: "/images/products/robe-champagne-01.jpg",
        alt: "Robe Champagne Soirée - Vue principale",
      },
      {
        src: "/images/products/robe-champagne-02.jpg",
        alt: "Robe Champagne Soirée - Détails",
      },
    ],
    featured: false,
    isNew: false,
    availability: "in_stock",
    material: "Crêpe georgette avec broderies dorées",
    materialAr: "كريب جورجيت مع تطريز ذهبي",
    details: [
      "Coupe moderne et flatteuse",
      "Broderies dorées discrètes",
      "Manches travaillées",
      "Tissu fluide et léger",
    ],
    detailsAr: [
      "قصة عصرية وجذابة",
      "تطريز ذهبي راقي",
      "أكمام مشغولة",
      "قماش انسيابي وخفيف",
    ],
    careInstructions: [
      "Lavage délicat à la main ou nettoyage à sec",
      "Repasser à température moyenne",
    ],
    tags: ["champagne", "soiree", "modern", "elegant"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getNewProducts(): Product[] {
  return products.filter((p) => p.isNew);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "ALL") return products;
  if (category === "NEW_IN") return getNewProducts();
  return products.filter((p) => p.category === category);
}