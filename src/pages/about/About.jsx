import Info from "../../components/Info";
import CV from "../../pdf/azimjon-cv.pdf";
import { RiDownload2Line } from "react-icons/ri";
import Stats from "../../components/Stats";
import { skill } from "../../Data";
import SkillsItem from "../../components/SkillsItem";
import { resume } from "../../Data";
import ResumeItem from "../../components/ResumeItem";
import "./about.css";

const About = () => {
  return (
    <main className="section container">
      <section className="about">
        <h2 className="section-title" data-aos="fade-up">
          About <span>Me</span>
        </h2>

        <div className="about-container grid">
          <div className="about-info">
            <h3 className="section-subtitle" data-aos="fade-up">
              Personal Infos
            </h3>

            <ul
              className="info-list grid"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Info />
            </ul>

            <a
              href={CV}
              download=""
              className="button"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Download CV
              <span className="button-icon">
                <RiDownload2Line />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section-subtitle subtitle-center" data-aos="fade-up">
          My Skills
        </h3>

        <div className="skills-container grid">
          {/* frontend skill */}
          <div className="skills-group">
            <h3 className="skills-title" data-aos="zoom-in">
              Frontend Developer
            </h3>

            <div className="skills-items grid">
              {skill
                .filter((val) => val.category === "developer")
                .map((val) => (
                  <SkillsItem key={val.id} {...val} />
                ))}
            </div>
          </div>

          {/* backend skill */}
          <div className="skills-group">
            <h3 className="skills-title" data-aos="zoom-in">
              Backend Developer
            </h3>

            <div className="skills-items grid">
              {skill
                .filter((val) => val.category === "backend")
                .map((val) => (
                  <SkillsItem key={val.id} {...val} />
                ))}
            </div>
          </div>

          {/* tools skill */}
          <div className="skills-group">
            <h3 className="skills-title" data-aos="zoom-in">
              Design / Tools
            </h3>

            <div className="skills-items grid">
              {skill
                .filter((val) => val.category === "tools")
                .map((val) => (
                  <SkillsItem key={val.id} {...val} />
                ))}
            </div>
          </div>
        </div>
      </section>

      <div className="separator"></div>

      <section className="resume">
        <h3 className="section-subtitle subtitle-center" data-aos="fade-up">
          Experience & Education
        </h3>

        <div className="resume-container grid">
          <div className="resume-group grid">
            {resume
              .filter((val) => val.category === "experience")
              .map((val) => (
                <ResumeItem key={val.id} {...val} />
              ))}
          </div>

          <div className="resume-group grid">
            {resume
              .filter((val) => val.category === "education")
              .map((val) => (
                <ResumeItem key={val.id} {...val} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
