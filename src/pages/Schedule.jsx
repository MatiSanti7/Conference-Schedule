import Footer from "../components/Footer";
import Nav from "./../components/Nav";
import HeaderSchedule from "./../components/HeaderSchedule";
import MainSchedule from "../components/MainSchedule";

export default function Schedule() {
  return (
    <div className="relative bg-black ">
      <Nav />
      <HeaderSchedule />
      <MainSchedule />
      <Footer />
    </div>
  );
}
