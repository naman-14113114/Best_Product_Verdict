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

Microsoft Advertising UET tag `355062041` is installed once in the root layout with automatic SPA tracking enabled. It applies site-wide alongside the existing Clarity and hidden Tawk loader. Existing outbound-click events use the same `uetq` queue. Microsoft Advertising conversion goals are configured separately in the advertising account.

## LED mask landing page

`/best-led-face-mask-uk-2026` uses the saved TrustpilotReview-style `LedMaskReferencePage` from `src/features/led-mask-reference`. The `/top-10/best-led-face-mask-uk-2026` alias re-exports the same page. Dr. Shannon's name, portrait, original video and poster are retained. The first five rankings are visible initially; ranks 6–10 and the extra comparison-table columns can be expanded and collapsed separately.

The route-scoped `theme.css` uses deep blue branding and amber Buudy buttons with dark labels. Product wavelength swatches retain their actual colours. The palette is intended to make the main actions distinct; click-through improvements require measurement.

Microsoft Advertising UET `355062041`, automatic SPA tracking, Clarity and the hidden Tawk loader remain in the root layout. `LedMaskReferenceControls` preserves outbound-click events and Buudy campaign attribution without delaying native navigation. Check desktop/mobile layout, ranking/table controls, video playback, image delivery and UET page-view requests after publishing. The original parity script (`scripts/verify-led-mask-reference.mjs`) compares against the live TrustpilotReview page, whose seasonal copy may differ from the saved version. The original landing-page components remain available for other routes.
