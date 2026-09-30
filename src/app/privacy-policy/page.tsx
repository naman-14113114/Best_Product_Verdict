import type { Metadata } from "next";
import { InformationPage } from "@/components/InformationPage";

export const metadata: Metadata = { title: "Privacy Policy", alternates: { canonical: "/privacy-policy" } };

export default function Page() { return <InformationPage {...{
  "title": "Privacy Policy",
  "introduction": "This policy applies to https://www.bestproductverdict.com, operated by Naman Kharbanda. Contact support@bestproductverdict.com about privacy.",
  "sections": [
    {
      "title": "Information you provide",
      "body": "This website does not currently provide contact, careers, partnership or newsletter submission forms. If you email us, your email provider sends us your message and email address. We use that information to handle your enquiry."
    },
    {
      "title": "Website hosting",
      "body": "Our hosting provider, Vercel, may process technical request information such as IP addresses, browser details, requested pages and timestamps to deliver and secure the site. We do not claim that visiting the website is anonymous."
    },
    {
      "title": "Preferences and search",
      "body": "The site uses browser storage to remember dismissal of the advertiser-disclosure notice. Search terms may appear in the page URL and hosting logs. Please do not include private information in a website search."
    },
    {
      "title": "Analytics",
      "body": "The website source includes outbound-click event support for analytics integrations if configured. It does not currently initialise advertising or analytics tags. Any future tracking setup should be reflected in this policy and appropriate privacy choices before activation."
    },
    {
      "title": "External websites",
      "body": "Retailer and manufacturer links lead to third-party websites with their own privacy and cookie policies. We do not forward your page query parameters to retailer links. Sending an email opens your own email service."
    },
    {
      "title": "Enquiries and your rights",
      "body": "Email us to request access, correction or deletion of personal information you have provided, or to raise a privacy concern. We retain enquiry information for handling the matter and any applicable obligations; we do not promise a fixed retention period that has not been implemented."
    },
    {
      "title": "Updates",
      "body": "We will update this policy when the website's data practices change."
    }
  ]
}} />; }
