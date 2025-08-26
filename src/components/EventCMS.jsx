import dataEvent from "../assets/data/event.json";

import { useState } from "react";

export default function EventCMS() {
  const [title, setTitle] = useState(dataEvent.name);
  const [dateStart, setDateStart] = useState(dataEvent.dateStart);
  const [dateEnd, setDateEnd] = useState(dataEvent.dateEnd);
  const [location, setLocation] = useState(dataEvent.location);
  const [brief, setBrief] = useState(dataEvent.brief);
  const [description, setDescription] = useState(dataEvent.description);
  const [purpose, setPurpose] = useState(dataEvent.purpose);
  const autoResize = (el) => {
    if (el) {
      el.style.height = "auto"; // resetear primero
      el.style.height = el.scrollHeight + "px"; // ajustar al contenido
    }
  };

  return (
    <section id="dataEvent" className="text-white">
      <h1 className="mb-5 text-5xl font-bold">Event:</h1>
      <form action="" className="flex flex-col gap-2">
        <label htmlFor="eventTitle" className="text-2xl">
          Title:
        </label>
        <input
          type="text"
          id="eventTitle"
          className="p-2 mb-3 text-xl text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex gap-5 mb-3">
          <div className="flex flex-col w-1/2 gap-2">
            <label htmlFor="dateStart" className="text-2xl">
              Date Start:
            </label>
            <input
              type="date"
              className="p-2 text-xl text-black"
              value={dateStart}
              onChange={(e) =>
                e.target.value < dateEnd
                  ? setDateStart(e.target.value)
                  : setDateStart(dateEnd)
              }
            />
          </div>
          <div className="flex flex-col w-1/2 gap-2">
            <label htmlFor="dateEnd" className="text-2xl">
              Date End:
            </label>
            <input
              type="date"
              className="p-2 text-xl text-black"
              value={dateEnd}
              onChange={(e) =>
                e.target.value > dateStart
                  ? setDateEnd(e.target.value)
                  : setDateEnd(dateStart)
              }
            />
          </div>
        </div>
        <label htmlFor="location" className="text-2xl">
          Location:
        </label>
        <input
          type="text"
          className="p-2 mb-3 text-xl text-black"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="brief" className="text-2xl">
          Brief:
        </label>
        <textarea
          className="p-2 mb-3 overflow-hidden text-xl text-black resize-none"
          value={brief}
          onChange={(e) => {
            setBrief(e.target.value);
            autoResize(e.target);
          }}
          ref={(el) => autoResize(el)}
        />
        <label htmlFor="description" className="text-2xl">
          Description:
        </label>
        <textarea
          className="p-2 mb-3 overflow-hidden text-xl text-black resize-none"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            autoResize(e.target);
          }}
          ref={(el) => autoResize(el)}
        />
        <label htmlFor="purpose" className="text-2xl">
          Purpose:
        </label>
        <textarea
          className="p-2 mb-3 overflow-hidden text-xl text-black resize-none"
          ref={(el) => autoResize(el)}
          value={purpose}
          onChange={(e) => {
            setPurpose(e.target.value);
            autoResize(e.target);
          }}
        />
      </form>
      <button>Save</button>
    </section>
  );
}
