import type { Metadata } from "next";
import { InformationPage } from "@/components/InformationPage";

export const metadata: Metadata = { title: "About Best Product Verdict", alternates: { canonical: "/about" } };

export default function Page() { return <InformationPage {...{
  "title": "About Best Product Verdict",
  "introduction": "Best Product Verdict is a UK-focused product comparison publisher operated by Naman Kharbanda.",
  "sections": [
    {
      "title": "What we publish",
      "body": "We publish buying guides for water flossers, wireless meat thermometers and massage guns. Each guide explains practical purchase checks and links to UK retailer searches."
    },
    {
      "title": "How the guides are prepared",
      "body": "These are desk-research comparisons, with AI-assisted drafting. We do not claim hands-on product testing, clinical trials or an independent laboratory audit. Numbers indicate reading order rather than test results or customer ratings. Manufacturer information may differ by model, generation and region. Check the exact seller listing before buying."
    },
    {
      "title": "Commercial relationships",
      "body": "Some outbound links may earn us a commission. Commercial relationships may influence inclusion and ordering. Retailers set the price, availability, delivery and return terms."
    },
    {
      "title": "Corrections",
      "body": "We welcome reports of inaccurate product names, broken links or unclear wording. Include the page URL and the information you believe needs correction."
    }
  ]
}} />; }
