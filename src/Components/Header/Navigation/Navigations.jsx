import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import "./nav.css";
import { useState } from "react";
function Navigations() {
  const [showMediaIcon, setShowMediaIcon] = useState();
  return (
    <>
      <div className="Navigation">
        <div className="nav-title" style={{ color: "162171" }}>
          Subha Bihani Digital Media Pvt. Ltd
        </div>
        <div className={showMediaIcon ? "mobile-nav-links" : "nav-links"}>
          <ul>
            <li>
              <NavLink to={"/home"} style={{ color: "#007bff" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/portfolio"}>Portfoilio</NavLink>
            </li>
            <li>
              <NavLink to={"/service"}>Service</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div
          className="Hambergmenu"
          onClick={() => setShowMediaIcon(!showMediaIcon)}
        >
          <a href="#">
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </>
  );
}

export default Navigations;
