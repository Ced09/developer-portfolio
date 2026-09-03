import { Github, Linkedin, Mail } from "lucide-react";
import "./Footer.css";

export default function Footer({ id }) {
  const year = new Date().getFullYear();

  return (
    <footer id={id} className="footer section-border-top">
      <div className="container footer__inner">
        <span className="nav__logo-mark">C</span>
        <span className="footer__name">Cedriss</span>

        <div className="footer__links">
          <a
            href="https://www.linkedin.com/in/cedriss-saint-louis-87a23866/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} /> LinkedIn
          </a>

          <a
            href="https://github.com/Ced09"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub
          </a>

          <a href="mailto:contact@cedriss.dev">
            <Mail size={16} /> Email
          </a>
        </div>

        <span className="mono footer__year">© {year} Cedriss</span>
      </div>
    </footer>
  );
}