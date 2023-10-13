import "./Main.css";
import Header from "../Header/Header";
import Promo from "../Promo/Promo";
import NavInfo from "../NavInfo/NavInfo"
import AboutProject from "../AboutProject/AboutProject";
import Stack from "../Stack/Stack";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function Main({ isLogged }) {
  return (
    <>
      <main>
      <Header isLogged={isLogged} />
        <Promo />
        <NavInfo />
        <AboutProject />
        <Stack />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default Main;
