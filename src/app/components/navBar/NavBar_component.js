import styles from "./navBar.module.css";
import Logo from "../../../../public/SVG/Logo.svg";
import burgerMenu from "../../../../public/SVG/BurgerMenu.svg";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className={`${styles.navContainer} flex justify-between items-center`}>
      <div className={`${styles.logoContainer}`}>
        <Link href="/">
          <Image src={Logo} alt="Logo della bottega di sambuco" />
        </Link>
      </div>
      <div
        className={`${styles.navLinkContainer} flex justify-center items-center`}
      >
        <Link href="/">
          <p>HOME</p>
        </Link>
        <Link href="/shop">
          <p>SHOP</p>
        </Link>
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
