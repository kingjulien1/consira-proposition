export function LegalPageLoader({ label = "Seite wird vorbereitet" }) {
  return (
    <div className="legal-page-loader" role="status" aria-live="polite">
      <div className="legal-page-loader__mark" aria-hidden="true">
        <span className="legal-page-loader__ring legal-page-loader__ring--outer" />
        <span className="legal-page-loader__ring legal-page-loader__ring--middle" />
        <span className="legal-page-loader__ring legal-page-loader__ring--inner" />
        <span className="legal-page-loader__orb legal-page-loader__orb--a" />
        <span className="legal-page-loader__orb legal-page-loader__orb--b" />
        <span className="legal-page-loader__orb legal-page-loader__orb--c" />
        <span className="legal-page-loader__core" />
      </div>
      <span className="legal-page-loader__label">{label}</span>
    </div>
  );
}

export function LegalPageLoadingScreen() {
  return (
    <main className="legal-page-loading-screen">
      <div aria-hidden="true" className="agb-page-top-fuchsia-fade" />
      <div aria-hidden="true" className="agb-page-top-white-fade" />
      <LegalPageLoader />
    </main>
  );
}
