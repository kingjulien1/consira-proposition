export function LogoLoop({
  items,
  duration = 34,
  gap = "0.55rem",
  reverse = false,
  className = "",
  fadeColor = "#f7f5ef",
}) {
  const loopItems = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        "--logo-loop-duration": `${duration}s`,
        "--logo-loop-gap": gap,
        "--logo-loop-fade": fadeColor,
      }}
      aria-label="Branchen"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[var(--logo-loop-fade)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[var(--logo-loop-fade)] to-transparent" />

      <div
        className={`flex w-max gap-[var(--logo-loop-gap)] will-change-transform ${reverse ? "animate-logo-loop-reverse" : "animate-logo-loop"}`}
      >
        {loopItems.map(({ label, icon: Icon }, index) => (
          <div
            key={`${label}-${index}`}
            className="group relative flex shrink-0 items-center gap-1.5 overflow-hidden rounded-full border border-black/[0.055] bg-white/[0.42] px-2.5 py-1 text-[0.72rem] font-medium tracking-[-0.012em] text-black/38 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_8px_24px_rgba(8,7,9,0.025)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:scale-[1.08] hover:border-[#7664BD]/35 hover:bg-white/92 hover:text-black/78 hover:shadow-[0_18px_48px_rgba(118,100,189,0.18),0_0_0_6px_rgba(118,100,189,0.075),inset_0_1px_0_rgba(255,255,255,0.95)]"
          >
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.52),transparent_48%,rgba(0,0,0,0.018))]" />
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.22),transparent_48%),linear-gradient(110deg,transparent_18%,rgba(255,255,255,0.82)_45%,transparent_70%)] opacity-0 transition duration-300 group-hover:opacity-100" />
            <span className="relative flex h-5.5 w-5.5 items-center justify-center rounded-full border border-black/[0.045] bg-[#f7f5ef]/55 text-black/34 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition duration-300 group-hover:border-[#7664BD]/25 group-hover:bg-[#7664BD] group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(118,100,189,0.26)]">
              <Icon className="h-3 w-3" strokeWidth={1.75} />
            </span>
            <span className="relative whitespace-nowrap">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
