import NavBar from "../NavBar/NavBar_component";
import WelcomeSection from "./welcomeSection/welcomeSection_component";
import ShopSection from "./shopSection/shopComponent";

const Home = () => {
  return (
    <div>
      <NavBar />
      <WelcomeSection />
      <ShopSection />
    </div>
  );
};

export default Home;
