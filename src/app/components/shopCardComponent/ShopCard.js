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
          alt="Immagine Prodotto"
        />
      </div>

      <div className={`${styles.cardText} flex flex-col`}>
        <p className={styles.nomeProdotto}>{nomeProdotto}</p>
        <p className={styles.infoAnello}>{infoAnello}</p>
      </div>
    </div>
  );
};

export default ShopCard;
