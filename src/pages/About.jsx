import Nav from "../components/Nav";
import HeaderAbout from "../components/HeaderAbout";
import MainAbout from "../components/MainAbout";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="relative bg-black">
      <Nav />
      <HeaderAbout />
      <MainAbout />
      <Footer />
    </div>
  );
};
export default About;
