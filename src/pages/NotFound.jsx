import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo from "../components/Seo";
import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="This page doesn't exist." path="/404" />
      <section className="section not-found">
        <div className="container not-found__inner">
          <span className="mono not-found__code">404</span>
          <h1 className="display-1">This page took a wrong turn.</h1>
          <p className="lede">
            The page you're looking for doesn't exist, or it may have moved.
          </p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={17} /> Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
