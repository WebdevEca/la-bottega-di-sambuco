import styles from "./vetrina.module.css";
import Image from "next/image";
import bannerImage from "../../../../public/Images/shopBanner.webp";
import ShopCard from "../shopCardComponent/ShopCard";
import Footer from "../footer/Footer_component";

const Vetrina = ({ id, tipo, nomeProdotto, infoProdotto }) => {
  return (
    <div className={`${styles.windowContainer} flex flex-col`}>
      <div className={`${styles.bannerContainer} w-full relative`}>
        <h2 className="flex justify-center text-5xl w-full h-full absolute items-center">
          Vetrina {tipo}
        </h2>
        <Image
          src={bannerImage}
          alt={`Immagine vetrina ${tipo}`}
          className={`${styles.bannerImage} object-cover w-full`}
        />
      </div>

      <div
        className={`${styles.cardCollection} grid grid-flow-row grid-cols-4`}
      >
        <ShopCard
          numero={`${id}`}
          Immagine={bannerImage}
          nomeProdotto={`${nomeProdotto}`}
          infoAnello={`${infoProdotto}`}
        />
        <ShopCard
          numero="1"
          Immagine={bannerImage}
          nomeProdotto="Anello di peppe"
          infoAnello="Anello a fascia, taglia 25, rubino"
          disponibilità={25}
          prezzo="999"
        />
        <ShopCard
          numero="1"
          Immagine={bannerImage}
          nomeProdotto="Anello di peppe"
          infoAnello="Anello a fascia, taglia 25, rubino"
          disponibilità={25}
          prezzo="999"
        />
        <ShopCard
          numero="1"
          Immagine={bannerImage}
          nomeProdotto="Anello di peppe"
          infoAnello="Anello a fascia, taglia 25, rubino"
          disponibilità={25}
          prezzo="999"
        />
        <ShopCard
          numero="1"
          Immagine={bannerImage}
          nomeProdotto="Anello di peppe"
          infoAnello="Anello a fascia, taglia 25, rubino"
          disponibilità={25}
          prezzo="999"
        />
        <ShopCard
          numero="1"
          Immagine={bannerImage}
          nomeProdotto="Anello di peppe"
          infoAnello="Anello a fascia, taglia 25, rubino"
          disponibilità={25}
          prezzo="999"
        />
      </div>
      <p className={`${styles.textInfo} text-center`}>
        Le mie creazioni sono interamente realizzate a mano, pertanto la
        disponibilità è limitata, e ogni singolo pezzo ha le sue particolarità.
        Nel caso in cui gradissi un prodotto specifico ma non riscontri la tua
        misura in esposizione o desiderassi una pietra diversa, ti invito a
        metterti in contatto con me. Sarò lieta di fare il possibile per
        soddisfare le tue esigenze
      </p>

      <Footer />
    </div>
  );
};

export default Vetrina;
