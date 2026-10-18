import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/top-10",
    "/best-led-face-mask-uk-2026",
    "/best-electric-toothbrush-uk-2026",
    "/miroooo-vs-oral-b-io6",
    "/miroooo-vs-philips-sonicare",
    "/miroooo-vs-suri",
    "/miroooo-vs-oral-b-io3",
    "/why-switch-from-legacy-electric-toothbrushes-uk",
    "/best-lightweight-electric-toothbrush-uk-2026",
    "/best-battery-life-electric-toothbrush-uk-2026",
    "/best-quiet-electric-toothbrush-uk-2026",
    "/most-durable-electric-toothbrush-uk-2026",
    "/best-electric-toothbrush-for-sensitive-teeth-uk-2026",
    "/best-electric-toothbrush-for-braces-uk-2026",
    "/best-travel-electric-toothbrush-uk-2026",
    "/miroooo-brush-x-uk-review-2026",
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
