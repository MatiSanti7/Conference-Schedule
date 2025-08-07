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
        <ul className="flex items-center h-12 gap-16 text-white">
          <li className="text-xl transition-all duration-300 hover:text-red-600">
            <a href="/about">About</a>
          </li>
          <li className="text-xl transition-all duration-300 hover:text-red-600">
            <a href="/schedule">Schedule</a>
          </li>
          <li className="text-xl transition-all duration-300 hover:text-red-600">
            <a href="/schedule">Contact</a>
          </li>
          <li className="flex items-center h-full text-xl font-bold text-black transition-all duration-300 bg-white rounded-full cursor-pointer hover:bg-red-600 hover:text-white hover:shadow-slate-400/50 hover:shadow-md">
            <a href="/schedule" className="px-10">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
