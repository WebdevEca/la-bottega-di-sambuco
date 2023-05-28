import { ReactComponent as LogoSambuco } from "../../Images/SVG/LogoSambuco.svg";
import { ReactComponent as BurgerMenu } from "../../Images/SVG/BurgerMenu.svg";
import { ReactComponent as IconX } from "../../Images/SVG/iconX.svg";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./NavBar_style.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

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

  // Funzione per impostare lo stato del link attivo
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

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
          <li>
            {" "}
            <Link
              to={`/`}
              className={`linkComponent ${
                activeLink === "home" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("home")}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to={`/about_me/`}
              className={`linkComponent ${
                activeLink === "chi_sono" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("chi_sono")}
            >
              CHI SONO
            </Link>
          </li>
          <li>
            <Link
              to={`newsletter`}
              className={`linkComponent ${
                activeLink === "newsletter" ? "active" : ""
              }`}
              onClick={() => handleLinkClick("newsletter")}
            >
              NEWSLETTER
            </Link>
          </li>
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
