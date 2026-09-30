import type { Metadata } from "next";
import { InformationPage } from "@/components/InformationPage";

export const metadata: Metadata = { title: "Advertiser and Editorial Disclosure", alternates: { canonical: "/advertiser-disclosure" } };

export default function Page() { return <InformationPage {...{
  "title": "Advertiser and Editorial Disclosure",
  "introduction": "Best Product Verdict is operated by Naman Kharbanda and publishes product comparisons.",
  "sections": [
    {
      "title": "Affiliate links and commercial influence",
      "body": "Some outbound links may earn us a commission. Commercial relationships may influence inclusion and ordering. Retailers set the price, availability, delivery and return terms."
    },
    {
      "title": "What the numbered lists mean",
      "body": "Positions indicate the order in which options are presented. We do not publish numerical test scores or customer-review averages. Commercial relationships may affect inclusion and ordering; we do not claim zero paid influence."
    },
    {
      "title": "Research method",
      "body": "These are desk-research comparisons, with AI-assisted drafting. We do not claim hands-on product testing, clinical trials or an independent laboratory audit. Numbers indicate reading order rather than test results or customer ratings. Manufacturer information may differ by model, generation and region. Check the exact seller listing before buying."
    },
    {
      "title": "Retailer information",
      "body": "Outbound buttons search Amazon.co.uk for the named model or family. A search result may contain different sellers, variants and kits. Check the exact model and total cost. We do not promise a particular price, stock level, discount, delivery date or return period."
    },
    {
      "title": "Charges",
      "body": "We do not charge readers to browse these guides. Any purchase is made under the chosen retailer's terms."
    }
  ]
}} />; }
