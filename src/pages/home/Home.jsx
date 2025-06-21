import Profile from "../../assets/home.jpg";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import "./home.css";

const Home = () => {
  return (
    <section className="home-container grid">
      <img src={Profile} alt="" className="home-img" />

      <div className="home-content">
        <h1 className="home-title">
          <span>I'm Azimjon Jalilov</span>
          <br /> Web developer
        </h1>

        <p className="home-description">
          I’m a Uzbekistan-based web designer & front-end developer focused on
          crafting clean, user-friendly interfaces. I’m passionate about
          building modern and efficient web applications that make life easier
          for people around me.
        </p>

        <Link to="/about" className="button">
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
