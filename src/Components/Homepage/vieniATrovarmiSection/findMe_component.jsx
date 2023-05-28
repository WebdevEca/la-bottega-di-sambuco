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

          <a href="https://www.instagram.com/la_bottega_di_sambuco/">
            <InstagramLink className="socialIcon" />
          </a>
          <a href="https://www.facebook.com/Claire.sfx">
            <FacebookLink className="socialIcon" />
          </a>
          <a href="https://www.tiktok.com/@labottegadisambuco?_t=8as3jiioi9m&_r=1">
            <TikTokLink className="socialIcon" />
          </a>

          <a href="blank">
            <LinkedInLink className="socialIcon" />
          </a>

          <hr />
        </div>
      </div>
    </div>
  );
};

export default FindMe;
