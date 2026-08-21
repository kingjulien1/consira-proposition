export function SectionCornerIcon({ icon: Icon, className = "" }) {
  return (
    <Icon
      aria-hidden="true"
      className={`pointer-events-none absolute right-5 top-5 z-[1] h-16 w-16 text-current opacity-[0.075] sm:right-8 sm:top-8 sm:h-20 sm:w-20 lg:right-12 lg:top-10 lg:h-24 lg:w-24 ${className}`}
      strokeWidth={1.35}
    />
  );
}
