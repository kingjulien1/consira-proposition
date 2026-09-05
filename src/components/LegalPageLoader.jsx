import { LoaderPinwheel } from "lucide-react";
import Iridescence from "@/components/Iridescence";

export function LegalPageLoader() {
  return (
    <div className="legal-page-loader" role="status" aria-label="Seite lädt">
      <span className="legal-page-loader__core" aria-hidden="true">
        <LoaderPinwheel className="legal-page-loader__icon" strokeWidth={2.4} />
      </span>
    </div>
  );
}

export function LegalPageLoadingBackdrop() {
  return (
    <>
      <div className="site-iridescence-bg fixed z-0">
        <Iridescence
          color={[0.46, 0.34, 0.78]}
          mouseReact={false}
          amplitude={0.095}
          speed={0.58}
        />
      </div>

      <div aria-hidden="true" className="legal-page-loading-backdrop">
        <div className="legal-page-loading-backdrop__base" />
        <div className="legal-page-loading-backdrop__blur" />
        <div className="legal-page-loading-backdrop__wash" />
        <div className="agb-page-top-fuchsia-fade" />
        <div className="agb-page-top-white-fade" />
        <div className="legal-page-loading-backdrop__orb legal-page-loading-backdrop__orb--left" />
        <div className="legal-page-loading-backdrop__orb legal-page-loading-backdrop__orb--right" />
        <div className="legal-page-loading-backdrop__orb legal-page-loading-backdrop__orb--bottom" />
      </div>
    </>
  );
}

export function LegalPageLoadingScreen() {
  return (
    <main className="legal-page-loading-screen">
      <LegalPageLoadingBackdrop />
      <LegalPageLoader />
    </main>
  );
}
