import content from "./content.json";

const html = content.html;

const critStart = html.indexOf(
  '<div class="bg-white rounded-2xl md:rounded-3xl p-5 min-[360px]:p-5 md:p-10 shadow-sm border border-slate-200 mb-10 md:mb-16 w-full">'
);
const prodStart = html.indexOf('<div class="space-y-16">');
const tableStart = html.indexOf(
  '<section class="bg-white rounded-3xl p-5 sm:p-8 md:p-10 border border-slate-200 shadow-sm mt-16 mb-12 max-w-6xl mx-auto font-sans">'
);
const mainEnd = html.indexOf("</main>");

const stickyStart = html.indexOf(
  '<div class="fixed bottom-0 left-0 right-0 p-3 bg-white border-t border-slate-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 md:hidden flex items-center justify-center">'
);
const stickyEnd = html.indexOf("</div></div>", stickyStart) + 6;

const footerStart = html.indexOf(
  '<footer class="mt-0 border-t border-slate-200 bg-white px-4 py-8 shadow-inner">'
);
const footerEnd = html.indexOf("</footer>", footerStart) + 9;

// Criteria section (4452 to 12345)
export const criteriaHtml: string = html.slice(critStart, prodStart);

// Products section + Dermatologist's Verdict video section (12345 to 202335)
// Pre-fill all data-led-metric widths so performance bars are immediately filled in static SSR and never render as 0% empty tracks
const rawProductsHtml = html.slice(prodStart, tableStart);
export const productsAndVerdictHtml: string = rawProductsHtml.replace(
  /data-led-metric="(\d+)"\s+style="width:0%"/g,
  'data-led-metric="$1" style="width:$1%"'
);

// Side-by-Side Comparison Table section (202335 to 274445)
export const tableHtml: string = html.slice(tableStart, mainEnd);

// Mobile bottom sticky bar (275213 to 276372)
export const mobileStickyHtml: string = html.slice(stickyStart, stickyEnd);

// Footer & disclosures (274452 to 275213)
export const footerHtml: string = html.slice(footerStart, footerEnd);
