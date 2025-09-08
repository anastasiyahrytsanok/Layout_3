import "./Breadcrumb.css";

export default function Breadcrumb({
  icon,
  text,
  color,
  clickable = false,
  className = "",
}) {
  return (
    <div
      className={`breadcrumb breadcrumb--${color} ${
        clickable ? "breadcrumb--clickable" : ""
      } ${className}`}
    >
      {icon}
      <p className="breadcrumb__text">{text}</p>
    </div>
  );
}
