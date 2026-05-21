import { portfolio } from "../../Data";
import { RiLink } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section-title" data-aos="fade-up">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio-container container grid">
        {portfolio.map(({ id, img, title, description, skills, link }, i) => {
          return (
            <article
              className="portfolio-card"
              key={id}
              data-aos="zoom-in-up"
              data-aos-delay={i * 200}
            >
              <a href={link} className="portfolio-img-wrapper">
                {/* <img src={img} alt="" className="portfolio-img" /> */}
                <LazyLoadImage
                  effect="blur"
                  alt={title}
                  src={img}
                  height={"200px"}
                />
              </a>

              <h3 className="portfolio-title">{title}</h3>
              <p className="portfolio-description">{description}</p>

              {/* <div className="portfolio-skills">
                {skills.map((skill, index) => {
                  return (
                    <img
                      src={skill}
                      alt=""
                      className="portfolio-skill"
                      key={index}
                    />
                  );
                })}
              </div> */}

              <a href={link} className="portfolio-link" target="_blank">
                <RiLink className="link-icon" />
                Visit Project
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
