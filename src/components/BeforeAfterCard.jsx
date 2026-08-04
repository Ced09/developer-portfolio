import PlaceholderMedia from "./PlaceholderMedia";
import "./BeforeAfterCard.css";

function ComparisonImage({ src, alt, label }) {
  return (
    <div className="ba-card__image">
      <span className="mono ba-card__tag">{label}</span>
      {src ? (
        <div className="ba-card__media">
          <img src={src} alt={alt} loading="lazy" />
        </div>
      ) : (
        <PlaceholderMedia label={label} ratio="16 / 10" />
      )}
    </div>
  );
}

export default function BeforeAfterCard({
  title,
  beforeImage,
  beforeAlt,
  afterImage,
  afterAlt,
  description,
  technologies,
}) {
  return (
    <article className="ba-card">
      <div className="ba-card__heading">
        <span className="mono ba-card__index">Customization</span>
        <h3 className="ba-card__title">{title}</h3>
      </div>

      <div className="ba-card__images">
        <ComparisonImage src={beforeImage} alt={beforeAlt} label="Before" />
        <ComparisonImage src={afterImage} alt={afterAlt} label="After" />
      </div>

      <p className="ba-card__desc">{description}</p>

      {technologies?.length > 0 && (
        <div className="tag-row">
          {technologies.map((technology) => (
            <span className="tag" key={technology}>{technology}</span>
          ))}
        </div>
      )}
    </article>
  );
}
