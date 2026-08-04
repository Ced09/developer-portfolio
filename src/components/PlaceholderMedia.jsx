import { Image as ImageIcon, Play } from "lucide-react";
import "./PlaceholderMedia.css";

export default function PlaceholderMedia({ label, variant = "image", ratio = "16 / 10" }) {
  return (
    <div className="placeholder-media" style={{ aspectRatio: ratio }}>
      <div className="placeholder-media__icon">
        {variant === "video" ? <Play size={22} /> : <ImageIcon size={20} />}
      </div>
      {label && <span className="mono placeholder-media__label">{label}</span>}
    </div>
  );
}
