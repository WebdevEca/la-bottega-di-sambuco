import Vetrina from "../Vetrina/Vetrina_component";
import Footer from "../Footer/footerComponent";

const Orecchini = () => {
  return (
    <div>
      {" "}
      <Vetrina
        immagineVetrina={"orecchini"}
        categoriaProdotto={"ORECCHINI"}
        info={"**questa è una prova delle info"}
        prodotto={"orecchini"}
      />
      <Footer />
    </div>
  );
};

export default Orecchini;
