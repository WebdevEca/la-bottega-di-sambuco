import Vetrina from "../Vetrina/Vetrina_component";
import Footer from "../Footer/footerComponent";

const Anelli = () => {
  return (
    <div>
      {" "}
      <Vetrina
        immagineVetrina={"anelli"}
        categoriaProdotto={"ANELLI"}
        info={"**questa è una prova delle info"}
        prodotto={"anelli"}
      />
      <Footer />
    </div>
  );
};

export default Anelli;
