import styles from "./navBar.module.css";
import Logo from "../../../../public/SVG/Logo.svg";
import burgerMenu from "../../../../public/SVG/BurgerMenu.svg";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className={`${styles.navContainer} flex justify-between items-center`}>
      <div className={`${styles.logoContainer}`}>
        <Image src={Logo} alt="Logo della bottega di sambuco" />
      </div>
      <div
        className={`${styles.navLinkContainer} flex justify-center items-center`}
      >
        <p>HOME</p>
        <p>SHOP</p>
        <p>FAQ</p>
      </div>
      <div className={`${styles.burgerMenu}`}>
        <Image
          src={burgerMenu}
          width={37.5}
          height={25}
          alt="Icona Burger Menu"
        />
      </div>
    </div>
  );
};

export default NavBar;
