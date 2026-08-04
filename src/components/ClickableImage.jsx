import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ZoomIn } from "lucide-react";
import "./ClickableImage.css";

export default function ClickableImage({
  src,
  alt,
  loading = "lazy",
  className = "",
  style,
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`clickable-image${className ? ` ${className}` : ""}`}
        onClick={() => setOpen(true)}
        aria-label={`View ${alt || "image"} larger`}
      >
        <img src={src} alt={alt} loading={loading} style={style} />
        <span className="clickable-image__hint" aria-hidden="true">
          <ZoomIn size={16} />
          View larger
        </span>
      </button>

      {open &&
        createPortal(
          <div
            className="image-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={alt || "Expanded image"}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
          >
            <button
              type="button"
              className="image-lightbox__close"
              onClick={() => setOpen(false)}
              aria-label="Close enlarged image"
            >
              <X size={24} />
            </button>

            <div className="image-lightbox__content">
              <img src={src} alt={alt} />
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}
