import content from "./content.json";

let cachedUsHtml: string | null = null;

const US_FLAG_SVG = `<svg aria-label="United States flag" class="h-5 w-8 overflow-hidden rounded-[3px] border border-white/40 shadow-sm md:h-6 md:w-9 shrink-0 inline-block" role="img" viewBox="0 0 38 24"><rect width="38" height="24" fill="#fff"></rect><rect y="0" width="38" height="2" fill="#b22234"></rect><rect y="4" width="38" height="2" fill="#b22234"></rect><rect y="8" width="38" height="2" fill="#b22234"></rect><rect y="12" width="38" height="2" fill="#b22234"></rect><rect y="16" width="38" height="2" fill="#b22234"></rect><rect y="20" width="38" height="2" fill="#b22234"></rect><rect width="16" height="13" fill="#3c3b6e"></rect><circle cx="2" cy="2" r=".65" fill="#fff"></circle><circle cx="6" cy="2" r=".65" fill="#fff"></circle><circle cx="10" cy="2" r=".65" fill="#fff"></circle><circle cx="14" cy="2" r=".65" fill="#fff"></circle><circle cx="2" cy="6" r=".65" fill="#fff"></circle><circle cx="6" cy="6" r=".65" fill="#fff"></circle><circle cx="10" cy="6" r=".65" fill="#fff"></circle><circle cx="14" cy="6" r=".65" fill="#fff"></circle><circle cx="2" cy="10" r=".65" fill="#fff"></circle><circle cx="6" cy="10" r=".65" fill="#fff"></circle><circle cx="10" cy="10" r=".65" fill="#fff"></circle><circle cx="14" cy="10" r=".65" fill="#fff"></circle></svg>`;

export function getUsContentHtml(): string {
  if (cachedUsHtml) return cachedUsHtml;

  let html = content.html;

  // 1. Replace #1 link and all Buudy links to point strictly to buudy.com (never us.buudy.com or buudy.co.uk)
  html = html.replaceAll(
    "https://www.buudy.co.uk/products/buudy-led-face-mask",
    "https://buudy.com/products/buudy-led-mask"
  );
  html = html.replaceAll(
    "https://us.buudy.com/products/buudy-led-mask",
    "https://buudy.com/products/buudy-led-mask"
  );

  // 2. Replace Header Flag & Country Banner
  const ukFlagRegex = /<svg aria-label="United Kingdom flag"[\s\S]*?<\/svg><span>United Kingdom - 2026<\/span>/;
  html = html.replace(ukFlagRegex, `${US_FLAG_SVG}<span>United States - 2026</span>`);

  // 3. Editorial & Doctor Shannon Copy Localization
  html = html.replaceAll("Top LED masks comparison for the UK", "Top LED masks comparison for the USA");
  html = html.replaceAll("reviewed 18 popular United Kingdom LED face mask options", "reviewed 18 popular United States LED face mask options");
  html = html.replaceAll("* Recommended by over 1,000 UK buyers skincare users.", "* Recommended by over 1,000 US buyers skincare users.");
  html = html.replaceAll("The Top-Ranked LED Face Masks in the UK", "The Top-Ranked LED Face Masks in the US");
  html = html.replaceAll("real UK customer results", "real US customer results");
  html = html.replaceAll("supported by over 16,000 verified British users", "supported by over 16,000 verified US users");
  html = html.replaceAll("British users", "US users");
  html = html.replaceAll("Free UK Tracked Delivery", "Free US Tracked Delivery");

  // 4. Buudy Pricing & Gift Suite ($199 / $499, Gifts $149)
  html = html.replaceAll("£179", "$199");
  html = html.replaceAll("£449", "$499");
  html = html.replaceAll("£128", "$149");
  html = html.replaceAll("£39", "$39");
  html = html.replaceAll("£70", "$89");
  html = html.replaceAll("£19", "$21");

  // 5. Competitor Pricing in USD
  html = html.replaceAll("£399.99", "$469");
  html = html.replaceAll("£348", "$395");
  html = html.replaceAll("£299.99", "$349.99");
  html = html.replaceAll("£455", "$455");
  html = html.replaceAll("£279", "$279");
  html = html.replaceAll("£220.15", "$220");
  html = html.replaceAll("£274.95", "$275");
  html = html.replaceAll("£579.00", "$579");
  html = html.replaceAll("£579", "$579");

  cachedUsHtml = html;
  return html;
}
