import { Link2 } from "lucide-react";

export function LegalSectionCards({
  sections,
  idPrefix,
  label = "Abschnitt",
  className = "",
}) {
  return (
    <div className={`agb-term-list mx-auto grid max-w-6xl gap-3.5 lg:gap-4 ${className}`}>
      {sections.map(({ icon: Icon, number, title, summary, points }) => {
        const sectionHref = `#${idPrefix}-${number}`;

        return (
          <article
            key={number}
            id={`${idPrefix}-${number}`}
            className="agb-term-card group relative isolate overflow-hidden rounded-[1.35rem] border border-black/7 bg-white/58 p-4 shadow-[0_16px_54px_rgba(8,7,9,0.03)] backdrop-blur-xl transition duration-700 hover:-translate-y-0.5 hover:bg-white/70 sm:p-5 lg:p-6"
          >
            <Icon
              aria-hidden="true"
              className="absolute -right-12 -top-14 h-48 w-48 rotate-[-14deg] text-[#41528f]/5 transition duration-700 group-hover:rotate-[-6deg] group-hover:text-[#41528f]/8"
              strokeWidth={1.25}
            />
            <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <a
                  href={sectionHref}
                  className="agb-term-anchor inline-flex items-center gap-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.17em] transition duration-300 hover:text-[#314172] hover:no-underline"
                >
                  <Link2 className="h-3.5 w-3.5" strokeWidth={2.05} />
                  <span>{label}</span>
                  <span className="agb-term-anchor__number">{number}</span>
                </a>
                <h2 className="mt-3 max-w-3xl text-xl font-semibold leading-tight tracking-[-0.055em] text-black sm:text-2xl lg:text-[1.55rem]">
                  <a
                    href={sectionHref}
                    className="transition duration-300 hover:text-[#41528f] hover:no-underline"
                  >
                    {title}
                  </a>
                </h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-black/48 line-clamp-3 md:line-clamp-none">
                  {summary}
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-5 grid gap-2">
              {points.map((point, pointIndex) => (
                <div
                  key={point}
                  className="agb-term-point grid gap-2.5 rounded-[0.95rem] bg-white/[0.28] px-3.5 py-2.5 text-[0.82rem] leading-6 text-black/58 sm:grid-cols-[auto_1fr]"
                >
                  <span className="font-semibold tabular-nums text-[#41528f]/72">
                    {number}.{pointIndex + 1}
                  </span>
                  <p>{point}</p>
                </div>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
