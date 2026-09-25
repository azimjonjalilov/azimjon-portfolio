import {
  RiMap2Line,
  RiUser3Line,
  RiMailLine,
  RiBook2Line,
  RiSendPlaneLine,
} from "react-icons/ri";
import "./contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_6wxmiso";
const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_8c30b0p";
const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "u6v8eUL9aa0zp3_pp";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setMessageColor("color-red");
      setFeedbackMessage("Please fill in all required fields.");
      setTimeout(() => setFeedbackMessage(""), 4000);
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setMessageColor("color-first");
          setFeedbackMessage("Message sent successfully! ✔");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
          setTimeout(() => setFeedbackMessage(""), 5000);
        },
        () => {
          setMessageColor("color-red");
          setFeedbackMessage("Oops! Failed to send. Please contact directly via email.");
          setTimeout(() => setFeedbackMessage(""), 6000);
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="contact section">
      <h2 className="section-title" data-aos="fade-up">
        Contact <span>Me</span>
      </h2>

      <div className="contact-container container grid">
        <div className="contact-content grid">
          <div
            className="contact-card"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <span className="contact-icon">
              <RiMap2Line />
            </span>

            <div>
              <h3 className="contact-title">Address</h3>
              <p className="contact-data">Namangan, Uzbekistan</p>
            </div>
          </div>

          <div
            className="contact-card"
            data-aos="fade-right"
            data-aos-delay="600"
          >
            <span className="contact-icon">
              <RiUser3Line />
            </span>

            <div>
              <h3 className="contact-title">Freelance</h3>
              <p className="contact-data">Available for Projects</p>
            </div>
          </div>

          <div
            className="contact-card"
            data-aos="fade-right"
            data-aos-delay="900"
          >
            <span className="contact-icon">
              <RiMailLine />
            </span>

            <div>
              <h3 className="contact-title">Email</h3>
              <a
                href="mailto:azimjonjalilovking1301@gmail.com"
                className="contact-data"
              >
                azimjonjalilovking1301@gmail.com
              </a>
            </div>
          </div>

          <div
            className="contact-card"
            data-aos="fade-right"
            data-aos-delay="1200"
          >
            <span className="contact-icon">
              <RiBook2Line />
            </span>

            <div>
              <h3 className="contact-title">Phone</h3>
              <a href="tel:+998905977955" className="contact-data">
                +998 90 597 79 55
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form grid" onSubmit={sendEmail}>
          <div className="contact-form-group grid">
            <div
              className="contact-form-div"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <label htmlFor="contact-name" className="contact-form-label">
                Your full Name <b>*</b>
              </label>

              <input
                type="text"
                id="contact-name"
                name="name"
                required
                onChange={handleChange}
                value={formData.name}
                className="contact-form-input"
                placeholder="Azizbek..."
              />
            </div>

            <div
              className="contact-form-div"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <label htmlFor="contact-email" className="contact-form-label">
                Your Email Address <b>*</b>
              </label>

              <input
                type="email"
                id="contact-email"
                name="email"
                required
                onChange={handleChange}
                value={formData.email}
                className="contact-form-input"
                placeholder="example@mail.com"
              />
            </div>
          </div>

          <div
            className="contact-form-div"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <label htmlFor="contact-subject" className="contact-form-label">
              Your Subject <b>*</b>
            </label>

            <input
              type="text"
              id="contact-subject"
              name="subject"
              required
              onChange={handleChange}
              value={formData.subject}
              className="contact-form-input"
              placeholder="Project proposal..."
            />
          </div>

          <div
            className="contact-form-div"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <label htmlFor="contact-message" className="contact-form-label">
              Your Message <b>*</b>
            </label>

            <textarea
              id="contact-message"
              name="message"
              required
              onChange={handleChange}
              value={formData.message}
              className="contact-form-input contact-form-area"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <div className="contact-button">
            <button
              type="submit"
              className="button"
              data-aos="zoom-in"
              data-aos-delay="1200"
              disabled={isSubmitting}
              style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <span className="button-icon">
                <RiSendPlaneLine />
              </span>
            </button>
          </div>

          {feedbackMessage && (
            <p className={`contact-message ${messageColor}`}>
              {feedbackMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
