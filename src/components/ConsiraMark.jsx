export function ConsiraMark({ className = "", title = "Consira" }) {
  const titleId = "consira-mark-title";

  return (
    <svg
      viewBox="0 0 128 128"
      role={title ? "img" : undefined}
      aria-labelledby={title ? titleId : undefined}
      aria-hidden={title ? undefined : "true"}
      className={className}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <mask id="consira-mark-cutout" maskUnits="userSpaceOnUse">
          <rect width="128" height="128" fill="black" />
          <circle cx="64" cy="64" r="54" fill="white" />
          <path
            d="M60.5 40.5C54.9 34.7 44.9 32.7 36.8 36.7C25.8 42.1 20.2 54.8 22.7 68.2C25.3 82.4 36.2 92.5 49.1 92.5C54.6 92.5 59.1 90.9 63.1 87.6"
            fill="none"
            stroke="black"
            strokeWidth="15.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <ellipse
            cx="84.5"
            cy="64"
            rx="18.2"
            ry="27.2"
            fill="none"
            stroke="black"
            strokeWidth="14.5"
          />
        </mask>
      </defs>
      <circle
        cx="64"
        cy="64"
        r="54"
        fill="currentColor"
        mask="url(#consira-mark-cutout)"
      />
    </svg>
  );
}
