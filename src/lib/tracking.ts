"use client";
interface OutboundEvent { product_title: string; product_rank: number; product_category: string; destination_url: string; }
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (command: string, event: string, data: OutboundEvent) => void;
    uetq?: unknown[];
  }
}
// Native anchors handle navigation immediately. Analytics never changes the destination or delays a click.
export function trackOutboundClick(url: string, productTitle: string, rank: number, category: string) {
  if (typeof window === "undefined") return;
  const event: OutboundEvent = { product_title: productTitle, product_rank: rank, product_category: category, destination_url: url };
  try { window.gtag?.("event", "outbound_click", event); } catch { /* Navigation must still proceed. */ }
  try { window.dataLayer?.push({ event: "affiliate_click", ...event }); } catch { /* Navigation must still proceed. */ }
  try { window.uetq?.push("event", "outbound_click", { event_category: "affiliate", event_label: productTitle }); } catch { /* Navigation must still proceed. */ }
}
