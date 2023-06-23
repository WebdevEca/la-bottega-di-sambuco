import Vetrina from "../Vetrina/Vetrina_component";
import Footer from "../Footer/footerComponent";

const Vestiti = () => {
  return (
    <div>
      {" "}
      <Vetrina
        immagineVetrina={"vestiti"}
        categoriaProdotto={"VESTITI"}
        info={"**questa è una prova delle info"}
        prodotto={"vestiti"}
      />
      <Footer />
    </div>
  );
};

export default Vestiti;
