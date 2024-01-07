"use client";

import styles from "./navBar.module.css";
import Logo from "../../../../public/SVG/Logo.svg";
import burgerMenu from "../../../../public/SVG/BurgerMenu.svg";
import Image from "next/image";
import Link from "next/link";
import closeIcon from "../../../../public/SVG/closeIcon.svg";
import { useState, useEffect } from "react";
const NavBar = () => {
  // ----- TOGGLE OPEN AND CLOSE FOR BURGER MENU -----
  const [isHidden, setHidden] = useState(true);

  function handleClick() {
    setHidden(!isHidden);
  }
  // ---------------------------------------------------

  // ------- TOGGLE BACKGROUND ANIMATION NAV BAR -------
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ---------------------------------------------------

  return (
    <div
      className={`${styles.navContainer} ${
        scrolling ? styles.scrolling : ""
      } flex justify-between items-center`}
    >
      <div className={`${styles.logoContainer}`}>
        <Link href="/">
          <Image src={Logo} alt="Logo della bottega di sambuco" />
        </Link>
      </div>
      <div className={`${styles.navLinkContainer} justify-center items-center`}>
        <Link href="/">
          <p className={styles.navLink}>HOME</p>
        </Link>
        <Link href="/vetrine">
          <p className={styles.navLink}>VETRINE</p>
        </Link>
        <p className={styles.navLink}>FAQ</p>
      </div>
      <div className={`${styles.burgerMenu}`}>
        <Image src={burgerMenu} alt="Icona Burger Menu" onClick={handleClick} />
      </div>

      <div
        className={`${styles.mobileMenu} absolute ${isHidden ? "hidden" : ""}`}
      >
        <div
          className={`${styles.closeButton} flex absolute w-full justify-end ${
            isHidden ? "hidden" : ""
          }`}
        >
          <Image
            src={closeIcon}
            width={50}
            height={50}
            alt="Close Icon"
            onClick={handleClick}
          />
        </div>
        <div
          className={`${styles.portableLinks} flex flex-col h-full justify-center items-center gap-10`}
        >
          <Link href="/">
            <p>HOME</p>
          </Link>
          <Link href="/shop">
            <p>VETRINE</p>
          </Link>
          <p>FAQ</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
