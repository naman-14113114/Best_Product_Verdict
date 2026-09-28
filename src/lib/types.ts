export interface ProductItem {
  rank: number;
  badge?: string;
  badgeType?: "best-overall" | "best-value" | "runner-up" | "top-pick" | "premium" | "standard";
  title: string;
  subtitle?: string;
  image: string;
  score: string; // e.g. "9.9"
  ratingLabel: string; // e.g. "Exceptional", "Outstanding", "Excellent"
  reviewCount?: number;
  description: string;
  highlights?: string[];
  keySpecs?: { label: string; value: string }[];
  outboundUrl: string;
  affiliateTag?: string;
  priceDisplay?: string; // GBP e.g. "£79.99"
  originalPriceDisplay?: string; // e.g. "£99.99"
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
  };
  disclosureText: string;
  products: ProductItem[];
  guide: BuyingGuideSectionData;
}
