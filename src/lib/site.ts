export const SITE_URL = "https://www.bestproductverdict.com";
export const SUPPORT_EMAIL = "support@bestproductverdict.com";
export const OPERATOR_NAME = "Naman Kharbanda";
export const CONTENT_UPDATED = "30 September 2026";

export const EDITORIAL_METHOD = "These guides are desk-research comparisons, with AI-assisted drafting. They are not reports of hands-on testing or clinical trials. Numbers identify the order of options in the guide, not test scores or customer ratings. Check the exact model, specifications and seller terms before buying.";
export const AFFILIATE_DISCLOSURE = "Some outbound links may earn us a commission. Commercial relationships may influence which products are included and their order. Inclusion is not an independent test award or a guarantee of performance. Prices, stock, delivery and returns are set by the retailer.";

export function ukListingSearch(model: string): string {
  const url = new URL("https://www.amazon.co.uk/s");
  url.searchParams.set("k", model);
  return url.href;
}
