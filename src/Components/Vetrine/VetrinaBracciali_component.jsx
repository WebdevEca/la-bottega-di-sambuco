import Vetrina from "../Vetrina/Vetrina_component";
import Footer from "../Footer/footerComponent";

const Bracciali = () => {
  return (
    <div>
      {" "}
      <Vetrina
        immagineVetrina={"bracciali"}
        categoriaProdotto={"BRACCIALI"}
        info={"**questa è una prova delle info"}
        prodotto={"bracciali"}
      />
      <Footer />
    </div>
  );
};

export default Bracciali;
