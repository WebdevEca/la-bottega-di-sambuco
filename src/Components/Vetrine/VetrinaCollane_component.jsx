import Vetrina from "../Vetrina/Vetrina_component";
import Footer from "../Footer/footerComponent";

const Collane = () => {
  return (
    <div>
      {" "}
      <Vetrina
        immagineVetrina={"collane"}
        categoriaProdotto={"COLLANE"}
        info={"**questa è una prova delle info"}
        prodotto={"collane"}
      />
      <Footer />
    </div>
  );
};

export default Collane;
