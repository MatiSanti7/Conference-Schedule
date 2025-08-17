import Nav from "../components/Nav";
import Header from "../components/Header";
import Speakers from "../components/MainSpeakers";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="relative transition-all duration-300 bg-black">
      <Nav />
      <Header />
      <Speakers />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default HomePage;
