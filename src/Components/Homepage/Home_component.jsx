import NavBar from "../NavBar/NavBar_component";
import WelcomeSection from "./welcomeSection/welcomeSection_component";
import ShopSection from "./shopSection/shopComponent";
import FindMe from "./vieniATrovarmiSection/findMe_component";
import Footer from "../Footer/footerComponent";

const Home = () => {
  return (
    <div>
      <NavBar />
      <WelcomeSection />
      <ShopSection />
      {/* <FindMe /> */}
      <Footer />
    </div>
  );
};

export default Home;
