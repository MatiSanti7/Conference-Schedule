import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const irASpeakers = () => {
    navigate("/home", { replace: false });

    // Esperar que el DOM se actualice
    setTimeout(() => {
      const el = document.getElementById("speakers");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay pequeño para permitir que se monte el contenido
  };
  const irAFoodOptions = () => {
    navigate("/accommodation-meals", { replace: false });
    // Esperar que el DOM se actualice
    setTimeout(() => {
      const el = document.getElementById("foodOptions");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay pequeño para permitir que se monte el contenido
  };
  const irAHotelOptions = () => {
    navigate("/accommodation-meals", { replace: false });
    // Esperar que el DOM se actualice
    setTimeout(() => {
      const el = document.getElementById("hotelOptions");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay pequeño para permitir que se monte el contenido
  };

  const irASponsors = () => {
    navigate("/home", { replace: false });
    // Esperar que el DOM se actualice
    setTimeout(() => {
      const el = document.getElementById("sponsors");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay pequeño para permitir que se monte el contenido
  };
  const irAFAQ = () => {
    navigate("/about", { replace: false });
    // Esperar que el DOM se actualice
    setTimeout(() => {
      const el = document.getElementById("faq");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay pequeño para permitir que se monte el contenido
  };
  return (
    <footer className="relative z-50 w-full mx-auto text-white border-t-2 border-white bg-black/70 backdrop-blur-sm">
      <div className="flex justify-between w-5/6 mx-auto py-14">
        <ul className="grid grid-cols-3 text-xl gap-x-32 gap-y-5">
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="/home">Home</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="/about">About</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="/schedule">Schedule</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a onClick={irASpeakers} className="cursor-pointer">
              Speakers
            </a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="/register">Register</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="/code-of-conduct">Code of Coduct</a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a onClick={irAFoodOptions} className="cursor-pointer">
              Food Options
            </a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a onClick={irAHotelOptions} className="cursor-pointer">
              Hotel Options
            </a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a onClick={irASponsors} className="cursor-pointer">
              Sponsors
            </a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a onClick={irAFAQ} className="cursor-pointer">
              FAQ
            </a>
          </li>
          <li className="transition-all duration-300 hover:text-red-500">
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <ul className="grid grid-cols-4 gap-5 text-4xl">
          <li>
            <a href="">
              <i
                className="transition-all duration-300 hover:text-red-500 fa fa-facebook-official"
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a href="">
              <i
                className="transition-all duration-300 hover:text-red-500 fa fa-instagram "
                aria-hidden="true"
              ></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="transition-all duration-300 hover:text-red-500 fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="">
              <i className="transition-all duration-300 hover:text-red-500 fa fa-youtube"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
