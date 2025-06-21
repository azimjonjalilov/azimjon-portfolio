import { links } from "../../Data";
import { NavLink } from "react-router";
import { RiCloseLine } from "react-icons/ri";
import { RiMenuLine } from "react-icons/ri";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav-menu">
        <ul className="nav-list grid">
          {links.map(({ name, icon, path }, index) => {
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active-nav" : "nav-link"
                  }
                >
                  {icon}

                  <h3 className="nav-name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>

        <RiCloseLine className="nav-close" />
      </div>

      <div className="nav-toggle">
        <RiMenuLine />
      </div>
    </nav>
  );
};

export default Navbar;
