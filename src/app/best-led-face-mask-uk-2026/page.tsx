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
          "name": "Dr. Megan Vincze",
          "jobTitle": "Certified Dermatologist",
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
        "name": "Top 5 LED Face Masks UK 2026",
        "numberOfItems": 5,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Buudy 7 Colour LED Mask",
            "url": "https://www.buudy.co.uk/products/buudy-led-mask",
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
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.bestproductverdict.com/best-led-face-mask-uk-2026#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best LED face mask in the UK in 2026?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The Buudy 7 Colour LED Mask ranks #1 in the UK for 2026. It features 7 therapeutic wavelengths plus 830nm near-infrared, built-in neck coverage, cordless tap controls, and a 90-day money-back guarantee at £179.",
            },
          },
          {
            "@type": "Question",
            "name": "Does LED light face mask therapy really work for wrinkles and acne?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Yes, clinical research confirms that specific LED wavelengths stimulate collagen synthesis (Red and Near-Infrared light) to reduce wrinkles and eliminate P. acnes bacteria (Blue light) to clear active breakouts.",
            },
          },
          {
            "@type": "Question",
            "name": "What makes the Buudy 7 Colour LED Mask different from single-colour masks?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "While single-colour masks only emit red light, the Buudy 7 Colour LED Mask offers Red, Blue, Green, Cyan, Yellow, Purple, and White light plus 830nm Near-Infrared to target pigmentation, redness, acne, and deep wrinkles in one device.",
            },
          },
          {
            "@type": "Question",
            "name": "Why is neck coverage important for LED face mask therapy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The delicate neck and décolletage area ages faster than facial skin. Masks lacking neck coverage leave a noticeable age gap, whereas Buudy includes full face and neck coverage standard.",
            },
          },
          {
            "@type": "Question",
            "name": "How often should you use an at-home LED light therapy face mask?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "For optimal results, use an at-home LED face mask for 10 to 15 minutes, 3 to 5 times per week. Most users notice visible skin improvements within 4 to 8 weeks.",
            },
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
