import { useState } from "react";
import { User } from "lucide-react";
import "./Avatar.css";

/**
 * Circular profile image with a graceful fallback.
 * Add your photo at public/images/profile/cedriss-profile.jpg,
 * or change the path in src/data/profile.js.
 */
export default function Avatar({ src, alt = "Cedriss", size = "large" }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(src) && !imageFailed;

  return (
    <div className={`avatar avatar--${size}`}>
      {showImage ? (
        <img src={src} alt={alt} onError={() => setImageFailed(true)} />
      ) : (
        <User className="avatar__placeholder-icon" strokeWidth={1.4} aria-hidden="true" />
      )}
    </div>
  );
}
