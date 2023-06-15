import "./card_style.css";

const Card = ({ link, nomeProdotto, taglia, pietra }) => {
  return (
    <div id="cardContainer">
      <section className="cardImage">
        <img src={link} alt="Immagine del prodotto" />
      </section>
      <section className="cardInfo">
        <h1>{nomeProdotto}</h1>
        <p>Taglia: {taglia}</p>
        <p>Pietra: {pietra}</p>
        <button>Contattami Ora</button>
      </section>
    </div>
  );
};

const AddCard = () => {
  return (
    <div id="addCardContainer">
      <button className="addCard">
        <h1>+</h1>
      </button>
    </div>
  );
};

export { Card, AddCard };
