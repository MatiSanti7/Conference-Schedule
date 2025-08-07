import Nav from "../components/Nav";
import Header from "../components/Header";
import EventHighlight from "../components/EventHighlight";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="relative transition-all duration-300 bg-black">
      <Nav />
      <Header />
      <EventHighlight />
      <Footer />
    </div>
  );
};

export default HomePage;
