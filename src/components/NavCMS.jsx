import { useState } from "react";

export default function NavCMS() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav
      className={`absolute flex flex-col justify-between h-screen py-20 px-5 text-2xl text-white transition-all duration-100 bg-gray-700 ${
        isHovered ? "w-auto" : "w-44"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ul className="flex flex-col gap-3">
        <li className="flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600">
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
        <li className="flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600">
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
        <li className="flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600">
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
        <li className="w-[400px] flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600">
          <i className="fas fa-hotel "></i>
          <span
            className={`w-[310px] transition-all duration-300 pl-16 ${
              isHovered
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible -translate-x-20"
            }`}
          >
            Accommodation Meals
          </span>
        </li>
        <li className="w-[400px] flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600">
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
      <button
        className="w-[400px] flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <i className="fa fa-sign-out" aria-hidden="true"></i>
        <span
          className={`transition-all duration-300 pl-16 ${
            isHovered
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible -translate-x-20"
          }`}
        >
          Back to HomePage
        </span>
      </button>
    </nav>
  );
}
