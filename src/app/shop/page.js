import styles from "./shopStyle.module.css";
import Image from "next/image";
import bannerImage from "../../../public/Images/shopBanner.webp";
import Footer from "../components/footer/Footer_component";
import Card from "../components/cardComponent/Card";

import backgroundAnelli from "../../../public/Images/cardBackgroundAnelli.webp";
import backgroundBracciali from "../../../public/Images/cardBackgroundBracciali.webp";
import backgroundCollane from "../../../public/Images/cardBackgroundCollane.webp";
import backgroundOrecchini from "../../../public/Images/cardBackgroundOrecchini.webp";
import backgroundVestiti from "../../../public/Images/cardBackgroundVestiti.webp";
import backgroundCorsetti from "../../../public/Images/cardBackgroundCorsetti.webp";

export default function Shop() {
  return (
    <div className={`${styles.shopContainer} flex flex-col`}>
      <h2 className="text-5xl text-center">
        ENTRA IN ARMONIA CON LE ENERGIE DELLA NATURA
      </h2>
      <p className="text-2xl text-center">
        Nel contesto della cristalloterapia, pietre e cristalli si rivelano
        straordinari alleati nel ripristino dell'equilibrio, sia fisico che
        mentale. In sintonia con le energie naturali, essi portano benefici al
        corpo, armonizzando le forze in momenti di squilibrio. Ogni cristallo
        evolve in simbiosi con chi lo possiede, trasformandosi in un compagno di
        viaggio che cresce insieme a noi nel corso della vita. Questa
        connessione unica apre la via a una rinascita dell'energia, sia mentale
        che fisica, conferendo al cristallo un ruolo prezioso nel nostro
        percorso di vita. Diventa così un alleato fondamentale che ci sostiene
        nel ritrovare l'energia necessaria per affrontare il cammino con
        consapevolezza e una forza interiore rinnovata
      </p>
      <div className={`${styles.bannerContainer} w-full relative`}>
        <h2 className="text-5xl w-full absolute text-center p-5">
          Scopri le ultime novità della Bottega di Sambuco
        </h2>
        <Image
          src={bannerImage}
          alt="Immagine delle novità"
          className={`${styles.bannerImage} object-fill w-full`}
        />
      </div>
      <div
        className={`${styles.cardsContainer} grid grid-flow-row grid-cols-4`}
      >
        <Card
          nome="Vetrina Anelli"
          backgroundImage={backgroundAnelli}
          vetrina="anelli"
        />
        <Card
          nome="Vetrina Bracciali"
          backgroundImage={backgroundBracciali}
          vetrina="bracciali"
        />
        <Card
          nome="Vetrina Collane"
          backgroundImage={backgroundCollane}
          vetrina="collane"
        />
        <Card
          nome="Vetrina Orecchini"
          backgroundImage={backgroundOrecchini}
          vetrina="Orecchini"
        />
        <Card
          nome="Vetrina Vestiti"
          backgroundImage={backgroundVestiti}
          vetrina="vestiti"
        />
        <Card
          nome="Vetrina Corsetti"
          backgroundImage={backgroundCorsetti}
          vetrina="corsetti"
        />
      </div>
      <Footer />
    </div>
  );
}
