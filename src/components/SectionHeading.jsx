export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="display-2 section-heading__title">{title}</h2>
      {description && <p className="lede section-heading__desc">{description}</p>}
    </div>
  );
}
