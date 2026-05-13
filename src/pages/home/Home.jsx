import Profile from "../../assets/user.png";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import "./home.css";

const Home = () => {
  return (
    <section className="home-container grid">
      {/* <div className="home-img">
        <img src={Profile} alt="" className="home-img" />
      </div> */}

      <div className="home-content">
        <h1 className="home-title" data-aos="fade-up">
          <span>I'm Azimjon Jalilov</span>
          <br /> Web developer
        </h1>

        <p className="home-description" data-aos="fade-up" data-aos-delay="50">
          I'm a Frontend Developer from Uzbekistan passionate about creating
          modern, responsive, and user-focused web applications. I specialize in
          building clean interfaces with React, JavaScript, and modern frontend
          technologies to deliver smooth and efficient user experiences.
        </p>

        <Link to="/about" className="button" data-aos="zoom-in">
          More About Me
          <span className="button-icon">
            <FiArrowRight />
          </span>
        </Link>
      </div>

      <div className="color-block"></div>
    </section>
  );
};

export default Home;
