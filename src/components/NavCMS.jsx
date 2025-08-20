import { useState } from "react";

export default function NavCMS() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className={`absolute flex h-screen pt-28 px-5 text-2xl text-white transition-all duration-100 bg-gray-700 ${
        isHovered ? "w-1/4" : "w-28"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className="flex flex-col gap-5">
        <li className="flex items-center cursor-pointer">
          <i className="fa fa-home" aria-hidden="true"></i>
          <span
            className={`transition-all duration-300 pl-16 ${
              isHovered
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible -translate-x-20"
            }`}
          >
            Home
          </span>
        </li>
        <li className="flex items-center cursor-pointer">
          <i className="fa fa-info-circle" aria-hidden="true"></i>
          <span
            className={`transition-all duration-300 pl-16 ${
              isHovered
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible -translate-x-20"
            }`}
          >
            About
          </span>
        </li>
        <li className="flex items-center cursor-pointer">
          <i className="fa fa-calendar-minus-o" aria-hidden="true"></i>
          <span
            className={`transition-all duration-300 pl-16 ${
              isHovered
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible -translate-x-20"
            }`}
          >
            Schedule
          </span>
        </li>
        <li className="flex items-center cursor-pointer">
          <i className="fas fa-hotel "></i>
          <span
            className={`w-[400px] transition-all duration-300 pl-16 ${
              isHovered
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible -translate-x-20"
            }`}
          >
            Accommodation Meals
          </span>
        </li>
        <li className="flex items-center cursor-pointer">
          <i className="fa fa-book" aria-hidden="true"></i>
          <span
            className={`transition-all duration-300 pl-16 ${
              isHovered
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible -translate-x-20"
            }`}
          >
            Code of Coduct
          </span>
        </li>
      </ul>
    </nav>
  );
}
