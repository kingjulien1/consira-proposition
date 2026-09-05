import Link from "next/link";
import { Phone } from "lucide-react";
import Iridescence from "@/components/Iridescence";
import { Footer } from "@/components/Footer";
import { LegalPageLoadGate } from "@/components/LegalPageLoadGate";

export function LegalPageLayout({ children, shellClassName = "" }) {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-[#f7f5ef] text-[#080709]">
      <LegalPageLoadGate />

      <div className="site-iridescence-bg fixed z-0">
        <Iridescence
          color={[0.46, 0.34, 0.78]}
          mouseReact={false}
          amplitude={0.095}
          speed={0.58}
        />
      </div>

      <section
        className={`agb-page-shell relative z-10 overflow-visible bg-[#f7f5ef]/70 px-5 pb-18 pt-5 backdrop-blur-[1px] sm:px-8 lg:px-10 lg:pb-28 ${shellClassName}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] backdrop-blur-[6px] [mask-image:linear-gradient(to_bottom,black_0%,black_18%,transparent_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[44rem] bg-[linear-gradient(to_bottom,rgba(247,245,239,0.34)_0%,rgba(247,245,239,0.24)_28%,rgba(247,245,239,0.11)_58%,transparent_100%)]"
        />
        <div aria-hidden="true" className="agb-page-top-fuchsia-fade" />
        <div aria-hidden="true" className="agb-page-top-white-fade" />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-36 top-80 h-[34rem] w-[34rem] rounded-full bg-[#8ea7ff]/14 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12rem] top-[34rem] h-[34rem] w-[34rem] rounded-full bg-[#a855f7]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-32 left-1/2 h-[30rem] w-[44rem] -translate-x-1/2 rounded-full bg-[#b0893f]/8 blur-3xl"
        />

        <header className="relative z-20 mx-auto flex h-10 w-full max-w-7xl items-center justify-between text-xs">
          <Link
            href="/"
            aria-label="Consira Home"
            className="consira-wordmark-link ml-5 inline-flex h-10 items-center font-semibold uppercase leading-none tracking-[0.28em] text-[#080709]/75 transition hover:text-[#080709] sm:ml-4 sm:h-8"
          >
            Consira
          </Link>

          <Link
            href="/#kontakt"
            className="inline-flex h-10 items-center gap-2 rounded-full bg-white/45 px-5 py-0 text-sm font-medium leading-none text-black/50 shadow-sm shadow-black/[0.03] backdrop-blur-xl transition hover:bg-white hover:text-[#080709] sm:h-8 sm:gap-1.5 sm:px-4 sm:text-xs"
          >
            <Phone className="h-3.5 w-3.5 sm:h-3 sm:w-3" strokeWidth={2.25} />
            Kontakt
          </Link>
        </header>

        <div className="relative z-10 mx-auto w-full max-w-7xl pt-24 sm:pt-28 md:pt-28 lg:pt-28 xl:pt-32">
          {children}
        </div>
      </section>

      <Footer anchorPrefix="/" />
    </main>
  );
}
