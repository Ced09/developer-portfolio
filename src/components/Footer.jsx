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
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
          <a href="mailto:hello@cedriss.dev">
            <Mail size={16} /> Email
          </a>
        </div>

        <span className="mono footer__year">© {year} Cedriss</span>
      </div>
    </footer>
  );
}
