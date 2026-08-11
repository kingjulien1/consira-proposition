export function SpecularButton({
  href,
  children,
  className = "",
  variant = "light",
}) {
  return (
    <span className={`specular-button-wrap ${className}`}>
      <a
        href={href}
        className={`specular-button specular-button--${variant}`}
        data-auto-animate="true"
        data-follow-mouse="false"
      >
        <span className="specular-button__shine" aria-hidden="true" />
        <span className="specular-button__content">{children}</span>
      </a>
    </span>
  );
}
