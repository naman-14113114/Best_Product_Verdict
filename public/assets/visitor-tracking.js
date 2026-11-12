(function () {
  if (window.__bpvVisitorTrackingLoaded) {
    return;
  }
  window.__bpvVisitorTrackingLoaded = true;

  // Use the same Clarity project and consent signal as TrustpilotReview.
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () {
      (c[a].q = c[a].q || []).push(arguments);
    };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "w4nply9u93");

  var initialConsent = "denied";
  try {
    if (window.localStorage.getItem("bpv_cookie_consent") === "granted") {
      initialConsent = "granted";
    }
  } catch (e) {}

  window.clarity("consentv2", {
    ad_Storage: initialConsent,
    analytics_Storage: initialConsent
  });

  window.bpvUpdateConsent = function (status) {
    var s = status === "granted" ? "granted" : "denied";
    try {
      if (typeof window.clarity === "function") {
        window.clarity("consentv2", {
          ad_Storage: s,
          analytics_Storage: s
        });
      }
    } catch (e) {}
  };

  window.Tawk_API = window.Tawk_API || {};
  window.Tawk_LoadStart = new Date();

  function hideTawkFrontend() {
    try {
      if (typeof window.Tawk_API.hideWidget === "function") {
        window.Tawk_API.hideWidget();
      }
    } catch (error) {}

    document.querySelectorAll("iframe").forEach(function (frame) {
      var src = frame.getAttribute("src") || "";
      var title = (frame.getAttribute("title") || "").toLowerCase();
      var id = (frame.getAttribute("id") || "").toLowerCase();
      var name = (frame.getAttribute("name") || "").toLowerCase();
      var isTawkFrame =
        src.indexOf("tawk.to") !== -1 ||
        id.indexOf("tawk") !== -1 ||
        name.indexOf("tawk") !== -1 ||
        title === "chat widget" ||
        title === "chat widget button" ||
        title === "chat message";

      if (isTawkFrame) {
        frame.style.setProperty("display", "none", "important");
        frame.style.setProperty("visibility", "hidden", "important");
        frame.style.setProperty("pointer-events", "none", "important");
      }
    });
  }

  window.Tawk_API.onLoad = function () {
    hideTawkFrontend();
    window.setTimeout(hideTawkFrontend, 300);
    window.setTimeout(hideTawkFrontend, 1000);
  };

  var observer = new MutationObserver(hideTawkFrontend);
  observer.observe(document.documentElement, { childList: true, subtree: true });

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://embed.tawk.to/699e744b8a14f51c38e4fa86/1ji9fci26";
  script.charset = "UTF-8";
  var firstScript = document.getElementsByTagName("script")[0];
  firstScript.parentNode.insertBefore(script, firstScript);
})();
