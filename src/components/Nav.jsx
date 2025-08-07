import AOS from "aos";
import "aos/dist/aos.css";
import isologo from "../../public/isologo.png";

AOS.init();

const Nav = () => {
  return (
    <nav className="fixed top-0 w-full h-[12vh] py-3 z-50 backdrop-blur-sm border-b-2">
      <div className="sticky z-20 flex items-center justify-between w-5/6 mx-auto ">
        <a href="/">
          <img src={isologo} alt="" className="h-20" />
        </a>
        <ul className="flex gap-16 text-white">
          <li className="text-xl transition-all duration-300 hover:text-red-600">
            <a href="/home">Home</a>
          </li>
          <li className="text-xl transition-all duration-300 hover:text-red-600">
            <a href="/about">About</a>
          </li>
          <li className="text-xl transition-all duration-300 hover:text-red-600">
            <a href="/schedule">Schedule</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
