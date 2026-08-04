import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "../components/Seo";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import ClickableImage from "../components/ClickableImage";
import "./ProjectPage.css";
import homepageImg from "../assets/slate-homepage.png";

const revisionTasks = [
  {
    id: "footer-cleanup",
    title: "Footer Cleanup",
    description:
      "Removed Shopify branding from the footer to create a cleaner, more professional storefront.",
    beforeImage: "/images/slate-coffee/revisions/footer-before.png",
    beforeAlt: "Slate Coffee footer showing Powered by Shopify before customization",
    afterImage: "/images/slate-coffee/revisions/footer-after.png",
    afterAlt: "Slate Coffee brand-only footer after customization",
    beforeNote: "Powered by Shopify ❌",
    afterNote: "Brand-only footer ✓",
    compact: true,
  },
  {
    id: "payment-icons",
    title: "Payment Icons",
    description:
      "Added payment icons beneath the purchase buttons to help reinforce customer trust before checkout.",
    beforeImage: "/images/slate-coffee/revisions/payment-before.png",
    beforeAlt: "Slate Coffee product page before payment icons were added",
    afterImage: "/images/slate-coffee/revisions/payment-after.png",
    afterAlt: "Slate Coffee product page with payment icons beneath the purchase buttons",
  },
  {
    id: "collection-page-customization",
    title: "Collection Page Customization",
    description:
      "Customized the collection page to display product prices only on the product page, following the client's merchandising requirements.",
    beforeImage: "/images/slate-coffee/revisions/collection-before.png",
    beforeAlt: "Slate Coffee collection page with product prices visible",
    afterImage: "/images/slate-coffee/revisions/collection-after.png",
    afterAlt: "Slate Coffee collection page with product prices hidden",
  },
];

function ComparisonTask({ task }) {
  return (
    <article className={`slate-task${task.compact ? " slate-task--compact" : ""}`}>
      <div className="slate-task__intro">
        <span className="eyebrow">Storefront improvement</span>
        <h3 className="slate-task__title">{task.title}</h3>
        <p className="slate-task__description">{task.description}</p>
      </div>

      <div className="slate-comparison">
        <figure className="slate-comparison__item">
          <figcaption>
            <span className="mono slate-comparison__label">Before</span>
            {task.beforeNote && <span className="slate-comparison__note">{task.beforeNote}</span>}
          </figcaption>
          <div className="slate-comparison__media">
            <ClickableImage src={task.beforeImage} alt={task.beforeAlt} loading="lazy" />
          </div>
        </figure>

        <span className="slate-comparison__arrow" aria-hidden="true">↓</span>

        <figure className="slate-comparison__item">
          <figcaption>
            <span className="mono slate-comparison__label">After</span>
            {task.afterNote && <span className="slate-comparison__note">{task.afterNote}</span>}
          </figcaption>
          <div className="slate-comparison__media">
            <ClickableImage src={task.afterImage} alt={task.afterAlt} loading="lazy" />
          </div>
        </figure>
      </div>
    </article>
  );
}

export default function ProjectSlateCoffee() {
  return (
    <>
      <Seo
        title="Slate Coffee"
        description="A Shopify theme customization case study featuring storefront refinements and reusable merchant-editable sections."
        path="/projects/slate-coffee"
      />

      <section className="section project-header">
        <div className="container">
          <Link to="/#projects" className="btn-ghost project-header__back">
            <ArrowLeft size={15} /> All projects
          </Link>
          <h1 className="display-1 project-header__title">Slate Coffee</h1>
          <span className="eyebrow project-header__eyebrow">Shopify Theme Customization</span>
          <p className="lede project-header__desc">
            A series of targeted Shopify theme improvements focused on adding useful functionality and refining the storefront without rebuilding it from scratch.
          </p>
        </div>
      </section>

      <section className="section section-border-top slate-homepage-section">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Storefront Highlights." />

          <article className="slate-homepage-showcase">
            <div className="slate-homepage-showcase__media">
              <ClickableImage src={homepageImg} alt="Slate Coffee homepage" loading="lazy" />
            </div>

            <div className="slate-homepage-showcase__caption">
              <h3 className="slate-homepage-showcase__title">Homepage</h3>
              <p className="slate-homepage-showcase__desc">
                A welcoming storefront that introduces the brand, navigation, and featured coffee experience.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-border-top">
        <div className="container">
          <SectionHeading eyebrow="Customizations" title="Storefront improvements." />
          <div className="slate-tasks">
            {revisionTasks.map((task, index) => (
              <ScrollReveal key={task.id} delay={index * 0.05}>
                <ComparisonTask task={task} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-border-top">
        <div className="container">
          <SectionHeading eyebrow="Custom Shopify section" title="Custom Promotion Section." />

          <article className="slate-promotion">
            <div className="slate-promotion__media slate-promotion__media--storefront">
              <ClickableImage
                src="/images/slate-coffee/revisions/promotion-storefront.png"
                alt="Slate Coffee storefront with the custom promotion section displayed beneath the navigation"
                loading="lazy"
              />
            </div>

            <div className="slate-promotion__caption">
              <p className="slate-promotion__description">
                Developed a customizable promotion section that enables merchants to update promotional content and styling without modifying code.
              </p>
            </div>

          </article>
        </div>
      </section>
    </>
  );
}
