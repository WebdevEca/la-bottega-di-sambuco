import Vetrina from "../Vetrina/Vetrina_component";
import Footer from "../Footer/footerComponent";

const Corsetti = () => {
  return (
    <div>
      {" "}
      <Vetrina
        immagineVetrina={"corsetti"}
        categoriaProdotto={"CORSETTI"}
        info={"**questa è una prova delle info"}
        prodotto={"corsetti"}
      />
      <Footer />
    </div>
  );
};

export default Corsetti;
