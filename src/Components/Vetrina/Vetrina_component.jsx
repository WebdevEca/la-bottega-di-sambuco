import NavBar from "../NavBar/NavBar_component";

import vetrinaAnelli from "../../Images/ImmaginiVetrine/vetrinaAnelli.png";
import vetrinaBracciali from "../../Images/ImmaginiVetrine/vetrinaBracciali.png";
import vetrinaCollane from "../../Images/ImmaginiVetrine/vetrinaCollane.png";
import vetrinaOrecchini from "../../Images/ImmaginiVetrine/vetrinaOrecchini.png";
import vetrinaVestiti from "../../Images/ImmaginiVetrine/vetrinaVestiti.png";
import vetrinaCorsetti from "../../Images/ImmaginiVetrine/vetrinaCorsetti.png";

import Button from "../Buttons/button_component";
import { Card, AddCard } from "./Card/Card_component";
import { getAnelli } from "../../utils/firebase/firebase";

import "./vetrina_style.css";
import { useEffect, useState } from "react";

const vetrina = {
  anelli: vetrinaAnelli,
  bracciali: vetrinaBracciali,
  collane: vetrinaCollane,
  orecchini: vetrinaOrecchini,
  vestiti: vetrinaVestiti,
  corsetti: vetrinaCorsetti,
};

const Vetrina = ({ immagineVetrina, categoriaProdotto, info }) => {
  const backgroundVetrina = vetrina[immagineVetrina];
  const [anelli, setAnelli] = useState([]);

  const immagineSezioneStyle = {
    backgroundImage: `url(${backgroundVetrina})`,
  };

  useEffect(() => {
    const getAnelliMap = async () => {
      const anelliMap = await getAnelli();
      setAnelli(anelliMap);
    };
    getAnelliMap();
  }, []);

  return (
    <div id="vetrinaContainer">
      <NavBar />
      <section className="headImageVetrina" style={immagineSezioneStyle}>
        <h1>VETRINA {categoriaProdotto}</h1>
      </section>

      <section className="linkProdotti">
        <p>LE MIE ALTRE VETRINE:</p>
        <div className="pulsanti">
          <Button text={"Anelli"} iconName={"anello"} />
          <Button text={"Bracciali"} iconName={"bracciale"} />
          <Button text={"Collane"} iconName={"collana"} />
          <Button text={"Orecchini"} iconName={"orecchini"} />
          <Button text={"Vestiti"} iconName={"vestito"} />
          <Button text={"Corsetti"} iconName={"corsetto"} />
        </div>
      </section>

      <section className="shopProduct">
        {anelli.map((anello, index) => (
          <Card
            key={index}
            link={anello.imageUrl}
            nomeProdotto={anello.name}
            info={anello.taglia}
            pietra={anello.pietra}
          />
        ))}
        <AddCard />
      </section>

      <p className="shopInfo">{info}</p>
    </div>
  );
};

export default Vetrina;
