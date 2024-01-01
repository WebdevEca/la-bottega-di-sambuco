import styles from "./shopCard.module.css";

import Image from "next/image";

const ShopCard = ({
  Immagine,
  nomeProdotto,
  infoAnello,
  disponibilità,
  prezzo,
}) => {
  return (
    <div className={`${styles.shopCardContainer} flex flex-col`}>
      <div className={`${styles.cardImage} flex justify-center w-full h-auto`}>
        <Image
          src={Immagine}
          className={`${styles.cardBanner} w-full object-cover`}
        />
      </div>

      <div className={`${styles.cardText} flex flex-col`}>
        <p className={styles.nomeProdotto}>{nomeProdotto}</p>
        <p className={styles.infoAnello}>{infoAnello}</p>
        <p className={styles.infoAnello}>Disponibilità: {disponibilità}</p>
        <h2 className={styles.prezzo}>Prezzo: {prezzo}$</h2>
      </div>
    </div>
  );
};

export default ShopCard;
