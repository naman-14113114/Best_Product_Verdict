import type { Metadata } from "next";
import { LuxuryLedMaskLandingPage } from "@/components/LuxuryLedMaskLandingPage";

export const metadata: Metadata = {
  title: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
  description:
    "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face & neck coverage, red light therapy, anti-ageing, wrinkles, acne and value.",
  keywords: [
    "best led face mask",
    "best light led face mask",
    "best led face mask therapy",
    "best led face mask uk",
    "best led face mask uk 2026",
    "best led light therapy mask",
    "best led mask for wrinkles",
    "best red light face mask",
    "best at home led face mask",
    "led light face mask therapy",
    "top 5 led face masks",
    "buudy 7 colour led mask",
    "led face and neck mask",
  ],
  alternates: {
    canonical: "https://www.bestproductverdict.com/best-led-face-mask-uk-2026",
  },
  openGraph: {
    title: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
    description:
      "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face & neck coverage, red light therapy, anti-ageing, wrinkles, acne and value.",
    type: "article",
    url: "https://www.bestproductverdict.com/best-led-face-mask-uk-2026",
    siteName: "Best Product Verdict UK",
    images: ["/img/TOP 5 LED Mask uk.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
    description:
      "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face & neck coverage, red light therapy, anti-ageing, wrinkles, acne and value.",
    images: ["/img/TOP 5 LED Mask uk.png"],
  },
};

export default function BestLedFaceMaskPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.bestproductverdict.com/best-led-face-mask-uk-2026#webpage",
        "url": "https://www.bestproductverdict.com/best-led-face-mask-uk-2026",
        "name": "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
        "inLanguage": "en-GB",
      },
      {
        "@type": "Article",
        "@id": "https://www.bestproductverdict.com/best-led-face-mask-uk-2026#article",
        "headline": "Best LED Face Mask UK (2026) | Top 5 Light Therapy Masks Compared",
        "description":
          "Compare the top 5 best LED face masks in the UK for 2026. Ranked for light therapy wavelengths, face and neck coverage, red light therapy, wrinkles, acne and overall value.",
        "image": "https://www.bestproductverdict.com/img/TOP%205%20LED%20Mask%20uk.png",
        "inLanguage": "en-GB",
        "author": {
          "@type": "Person",
          "name": "Dr. Shannon",
          "jobTitle": "Consultant Dermatologist",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Best Product Verdict",
          "url": "https://www.bestproductverdict.com",
        },
      },
      {
        "@type": "ItemList",
        "@id": "https://www.bestproductverdict.com/best-led-face-mask-uk-2026#itemlist",
        "name": "Top 10 LED Face Masks UK 2026",
        "numberOfItems": 10,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Buudy 7 Colour LED Mask",
            "url": "https://www.buudy.co.uk/products/buudy-led-face-mask",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "CurrentBody LED Mask",
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Omnilux LED Mask",
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Shark CryoGlow LED Mask",
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Dr. Dennis Gross DRx SpectraLite",
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Equinox LED Face Mask",
          },
          {
            "@type": "ListItem",
            "position": 7,
            "name": "Silk'n LED Face Mask Pro",
          },
          {
            "@type": "ListItem",
            "position": 8,
            "name": "BlockBlueLight Face Mask",
          },
          {
            "@type": "ListItem",
            "position": 9,
            "name": "Philips ReAura 7000 Series",
          },
          {
            "@type": "ListItem",
            "position": 10,
            "name": "Therabody TheraFace Mask",
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
      <LuxuryLedMaskLandingPage />
    </>
  );
}
