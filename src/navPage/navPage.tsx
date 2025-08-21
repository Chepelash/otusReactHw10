import { NavLink, Outlet } from "react-router-dom";
import { Logo } from "../logo/Logo";
import "./navPage.css";
import classNames from "classnames";

export const NavPage = () => {
  return (
    <div>
      <div className="header">
        <Logo />
        <nav className="nav">
          <NavLink to="/" end className={classNames("navItem")}>
            {({ isActive }) => <span>{isActive ? "👉" : ""} Home</span>}
          </NavLink>
          <NavLink to="/operations" end className="navItem">
            {({ isActive }) => <span>{isActive ? "👉" : ""} Operations</span>}
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </div>
  );
};
