import { ReactComponent as IconaAnello } from "../../Images/SVG/IconaAnello.svg";
import { ReactComponent as IconaBracciale } from "../../Images/SVG/IconaBracciale.svg";
import { ReactComponent as IconaCollana } from "../../Images/SVG/IconaCollana.svg";
import { ReactComponent as IconaOrecchini } from "../../Images/SVG/IconaOrecchino.svg";
import { ReactComponent as IconaVestito } from "../../Images/SVG/IconaVestito.svg";
import { ReactComponent as IconaCorsetto } from "../../Images/SVG/IconaCorsetto.svg";

import "./button_style.css";

const icons = {
  anello: IconaAnello,
  bracciale: IconaBracciale,
  collana: IconaCollana,
  orecchini: IconaOrecchini,
  vestito: IconaVestito,
  corsetto: IconaCorsetto,
};

const Button = ({ text, iconName }) => {
  const IconComponent = icons[iconName];
  return (
    <button className="btn">
      <IconComponent className="btnIcon" />
      <h3>{text}</h3>
    </button>
  );
};

export default Button;
