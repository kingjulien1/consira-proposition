import Link from "next/link";
import { SectionBadge } from "@/components/SectionBadge";

export function LegalPageHero({
  badgeHref,
  badgeIcon,
  badgePill,
  badgeText,
  mobileTitle,
  desktopTitle,
  mobileDescription,
  desktopDescription,
  metaItems,
  legalLinks,
  legalLinksAriaLabel = "Weitere rechtliche Seiten",
}) {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
      <SectionBadge
        href={badgeHref}
        icon={badgeIcon}
        tone="neutral"
        leadingPill={badgePill}
        iconPosition="end"
        entryDirection="down"
        className="agb-hero-badge mb-7 shadow-none lg:mb-8"
        entryDelayOverride={0}
      >
        {badgeText}
      </SectionBadge>

      <h1 className="max-w-4xl px-5 text-[2.7rem] font-semibold leading-[0.9] tracking-[-0.075em] text-balance sm:hidden">
        {mobileTitle}
      </h1>

      <h1 className="hidden max-w-6xl font-semibold leading-[0.88] tracking-[-0.078em] text-balance sm:block sm:text-[3.55rem] lg:text-[6.2rem] xl:text-[6.65rem]">
        {desktopTitle}
      </h1>

      <p className="mx-auto mt-5 max-w-2xl px-5 text-sm leading-7 text-black/42 sm:hidden">
        {mobileDescription}
      </p>
      <p className="mx-auto mt-5 hidden max-w-3xl text-base leading-8 text-black/42 sm:block">
        {desktopDescription}
      </p>

      {metaItems?.length ? (
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2 lg:gap-3 xl:gap-4">
          {metaItems.map(({ href, icon: Icon, label }) => {
            const className = href
              ? "agb-meta-pill agb-meta-pill--link"
              : "agb-meta-pill";
            const content = (
              <>
                <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                {label}
              </>
            );

            return href ? (
              <a key={label} href={href} className={className}>
                {content}
              </a>
            ) : (
              <span key={label} className={className}>
                {content}
              </span>
            );
          })}
        </div>
      ) : null}

      {legalLinks?.length ? (
        <nav
          aria-label={legalLinksAriaLabel}
          className="agb-legal-links mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-9"
        >
          {legalLinks.map(({ href, icon: Icon, label }, index) => (
            <span key={label} className="contents">
              {index > 0 ? (
                <span className="agb-legal-link-separator" aria-hidden="true" />
              ) : null}
              <Link href={href} className="agb-legal-link">
                <Icon className="h-3.5 w-3.5" strokeWidth={2} />
                {label}
              </Link>
            </span>
          ))}
        </nav>
      ) : null}
    </div>
  );
}
