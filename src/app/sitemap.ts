import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/top-10",
    "/best-led-face-mask-uk-2026",
    "/best-electric-toothbrush-uk-2026",
    "/top-10/best-led-face-mask-uk-2026",
    "/top-10/best-electric-toothbrush-uk-2026",
    "/top-10/best-cordless-water-flossers",
    "/top-10/best-mini-massage-guns",
    "/top-10/best-wireless-meat-thermometers",
    "/about",
    "/mission",
    "/contact",
    "/careers",
    "/mailing-list",
    "/partnerships",
    "/privacy-policy",
    "/terms-and-conditions",
    "/advertiser-disclosure"
  ];
  return routes.map(route => ({ url: SITE_URL + route, lastModified: new Date("2026-09-30T00:00:00Z") }));
}
