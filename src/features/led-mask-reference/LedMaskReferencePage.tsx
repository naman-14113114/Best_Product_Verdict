import content from "./content.json";
import { getUsContentHtml } from "./usContent";
import Script from "next/script";
import { LedMaskReferenceControls } from "./LedMaskReferenceControls";
import "./reference.css";
import "./theme.css";

interface LedMaskReferencePageProps {
  market?: "uk" | "us";
}

/** Reviewed local snapshot of the owner's reference, scoped to this landing page. */
export function LedMaskReferencePage({ market = "uk" }: LedMaskReferencePageProps) {
  const html = market === "us" ? getUsContentHtml() : content.html;

  return (
    <div id="led-mask-reference" className="led-mask-reference">
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <LedMaskReferenceControls market={market} />
      <Script
        id="buudy-exit-popup"
        src="/assets/buudy-exit-popup-20261104.js"
        data-popup-site="bestproductverdict"
        strategy="afterInteractive"
      />
    </div>
  );
}
