import { ImageOff } from "lucide-react";
import "./ProjectScreenshot.css";

/**
 * Displays a project's real screenshot once `src` is provided in
 * data/projects.js (e.g. screenshot: "/images/two-clothes.jpg").
 * Until then, it shows a single clean placeholder, no browser chrome,
 * no decorative mockup, so swapping in the real image later is a
 * one-line change with no layout impact.
 */
export default function ProjectScreenshot({ src, alt }) {
  if (src) {
    return (
      <div className="project-screenshot">
        <img src={src} alt={alt} loading="lazy" />
      </div>
    );
  }

  return (
    <div className="project-screenshot project-screenshot--placeholder">
      <ImageOff size={22} />
      <span className="mono">Add project screenshot</span>
    </div>
  );
}
