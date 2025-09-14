import { NavLink, Outlet } from "react-router-dom";
import { Logo } from "../logo/Logo";

export const NavPage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <Logo />
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <NavLink to="/" end className="nav-item">
            {({ isActive }) => (
              <span className="nav-link">{isActive ? "👉" : ""} Home</span>
            )}
          </NavLink>
          <NavLink to="/operations" end className="nav-item">
            {({ isActive }) => (
              <span className="nav-link">
                {isActive ? "👉" : ""} Operations
              </span>
            )}
          </NavLink>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};
