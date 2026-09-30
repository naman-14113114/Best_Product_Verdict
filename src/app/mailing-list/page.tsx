import type { Metadata } from "next";
import { InformationPage } from "@/components/InformationPage";

export const metadata: Metadata = { title: "Buying Guide Updates", alternates: { canonical: "/mailing-list" } };

export default function Page() { return <InformationPage {...{
  "title": "Buying Guide Updates",
  "introduction": "Newsletter subscriptions are not currently available.",
  "sections": [
    {
      "title": "Read the latest guides",
      "body": "Browse our published comparison guides from the link below. This website does not collect an email address or confirm a subscription on this page."
    },
    {
      "title": "Enquiries",
      "body": "If you have a question about future updates, email the publisher. An enquiry is not a mailing-list subscription."
    }
  ],
  "subject": "Buying guide updates enquiry"
}} />; }
