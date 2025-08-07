import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeaderContact from "../components/HeaderContact";
import MainContact from "../components/MainContact";

const Contact = () => {
  return (
    <div className="relative bg-black">
      <Nav />
      <HeaderContact />
      <MainContact />
      <Footer />
    </div>
  );
};

export default Contact;
