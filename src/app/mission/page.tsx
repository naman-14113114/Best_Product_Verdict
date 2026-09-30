import type { Metadata } from "next";
import { InformationPage } from "@/components/InformationPage";

export const metadata: Metadata = { title: "Our Mission", alternates: { canonical: "/mission" } };

export default function Page() { return <InformationPage {...{
  "title": "Our Mission",
  "introduction": "Help readers ask useful questions before choosing a product.",
  "sections": [
    {
      "title": "Practical comparisons",
      "body": "Our guides explain product formats, kit contents, charging or app requirements and the questions to check with a seller."
    },
    {
      "title": "Clear limits",
      "body": "These are desk-research comparisons, with AI-assisted drafting. We do not claim hands-on product testing, clinical trials or an independent laboratory audit. Numbers indicate reading order rather than test results or customer ratings. Manufacturer information may differ by model, generation and region. Check the exact seller listing before buying."
    },
    {
      "title": "Transparent links",
      "body": "Some outbound links may earn us a commission. Commercial relationships may influence inclusion and ordering. Retailers set the price, availability, delivery and return terms."
    }
  ]
}} />; }
