export interface KeySpec {
  label: string;
  value: string;
}

export interface ProductItem {
  rank: number;
  brand?: string;
  title: string;
  subtitle?: string;
  image: string;
  thumbnails?: string[];
  score: string; // e.g. "9.9"
  ratingLabel: string; // e.g. "Exceptional", "Outstanding", "Excellent"
  badge?: string;
  badgeType?: "best-overall" | "best-value" | "runner-up" | "top-pick" | "premium" | "standard";
  discountPercent?: string; // e.g. "20% Off", "35% Off"
  dealTimer?: string; // e.g. "Limited Time Deal", "Ends in 03:45:12"
  pros?: string[]; // for "Why we love it" tick points (✓)
  cons?: string[]; // for cross points (✗)
  description: string;
  keySpecs?: KeySpec[];
  outboundUrl: string;
  priceDisplay?: string; // GBP e.g. "£79.99"
  originalPriceDisplay?: string; // e.g. "£99.99"
  reviewCount?: number;
  highlights?: string[]; // preserved for backward compatibility
  dealBadge?: string; // preserved for backward compatibility
  affiliateTag?: string;
}

export interface BuyingGuideSectionData {
  title: string;
  subtitle?: string;
  introduction: string;
  keyFactors: {
    title: string;
    description: string;
  }[];
  testingMethodology: string;
  expertVerdict: string;
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface Top10PageData {
  slug: string;
  canonicalUrl: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  categoryName: string;
  categorySlug: string;
  updatedDate: string; // e.g. "September 2026"
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
    experience?: string;
    bio?: string;
  };
  disclosureText: string;
  products: ProductItem[];
  consideredProducts?: ProductItem[]; // 3 runner-up products for "Some other products we considered" section
  guide: BuyingGuideSectionData;
}
