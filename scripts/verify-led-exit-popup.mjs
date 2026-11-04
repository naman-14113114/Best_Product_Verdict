import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const base = process.argv[2] || "http://localhost:4173";
const verdict = process.argv[3] !== "trustpilot";
const output = path.resolve(process.argv[4] || "../.codex-tmp-led-clone-20261027/exit-popup-qa");
const inject = process.argv.includes("--inject");
const missing = process.argv.includes("--expect-missing");
const script = await fs.readFile(new URL("../public/assets/buudy-exit-popup-20261104.js", import.meta.url), "utf8");
const route = "/best-led-face-mask-uk-2026";
const query = "?msclkid=qa_exit_popup&utm_source=qa&utm_campaign=qa_popup_campaign";
const key = "buudy_exit_popup_seen_v3";
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch();
const results = [];

async function setup(mobile = false) {
  const context = await browser.newContext({ viewport: { width: mobile ? 390 : 1440, height: mobile ? 844 : 1000 }, isMobile: mobile, hasTouch: mobile });
  // The mocked clock exercises our triggers without creating Clarity recordings.
  await context.route("https://scripts.clarity.ms/**", r => r.fulfill({ status: 200, contentType: "application/javascript", body: "" }));
  await context.route("https://bat.bing.com/**", r => new URL(r.request().url()).searchParams.get("evt") === "custom" ? r.fulfill({ status: 204 }) : r.continue());
  await context.route("https://www.buudy.co.uk/products/buudy-led-face-mask**", r => r.fulfill({ status: 200, contentType: "text/html", body: "<title>Native Buudy navigation reached</title>" }));
  const page = await context.newPage();
  await page.clock.install();
  await page.goto(base + route + query, { waitUntil: "domcontentloaded" });
  if (inject) await page.evaluate(({ script, verdict }) => {
    const element = document.createElement("script");
    if (verdict) element.dataset.popupSite = "bestproductverdict";
    element.textContent = script;
    document.body.appendChild(element);
  }, { script, verdict });
  if (!missing) await page.waitForFunction(() => window.__buudyExitPopupV3 === true);
  return { context, page };
}
async function exit(page) {
  await page.evaluate(() => document.dispatchEvent(new MouseEvent("mouseout", { bubbles: true, clientY: 0, relatedTarget: null })));
}
async function show(page) {
  await page.clock.fastForward(8000);
  await exit(page);
  await page.locator("#buudy-exit-offer[open]").waitFor();
}
async function assertClosed(page) {
  assert.equal(await page.locator("#buudy-exit-offer").count(), 0);
  assert.equal(await page.evaluate(() => document.documentElement.style.overflow), "");
  assert.equal(await page.evaluate(() => document.body.style.overflow), "");
}

