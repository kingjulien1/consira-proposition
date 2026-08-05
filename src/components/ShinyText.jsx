export function ShinyText({
  children,
  className = "",
  speed = "4s",
  disabled = false,
}) {
  return (
    <span
      className={`shiny-text ${disabled ? "shiny-text-disabled" : ""} ${className}`}
      style={{ "--shiny-speed": speed }}
      data-text={typeof children === "string" ? children : undefined}
    >
      {children}
    </span>
  );
}
