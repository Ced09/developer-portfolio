import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Nav.css";

const links = [
  { to: "/#about", label: "About" },
  { to: "/#projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <Link to="/" className="nav__logo" aria-label="Cedriss, home">
          <span className="nav__logo-mark">C</span>
          <span className="nav__logo-text">Cedriss</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav__link">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="nav__actions">
          <button
            className="nav__toggle"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="nav__mobile">
          <nav aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="nav__mobile-link"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
