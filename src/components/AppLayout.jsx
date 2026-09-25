import { Outlet, useLocation } from "react-router";
import Navbar from "./navbar/Navbar";
import Themes from "./themes/Themes";
import { useEffect } from "react";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const pageTitles = {
      "/": "Azimjon Jalilov | Web Developer",
      "/about": "About Me | Azimjon Jalilov",
      "/portfolio": "Portfolio & Projects | Azimjon Jalilov",
      "/contact": "Contact Me | Azimjon Jalilov",
    };
    document.title = pageTitles[pathname] || "Azimjon Jalilov | Portfolio";
  }, [pathname]);
  return (
    <>
      <Navbar />
      <Outlet />
      <Themes />
    </>
  );
};

export default AppLayout;
