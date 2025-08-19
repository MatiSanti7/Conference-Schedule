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
      const el = document.getElementById("foods");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // delay pequeño para permitir que se monte el contenido
  };
  const irAHotelOptions = () => {
    navigate("/accommodation-meals", { replace: false });
    // Esperar que el DOM se actualice
    setTimeout(() => {
      const el = document.getElementById("hotels");
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
        <ul className="grid grid-cols-4 text-xl gap-y-4 gap-x-10">
          <div>
            <li>
              <a
                href="/home"
                className="font-semibold transition-all duration-300 hover:text-red-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={irASpeakers}
                className="transition-all duration-300 cursor-pointer hover:text-red-500 font-extralight"
              >
                Speakers
              </a>
            </li>
            <li>
              <a
                onClick={irASponsors}
                className="transition-all duration-300 cursor-pointer hover:text-red-500 font-extralight"
              >
                Sponsors
              </a>
            </li>
          </div>
          <div>
            <li>
              <a
                href="/about"
                className="font-semibold transition-all duration-300 hover:text-red-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={irAFAQ}
                className="transition-all duration-300 cursor-pointer hover:text-red-500 font-extralight"
              >
                FAQ
              </a>
            </li>
          </div>
          <li>
            <a
              href="/schedule"
              className="font-semibold transition-all duration-300 hover:text-red-500"
            >
              Schedule
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="font-semibold transition-all duration-300 hover:text-red-500"
            >
              Contact
            </a>
          </li>
          <div>
            <li>
              <a
                href="/accommodation-meals"
                className="font-semibold transition-all duration-300 hover:text-red-500"
              >
                Accommodation Meals
              </a>
            </li>
            <li>
              <a
                onClick={irAFoodOptions}
                className="transition-all duration-300 cursor-pointer hover:text-red-500 font-extralight"
              >
                Food Options
              </a>
            </li>
            <li>
              <a
                onClick={irAHotelOptions}
                className="transition-all duration-300 cursor-pointer hover:text-red-500 font-extralight"
              >
                Hotel Options
              </a>
            </li>
          </div>

          <li>
            <a
              href="/code-of-conduct"
              className="font-semibold transition-all duration-300 hover:text-red-500"
            >
              Code of Coduct
            </a>
          </li>
          <li>
            <a
              href="/register"
              className="font-semibold transition-all duration-300 hover:text-red-500"
            >
              Register
            </a>
          </li>
          <li>
            <a
              href="/cms"
              className="font-semibold transition-all duration-300 hover:text-red-500"
            >
              CMS
            </a>
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
