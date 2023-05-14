import Button from "../../Buttons/button_component";

import "./shop_style.css";

const ShopSection = () => {
  return (
    <div id="shopContainer">
      <div className="shopHeader">
        <h2>Vieni a scoprire il mio mondo </h2>
        <h1>Evolvi il Tuo Stile</h1>
        <h2>Per un look sofisticato e di tendenza</h2>
      </div>

      <div className="bottoni">
        <div className="bottoniSuperiori">
          <Button text="Anelli" iconName="anello" />
          <Button text="Bracciali" iconName="bracciale" />
          <Button text="Collane" iconName="collana" />
          <Button text="Orecchini" iconName="orecchini" />
        </div>

        <div className="bottoniInferiori">
          <Button text="Vestiti" iconName="vestito" />
          <Button text="Corsetti" iconName="corsetto" />
        </div>
      </div>
    </div>
  );
};

export default ShopSection;
