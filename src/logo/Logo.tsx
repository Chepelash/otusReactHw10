import logo_png from "../assets/shoe-running-icon.png";
import "./logo.css";

export const Logo = () => {
  return (
    <div className="logo">
      <img src={logo_png} alt="Logo" />
      <h1>Shoes entertainment</h1>
    </div>
  );
};
