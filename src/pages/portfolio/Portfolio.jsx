import { useState } from "react";
import { portfolio } from "../../Data";
import { RiLink, RiGithubLine } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./portfolio.css";

const categories = ["All", "React", "Next.js", "Full Stack", "Frontend"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolio
      : portfolio.filter((item) => item.category === activeCategory);

  return (
    <section className="portfolio section">
      <h2 className="section-title" data-aos="fade-up">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio-filters" data-aos="fade-up" data-aos-delay="100">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            className={`portfolio-filter-btn ${
              activeCategory === cat ? "active" : ""
            }`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="portfolio-container container grid">
        {filteredProjects.map(
          ({ id, img, title, description, skills, link, github }, i) => {
            return (
              <article
                className="portfolio-card"
                key={id}
                data-aos="zoom-in-up"
                data-aos-delay={i * 150}
              >
                <a
                  href={link}
                  className="portfolio-img-wrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                >
                  <LazyLoadImage
                    effect="blur"
                    alt={title}
                    src={img}
                    width="100%"
                    height="100%"
                  />
                </a>

                <h3 className="portfolio-title">{title}</h3>
                <p className="portfolio-description">{description}</p>

                {skills && skills.length > 0 && (
                  <div className="portfolio-skills">
                    {skills.map((skill, index) => (
                      <img
                        src={skill}
                        alt="tech stack"
                        className="portfolio-skill"
                        key={index}
                      />
                    ))}
                  </div>
                )}

                <div className="portfolio-actions">
                  <a
                    href={link}
                    className="portfolio-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiLink className="link-icon" />
                    Visit Project
                  </a>

                  {github && (
                    <a
                      href={github}
                      className="portfolio-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <RiGithubLine className="link-icon" />
                      Source Code
                    </a>
                  )}
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Portfolio;
