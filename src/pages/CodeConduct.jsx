import Nav from "../components/Nav";
import HeaderCodeCoduct from "../components/HeaderCodeCoduct";
import Footer from "../components/Footer";
import MainCodeCoduct from "../components/MainCodeCoduct";

export default function CodeConduct() {
  return (
    <div className="relative bg-black">
      <Nav />
      <HeaderCodeCoduct />
      <MainCodeCoduct />
      <Footer />
    </div>
  );
}
