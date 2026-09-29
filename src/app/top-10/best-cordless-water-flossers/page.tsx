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
    <div className="w-full bg-[#f7f9fb] pb-16">
      {/* Schema Markup for SEO */}
      <JsonLdSchema data={data} />

      {/* Hero Section Container */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-8">
          {/* 1. Breadcrumbs: Home / Top 10 / [Category Name] */}
          <nav className="flex items-center gap-2 text-xs text-slate-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/top-10" className="hover:text-blue-600 transition-colors">Top 10</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">{data.categoryName}</span>
          </nav>

          {/* 2. Top Subheader: 🇬🇧 Updated: September 2026 */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 mb-4">
            <span className="text-sm" role="img" aria-label="UK Flag">🇬🇧</span>
            <span>Updated: {data.updatedDate}</span>
          </div>

          {/* 3. Headline with left vertical cyan/teal bar | */}
          <div className="flex items-center gap-3 sm:gap-4 mb-5">
            <div className="w-1.5 h-10 sm:h-14 bg-teal-500 rounded-full shrink-0" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Top 10 {data.categoryName} - Compared &amp; Ranked By Experts
            </h1>
          </div>

          {/* 4 & 5. Proof Pills bar & Trust Pills */}
          <ProofTrustBar />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* 6. Product Cards list (1 to 10) */}
        <div className="space-y-6">
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
          avatarUrl={data.author.avatarUrl || "/images/david-welch.jpg"}
        />

        {/* 9. Comparison Table & Full In-Depth Buying Guide */}
        <ComparisonTable products={data.products} categoryName={data.categoryName} />

        <BuyingGuide
          guide={data.guide}
          authorName={data.author.name}
          authorRole={data.author.role}
        />

        {/* 10. "Sign Up For Our Newsletter" box */}
        <div className="mt-14">
          <NewsletterBox />
        </div>
      </div>
    </div>
  );
}
