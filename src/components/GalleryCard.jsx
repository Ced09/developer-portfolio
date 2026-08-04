import PlaceholderMedia from "./PlaceholderMedia";
import ClickableImage from "./ClickableImage";
import "./GalleryCard.css";

export default function GalleryCard({
  id,
  title,
  description,
  image,
  alt,
  featured = false,
  aspectRatio,
  objectFit = "cover",
  naturalImage = false,
}) {
  const mediaStyle = naturalImage
    ? undefined
    : { aspectRatio: aspectRatio || (featured ? "16 / 8.5" : "16 / 10") };

  return (
    <article className={`gallery-card gallery-card--${id || "default"} ${featured ? "gallery-card--featured" : ""}`}>
      {image ? (
        <div className="gallery-card__media" style={mediaStyle}>
          <ClickableImage
            src={image}
            alt={alt || title}
            loading="lazy"
            style={{ objectFit }}
          />
        </div>
      ) : (
        <PlaceholderMedia label={title} ratio={featured ? "16 / 9" : "4 / 3"} />
      )}

      <div className="gallery-card__content">
        <h3 className="gallery-card__title">{title}</h3>
        <p className="gallery-card__desc">{description}</p>
      </div>
    </article>
  );
}
