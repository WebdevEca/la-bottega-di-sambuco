import NavBar from "../NavBar/NavBar_component";

import vetrinaAnelli from "../../Images/ImmaginiVetrine/vetrinaAnelli.png";
import vetrinaBracciali from "../../Images/ImmaginiVetrine/vetrinaBracciali.png";
import vetrinaCollane from "../../Images/ImmaginiVetrine/vetrinaCollane.png";
import vetrinaOrecchini from "../../Images/ImmaginiVetrine/vetrinaOrecchini.png";
import vetrinaVestiti from "../../Images/ImmaginiVetrine/vetrinaVestiti.png";
import vetrinaCorsetti from "../../Images/ImmaginiVetrine/vetrinaCorsetti.png";

import Button from "../Buttons/button_component";

import "./vetrina_style.css";

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

  const immagineSezioneStyle = {
    backgroundImage: `url(${backgroundVetrina})`,
  };

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
        <h1>prodotto 1</h1>
        <h1>prodotto 2</h1>
        <h1>prodotto 3</h1>
        <h1>prodotto 4</h1>
        <h1>prodotto 5</h1>
        <h1>prodotto 6</h1>
      </section>

      <p className="shopInfo">{info}</p>
    </div>
  );
};

export default Vetrina;
