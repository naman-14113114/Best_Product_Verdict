import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getLedMaskArticle,
  getAllLedMaskArticleSlugs,
} from "@/data/ledMaskArticlesData";
import { LuxuryLedMaskArticlePage } from "@/components/LuxuryLedMaskArticlePage";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllLedMaskArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getLedMaskArticle(slug);
  if (!article) {
    return {
      title: "Article Not Found | Best Product Verdict",
    };
  }

  const imageUrl = article.image.startsWith("http")
    ? article.image
    : `https://www.bestproductverdict.com${article.image.startsWith("/") ? article.image : `/${article.image}`}`;

  return {
    title: article.seoTitle,
    description: article.seoDescription,
    keywords: article.keywords,
    alternates: {
      canonical: `https://www.bestproductverdict.com/blog/${article.slug}`,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.seoDescription,
      type: "article",
      url: `https://www.bestproductverdict.com/blog/${article.slug}`,
      siteName: "Best Product Verdict UK",
      images: [imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.seoDescription,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const article = getLedMaskArticle(slug);

  if (!article) {
    notFound();
  }

  const fullImageUrl = article.image.startsWith("http")
    ? article.image
    : `https://www.bestproductverdict.com${article.image.startsWith("/") ? article.image : `/${article.image}`}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://www.bestproductverdict.com/blog/${article.slug}#webpage`,
        url: `https://www.bestproductverdict.com/blog/${article.slug}`,
        name: article.seoTitle,
        inLanguage: "en-GB",
      },
      {
        "@type": "Article",
        "@id": `https://www.bestproductverdict.com/blog/${article.slug}#article`,
        headline: article.title,
        description: article.seoDescription,
        image: fullImageUrl,
        datePublished: article.date,
        inLanguage: "en-GB",
        author: {
          "@type": "Person",
          name: article.author,
          jobTitle: article.authorRole,
        },
        publisher: {
          "@type": "Organization",
          name: "Best Product Verdict",
          url: "https://www.bestproductverdict.com",
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
      <LuxuryLedMaskArticlePage article={article} />
    </>
  );
}
