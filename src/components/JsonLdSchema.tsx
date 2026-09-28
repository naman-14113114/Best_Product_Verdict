import React from "react";
import { Top10PageData } from "@/lib/types";

interface JsonLdSchemaProps {
  data: Top10PageData;
}

export const JsonLdSchema: React.FC<JsonLdSchemaProps> = ({ data }) => {
  // 1. BreadcrumbList Schema
  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.bestproductverdict.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Top 10 Guides",
        item: "https://www.bestproductverdict.co.uk/top-10",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.title,
        item: data.canonicalUrl,
      },
    ],
  };

  // 2. ItemList Schema (Top 10 Products)
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: data.title,
    description: data.metaDescription,
    numberOfItems: data.products.length,
    itemListElement: data.products.map((product) => ({
      "@type": "ListItem",
      position: product.rank,
      item: {
        "@type": "Product",
        name: product.title,
        image: product.image,
        description: product.description,
        review: {
          "@type": "Review",
          reviewRating: {
            "@type": "Rating",
            ratingValue: product.score,
            bestRating: "10",
            worstRating: "1",
          },
          author: {
            "@type": "Person",
            name: data.author.name,
          },
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "GBP",
          price: product.priceDisplay?.replace("£", "") || "49.99",
          availability: "https://schema.org/InStock",
          url: product.outboundUrl,
        },
      },
    })),
  };

  // 3. FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};

export default JsonLdSchema;
