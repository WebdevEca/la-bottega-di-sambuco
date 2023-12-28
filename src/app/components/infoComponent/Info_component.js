import styles from "./infoStyle.module.css";
import Image from "next/image";

const Info = ({ subHead, text, img, srcImg, flex, textAlign }) => {
  return (
    <div className={`${styles.infoContainer} h-auto ${flex}`}>
      {/* -----SEZIONE TESTO----- */}
      <section
        className={`${styles.infoText} ${textAlign} flex flex-col justify-center gap-5`}
      >
        <h2 className="text-5xl">{subHead}</h2>
        <p className="text-2xl">{text}</p>
      </section>
      {/* -----FINE SEZIONE TESTO----- */}
      {/* -----SEZIONE IMMAGINE----- */}
      <section
        className={`${styles.infoImageContainer} w-full h-full relative`}
      >
        <Image
          src={img}
          alt={srcImg}
          fill
          className={`${styles.infoImage} object-cover`}
        />
      </section>
      {/* -----FINE SEZIONE IMMAGINE----- */}
    </div>
  );
};

export default Info;
