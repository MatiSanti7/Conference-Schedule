import { useState } from "react";
import PropTypes from "prop-types";

export default function NavCMS({ onSelect }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav
      className={`fixed flex flex-col justify-between h-screen py-20 px-5 text-2xl text-white transition-all duration-100  bg-gray-700 ${
        isHovered ? "w-auto" : "w-44"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredItem(null);
      }}
    >
      <ul className="flex flex-col gap-4">
        <li
          className="relative flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600"
          onClick={() => {
            setHoveredItem(hoveredItem === "home" ? null : "home");
          }}
        >
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
          {hoveredItem === "home" && (
            <div className="absolute top-0 ml-2 rounded-lg shadow-lg left-full bg-slate-700">
              <ul className="flex flex-col gap-2 p-2 w-60">
                <li
                  onClick={() => {
                    onSelect("eventInfo");
                    setHoveredItem(null);
                    setIsHovered(false);
                  }}
                  className="py-2 pl-4 rounded-lg cursor-pointer hover:bg-slate-600"
                >
                  Event Information
                </li>
                <li
                  onClick={() => {
                    onSelect("speakersInfo");
                    setHoveredItem(null);
                    setIsHovered(false);
                  }}
                  className="py-2 pl-4 rounded-lg cursor-pointer hover:bg-slate-600"
                >
                  Speakers Information
                </li>
                <li
                  onClick={() => {
                    onSelect("sponsorsInfo");
                    setHoveredItem(null);
                    setIsHovered(false);
                  }}
                  className="py-2 pl-4 rounded-lg cursor-pointer hover:bg-slate-600"
                >
                  Sponsors Information
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="relative flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600"
          onClick={() => {
            setHoveredItem(hoveredItem === "about" ? null : "about");
          }}
        >
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
          {hoveredItem === "about" && (
            <div className="absolute top-0 ml-2 rounded-lg shadow-lg left-full bg-slate-700">
              <ul className="flex flex-col gap-2 p-2 w-60">
                <li
                  onClick={() => {
                    onSelect("mainAbout");
                    setHoveredItem(null);
                    setIsHovered(false);
                  }}
                  className="py-2 pl-4 rounded-lg cursor-pointer hover:bg-slate-600"
                >
                  About Information
                </li>
                <li
                  onClick={() => {
                    onSelect("faqAbout");
                    setHoveredItem(null);
                    setIsHovered(false);
                  }}
                  className="py-2 pl-4 rounded-lg cursor-pointer hover:bg-slate-600"
                >
                  FAQ Information
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600"
          onClick={() => {
            onSelect("schedule");
          }}
        >
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
        <li
          className="flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600"
          onClick={() => {
            onSelect("AM");
          }}
        >
          <i className="fas fa-hotel "></i>
          <span
            className={` transition-all duration-300 pl-16 whitespace-nowrap ${
              isHovered
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible -translate-x-20"
            }`}
          >
            Accommodation Meals
          </span>
        </li>
        <li
          className="flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600 "
          onClick={() => {
            onSelect("CodeConduct");
          }}
        >
          <i className="fa fa-book" aria-hidden="true"></i>
          <span
            className={`transition-all duration-300 pl-16 whitespace-nowrap ${
              isHovered
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible -translate-x-20"
            }`}
          >
            Code of Conduct
          </span>
        </li>
      </ul>
      <button
        className="flex items-center p-4 transition-all duration-300 rounded-lg cursor-pointer hover:bg-slate-600"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <i className="fa fa-sign-out" aria-hidden="true"></i>
        <span
          className={`transition-all duration-300 pl-16 whitespace-nowrap ${
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

NavCMS.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
