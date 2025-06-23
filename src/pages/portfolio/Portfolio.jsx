import { portfolio } from "../../Data";
import { RiLink } from "react-icons/ri";
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio section">
      <h2 className="section-title">
        My <span>Portfolio</span>
      </h2>

      <div className="portfolio-container container grid">
        {portfolio.map(({ id, img, title, description, skills, link }) => {
          return (
            <article className="portfolio-card" key={id}>
              <a href={link} className="portfolio-img-wrapper">
                <img src={img} alt="" className="portfolio-img" />
              </a>

              <h3 className="portfolio-title">{title}</h3>
              <p className="portfolio-description">{description}</p>

              <div className="portfolio-skills">
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
              </div>

              <a href={link} className="portfolio-link">
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
