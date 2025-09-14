import logo_png from "../assets/shoe-running-icon.png";
import "./logo.css";
import classNames from "classnames";

export const Logo = () => {
  return (
    <div className={classNames("logo navbar-brand")}>
      <img src={logo_png} alt="Logo" />
      <h1>Shoes entertainment</h1>
    </div>
  );
};
