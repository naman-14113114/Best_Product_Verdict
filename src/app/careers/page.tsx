import type { Metadata } from "next";
import { InformationPage } from "@/components/InformationPage";

export const metadata: Metadata = { title: "Work Enquiries", alternates: { canonical: "/careers" } };

export default function Page() { return <InformationPage {...{
  "title": "Work Enquiries",
  "introduction": "For work enquiries, contact the publisher by email.",
  "sections": [
    {
      "title": "Current opportunities",
      "body": "This page does not advertise a confirmed vacancy or accept applications through an online form. Email us to ask whether an opportunity is available before sharing application documents."
    },
    {
      "title": "Editorial standards",
      "body": "Contributors should use traceable sources, disclose commercial relationships and avoid invented testing, reviews or professional credentials."
    }
  ],
  "subject": "Work enquiry"
}} />; }
