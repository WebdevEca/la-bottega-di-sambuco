import { ReactComponent as LogoSambuco } from "../../Images/SVG/LogoSambuco.svg";
import { ReactComponent as BurgerMenu } from "../../Images/SVG/BurgerMenu.svg";
import { ReactComponent as IconX } from "../../Images/SVG/iconX.svg";

import { useState, useEffect } from "react";

import "./NavBar_style.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // stato di controllo per la modifica della navBar quando la pagina viene scrollata
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
  // < - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - >

  // Stato di controllo per il toogle dei navLinks quando il burger viene cliccato

  const handleMenuClick = () => {
    if (menuOpen) {
      document.querySelector(".navLinks").classList.add("slideOut");
      setTimeout(() => {
        setMenuOpen(!menuOpen);
        document.querySelector(".navLinks").classList.remove("slideOut");
      }, 500);
    } else {
      setMenuOpen(!menuOpen);
    }
  };
  // < - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - >

  return (
    <div
      id="NavBar"
      className={`${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}
    >
      <LogoSambuco className={`logoSambuco ${scrolled ? "scrolled" : ""}`} />
      <div className={`navLinks ${menuOpen ? "open" : "slideOut"}`}>
        <ul>
          <li>HOME</li>
          <li>CHI SONO</li>
          <li>NEWSLETTER</li>
        </ul>
      </div>
      {menuOpen ? (
        <IconX
          className={`burgerMenu  ${scrolled ? "scrolled" : ""} iconX`}
          onClick={handleMenuClick}
        />
      ) : (
        <BurgerMenu
          className={`burgerMenu ${scrolled ? "scrolled" : ""}`}
          onClick={handleMenuClick}
        />
      )}
    </div>
  );
};

export default NavBar;
