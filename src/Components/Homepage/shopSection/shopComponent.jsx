import Button from "../../Buttons/button_component";
import { Link } from "react-router-dom";

// lo style classe linkComponent si trova nel css della navBar

import "./shop_style.css";

const ShopSection = () => {
  return (
    <div id="shopContainer">
      <section className="shopHeader">
        <h2>Vieni a scoprire il mio mondo </h2>
        <h1>Evolvi il Tuo Stile</h1>
        <h2>Per un look sofisticato e di tendenza</h2>
      </section>

      <section className="Pulsanti">
        <Link to={`anelli/`} className="linkComponent">
          <Button text="Anelli" iconName="anello" />
        </Link>
        <Link to={`bracciali/`} className="linkComponent">
          <Button text="Bracciali" iconName="bracciale" />
        </Link>
        <Link to={`collane/`} className="linkComponent">
          <Button text="Collane" iconName="collana" />
        </Link>
        <Link to={`orecchini/`} className="linkComponent">
          <Button text="Orecchini" iconName="orecchini" />
        </Link>
        <Link to={`vestiti/`} className="linkComponent">
          <Button text="Vestiti" iconName="vestito" />
        </Link>
        <Link to={`corsetti/`} className="linkComponent">
          <Button text="Corsetti" iconName="corsetto" />
        </Link>
      </section>
    </div>
  );
};

export default ShopSection;
