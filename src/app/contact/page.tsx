import type { Metadata } from "next";
import { InformationPage } from "@/components/InformationPage";

export const metadata: Metadata = { title: "Contact Best Product Verdict", alternates: { canonical: "/contact" } };

export default function Page() { return <InformationPage {...{
  "title": "Contact Best Product Verdict",
  "introduction": "Email support@bestproductverdict.com for editorial enquiries, corrections, privacy requests and partnership questions.",
  "sections": [
    {
      "title": "Send an enquiry",
      "body": "Use the email link below and include the relevant page URL. There is no website submission form or automated delivery confirmation."
    },
    {
      "title": "Questions about a purchase",
      "body": "Best Product Verdict is a comparison publisher, not the seller. For payment, dispatch, returns or warranties, contact the retailer named on your order."
    },
    {
      "title": "Publisher",
      "body": "Best Product Verdict is operated by Naman Kharbanda. We do not promise a fixed response time."
    }
  ]
}} />; }
