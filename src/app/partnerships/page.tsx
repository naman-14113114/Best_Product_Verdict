import type { Metadata } from "next";
import { InformationPage } from "@/components/InformationPage";

export const metadata: Metadata = { title: "Partnership Enquiries", alternates: { canonical: "/partnerships" } };

export default function Page() { return <InformationPage {...{
  "title": "Partnership Enquiries",
  "introduction": "Contact support@bestproductverdict.com to discuss a commercial enquiry.",
  "sections": [
    {
      "title": "Disclosure",
      "body": "Affiliate and advertising relationships must be disclosed to readers. We do not offer fabricated tests, customer reviews, professional endorsements or undisclosed claims."
    },
    {
      "title": "Product information",
      "body": "Please identify the business and product model in your email and link to current specifications. Product inclusion is not a promise of an independent test award."
    },
    {
      "title": "How to contact us",
      "body": "There is no online application or submission acknowledgement. Send your enquiry through your email service."
    }
  ]
}} />; }
