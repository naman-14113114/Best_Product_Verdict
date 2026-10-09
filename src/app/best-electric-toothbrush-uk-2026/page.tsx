import type { Metadata } from "next";
import { LuxuryToothbrushLandingPage } from "@/components/LuxuryToothbrushLandingPage";

export const metadata: Metadata = {
  title: "Best Electric Toothbrush UK (2026) | Top 5 Toothbrushes Compared",
  description:
    "Compare the top 5 best electric toothbrushes in the UK for 2026. Ranked for acoustic fluid dynamics, plaque removal, battery life, gum protection, refill costs and value.",
  keywords: [
    "best electric toothbrush",
    "best electric toothbrush uk",
    "best electric toothbrush uk 2026",
    "best electric toothbrushes uk",
    "top 5 electric toothbrushes",
    "electric toothbrush reviews uk",
    "best electric toothbrush for sensitive gums",
    "miroooo brush x2",
    "miroooo x2",
    "oral b io series 6 review",
    "philips sonicare diamondclean 9000",
    "suri pro 2.0 review",
    "oral b io3 review",
  ],
  alternates: {
    canonical: "https://www.bestproductverdict.com/best-electric-toothbrush-uk-2026",
  },
  openGraph: {
    title: "Best Electric Toothbrush UK (2026) | Top 5 Toothbrushes Compared",
    description:
      "Compare the top 5 best electric toothbrushes in the UK for 2026. Ranked for acoustic fluid dynamics, plaque removal, battery life, gum protection, refill costs and value.",
    type: "article",
    url: "https://www.bestproductverdict.com/best-electric-toothbrush-uk-2026",
    siteName: "Best Product Verdict UK",
    images: ["/img/toothbrushes/top-4-competitors-container-bar.webp"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Electric Toothbrush UK (2026) | Top 5 Toothbrushes Compared",
    description:
      "Compare the top 5 best electric toothbrushes in the UK for 2026. Ranked for acoustic fluid dynamics, plaque removal, battery life, gum protection, refill costs and value.",
    images: ["/img/toothbrushes/top-4-competitors-container-bar.webp"],
  },
};

export default function BestElectricToothbrushPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.bestproductverdict.com/best-electric-toothbrush-uk-2026#webpage",
        "url": "https://www.bestproductverdict.com/best-electric-toothbrush-uk-2026",
        "name": "Best Electric Toothbrush UK (2026) | Top 5 Toothbrushes Compared",
        "inLanguage": "en-GB",
      },
      {
        "@type": "Article",
        "@id": "https://www.bestproductverdict.com/best-electric-toothbrush-uk-2026#article",
        "headline": "Best Electric Toothbrush UK (2026) | Top 5 Toothbrushes Compared",
        "description":
          "Compare the top 5 best electric toothbrushes in the UK for 2026. Ranked for acoustic fluid dynamics, plaque clearance, battery life, enamel safety, and overall value.",
        "image": "https://www.bestproductverdict.com/img/toothbrushes/top-5-electric-toothbrushes-uk.png",
        "inLanguage": "en-GB",
        "author": {
          "@type": "Person",
          "name": "Dr. Olivia",
          "jobTitle": "Clinical Dental Consultant",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Best Product Verdict",
          "url": "https://www.bestproductverdict.com",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://www.bestproductverdict.com/best-electric-toothbrush-uk-2026#itemlist",
        "name": "Top 5 Electric Toothbrushes UK 2026",
        "numberOfItems": 5,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Miroooo Brush X2 Electric Toothbrush",
            "url": "https://www.trymiroooo.com/products/miroooo-x2",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Oral-B iO Series 6 Electric Toothbrush",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Philips Sonicare DiamondClean 9000",
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "SURI Pro 2.0 Electric Toothbrush",
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Oral-B iO3 Matt Black Electric Toothbrush",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LuxuryToothbrushLandingPage />
    </>
  );
}
