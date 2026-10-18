import type { Metadata } from "next";
import { LuxuryToothbrushLandingPage } from "@/components/LuxuryToothbrushLandingPage";
import { getToothbrushGuide } from "@/data/toothbrushGuidesData";

const guide = getToothbrushGuide("miroooo-brush-x-uk-review-2026");

export const metadata: Metadata = {
  title: guide.seoTitle,
  description: guide.seoDescription,
  keywords: guide.keywords,
  alternates: {
    canonical: `https://www.bestproductverdict.com/${guide.slug}`,
  },
  openGraph: {
    title: guide.seoTitle,
    description: guide.seoDescription,
    type: "article",
    url: `https://www.bestproductverdict.com/${guide.slug}`,
    siteName: "Best Product Verdict UK",
    images: ["/img/toothbrushes/top-4-competitors-container-bar.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.seoTitle,
    description: guide.seoDescription,
    images: ["/img/toothbrushes/top-4-competitors-container-bar.webp"],
  },
};

export default function MirooooBrushXUkReviewPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.bestproductverdict.com/${guide.slug}#webpage`,
        "url": `https://www.bestproductverdict.com/${guide.slug}`,
        "name": guide.seoTitle,
        "inLanguage": "en-GB",
      },
      {
        "@type": "Article",
        "@id": `https://www.bestproductverdict.com/${guide.slug}#article`,
        "headline": guide.headline,
        "description": guide.seoDescription,
        "image": "https://www.bestproductverdict.com/img/toothbrushes/top-4-competitors-container-bar.webp",
        "inLanguage": "en-GB",
        "author": {
          "@type": "Person",
          "name": "Dr. Julian Vance, BDS",
          "jobTitle": "Clinical Dental Consultant",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Best Product Verdict",
          "url": "https://www.bestproductverdict.com",
        },
      },
      {
        "@type": "Review",
        "@id": `https://www.bestproductverdict.com/${guide.slug}#review`,
        "itemReviewed": {
          "@type": "Product",
          "name": "Miroooo Brush X Sonic Electric Toothbrush",
          "image": "https://www.bestproductverdict.com/img/toothbrushes/top-4-competitors-container-bar.webp",
          "offers": {
            "@type": "Offer",
            "price": "69.00",
            "priceCurrency": "GBP",
            "availability": "https://schema.org/InStock",
            "url": "https://www.trymiroooo.com/products/miroooo-x",
          },
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "4.9",
          "bestRating": "5",
        },
        "author": {
          "@type": "Person",
          "name": "Dr. Julian Vance, BDS",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LuxuryToothbrushLandingPage guide={guide} />
    </>
  );
}
