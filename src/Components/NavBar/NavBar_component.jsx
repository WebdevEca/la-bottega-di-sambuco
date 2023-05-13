import { ReactComponent as LogoSambuco } from "../../Images/SVG/LogoSambuco.svg";
import { ReactComponent as BurgerMenu } from "../../Images/SVG/BurgerMenu.svg";

import "./NavBar_style.css";

const NavBar = () => {
  return (
    <div id="NavBar">
      <LogoSambuco className="logoSambuco" />
      <BurgerMenu className="burgerMenu" />
    </div>
  );
};

export default NavBar;
