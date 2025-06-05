import imagenForge from "../assets/Fundacion-Forge-Logo.svg";
import { Megamenu } from "./Megamenu.jsx";
import "./Header.css";

export const Header = () => {
  return (
    <div className="container">
      <img
        className="logo-forge"
        alt="Logo de la fundación forge"
        src={imagenForge}
      />
      <Megamenu className="menu" />
    </div>
  );
};
