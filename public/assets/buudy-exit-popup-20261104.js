(function () {
  "use strict";
  if (window.__buudyExitPopupV3) return;
  window.__buudyExitPopupV3 = true;

  // Recovered from the historical popup; loaded only on the UK comparison route.
  var loader = document.currentScript;
  var verdict = loader && loader.getAttribute("data-popup-site") === "bestproductverdict";
  var site = verdict ? "bestproductverdict.com" : "trustpilotreview.shop";
  var key = "buudy_exit_popup_seen_v3";
  var paths = ["/best-led-face-mask-uk-2026", "/top-10/best-led-face-mask-uk-2026"];
  var started = Date.now();
  var shown = false;
  var blocked = false;
  var dialog = null;
  var previousFocus = null;
  var previousOverflow = [];
  var routeWatcher = null;
  var peakScroll = window.scrollY;
  var upFrom = window.scrollY;
  var lastScroll = window.scrollY;

  var ATTRIBUTION_KEYS = [
    "msclkid", "gclid", "gbraid", "wbraid", "utm_source", "utm_medium",
    "utm_campaign", "utm_content", "utm_term", "utm_id"
  ];

  // Immediately cache attribution keys in sessionStorage
  try {
    var initSearch = new URLSearchParams(window.location.search);
    ATTRIBUTION_KEYS.forEach(function (k) {
      var val = initSearch.get(k);
      if (val) {
        sessionStorage.setItem("bpv_" + k, val);
        sessionStorage.setItem("tpr_" + k, val);
      }
    });
  } catch (_) {}

  function eligible() {
    return paths.indexOf(window.location.pathname.replace(/\/$/, "")) !== -1;
  }
  function seen() {
    try { return sessionStorage.getItem(key) === "1"; } catch (_) { return false; }
  }
  function remember() {
    blocked = true;
    try { sessionStorage.setItem(key, "1"); } catch (_) { /* In-memory cap still applies. */ }
  }
  function event(name, extra) {
    try {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(Object.assign({ event: name, source: site, placement: "exit_popup" }, extra));
    } catch (_) { /* Analytics must not block the controls or navigation. */ }
  }
  function destination() {
    var url = new URL("https://www.buudy.co.uk/products/buudy-led-face-mask");
    var incoming = new URLSearchParams(window.location.search);
    url.searchParams.set("utm_source", site);
    url.searchParams.set("utm_medium", "exit_popup");
    url.searchParams.set("utm_campaign", "led_mask_comparison");
    url.searchParams.set("utm_content", "exit_offer");
    ATTRIBUTION_KEYS.forEach(function (name) {
      var val = incoming.get(name);
      if (!val) {
        try {
          val = sessionStorage.getItem("bpv_" + name) || sessionStorage.getItem("tpr_" + name);
        } catch (_) {}
      }
      if (val) url.searchParams.set(name, val);
    });
    return url.href;
  }
  function restorePage() {
    previousOverflow.forEach(function (item) {
      if (item.value) item.node.style.setProperty("overflow", item.value, item.priority);
      else item.node.style.removeProperty("overflow");
    });
    previousOverflow = [];
    if (previousFocus && previousFocus.isConnected) previousFocus.focus({ preventScroll: true });
    previousFocus = null;
  }
  function close(reason) {
    if (!dialog) return;
    var current = dialog;
    dialog = null;
    window.clearInterval(routeWatcher);
    routeWatcher = null;
    if (current.open) current.close();
    current.remove();
    restorePage();
    event("buudy_exit_popup_close", { reason: reason });
  }
  function trackOutbound(href) {
    event("buudy_exit_popup_cta_click", { target_url: href });
    if (!verdict) {
      // Use the site's established INR 660 conversion helper without its redirect timer.
      try {
        if (typeof window.tprSetMicrosoftAdsConsent === "function") window.tprSetMicrosoftAdsConsent("granted");
        if (typeof window.tprTrackBuudyOutbound === "function") window.tprTrackBuudyOutbound(href);
      } catch (_) { /* Native navigation always continues. */ }
      return;
    }
    var payload = { product_title: "Buudy 7 Colour LED Mask", product_rank: 1, product_category: "LED face masks", destination_url: href };
    try { if (window.gtag) window.gtag("event", "outbound_click", payload); } catch (_) {}
    try { window.dataLayer.push(Object.assign({ event: "affiliate_click" }, payload)); } catch (_) {}
    try {
      if (window.uetq) {
        window.uetq.push("event", "outbound_click", { event_category: "affiliate", event_label: payload.product_title });
        window.uetq.push("event", "buudy_outbound_click", { event_category: "affiliate", event_label: payload.product_title, event_value: 660, revenue_value: 660, currency: "INR" });
        window.uetq.push("event", "affiliate_click", { event_category: "affiliate", event_label: payload.product_title, event_value: 660, revenue_value: 660, currency: "INR" });
      }
    } catch (_) {}
  }

  var style = document.createElement("style");
  style.textContent = [
    "#buudy-exit-offer{position:fixed;inset:0;margin:auto;width:min(520px,calc(100vw - 32px));max-width:none;max-height:calc(100dvh - 32px);padding:0;border:1px solid #dce4ed;border-radius:22px;background:#fcfdff;color:#132338;font:400 16px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;box-shadow:0 24px 80px rgb(15 23 42 / .3);overflow:auto;overscroll-behavior:contain}",
    "#buudy-exit-offer::backdrop{background:rgb(9 18 32 / .65)}",
    "#buudy-exit-offer *{box-sizing:border-box}",
    "#buudy-exit-offer .bx-body{padding:28px}",
    "#buudy-exit-offer .bx-kicker{margin:0 48px 8px 0;color:var(--bx-brand);font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}",
    "#buudy-exit-offer h2{margin:0 40px 20px 0;font:800 29px/1.15 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;letter-spacing:-.025em;color:#132338}",
    "#buudy-exit-offer .bx-product{display:grid;grid-template-columns:132px minmax(0,1fr);gap:20px;align-items:center;margin-bottom:22px}",
    "#buudy-exit-offer img{display:block;width:132px;height:132px;object-fit:contain;border-radius:14px;background:#f0f4f8}",
    "#buudy-exit-offer h3{margin:0 0 8px;font-size:19px;line-height:1.3;font-weight:800;color:#132338}",
    "#buudy-exit-offer .bx-features{margin:0;padding:0;list-style:none;color:#42546b;font-size:14px;line-height:1.65}",
    "#buudy-exit-offer .bx-features li:before{content:'✓';color:var(--bx-brand);font-weight:800;margin-right:7px}",
    "#buudy-exit-offer .bx-copy{margin:0 0 18px;font-size:15px;line-height:1.55;color:#42546b}",
    "#buudy-exit-offer .bx-cta{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;min-height:54px;padding:14px 18px;border:1px solid var(--bx-action);border-radius:999px;background:var(--bx-action);color:var(--bx-ink);text-decoration:none;font-size:17px;line-height:1.3;font-weight:800;text-align:center;box-shadow:0 7px 18px rgb(15 23 42 / .12)}",
    "#buudy-exit-offer .bx-cta:hover{background:var(--bx-hover);border-color:var(--bx-hover)}",
    "#buudy-exit-offer button{cursor:pointer;font-family:inherit}",
    "#buudy-exit-offer .bx-close{position:absolute;top:14px;right:14px;display:grid;place-items:center;width:44px;height:44px;padding:0;border:0;border-radius:50%;background:#eaf0f6;color:#243b56;font-size:28px;line-height:1}",
    "#buudy-exit-offer .bx-keep{display:block;width:100%;min-height:44px;margin-top:8px;padding:10px;border:0;border-radius:999px;background:transparent;color:#42546b;font-size:14px;text-decoration:underline;text-underline-offset:3px}",
    "#buudy-exit-offer .bx-close:hover,#buudy-exit-offer .bx-keep:hover{background:#e4ebf3}",
    "#buudy-exit-offer :focus-visible{outline:3px solid var(--bx-brand);outline-offset:3px}",
    "#buudy-exit-offer .bx-note{margin:12px 0 0;font-size:12px;line-height:1.4;text-align:center;color:#52657b}",
    "@media(max-width:520px){#buudy-exit-offer{inset:auto 0 10px;margin:0 auto;width:calc(100vw - 20px);max-height:calc(100dvh - 20px)}#buudy-exit-offer .bx-body{padding:24px 20px 18px}#buudy-exit-offer h2{font-size:26px}#buudy-exit-offer .bx-product{grid-template-columns:100px minmax(0,1fr);gap:14px}#buudy-exit-offer img{width:100px;height:112px}#buudy-exit-offer h3{font-size:18px}}"
  ].join("\n");
  document.head.appendChild(style);

  function show(reason) {
    if (!eligible() || shown || blocked || seen() || document.hidden || Date.now() - started < 7000) return;
    if (document.querySelector("dialog[open], [aria-modal='true']")) return;
    var card = document.createElement("dialog");
    if (typeof card.showModal !== "function") return;
    card.id = "buudy-exit-offer";
    card.setAttribute("data-buudy-exit-overlay", "true");
    card.setAttribute("aria-labelledby", "buudy-exit-title");
    card.setAttribute("aria-describedby", "buudy-exit-copy");
    card.style.setProperty("--bx-brand", verdict ? "#1d4a93" : "#047857");
    card.style.setProperty("--bx-action", verdict ? "#f9ad26" : "#047857");
    card.style.setProperty("--bx-hover", verdict ? "#e99b16" : "#065f46");
    card.style.setProperty("--bx-ink", verdict ? "#0e1a2f" : "#fcfffe");
    card.innerHTML = "<div class='bx-body'><button class='bx-close' type='button' aria-label='Close offer' data-buudy-exit-close>&times;</button><p class='bx-kicker'>Before you go · Our #1 pick</p><h2 id='buudy-exit-title'>Still comparing LED masks?</h2><div class='bx-product'><a class='bx-image' data-buudy-exit-cta aria-label='View Buudy mask on the official UK site'><img alt='Buudy 7 Colour LED Mask' width='132' height='132'></a><div><h3>Buudy 7 Colour LED Mask</h3><ul class='bx-features'><li>7 LED colours + near-infrared</li><li>Face &amp; neck coverage</li><li>Cordless &amp; rechargeable</li></ul></div></div><p class='bx-copy' id='buudy-exit-copy'>Take one last look at the current price, included gifts and returns on Buudy’s official UK site.</p><a class='bx-cta' data-buudy-exit-cta autofocus>See Buudy’s current offer <span aria-hidden='true'>→</span></a><button class='bx-keep' type='button' data-buudy-exit-close>Keep comparing</button><p class='bx-note'>Opens the official Buudy UK product page.</p></div>";
    card.querySelector("img").src = verdict ? "/assets/led-mask-reference-20261027/57-w.webp" : "/img/57-w.webp";
    card.querySelectorAll("[data-buudy-exit-cta]").forEach(function (anchor) { anchor.href = destination(); });
    card.querySelectorAll("[data-buudy-exit-close]").forEach(function (button) {
      button.addEventListener("click", function () { close("dismiss"); });
    });
    card.addEventListener("cancel", function (e) { e.preventDefault(); close("escape"); });
    card.addEventListener("close", function () { close("native_close"); });
    var outsideDown = false;
    function outside(e) {
      var rect = card.getBoundingClientRect();
      return e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom;
    }
    card.addEventListener("pointerdown", function (e) { outsideDown = e.target === card && outside(e); });
    card.addEventListener("click", function (e) { if (outsideDown && e.target === card && outside(e)) close("backdrop"); });
    previousFocus = document.activeElement;
    document.body.appendChild(card);
    dialog = card;
    card.showModal();
    // Next client navigation does not always emit popstate. Watch only while open.
    var openedPath = window.location.pathname;
    routeWatcher = window.setInterval(function () {
      if (window.location.pathname !== openedPath) close("route_change");
    }, 200);
    previousOverflow = [document.documentElement, document.body].map(function (node) {
      var saved = { node: node, value: node.style.getPropertyValue("overflow"), priority: node.style.getPropertyPriority("overflow") };
      node.style.setProperty("overflow", "hidden");
      return saved;
    });
    shown = true;
    remember();
    event("buudy_exit_popup_view", { reason: reason, target_url: destination() });
  }

  document.addEventListener("mouseout", function (e) {
    if (!window.matchMedia("(pointer: coarse)").matches && window.innerWidth > 768 && e.clientY <= 8 && !e.relatedTarget) show("desktop_top_exit");
  });
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    peakScroll = Math.max(peakScroll, y);
    if (y > lastScroll) upFrom = y;
    if ((window.innerWidth <= 768 || window.matchMedia("(pointer: coarse)").matches) && Date.now() - started >= 14000 && peakScroll > Math.max(500, window.innerHeight / 2) && upFrom - y >= 120) show("mobile_scroll_up_exit");
    lastScroll = y;
  }, { passive: true });
  window.addEventListener("popstate", function () { if (!eligible()) close("route_change"); });
  function onActivation(e) {
    if (!(e.target instanceof Element) || (e.type === "auxclick" ? e.button !== 1 : e.button !== 0)) return;
    var anchor = e.target.closest("a[href]");
    if (!anchor) return;
    var url;
    try { url = new URL(anchor.href); } catch (_) { return; }
    if (!/^(www\.)?buudy\.co\.uk$/.test(url.hostname)) return;
    remember();
    if (!anchor.hasAttribute("data-buudy-exit-cta")) return;
    anchor.href = destination();
    trackOutbound(anchor.href);
    // Avoid the legacy document-level redirect delay for this native popup anchor.
    if (!verdict) e.stopPropagation();
    window.setTimeout(function () { close("outbound"); }, 0);
  }
  window.addEventListener("click", onActivation, true);
  window.addEventListener("auxclick", onActivation, true);
})();
