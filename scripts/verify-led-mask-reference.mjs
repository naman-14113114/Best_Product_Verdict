import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";

const base = process.argv[2] || "http://localhost:4173";
const output = path.resolve(process.argv[3] || "../.codex-tmp-led-clone-20261027/qa");
const route = "/best-led-face-mask-uk-2026";
const reference = "https://www.trustpilotreview.shop";
await fs.mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true });
const results = [];

async function geometry(page) {
  return page.evaluate(() => {
    const rect = (element) => {
      const { x, y, width, height } = element.getBoundingClientRect();
      return { x, y, width, height };
    };
    return {
      heading: rect(document.querySelector("h1")),
      hero: rect(document.querySelector("header img")),
      bio: rect(document.querySelector("header img").parentElement.children[1]),
      firstCard: rect(document.querySelector("main > div.space-y-16 > div")),
      cardText: [...document.querySelectorAll("main > div.space-y-16 > div")].slice(0, 5).map((card) => card.innerText),
    };
  });
}

try {
  for (const width of [1440, 390, 360]) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(reference + route, { waitUntil: "domcontentloaded" });
    await page.locator("header img").first().evaluate((img) => img.decode());
    const expected = await geometry(page);
    await page.screenshot({ path: path.join(output, `reference-${width}.png`) });

    await page.goto(base + route + "?msclkid=qa-led-reference&utm_source=qa&utm_campaign=clone-verification", { waitUntil: "domcontentloaded" });
    await page.locator("[data-led-updated-date]").filter({ hasText: /2026/ }).waitFor();
    await page.waitForFunction(() => document.querySelector('a[href*="buudy.co.uk"]')?.href.includes("qa-led-reference"));
    await page.locator("header img").first().evaluate((img) => img.decode());
    const actual = await geometry(page);
    for (const section of ["heading", "hero", "bio", "firstCard"]) {
      for (const dimension of ["x", "y", "width", "height"]) {
        // Doctor text can wrap one line differently because the retained name is shorter.
        const allowance = section === "bio" || (section === "firstCard" && dimension === "y") ? 28 : 2;
        assert(Math.abs(actual[section][dimension] - expected[section][dimension]) <= allowance,
          `${width}px ${section}.${dimension}: ${actual[section][dimension]} vs ${expected[section][dimension]}`);
      }
    }
    assert.deepEqual(actual.cardText, expected.cardText, `${width}px first-five card copy differs`);
    assert.equal(await page.locator("[data-led-product]:visible").count(), 5);
    assert.equal(await page.locator("[data-led-extra-rankings]").isVisible(), false);
    assert.equal(await page.locator("[data-led-extra-column]:visible").count(), 0);
    assert.equal(await page.locator("[data-led-verdict-video] source").getAttribute("src"), "/assets/buudy-dr-shannon-verdict.mp4");
    assert.equal(await page.locator("[data-led-verdict-video]").getAttribute("poster"), "/assets/buudy-dr-shannon-poster.jpg?v=3");
    assert.equal(await page.locator('img[alt="Dr. Shannon"]').getAttribute("src"), "/img/dr-shannon.png");
    assert.equal(await page.getByText("Dr. Megan Vincze", { exact: true }).count(), 0);
    await page.screenshot({ path: path.join(output, `updated-${width}.png`) });

    const rankings = page.locator('[data-led-toggle="rankings"]');
    await rankings.click();
    assert.equal(await rankings.getAttribute("aria-expanded"), "true");
    assert.equal(await page.locator("[data-led-product]:visible").count(), 10);
    for (let rank = 6; rank <= 10; rank++) {
      const card = page.locator(`[data-led-product="${rank}"]`);
      await card.locator("img").scrollIntoViewIfNeeded();
      await card.locator("img").evaluate((img) => img.decode());
      assert(await card.locator("h2").first().innerText().then((text) => text.startsWith(`#${rank} `)));
    }
    await rankings.click();
    assert.equal(await page.locator("[data-led-product]:visible").count(), 5);

    const tableToggle = page.locator('[data-led-toggle="table"]');
    await tableToggle.click();
    assert.equal(await page.locator("table thead th:visible").count(), 11);
    assert.equal(await page.locator("[data-led-table-heading]").innerText(), "Top 10 LED Face Masks Side-by-Side Comparison");
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await tableToggle.click();
    assert.equal(await page.locator("table thead th:visible").count(), 6);

    await page.locator("[data-led-video-play]").click();
    await page.waitForFunction(() => !document.querySelector("video[data-led-verdict-video]").paused);
    assert.equal(await page.locator("[data-led-video-play]").evaluate((button) => getComputedStyle(button).pointerEvents), "none");
    await page.locator("[data-led-verdict-video]").evaluate((video) => video.pause());
    assert.equal(await page.locator("[data-led-video-play]").evaluate((button) => getComputedStyle(button).pointerEvents), "auto");
    await page.locator("[data-led-verdict-video]").scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(output, `verdict-${width}.png`) });

    const visibleImages = await page.locator("img:visible").evaluateAll((images) => images.map((img) => img.src));
    for (const src of new Set(visibleImages)) {
      const response = await context.request.get(src);
      assert.equal(response.status(), 200, src);
    }
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    assert.deepEqual(errors, [], `${width}px browser exceptions`);
    results.push({ width, geometry: "pass", firstFiveCopy: "identical", rankToggle: "pass", tableToggle: "pass", doctorVideo: "pass", imageCount: new Set(visibleImages).size, pageErrors: errors.length });
    await context.close();
  }

  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  let outboundEvent;
  await page.exposeFunction("recordOutbound", (event) => { outboundEvent = event; });
  await page.addInitScript(() => {
    window.dataLayer = [];
    window.gtag = (command, name, payload) => window.recordOutbound({ command, name, payload });
  });
  await page.goto(base + route + "?msclkid=qa-led-reference&utm_source=qa", { waitUntil: "domcontentloaded" });
  await page.waitForFunction(() => document.querySelector('a[href*="buudy.co.uk"]')?.href.includes("qa-led-reference"));
  await page.route("https://www.buudy.co.uk/**", (request) => request.fulfill({ status: 200, contentType: "text/html", body: "<title>Outbound destination reached</title>" }));
  await page.locator('[data-led-product="1"] a').first().click();
  await page.waitForURL("https://www.buudy.co.uk/**");
  assert.equal(new URL(page.url()).searchParams.get("msclkid"), "qa-led-reference");
  assert.equal(new URL(page.url()).searchParams.get("utm_source"), "qa");
  assert.equal(outboundEvent?.name, "outbound_click");
  assert.equal(outboundEvent?.payload.product_rank, 1);
  results.push({ nativeOutboundNavigation: "pass", attribution: "pass", outboundEvent: "pass" });
  await fs.writeFile(path.join(output, "results.json"), JSON.stringify({ base, reference, results }, null, 2) + "\n");
  console.log(JSON.stringify({ base, results }, null, 2));
} finally {
  await browser.close();
}
