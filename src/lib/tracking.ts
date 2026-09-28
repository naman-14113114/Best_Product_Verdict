"use client";

// Client-side analytics & tracking utilities
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
    uetq?: any[];
    clarity?: (...args: any[]) => void;
    oaiq?: (...args: any[]) => void;
  }
}

export function trackOutboundClick(url: string, productTitle: string, rank: number, category: string) {
  try {
    if (typeof window === "undefined") return;

    // Preserve and forward UTM parameters and click IDs (msclkid, gclid, utm_*)
    const currentParams = new URLSearchParams(window.location.search);
    let targetUrl: URL;

    try {
      targetUrl = new URL(url);
    } catch {
      targetUrl = new URL(url, window.location.origin);
    }

    currentParams.forEach((value, key) => {
      if (!targetUrl.searchParams.has(key)) {
        targetUrl.searchParams.set(key, value);
      }
    });

    // 1. Google Analytics / GTM event
    if (window.gtag) {
      window.gtag("event", "outbound_click", {
        product_title: productTitle,
        product_rank: rank,
        product_category: category,
        destination_url: targetUrl.href,
        currency: "GBP",
        value: 6.60,
      });
    }

    if (window.dataLayer) {
      window.dataLayer.push({
        event: "affiliate_click",
        product_title: productTitle,
        product_rank: rank,
        product_category: category,
        destination_url: targetUrl.href,
      });
    }

    // 2. Microsoft Ads / Bing UET event
    if (window.uetq) {
      window.uetq.push("event", "outbound_click", {
        event_category: "affiliate",
        event_label: productTitle,
        event_value: 6.60,
      });
    }

    // 3. Custom pixel / OpenAI measurement
    if (window.oaiq) {
      window.oaiq("measure", "custom", { type: "custom" }, { custom_event_name: "outbound_click" });
    }

    // Navigate smoothly after event dispatch
    setTimeout(() => {
      window.open(targetUrl.href, "_blank", "noopener,noreferrer");
    }, 120);
  } catch (err) {
    console.error("Outbound track error:", err);
    window.open(url, "_blank", "noopener,noreferrer");
  }
}
