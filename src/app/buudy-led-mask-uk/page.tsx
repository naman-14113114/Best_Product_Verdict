import type { Metadata } from "next";
import { LuxuryLedMaskLandingPage } from "@/components/LuxuryLedMaskLandingPage";
import { getLedMaskGuide } from "@/data/ledMaskGuidesData";

const guide = getLedMaskGuide("buudy-led-mask-uk");

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
    images: ["/img/top-5-best-led-face-masks-uk-buudy.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: guide.seoTitle,
    description: guide.seoDescription,
    images: ["/img/top-5-best-led-face-masks-uk-buudy.png"],
  },
};

export default function BuudyLedMaskUkPage() {
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
        "image": "https://www.bestproductverdict.com/img/top-5-best-led-face-masks-uk-buudy.png",
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
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LuxuryLedMaskLandingPage guide={guide} />
    </>
  );
}
