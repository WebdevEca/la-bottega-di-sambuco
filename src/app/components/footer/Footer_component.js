import styles from "./styleFooter.module.css";
import Image from "next/image";

import Instagram from "../../../../public/SVG/InstagramIcon.svg";
import Facebook from "../../../../public/SVG/FacebookIcon.svg";
import TikTok from "../../../../public/SVG/TikTokIcon.svg";

const Footer = () => {
  return (
    <div
      className={`${styles.footerContainer} flex flex-col justify-center items-center`}
    >
      <p className="text-2xl font-bold">
        La community della Bottega di Sambuco
      </p>
      <div className={`${styles.socialIcons} flex flex-row`}>
        <Image
          src={Instagram}
          width={25}
          height={25}
          alt="Icona Instagram"
          className={styles.socialIcon}
        />
        <Image
          src={Facebook}
          width={13.9}
          height={25}
          alt="Icona Facebook "
          className={styles.socialIcon}
        />
        <Image
          src={TikTok}
          width={25}
          height={25}
          alt="Icona Tik Tok"
          className={styles.socialIcon}
        />
      </div>
      <p className="text-2xl">
        @ 2023 La Bottega di Sambuco Tutti i diritti riservati
      </p>
    </div>
  );
};

export default Footer;
