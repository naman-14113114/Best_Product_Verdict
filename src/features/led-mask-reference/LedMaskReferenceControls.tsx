"use client";

import { useEffect } from "react";
import { trackOutboundClick } from "@/lib/tracking";

const ATTRIBUTION_KEYS = [
  "msclkid", "gclid", "gbraid", "wbraid", "utm_source", "utm_medium",
  "utm_campaign", "utm_content", "utm_term", "utm_id",
];

/** Adds interactions to the server-rendered reference without shipping its HTML in the JS bundle. */
export function LedMaskReferenceControls() {
  useEffect(() => {
    const root = document.getElementById("led-mask-reference");
    if (!root) return;

    const date = root.querySelector<HTMLElement>("[data-led-updated-date]");
    if (date) {
      date.textContent = new Intl.DateTimeFormat("en-GB", {
        day: "numeric", month: "long", year: "numeric", timeZone: "Europe/London",
      }).format(new Date());
    }

    // Attribution is added to ordinary anchors; their native navigation stays immediate.
    const incoming = new URLSearchParams(window.location.search);
    root.querySelectorAll<HTMLAnchorElement>("a[href]").forEach((anchor) => {
      const destination = new URL(anchor.href);
      if (!/^(www\.)?buudy\.co\.uk$/.test(destination.hostname)) return;
      for (const key of ATTRIBUTION_KEYS) {
        const value = incoming.get(key);
        if (value) destination.searchParams.set(key, value);
      }
      anchor.href = destination.toString();
    });

    const video = root.querySelector<HTMLVideoElement>("[data-led-verdict-video]");
    const playButton = root.querySelector<HTMLButtonElement>("[data-led-video-play]");
    const syncVideoButton = () => {
      if (!video || !playButton) return;
      const playing = !video.paused && !video.ended;
      playButton.style.opacity = playing ? "0" : "1";
      playButton.style.pointerEvents = playing ? "none" : "auto";
      playButton.tabIndex = playing ? -1 : 0;
    };
    ["play", "pause", "ended", "error"].forEach((name) => {
      video?.addEventListener(name, syncVideoButton);
    });

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const bar = entry.target as HTMLElement;
        bar.style.width = `${bar.dataset.ledMetric}%`;
        observer.unobserve(bar);
      }
    }, { threshold: 0.15 });
    root.querySelectorAll("[data-led-metric]").forEach((bar) => observer.observe(bar));

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      if (target.closest("[data-led-video-play]")) {
        video?.play().catch(syncVideoButton);
        return;
      }

      const toggle = target.closest<HTMLButtonElement>("[data-led-toggle]");
      if (toggle) {
        const expanded = toggle.getAttribute("aria-expanded") !== "true";
        toggle.setAttribute("aria-expanded", String(expanded));
        if (toggle.dataset.ledToggle === "rankings") {
          const extra = root.querySelector<HTMLElement>("[data-led-extra-rankings]");
          if (extra) extra.hidden = !expanded;
          toggle.textContent = expanded ? "Show Less" : "Load More (Show Ranks 6–10)";
        } else {
          root.querySelectorAll<HTMLElement>("[data-led-extra-column]").forEach((cell) => {
            cell.hidden = !expanded;
          });
          root.querySelector("table")?.classList.toggle("led-mask-all-models", expanded);
          const heading = root.querySelector("[data-led-table-heading]");
          if (heading) heading.textContent = `Top ${expanded ? 10 : 5} LED Face Masks Side-by-Side Comparison`;
          const hint = root.querySelector("[data-led-table-hint]");
          if (hint) hint.textContent = `← Swipe horizontally to compare all ${expanded ? 10 : 5} masks →`;
          toggle.textContent = expanded ? "Show Top 5 Only" : "Load More (Show All 10 Models)";
        }
        if (!expanded && toggle.getBoundingClientRect().top < 0) {
          toggle.scrollIntoView({ block: "center" });
        }
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (anchor && new URL(anchor.href).origin !== window.location.origin) {
        const card = anchor.closest<HTMLElement>("[data-led-product]");
        const title = card?.querySelector("h2")?.textContent?.replace(/^#\d+\s*/, "")
          || "Buudy 7 Colour LED Mask";
        trackOutboundClick(anchor.href, title, Number(card?.dataset.ledProduct || 1), "LED face masks");
      }
    };
    root.addEventListener("click", handleClick);

    return () => {
      observer.disconnect();
      root.removeEventListener("click", handleClick);
      ["play", "pause", "ended", "error"].forEach((name) => {
        video?.removeEventListener(name, syncVideoButton);
      });
    };
  }, []);

  return null;
}
