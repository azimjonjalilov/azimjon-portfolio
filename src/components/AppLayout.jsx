import { Outlet } from "react-router";
import Navbar from "./navbar/Navbar";
import Themes from "./themes/Themes";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Themes />
    </>
  );
};

export default AppLayout;
