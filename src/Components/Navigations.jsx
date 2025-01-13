import { NavLink } from "react-router";
function Navigations() {
  return (
    <div>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contact"}>contact</NavLink>
    </div>
  );
}

export default Navigations;
