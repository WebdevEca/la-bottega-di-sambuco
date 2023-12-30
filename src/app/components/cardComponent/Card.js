import styles from "./cardStyle.module.css";
import Image from "next/image";

const Card = ({ nome, backgroundImage, vetrina }) => {
  return (
    <div
      className={`${styles.cardContainer} flex justify-center w-full relative`}
    >
      <Image
        src={backgroundImage}
        alt={`Immagine di background della vetrina ${vetrina}`}
        className="w-full h-full object-cover
      "
      />
      <h2 className="absolute text-2xl">{nome}</h2>
    </div>
  );
};

export default Card;
