import { useNavigate } from "react-router-dom";
import bgHeader from "../assets/images/image-bg.webp";
import dataEvent from "../assets/data/event.json";
import { format, eachDayOfInterval, parseISO } from "date-fns";

const Header = () => {
  const navigate = useNavigate();
  const startDate = parseISO(dataEvent.dateStart);
  const endDate = parseISO(dataEvent.dateEnd);
  const dateCurrent = new Date();
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  return (
    <header className="relative h-screen">
      <img
        src={bgHeader}
        alt="image-background"
        className="fixed object-cover w-full h-full"
      />
      <div className="absolute flex flex-col items-start w-9/12 text-white -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <h1 className="mb-10 font-bold text-8xl">{dataEvent.name}</h1>
        <div className="flex items-center gap-5 mb-4">
          <span className="text-xl">Location: </span>
          <a
            href="https://www.google.com/maps/place/San+Francisco,+California,+EE.+UU./@37.7577607,-122.4787995,13z/data=!3m1!4b1!4m6!3m5!1s0x80859a6d00690021:0x4a501367f076adff!8m2!3d37.7749295!4d-122.4194155!16zL20vMGQ2bHA?entry=ttu&g_ep=EgoyMDI1MDgwNC4wIKXMDSoASAFQAw%3D%3D"
            className="text-4xl font-bold text-red-500"
            target="_blank"
          >
            {dataEvent.location}
          </a>
        </div>
        <div className="flex items-center gap-5 mb-8 text-4xl text-white w-fit">
          <span className="text-xl">Days:</span>
          <ul className="flex rounded-full">
            {days.map((day, index) => (
              <li
                key={format(day, "yyyy-MM-dd")}
                className={`flex items-center font-medium justify-center w-[70px] h-16 ${
                  day <= dateCurrent
                    ? "bg-red-500 text-white"
                    : "bg-white text-black"
                } 
              ${index === 0 ? "rounded-l-full" : ""} 
              ${index === days.length - 1 ? "rounded-r-full" : ""}`.trim()}
              >
                {format(day, "d")}
              </li>
            ))}
          </ul>
          <strong className="text-4xl text-red-500">
            {format(dataEvent.dateStart, "MMMM")}
          </strong>
        </div>
        <p className="mb-8 text-2xl leading-10 text-balance">
          {dataEvent.brief}
        </p>
        <button
          className="py-3 text-2xl font-bold text-black transition-all duration-300 bg-white rounded-full px-14 hover:bg-red-500 hover:text-white hover:shadow-md hover:shadow-slate-400/50"
          onClick={() => navigate("/register")}
        >
          Register Now
        </button>
      </div>
    </header>
  );
};

export default Header;