try {
  if (missing) {
    const { context, page } = await setup();
    await page.clock.fastForward(10000);
    await exit(page);
    assert.equal(await page.locator("#buudy-exit-offer").count(), 0);
    console.log(JSON.stringify({ base, recoveredLoaderMissing: true }));
    await context.close();
  } else {
    for (const method of ["escape", "close", "keep", "backdrop"]) {
      const { context, page } = await setup();
      const errors = [];
      page.on("pageerror", error => errors.push(error.message));
      if (method === "escape") {
        await exit(page);
        assert.equal(await page.locator("#buudy-exit-offer").count(), 0, "Must not interrupt arrival");
      }
      await show(page);
      const modal = page.locator("#buudy-exit-offer");
      await modal.locator("img").evaluate(image => image.decode());
      assert.equal(await modal.evaluate(el => el.matches(":modal")), true);
      const link = modal.locator(".bx-cta");
      const url = new URL(await link.getAttribute("href"));
      assert.equal(url.hostname, "www.buudy.co.uk");
      assert.equal(url.pathname, "/products/buudy-led-face-mask");
      assert.equal(url.searchParams.get("msclkid"), "qa_exit_popup");
      assert.equal(url.searchParams.get("utm_campaign"), "qa_popup_campaign");
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
      await page.keyboard.press("Tab");
      assert(await page.evaluate(() => document.activeElement.closest("#buudy-exit-offer") !== null));
      if (method === "escape") {
        await page.screenshot({ path: path.join(output, "popup-desktop.png") });
        await page.keyboard.press("Escape");
      } else if (method === "close") await modal.getByRole("button", { name: "Close offer" }).click();
      else if (method === "keep") await modal.getByRole("button", { name: "Keep comparing" }).click();
      else await page.mouse.click(5, 5);
      await assertClosed(page);
      assert.equal(await page.evaluate(key => sessionStorage.getItem(key), key), "1");
      await exit(page);
      assert.equal(await page.locator("#buudy-exit-offer").count(), 0);
      if (method === "escape") {
        await page.reload({ waitUntil: "domcontentloaded" });
        await page.clock.fastForward(10000);
        await exit(page);
        assert.equal(await page.locator("#buudy-exit-offer").count(), 0, "Once per session across reloads");
      }
      assert.deepEqual(errors, []);
      results.push({ desktopClose: method, scrollRestored: true });
      await context.close();
    }
    {
      const { context, page } = await setup(true);
      await page.clock.fastForward(15000);
      assert.equal(await page.locator("#buudy-exit-offer").count(), 0, "No timer-only mobile interruption");
      await page.evaluate(() => { document.documentElement.style.scrollBehavior = "auto"; scrollTo(0, 1500); window.dispatchEvent(new Event("scroll")); });
      await page.clock.runFor(100);
      await page.evaluate(() => { scrollTo(0, 1300); window.dispatchEvent(new Event("scroll")); });
      await page.clock.runFor(100);
      await page.locator("#buudy-exit-offer[open]").waitFor();
      await page.locator("#buudy-exit-offer img").evaluate(image => image.decode());
      const bounds = await page.locator("#buudy-exit-offer").boundingBox();
      assert(bounds.x >= 0 && bounds.y >= 0 && bounds.x + bounds.width <= 390 && bounds.y + bounds.height <= 844);
      await page.screenshot({ path: path.join(output, "popup-mobile.png") });
      await page.getByRole("button", { name: "Close offer" }).tap();
      await assertClosed(page);
      results.push({ mobileScrollUp: true, fitsViewport: true, tapClose: true });
      await context.close();
    }
    {
      const { context, page } = await setup();
      await show(page);
      const events = [];
      await page.exposeFunction("recordPopupEvent", item => events.push(item));
      await page.evaluate(() => {
        const original = window.dataLayer.push;
        window.dataLayer.push = function (...items) { items.forEach(item => window.recordPopupEvent(item)); return original.apply(this, items); };
      });
      await page.locator("#buudy-exit-offer .bx-cta").click();
      await page.waitForURL("https://www.buudy.co.uk/products/buudy-led-face-mask**");
      assert.equal(new URL(page.url()).searchParams.get("msclkid"), "qa_exit_popup");
      assert.equal(events.filter(e => e.event === "buudy_exit_popup_cta_click").length, 1);
      assert.equal(events.filter(e => e.event === "affiliate_click").length, 1);
      if (!verdict) {
        const conversion = events.find(e => e.event === "buudy_outbound_click");
        assert.equal(conversion.event_value, 660);
        assert.equal(conversion.currency, "INR");
      }
      results.push({ nativeOutbound: true, attribution: true, conversionEvents: true });
      await context.close();
    }
    {
      const { context, page } = await setup();
      await show(page);
      const opened = context.waitForEvent("page");
      await page.locator("#buudy-exit-offer .bx-image").click({ button: "middle" });
      const destination = await opened;
      await destination.waitForURL("https://www.buudy.co.uk/products/buudy-led-face-mask**");
      assert.equal(new URL(destination.url()).searchParams.get("msclkid"), "qa_exit_popup");
      results.push({ productImageMiddleClick: "native new tab with attribution" });
      await context.close();
    }
    {
      const { context, page } = await setup();
      await show(page);
      await page.evaluate(() => { window.dataLayer.push = () => { throw new Error("Simulated analytics failure"); }; });
      await page.locator("#buudy-exit-offer .bx-cta").click();
      await page.waitForURL("https://www.buudy.co.uk/products/buudy-led-face-mask**");
      results.push({ analyticsFailure: "native navigation still works" });
      await context.close();
    }
    {
      const { context, page } = await setup();
      await show(page);
      await page.evaluate(() => history.pushState({}, "", "/about"));
      await page.clock.runFor(300);
      await assertClosed(page);
      results.push({ clientRouteChange: "closes popup and restores scrolling" });
      await context.close();
    }
    {
      const { context, page } = await setup();
      await page.goto(base + "/about", { waitUntil: "domcontentloaded" });
      await page.clock.fastForward(10000);
      await exit(page);
      assert.equal(await page.locator("#buudy-exit-offer").count(), 0);
      results.push({ unrelatedRoute: "unaffected" });
      await context.close();
    }
    const result = { base, site: verdict ? "bestproductverdict" : "trustpilot", injected: inject, results };
    await fs.writeFile(path.join(output, "results.json"), JSON.stringify(result, null, 2));
    console.log(JSON.stringify(result, null, 2));
  }
} finally { await browser.close(); }
