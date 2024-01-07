import styles from "./page.module.css";
import Link from "next/link";

import Info from "./components/infoComponent/Info_component";
import Footer from "./components/footer/Footer_component";

import Info1 from "../../public/Images/Info1.webp";
import Info2 from "../../public/Images/Info2.webp";
import Info3 from "../../public/Images/Info3.webp";

export default function Home() {
  return (
    <div className={`${styles.homeContainer}`}>
      {/* ------ HERO SECTION ------ */}
      <section className={`${styles.heroSection} flex flex-col justify-center`}>
        <h1>
          Scopri <br />
          la bellezza unica <br />
          delle mie creazioni
        </h1>
        <h2>ti do il benvenuto nella Bottega di Sambuco</h2>
        <div className={`${styles.buttonContainer} flex items-center`}>
          <Link href="/vetrine">
            <button>Esplora la mia arte</button>
          </Link>
          <p>Scopri chi sono</p>
        </div>
      </section>
      {/* ------ END HERO SECTION ------ */}

      {/* ------ INFO SECTION ------ */}
      <section className={`${styles.infoSection} flex flex-col`}>
        <h2 className="text-5xl font-bold text-center">Ciao! Io sono Chiara</h2>
        <Info
          subHead="Dallo studio al palco"
          text="Amo la creatività, dopo aver terminato il mio percorso di studi 
          come SFX Makeup Artist ho intrapreso un'esperienza lavorativa nel mondo teatrale. "
          img={Info1}
          srcImg="Immagine trucchi"
          flex="flex flex-row"
          textAlign="text-left"
        />

        <Info
          subHead="Da Truccatrice ad Artigiana"
          text="Questo periodo non solo ha arricchito il mio bagaglio 
          professionale come truccatrice specializzata in effetti speciali, 
          ma ha contribuito allo sviluppo delle mie abilità manuali e di precisione 
          attraverso l'arte della sartoria."
          img={Info2}
          srcImg="Immagine sartoria"
          flex="flex flex-row-reverse"
          textAlign="text-right"
        />

        <Info
          subHead="Fondazione della Bottega"
          text="Ho scelto di mettere in pratica queste abilità nel campo dell'artigianato, 
          creando gioielli in rame che con entusiasmo propongo online e nei mercatini 
          durante le fiere in giro per l'Italia"
          img={Info3}
          srcImg="Immagine gioielli"
          flex="flex flex-row"
          textAlign="text-left"
        />

        <p className="text-center text-2xl">
          Insomma, sono una ragazza con interessi molto diversi che ama la
          sensazione di creare qualcosa con le proprie mani e vedere come le
          materie prime prendano forma e diventino qualcosa di concreto che
          faccia felice qualcuno. Spero di poter continuare a combinare le mie
          abilità per creare lavori sempre piu unici e sorprendenti.
        </p>
      </section>
      {/* ------FINE INFO SECTION ------ */}
      {/* ------NEWSLETTER SECTION ------ */}
      <section
        className={`${styles.newsletterSection} flex flex-col w-full h-full items-center justify-center`}
      >
        <h2 className="text-5xl text-center">
          Ricevi gli aggiornamenti sui miei prodotti e sulle date delle fiere
        </h2>
        <form className={`${styles.newsletterForm} w-full text-2xl`}>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Inserisci il tuo indirizzo Email"
            className="w-full text-center"
          />
          <button className={`${styles.formButton} w-full text-2x1 font-bold`}>
            Iscriviti alla Newsletter
          </button>
        </form>
      </section>
      {/* ------FINE NEWSLETTER SECTION ------ */}
      {/* ------FOOTER SECTION ------ */}
      <Footer />
      {/* ------FINE FOOTER SECTION ------ */}
    </div>
  );
}
