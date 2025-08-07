import Nav from "../components/Nav";
import Footer from "../components/Footer";
import HeaderRegister from "../components/HeaderRegister";
import MainRegister from "../components/MainRegister";

const Register = () => {
  return (
    <div className="relative bg-black">
      <Nav />
      <HeaderRegister />
      <MainRegister />
      <Footer />
    </div>
  );
};

export default Register;
