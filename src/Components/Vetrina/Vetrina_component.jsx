import NavBar from "../NavBar/NavBar_component";

import vetrinaAnelli from "../../Images/ImmaginiVetrine/vetrinaAnelli.png";
import vetrinaBracciali from "../../Images/ImmaginiVetrine/vetrinaBracciali.png";
import vetrinaCollane from "../../Images/ImmaginiVetrine/vetrinaCollane.png";
import vetrinaOrecchini from "../../Images/ImmaginiVetrine/vetrinaOrecchini.png";
import vetrinaVestiti from "../../Images/ImmaginiVetrine/vetrinaVestiti.png";
import vetrinaCorsetti from "../../Images/ImmaginiVetrine/vetrinaCorsetti.png";

import Button from "../Buttons/button_component";
import { Card } from "./Card/Card_component";
import { getOggetti } from "../../utils/firebase/firebase";

import "./vetrina_style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const vetrina = {
  anelli: vetrinaAnelli,
  bracciali: vetrinaBracciali,
  collane: vetrinaCollane,
  orecchini: vetrinaOrecchini,
  vestiti: vetrinaVestiti,
  corsetti: vetrinaCorsetti,
};

const Vetrina = ({ immagineVetrina, categoriaProdotto, info, prodotto }) => {
  const backgroundVetrina = vetrina[immagineVetrina];
  const [oggetti, setOggetti] = useState([]);

  const immagineSezioneStyle = {
    backgroundImage: `url(${backgroundVetrina})`,
  };

  useEffect(() => {
    const getOggettiMap = async () => {
      const oggettiMap = await getOggetti(prodotto);
      setOggetti(oggettiMap);
    };
    getOggettiMap();
  }, [prodotto]);

  return (
    <div id="vetrinaContainer">
      <NavBar />
      <section className="headImageVetrina" style={immagineSezioneStyle}>
        <h1>VETRINA {categoriaProdotto}</h1>
      </section>

      <section className="linkProdotti">
        <p>LE MIE ALTRE VETRINE:</p>
        <div className="pulsanti">
          <Link to={`/anelli/`} className="linkComponent">
            <Button text="Anelli" iconName="anello" />
          </Link>
          <Link to={`/bracciali/`} className="linkComponent">
            <Button text="Bracciali" iconName="bracciale" />
          </Link>
          <Link to={`/collane/`} className="linkComponent">
            <Button text="Collane" iconName="collana" />
          </Link>
          <Link to={`/orecchini/`} className="linkComponent">
            <Button text="Orecchini" iconName="orecchini" />
          </Link>
          <Link to={`/vestiti/`} className="linkComponent">
            <Button text="Vestiti" iconName="vestito" />
          </Link>
          <Link to={`/corsetti/`} className="linkComponent">
            <Button text="Corsetti" iconName="corsetto" />
          </Link>
        </div>
      </section>

      <p className="shopInfo">{info}</p>

      <section className="shopProduct">
        {oggetti.map((anello, index) => (
          <Card
            key={index}
            link={anello.imageUrl}
            nomeProdotto={anello.name}
            info={anello.taglia}
            pietra={anello.pietra}
          />
        ))}
      </section>
    </div>
  );
};

export default Vetrina;
