import content from "./content.json";
import Script from "next/script";
import { LedMaskReferenceControls } from "./LedMaskReferenceControls";
import "./reference.css";
import "./theme.css";

/** Reviewed local snapshot of the owner's reference, scoped to this landing page. */
export function LedMaskReferencePage() {
  return (
    <div id="led-mask-reference" className="led-mask-reference">
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
      <LedMaskReferenceControls />
      <Script
        id="buudy-exit-popup"
        src="/assets/buudy-exit-popup-20261104.js"
        data-popup-site="bestproductverdict"
        strategy="afterInteractive"
      />
    </div>
  );
}
