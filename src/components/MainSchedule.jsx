import { useState } from "react";
import dataEvent from "../assets/data/event.json";
import dataSpeakers from "../assets/data/speaker.json";
import {
  format,
  eachDayOfInterval,
  parseISO,
  isWithinInterval,
  differenceInCalendarDays,
} from "date-fns";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function MainSchedule() {
  const startDate = parseISO(dataEvent.dateStart);
  const endDate = parseISO(dataEvent.dateEnd);
  const dateCurrent = new Date();
  const days = eachDayOfInterval({ start: startDate, end: endDate });

  const defaultSelected = isWithinInterval(dateCurrent, {
    start: startDate,
    end: endDate,
  })
    ? dateCurrent
    : null;

  const [selectedDate, setSelectedDate] = useState(defaultSelected);

  // Día del evento como número (1-based)
  const diaEvento = selectedDate
    ? differenceInCalendarDays(selectedDate, startDate) + 1
    : null;

  // Filtrar speakers por si tienen ese día en su array `days`
  const speakersDay = diaEvento
    ? dataSpeakers.filter((speaker) => speaker.days.includes(diaEvento))
    : [];

  return (
    <main className="relative flex flex-col items-center my-14">
      {/* Lista de días */}
      <ul className="flex w-9/12 gap-4 mb-8 rounded-full">
        {days.map((day, index) => {
          const dayStr = format(day, "yyyy-MM-dd");
          const isSelected =
            selectedDate && dayStr === format(selectedDate, "yyyy-MM-dd");

          return (
            <li
              key={dayStr}
              onClick={() => setSelectedDate(day)}
              className={`transition-all duration-300 hover:bg-red-300 hover:text-white text-2xl flex items-center font-medium justify-center w-full h-16 cursor-pointer
                ${isSelected ? "bg-red-500 text-white" : "bg-white text-black"}
                ${index === 0 ? "rounded-l-full" : ""}
                ${index === days.length - 1 ? "rounded-r-full" : ""}
              `.trim()}
            >
              {format(day, "dd")}
            </li>
          );
        })}
      </ul>

      {/* Lista de speakers */}
      <section className="flex w-9/12 gap-6 h-[550px] my-10">
        {speakersDay.map((speaker, idx) => (
          <div
            key={idx}
            className="flex flex-col w-1/3 rounded-lg shadow-sm"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <img
              src={speaker.image}
              alt={`${speaker.name} ${speaker.surname}`}
              className="object-cover w-64 h-64 mb-4 rounded-full"
            />
            <h3 className="text-3xl font-bold text-left text-red-500">
              {speaker.name} {speaker.surname}
            </h3>
            <p className="mb-1 text-xl italic text-white">{speaker.jobTitle}</p>
            <p className="pt-5 text-lg text-white text-balance">
              {speaker.bio}
            </p>
            <div className="flex gap-2 mt-5 text-3xl">
              {speaker.social.github && (
                <a
                  href={speaker.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="text-white transition-all duration-300 fa hover:text-red-500 fa-github"
                    aria-hidden="true"
                  ></i>
                </a>
              )}
              {speaker.social.linkedin && (
                <a
                  href={speaker.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="text-white transition-all duration-300 fa hover:text-red-500 fa-linkedin-square"
                    aria-hidden="true"
                  ></i>
                </a>
              )}
              {speaker.social.twitter && (
                <a
                  href={speaker.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="text-white transition-all duration-300 fa hover:text-red-500 fa-twitter-square"
                    aria-hidden="true"
                  ></i>
                </a>
              )}
              {speaker.social.instagram && (
                <a
                  href={speaker.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="text-white transition-all duration-300 fa hover:text-red-500 fa-instagram"
                    aria-hidden="true"
                  ></i>
                </a>
              )}
              {speaker.social.facebook && (
                <a
                  href={speaker.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="text-white transition-all duration-300 fa hover:text-red-500 fa-facebook-square"
                    aria-hidden="true"
                  ></i>
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
