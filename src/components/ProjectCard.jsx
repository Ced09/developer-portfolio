import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProjectScreenshot from "./ProjectScreenshot";
import "./ProjectCard.css";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <Link
        to={project.caseStudy}
        className="project-card__visual-link"
        aria-label={`View case study: ${project.title}`}
      >
        <ProjectScreenshot src={project.screenshot} alt={project.screenshotAlt || `${project.title} screenshot`} />
      </Link>

      <div className="project-card__body">
        <span className="mono project-card__category">{project.type}</span>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.description}</p>

        <div className="tag-row project-card__tags">
          {project.technologies.map((t) => (
            <span className="tag" key={t}>{t}</span>
          ))}
        </div>

        <Link to={project.caseStudy} className="btn-ghost project-card__link">
          View Case Study <ArrowUpRight size={15} />
        </Link>
      </div>
    </article>
  );
}
