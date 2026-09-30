import type { Metadata } from "next";
import Link from "next/link";
import { waterFlossersData } from "@/data/waterFlossers";
import { ProductCard } from "@/components/ProductCard";
import { ProofTrustBar } from "@/components/ProofTrustBar";
import { ConsideredProducts } from "@/components/ConsideredProducts";
import { AboutEditor } from "@/components/AboutEditor";
import { ComparisonTable } from "@/components/ComparisonTable";
import { BuyingGuide } from "@/components/BuyingGuide";
import { NewsletterBox } from "@/components/NewsletterBox";
import { JsonLdSchema } from "@/components/JsonLdSchema";

export const metadata: Metadata = {
  title: waterFlossersData.metaTitle,
  description: waterFlossersData.metaDescription,
  alternates: {
    canonical: waterFlossersData.canonicalUrl,
  },
  openGraph: {
    title: waterFlossersData.metaTitle,
    description: waterFlossersData.metaDescription,
    url: waterFlossersData.canonicalUrl,
    siteName: "Best Product Verdict UK",
    locale: "en_GB",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: waterFlossersData.metaTitle,
    description: waterFlossersData.metaDescription,
  },
};

export default function BestCordlessWaterFlossersPage() {
  const data = waterFlossersData;

  return (
    <div className="w-full bg-[#f7f9fb] pb-16 relative overflow-hidden">
      {/* Floating Background Circles */}
      <div className="bg-circle _1" />
      <div className="bg-circle _2" />
      <div className="bg-circle _3" />
      <div className="bg-circle _4" />
      <div className="bg-circle _5" />

      {/* Schema Markup for SEO */}
      <JsonLdSchema data={data} />

      {/* Hero Section Container (shared layout classes) */}
      <div className="hero__section">
        <div className="section-deals">
          {/* 1. Breadcrumbs: Home / Top 10 / [Category Name] */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/top-10" className="hover:text-blue-600 transition-colors">Top 10</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">{data.categoryName}</span>
          </nav>

          {/* 2. Top Subheader: 🇬🇧 Updated: September 2026 */}
          <div className="flag-updated-row">
            <span className="flag-emoji" role="img" aria-label="UK Flag">🇬🇧</span>
            <span className="updated-date-pill">Updated: {data.updatedDate}</span>
          </div>

          {/* 3. Headline with left vertical teal accent bar | */}
          <h1 className="title-main-desktop-copy">
            <span className="teal-vertical-line" />
            <span>Top 10 {data.categoryName} - Compared for UK Buyers</span>
          </h1>
          <h1 className="title-main-mobile-top10">
            Top 10 {data.categoryName} - Compared for UK Buyers
          </h1>

          {/* 4 & 5. Proof Pills bar, Trust Pills & Author Strip */}
          <ProofTrustBar
            categoryName={data.categoryName}
            updatedDate={data.updatedDate}
            authorName={data.author.name}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 relative z-10">
        {/* 6. Product Cards list (1 to 10) */}
        <div className="space-y-4">
          {data.products.map((product) => (
            <ProductCard
              key={product.rank}
              product={product}
              categoryName={data.categoryName}
            />
          ))}
        </div>

        {/* 7. "Some other products we considered" 3-card grid */}
        {data.consideredProducts && data.consideredProducts.length > 0 && (
          <ConsideredProducts
            products={data.consideredProducts}
            categoryName={data.categoryName}
          />
        )}

        {/* 8. "About the Editor" card */}
        <AboutEditor
          name={data.author.name}
          role={data.author.role}
          bio={data.author.bio}
          avatarUrl={data.author.avatarUrl}
        />

        {/* 9. Side-by-side comparison table */}
        <ComparisonTable products={data.products} categoryName={data.categoryName} />

        {/* 10. Comprehensive UK Buying Guide */}
        <BuyingGuide guide={data.guide} authorName={data.author.name} authorRole={data.author.role} />

        {/* 11. Newsletter Box */}
        <NewsletterBox />
        {data.sources && <section className="my-8 rounded-2xl border border-slate-200 bg-white p-6 space-y-3"><h2 className="text-lg font-bold">Sources and further information</h2><p className="text-xs text-slate-600">Manufacturer information describes the named model or family; it is not our own testing. Details may differ by version and seller.</p><ul className="space-y-2">{data.sources.map(source => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline">{source.title}</a></li>)}</ul></section>}
      </div>
    </div>
  );
}
