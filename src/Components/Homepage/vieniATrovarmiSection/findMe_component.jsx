import "./findMe_style.css";
import { ReactComponent as InstagramLink } from "../../../Images/SVG/InstagramLink.svg";
import { ReactComponent as FacebookLink } from "../../../Images/SVG/FacebookLink.svg";
import { ReactComponent as TikTokLink } from "../../../Images/SVG/TikTokLink.svg";
import { ReactComponent as LinkedInLink } from "../../../Images/SVG/LinkedInLink.svg";

const FindMe = () => {
  return (
    <div id="findMeContainer">
      <div className="totalContainer">
        <div className="textContainer">
          <h2>Ti aspetto a Novara e nei mercatini</h2>
          <h1>Vieni a trovarmi</h1>
          <h2>seguimi sui social per tutti gli aggiornamenti</h2>
        </div>

        <div className="iconContainer">
          <hr />

          <InstagramLink className="socialIcon" />
          <FacebookLink className="socialIcon" />
          <TikTokLink className="socialIcon" />
          <LinkedInLink className="socialIcon" />

          <hr />
        </div>
      </div>
    </div>
  );
};

export default FindMe;
