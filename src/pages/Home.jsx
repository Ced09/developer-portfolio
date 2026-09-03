import { ArrowRight, Github, Linkedin } from "lucide-react";
import { links } from "../data/links";
import Seo from "../components/Seo";
import ScrollReveal from "../components/ScrollReveal";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import Avatar from "../components/Avatar";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { profile } from "../data/profile";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Seo
        title="Software Developer & Shopify Specialist"
        description="Cedriss is a software developer and Shopify specialist building modern web applications, custom themes, and reusable storefront sections."
        path="/"
      />

      <section className="section about-section" id="about">
        <div className="container about">
          <div className="about__photo">
            <Avatar src={profile.photo} alt={profile.photoAlt} size="large" />
          </div>
          <div className="about__copy">
            <SectionHeading eyebrow="Cedriss · Software Developer" title=" Software Developer & Shopify Specialist" />
            <p className="lede about__bio">
              I’m a software developer focused on building modern web applications and Shopify storefronts. I develop and customize Shopify themes, build reusable storefront sections, and transform business requirements into responsive, maintainable, and user-friendly experiences using JavaScript, React, Liquid, HTML, and CSS.
            </p>
            <div className="tag-row about__skills">
              {skills.map((skill) => (
                <span className="tag" key={skill}>{skill}</span>
              ))}
            </div>
            <div className="hero__actions">
              <a href="#projects" className="btn btn-primary">
                View Projects <ArrowRight size={17} />
              </a>
              <a href={links.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
                <Linkedin size={16} /> LinkedIn
              </a>
              
              {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noreferrer"
                 className="btn btn-secondary"
              >
                <Github size={16} /> GitHub
              </a>
            )}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-border-top" id="projects">
        <div className="container">
          <SectionHeading eyebrow="Projects" title="Featured Projects" />
          <p className="section-intro"></p>
          <div className="home-projects">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={index * 0.06}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
