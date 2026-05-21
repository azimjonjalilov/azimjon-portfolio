import { Outlet, useLocation } from "react-router";
import Navbar from "./navbar/Navbar";
import Themes from "./themes/Themes";
import { useEffect } from "react";

const AppLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
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
