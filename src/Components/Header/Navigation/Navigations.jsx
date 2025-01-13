import { NavLink } from "react-router";
function Navigations() {
  return (
    <>
      <div className="Navigation">
        <div>Subha Bihani Digital Media Pvt. Ltd</div>
        <div>
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/portfilio"}>Portfoilio</NavLink>
          <NavLink to={"/service"}>Service</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </div>
    </>
  );
}

export default Navigations;
