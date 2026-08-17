export function GradualBlur({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`gradual-blur-top ${className}`}
    >
      <div className="gradual-blur-top__layer" />
      <div className="gradual-blur-top__layer" />
      <div className="gradual-blur-top__layer" />
      <div className="gradual-blur-top__layer" />
      <div className="gradual-blur-top__layer" />
    </div>
  );
}
