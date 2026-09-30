import { redirect } from "next/navigation";

interface FallbackProps {
  params: Promise<{ slug: string }>;
}

export default async function FallbackTop10Category({ params }: FallbackProps) {
  const { slug } = await params;
  const lower = (slug || "").toLowerCase();

  // Smart keyword mapping to existing live guides
  if (
    lower.includes("meat") ||
    lower.includes("thermometer") ||
    lower.includes("probe") ||
    lower.includes("bbq") ||
    lower.includes("kitchen") ||
    lower.includes("cook") ||
    lower.includes("smoker")
  ) {
    redirect("/top-10/best-wireless-meat-thermometers");
  }

  if (
    lower.includes("floss") ||
    lower.includes("water") ||
    lower.includes("oral") ||
    lower.includes("dental") ||
    lower.includes("tooth") ||
    lower.includes("teeth")
  ) {
    redirect("/top-10/best-cordless-water-flossers");
  }

  if (
    lower.includes("massage") ||
    lower.includes("gun") ||
    lower.includes("muscle") ||
    lower.includes("recovery") ||
    lower.includes("percussion") ||
    lower.includes("physio")
  ) {
    redirect("/top-10/best-mini-massage-guns");
  }

  // Clean fallback redirect to main Top 10 hub
  redirect("/top-10");
}
