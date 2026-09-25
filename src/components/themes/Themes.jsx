import { BsMoon, BsSun } from "react-icons/bs";
import "./theme.css";
import { useState, useEffect } from "react";

const getStorageTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme || "dark-theme";
};

const Themes = () => {
  const [theme, setTheme] = useState(getStorageTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      type="button"
      className="theme-toggler"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "light-theme" ? <BsMoon /> : <BsSun />}
    </button>
  );
};

export default Themes;
