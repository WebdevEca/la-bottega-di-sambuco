import "./welcomeSection_style.css";

const WelcomeSection = () => {
  const handleScrollToShop = () => {
    const shopSection = document.getElementById("shopContainer");
    shopSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="welcomeContainer">
      <div className="welcomeHeader">
        <h2>Ti do il benvenuto a</h2>
        <h1> La Bottega di Sambuco</h1>
        <h2>Scopri la bellezza unica delle mie creazioni</h2>
        <button onClick={handleScrollToShop}>Esplora la mia Arte</button>
      </div>
    </div>
  );
};

export default WelcomeSection;
