import { useEffect } from "react";

export default function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — Cedriss`
      : "Cedriss — Software Developer";
    document.title = fullTitle;

    const setMeta = (name, content, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    if (description) {
      setMeta("description", description);
      setMeta("og:description", description, "property");
    }
    setMeta("og:title", fullTitle, "property");

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `https://cedriss.dev${path}`);
  }, [title, description, path]);

  return null;
}
