# Best Product Verdict

Production: https://www.bestproductverdict.com

UK-focused product comparison guides built with Next.js, React, TypeScript and Tailwind. The publisher is operated by Naman Kharbanda; contact support@bestproductverdict.com.

## Content and commercial disclosure

The guides use desk research and AI-assisted drafting. They do not claim firsthand laboratory testing, clinical trials, professional endorsements or documented customer-review aggregates. Numbered positions identify guide order; they are not test scores. Commercial relationships may influence inclusion and order, as disclosed on each guide and the advertiser-disclosure page.

There are three guides: water flossers, wireless meat thermometers, and massage guns. Some options are different formats or bundles, which are labelled explicitly. Manufacturer sources are provided where specific information is used. Confirm the exact model and current retailer terms before purchasing.

Retailer buttons currently open model searches on Amazon.co.uk. US campaign parameters were removed rather than transferred to an unverified UK affiliate account. Current prices, discounts, stock and return periods are not asserted by this website. Only introduce direct UK affiliate links after verifying the seller, product and UK affiliate tracking information.

Contact and enquiry pages use the owner-supplied email address. No website form claims to send a message or subscribe a visitor. Newsletter subscriptions are unavailable. Email delivery is handled by the configured mailbox provider and has not been tested by sending a message.

## Development and verification

Install with `pnpm install --frozen-lockfile`, then use `pnpm dev`.

Before publishing:

```sh
pnpm typecheck
pnpm lint
pnpm verify:content
pnpm build
```

To check rendered pages, crawler files, missing-route responses and basic bot accessibility against a running server:

```sh
node scripts/verify-advertising-content.mjs http://localhost:4173
```

The same check accepts the production origin. It examines all published pages, the three guides, six missing routes, robots.txt, sitemap.xml and Google AdsBot/Bingbot responses. Browser checks should cover responsive layout, images, native retailer links, search and modal closure/scroll restoration.

Structured data describes the publisher, articles, breadcrumbs and ordered comparison lists. It does not publish unverified offers, stock or rating markup. Unknown pages return 404 instead of unrelated product redirects.

GitHub main is connected to the existing Vercel production project. Verify the deployment status and rendered custom-domain content after each push. Website improvements do not guarantee Google or Microsoft advertising approval; advertiser verification, account history and campaign content require their own review.

## LED mask landing page

`/best-led-face-mask-uk-2026` uses the owner's TrustpilotReview reference layout captured on 27 October 2026. It retains Best Product Verdict's Dr. Shannon portrait, original video and poster, and the existing products at ranks 6–10 behind separate ranking and table reveal controls. Other LED-mask guides continue to use the shared landing-page component.

The reviewed HTML, scoped styles, media hashes and reference URL are in `src/features/led-mask-reference/`. The HTML is rendered on the server; a small client component handles video playback, reveal controls, metric animation and native outbound-click tracking. Copied reference images and the decorative font have a dedicated asset directory so existing images remain unchanged. Campaign attribution is carried to Buudy links without delaying navigation. The existing site-wide Clarity and hidden Tawk loader remains in the root layout.

To verify a running build or the production page against the reference:

```sh
node scripts/verify-led-mask-reference.mjs http://localhost:4173 ../led-mask-qa
```

Install the Playwright Chromium browser with `pnpm exec playwright install chromium` if needed. The check compares the first five product cards and layout at desktop and two mobile sizes, tests both expansion controls, plays and pauses the preserved video, checks images, and verifies native outbound navigation and attribution. It saves screenshots and a JSON result to the output directory. Future reference updates should preserve the doctor media, Best Product Verdict metadata, scoped styles and extra rankings, then rerun these checks.
