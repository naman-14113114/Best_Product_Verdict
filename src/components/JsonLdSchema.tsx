import type { Top10PageData } from "@/lib/types";
import { SITE_URL } from "@/lib/site";
export function JsonLdSchema({ data }: { data: Top10PageData }) {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Buying Guides", item: SITE_URL + "/top-10" },
      { "@type": "ListItem", position: 3, name: data.title, item: data.canonicalUrl },
    ] },
    { "@context": "https://schema.org", "@type": "ItemList", name: data.title, description: data.metaDescription, numberOfItems: data.products.length,
      itemListElement: data.products.map(product => ({ "@type": "ListItem", position: product.rank, name: product.title, url: data.canonicalUrl + "#rank-" + product.rank })) },
    { "@context": "https://schema.org", "@type": "Article", headline: data.title, url: data.canonicalUrl, dateModified: "2026-09-30", author: { "@type": "Organization", name: "Best Product Verdict", url: SITE_URL + "/about" }, publisher: { "@type": "Organization", name: "Best Product Verdict", url: SITE_URL }, citation: data.sources?.map(source => source.url) },
  ];
  return <>{schemas.map(schema => <script key={schema["@type"]} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />)}</>;
}
export default JsonLdSchema;
