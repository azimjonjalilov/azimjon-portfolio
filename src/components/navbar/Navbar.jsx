import { links } from "../../Data";
import { NavLink } from "react-router";
import { RiCloseLine } from "react-icons/ri";
import { RiMenuLine } from "react-icons/ri";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav-menu show-menu" : "nav-menu"}`}>
        <ul className="nav-list grid">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav" : "nav-link"
                  }
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {icon}

                  <h3 className="nav-name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>

        <RiCloseLine
          className="nav-close"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>

      <div className="nav-toggle" onClick={() => setShowMenu(!showMenu)}>
        <RiMenuLine />
      </div>
    </nav>
  );
};

export default Navbar;
