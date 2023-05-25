import "./AboutMe_style.css";
import { ReactComponent as IconaSarta } from "../../Images/SVG/IconaCucito.svg";
import { ReactComponent as IconaSpecchio } from "../../Images/SVG/IconaSpecchio.svg";
import { ReactComponent as IconaArtigiana } from "../../Images/SVG/IconaArtigiana.svg";
import { ReactComponent as IconaFreccia } from "../../Images/SVG/FrecciaSVG.svg";
import Footer from "../Footer/footerComponent";

import NavBar from "../NavBar/NavBar_component";

const AboutMe = () => {
  const handleScrollToDescription = () => {
    const Description = document.getElementById("aboutMeDescription");
    Description.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="aboutMeContainer">
      <NavBar />
      <div className="aboutMeHome">
        <h1>Chiara</h1>
        <div className="aboutMeIcons">
          <div className="iconaSarta">
            <IconaSarta className="aboutMeIcon" />
            <p>Sarta</p>
          </div>
          <div className="iconaSpecchio">
            <IconaSpecchio className="aboutMeIcon" />
            <div className="specchioP">
              <p>SFX</p>
              <p>Makeup</p>
              <p>Artist</p>
            </div>
          </div>
          <div className="iconaArtigiana">
            <IconaArtigiana className="aboutMeIcon" />
            <p>Artigiana</p>
          </div>
        </div>
        <button className="bottoneFreccia" onClick={handleScrollToDescription}>
          <IconaFreccia className="iconaFreccia" />
        </button>
      </div>

      <div id="aboutMeDescription">
        <h1>Chi Sono</h1>
        <div className="Paragrafo">
          <p>Ciao! Io sono Chiara, una SFX Makeup Artist . </p>
          <p>
            Amo la creatività e coltivo questa passione attraverso la sartoria e
            l’artigianato sperimentando sempre idee nuove ed innovative.
          </p>
        </div>
        <div className="Paragrafo">
          <p>
            Il mio percorso di studi e l’esperienza lavorativa in teatro mi
            hanno permesso di sviluppare manualità e precisione, abilità che ho
            utilizzato{" "}
          </p>
          <p>
            nel campo dell’artigianato per realizzare i gioielli in rame e i
            capi d'abbigliamento che ti propongo in questo piccolo spazio che mi
            sono ritagliata.
          </p>
        </div>
        <div className="Paragrafo">
          <p>
            Insomma, sono una ragazza con interessi molto diversi che ama la
            sensazione di creare qualcosa con le proprie mani e vedere come le{" "}
          </p>
          <p>
            materie prime prendano forma e diventino qualcosa di concreto che
            faccia felice qualcuno. Spero di poter mettere in gioco le mie
          </p>
          <p>abilità per creare lavori unici e sorprendenti.</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMe;
