import { NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png"

import "./style.css"
function Navbar() {
  return (
    <nav className="navbar flex flex-row items-center justify-between p-4 bg-blue-200">
      <img className="logo" src={logo} alt="logo Wealth Health"/>
      <ul className="flex flex-row gap-x-4 ">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/employee-list"}>Employees list</NavLink>
      </ul>
    </nav>
  );
}

export default Navbar;
