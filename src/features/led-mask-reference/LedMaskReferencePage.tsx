import content from "./content.json";
import { LedMaskReferenceControls } from "./LedMaskReferenceControls";
import "./reference.css";

/** Reviewed local snapshot of the owner's reference, scoped to this landing page. */
export function LedMaskReferencePage() {
  return (
    <div id="led-mask-reference" className="led-mask-reference">
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
      <LedMaskReferenceControls />
    </div>
  );
}
