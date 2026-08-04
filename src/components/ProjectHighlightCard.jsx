import "./ProjectHighlightCard.css";

/** A concise, text-first summary of a meaningful storefront implementation. */
export default function ProjectHighlightCard({ title, description }) {
  return (
    <article className="highlight-card">
      <h3 className="highlight-card__title">{title}</h3>
      <p className="highlight-card__desc">{description}</p>
    </article>
  );
}
