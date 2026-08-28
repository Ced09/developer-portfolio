import { useState } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import Seo from "../components/Seo";
import SectionHeading from "../components/SectionHeading";
import "./Contact.css";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setResult("");

    const form = event.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "1f9ba174-a67f-4fda-824e-0777daecfa10"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult("Thanks! Your message has been sent.");
        form.reset();
      } else {
        setResult(
          "Something went wrong. Please try again."
        );
      }
    } catch (error) {
      setResult(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Cedriss about software development, Shopify development, and web development projects."
        path="/contact"
      />

      <section className="section contact-page">
        <div className="container">
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something."
          />

          <p className="lede contact-page__intro">
            Have a project in mind or need help with an existing website?
            Send me a message and tell me a little about what you're
            looking to build.
          </p>

          <div className="contact-layout">
            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="contact-form__group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="company">
                  Company <span>(optional)</span>
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  placeholder="Company name"
                />
              </div>

              <div className="contact-form__group">
                <label htmlFor="projectType">
                  Project type
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select a project type
                  </option>

                  <option value="shopify">
                    Shopify Development
                  </option>

                  <option value="web-development">
                    Web Development
                  </option>

                  <option value="react">
                    React Application
                  </option>

                  <option value="maintenance">
                    Website Updates / Maintenance
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              <div className="contact-form__group">
                <label htmlFor="message">
                  Tell me about your project
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="What are you looking to build or improve?"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {result && (
                <p className="contact-form__result">
                  {result}
                </p>
              )}
            </form>

            <aside className="contact-details">
              <span className="eyebrow">Elsewhere</span>

              <a href="mailto:contact@cedriss.dev">
                <Mail size={18} />
                Email
              </a>

              <a
                href="https://www.linkedin.com/in/cedriss-saint-louis-87a23866/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

              <a
                href="https://github.com/Ced09"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}