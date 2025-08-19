import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import isologo from "../../public/isologo.png";

AOS.init();

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 w-full h-[12vh] py-3 z-[100] backdrop-blur-sm border-b-2 bg-black/30">
      <div className="sticky flex items-center justify-around z-[100] w-5/6 mx-auto">
        <ul className="flex items-center h-12 gap-16 text-white">
          <li className="text-xl transition-all duration-300 hover:text-red-600">
            <a href="/">Home</a>
          </li>
          <li className="text-xl transition-all duration-300 hover:text-red-600">
            <a href="/about">About</a>
          </li>
          <li className="text-xl transition-all duration-300 hover:text-red-600">
            <a href="/schedule">Schedule</a>
          </li>
          <li className="text-xl transition-all duration-300 hover:text-red-600">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <a href="/">
          <img src={isologo} alt="" className="h-20" />
        </a>
        <div className="flex items-center h-full gap-1 text-white">
          <button
            className="flex items-center px-4 py-2 text-xl font-bold text-white transition-all duration-300 rounded-s-full hover:bg-red-500 hover:text-white hover:shadow-slate-400/50 hover:shadow-md"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button
            className="flex items-center px-10 py-2 text-xl transition-all duration-300 bg-none border-1 rounded-e-full font-extralight hover:border-red-500 hover:text-red-500 hover:shadow-slate-400/50 hover:shadow-md"
            onClick={() => navigate("/cms")}
          >
            CMS
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
