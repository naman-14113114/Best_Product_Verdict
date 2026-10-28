"use client";

import { useEffect } from "react";
import { trackOutboundClick } from "@/lib/tracking";

const ATTRIBUTION_KEYS = [
  "msclkid", "gclid", "gbraid", "wbraid", "utm_source", "utm_medium",
  "utm_campaign", "utm_content", "utm_term", "utm_id",
];

/** Keeps existing advertising behavior independent of the landing-page design. */
export function LedMaskTracking() {
  useEffect(() => {
    const root = document.querySelector("main.flex-grow");
    if (!root) return;
    const incoming = new URLSearchParams(window.location.search);

    const preserveAttribution = () => {
      root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
        const destination = new URL(anchor.href);
        if (!/^(www\.)?buudy\.co\.uk$/.test(destination.hostname)) return;
        for (const key of ATTRIBUTION_KEYS) {
          const value = incoming.get(key);
          if (value) destination.searchParams.set(key, value);
        }
        anchor.href = destination.toString();
      });
    };
    preserveAttribution();
    // Ranks 6–10 are mounted only when their reveal button is clicked.
    const observer = new MutationObserver(preserveAttribution);
    observer.observe(root, { childList: true, subtree: true });

    const handleOutbound = (event: Event) => {
      if (event instanceof MouseEvent && event.type === "auxclick" && event.button !== 1) return;
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      const destination = new URL(anchor.href);
      if (!/^https?:$/.test(destination.protocol) || destination.origin === window.location.origin) return;
      const card = anchor.closest<HTMLElement>('[id^="product-"]');
      const row = card ? null : anchor.closest("tr");
      const rowRank = row?.querySelector("td")?.textContent?.match(/#(\d+)/)?.[1];
      const rank = Number(card?.id.replace("product-", "") || rowRank || 1);
      const title = card?.querySelector("h2")?.textContent?.trim()
        || row?.querySelector<HTMLImageElement>("img")?.alt
        || "Buudy 7 Colour LED Mask";
      trackOutboundClick(anchor.href, title, rank, "LED face masks");
    };
    root.addEventListener("click", handleOutbound);
    root.addEventListener("auxclick", handleOutbound);
    return () => {
      observer.disconnect();
      root.removeEventListener("click", handleOutbound);
      root.removeEventListener("auxclick", handleOutbound);
    };
  }, []);

  return null;
}
