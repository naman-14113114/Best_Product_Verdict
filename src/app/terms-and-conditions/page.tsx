import type { Metadata } from "next";
import { InformationPage } from "@/components/InformationPage";

export const metadata: Metadata = { title: "Terms and Conditions", alternates: { canonical: "/terms-and-conditions" } };

export default function Page() { return <InformationPage {...{
  "title": "Terms and Conditions",
  "introduction": "These terms describe the use of Best Product Verdict at https://www.bestproductverdict.com, operated by Naman Kharbanda.",
  "sections": [
    {
      "title": "Comparison information",
      "body": "These are desk-research comparisons, with AI-assisted drafting. We do not claim hands-on product testing, clinical trials or an independent laboratory audit. Numbers indicate reading order rather than test results or customer ratings. Manufacturer information may differ by model, generation and region. Check the exact seller listing before buying."
    },
    {
      "title": "Retailer purchases",
      "body": "Best Product Verdict does not sell the products, take payment or administer delivery, returns or warranties. Your purchase agreement is with the retailer you choose. Check their terms and the exact product listing before ordering."
    },
    {
      "title": "Commercial disclosure",
      "body": "Some outbound links may earn us a commission. Commercial relationships may influence inclusion and ordering. Retailers set the price, availability, delivery and return terms."
    },
    {
      "title": "Product information",
      "body": "Products, bundles and specifications can change or differ by region. Our guides do not guarantee accuracy, suitability, availability or a fixed price. Manufacturer and retailer documents should be checked for the exact model."
    },
    {
      "title": "Health and product use",
      "body": "The guides do not provide individual dental, medical or treatment advice. Follow manufacturer instructions and seek appropriate professional advice for personal health concerns."
    },
    {
      "title": "External links",
      "body": "Linked services are operated by third parties. Their policies and terms apply when you use them."
    },
    {
      "title": "Corrections and statutory rights",
      "body": "Contact us if information appears inaccurate or a link is broken. These terms do not exclude any rights or liabilities that cannot lawfully be excluded."
    }
  ]
}} />; }
