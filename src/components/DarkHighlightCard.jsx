import { CircleCheck } from "lucide-react";

export function DarkHighlightCard({
  className = "",
  variantClassName = "",
  mobileCornerIcon: MobileCornerIcon,
  topLink,
  label,
  labelIcon: LabelIcon,
  title,
  shortNote,
  body,
  items = [],
  mobileFinish,
  mobileAction,
}) {
  return (
    <div
      className={`agb-document-intro ${variantClassName} relative isolate overflow-visible rounded-[1.9rem] bg-[#080709] px-5 py-7 text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] sm:px-7 sm:py-8 lg:px-10 lg:py-10 ${className}`}
    >
      <span
        aria-hidden="true"
        className="agb-document-surface pointer-events-none absolute inset-0 z-0 rounded-[inherit] bg-[#080709]"
      />
      <span
        aria-hidden="true"
        className="agb-document-diagonal-overlay pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
      />

      {MobileCornerIcon ? (
        <MobileCornerIcon
          aria-hidden="true"
          className="pointer-events-none absolute right-5 top-5 z-10 h-6 w-6 text-white/84 lg:hidden"
          strokeWidth={1.85}
        />
      ) : null}

      <div className="relative z-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <div className="lg:flex lg:flex-col">
          {topLink ? (
            <a
              href={topLink.href}
              className="agb-document-help-link agb-document-help-link--static inline-flex items-center gap-2.5 text-[0.78rem] font-semibold tracking-[0.02em] text-[#b9c8ff]/70 hover:no-underline sm:text-[0.84rem] lg:text-[0.9rem]"
            >
              <topLink.icon
                className="h-4 w-4 sm:h-[1.05rem] sm:w-[1.05rem]"
                strokeWidth={2.15}
              />
              {topLink.label}
            </a>
          ) : label ? (
            <p className="inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#b9c8ff]/70">
              {LabelIcon ? <LabelIcon className="h-3.5 w-3.5" strokeWidth={1.9} /> : null}
              {label}
            </p>
          ) : null}

          <h2 className="mt-4 max-w-xl text-[1.8rem] font-semibold leading-[0.95] tracking-[-0.065em] text-balance sm:text-[2.15rem] lg:text-[2.45rem]">
            {title}
          </h2>

          {shortNote ? (
            <p className="agb-document-short-note mt-3 hidden max-w-md text-sm leading-7 text-white/50 lg:mt-auto lg:block lg:pt-8">
              {shortNote}
            </p>
          ) : null}

          {mobileAction ? (
            <a
              href={mobileAction.href}
              className="agb-document-help-link mt-6 hidden items-center gap-2 text-xs font-semibold text-[#d8e1ff]/72 transition duration-300 hover:text-[#eef2ff] hover:no-underline lg:mt-auto lg:inline-flex lg:pt-3 lg:text-sm"
            >
              <mobileAction.icon className="h-3.5 w-3.5 lg:h-4 lg:w-4" strokeWidth={1.9} />
              {mobileAction.label}
            </a>
          ) : null}
        </div>

        <div className="lg:flex lg:flex-col">
          <p className="max-w-2xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
            {body}
          </p>

          {items.length ? (
            <div className="mt-8 grid gap-2 sm:grid-cols-3 lg:mt-auto lg:items-end">
              {items.map(({ icon: ItemIcon, label: itemLabel, mobileLabel }) => (
                <div
                  key={itemLabel}
                  className="agb-document-list-item text-xs font-semibold"
                >
                  <ItemIcon
                    className="h-4 w-4 shrink-0 text-[#b9c8ff]/82"
                    strokeWidth={2}
                  />
                  {mobileLabel ? (
                    <>
                      <span className="hidden sm:inline">{itemLabel}</span>
                      <span className="sm:hidden">{mobileLabel}</span>
                    </>
                  ) : (
                    <span>{itemLabel}</span>
                  )}
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-7 lg:hidden">
            {mobileAction ? (
              <a
                href={mobileAction.href}
                className="agb-document-help-link inline-flex items-center gap-2 text-xs font-semibold text-[#d8e1ff]/72 transition duration-300 hover:text-[#eef2ff] hover:no-underline"
              >
                <mobileAction.icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                {mobileAction.label}
              </a>
            ) : null}

            {shortNote ? (
              <p className="agb-document-short-note agb-document-short-note--mobile max-w-md text-sm leading-7 text-white/50">
                {shortNote}
              </p>
            ) : null}

            {mobileFinish ? (
              <p className="agb-document-finish mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[-0.01em] text-white/56">
                {mobileFinish.icon ? (
                  <mobileFinish.icon
                    className="h-3.5 w-3.5 text-[#b9c8ff]/78"
                    strokeWidth={2}
                  />
                ) : (
                  <CircleCheck
                    className="h-3.5 w-3.5 text-[#b9c8ff]/78"
                    strokeWidth={2}
                  />
                )}
                {mobileFinish.label}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
