import { ReactComponent as LogoSambuco } from "../../Images/SVG/LogoSambuco.svg";
import { ReactComponent as BurgerMenu } from "../../Images/SVG/BurgerMenu.svg";

import { useState, useEffect } from "react";

import "./NavBar_style.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="NavBar" className={scrolled ? "scrolled" : ""}>
      <LogoSambuco className={`logoSambuco ${scrolled ? "scrolled" : ""}`} />
      <BurgerMenu className={`burgerMenu ${scrolled ? "scrolled" : ""}`} />
    </div>
  );
};

export default NavBar;
