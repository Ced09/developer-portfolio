import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "../components/Seo";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import PlaceholderMedia from "../components/PlaceholderMedia";
import ProjectHighlightCard from "../components/ProjectHighlightCard";
import GalleryCard from "../components/GalleryCard";
import { twoClothesShowcase } from "../data/twoClothesShowcase";
import "./ProjectPage.css";

const highlights = [
  {
    title: "Product Discovery",
    description:
      "Designed storefront sections that help customers explore products more easily through featured collections, interactive elements, and clear product pathways.",
  },
  {
    title: "Storefront Navigation",
    description:
      "Built a structured navigation system that helps customers browse collections and move through the shopping experience with less friction.",
  },
  {
    title: "Responsive Storefront Design",
    description:
      "Customized layouts and storefront components to provide a consistent shopping experience across desktop and mobile devices.",
  },
];

export default function ProjectTwoClothes() {
  return (
    <>
      <Seo
        title="Two Clothes"
        description="A Shopify fashion storefront focused on product discovery, responsive design, and a clear shopping experience."
        path="/projects/two-clothes"
      />

      <section className="section project-header">
        <div className="container">
          <Link to="/#projects" className="btn-ghost project-header__back">
            <ArrowLeft size={15} /> All projects
          </Link>
          <h1 className="display-1 project-header__title">Two Clothes</h1>
          <span className="eyebrow project-header__eyebrow">Shopify Fashion Storefront Development</span>
          <p className="lede project-header__desc">
            A private Shopify fashion storefront built around clear product discovery, responsive layouts, and an easier path from browsing to purchase.
          </p>
        </div>
      </section>

      <section className="section-border-top">
        <div className="container project-video">
          <div className="project-video__intro">
            <span className="eyebrow">Walkthrough</span>
          </div>
          
      <div className="project-video__embed">
        <iframe
          src="https://www.youtube.com/embed/ivnL8NPP7gw"
          title="Two Clothes Shopify Store Development Project Walkthrough"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

        </div>
      </section>

      <section className="section section-border-top">
        <div className="container">
          <SectionHeading eyebrow="Development Highlights" title="What I implemented." />
          <div className="grid-3">
            {highlights.map((highlight, index) => (
              <ScrollReveal key={highlight.title} delay={index * 0.05}>
                <ProjectHighlightCard {...highlight} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-border-top">
        <div className="container">
          <SectionHeading eyebrow="Gallery" title="Storefront Highlights." />
          <div className="gallery-grid">
            {twoClothesShowcase.map((item, index) => (
              <ScrollReveal
                key={item.id}
                delay={index * 0.05}
                className={`gallery-grid__item gallery-grid__item--${item.id}${item.featured ? " gallery-grid__item--featured" : ""}`}
              >
                <GalleryCard {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
