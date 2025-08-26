import dataSpeakers from "../assets/data/speaker.json";
import { useState } from "react";
export default function SpeakersCMS() {
  const [, setSpeaker] = useState(dataSpeakers);

  const autoResize = (el) => {
    if (el) {
      el.style.height = "auto"; // resetear primero
      el.style.height = el.scrollHeight + "px"; // ajustar al contenido
    }
  };
  return (
    <section id="dataSpeakers" className="text-white">
      <h1 className="mb-5 text-5xl font-bold">Speakers:</h1>
      <div className="flex flex-col gap-5">
        {dataSpeakers.map((sp, index) => {
          return (
            <form className="flex flex-col gap-2 bg-slate-800" key={index}>
              <label htmlFor="linkImage" className="text-2xl">
                Image Link:
              </label>
              <input
                type="url"
                className="p-2 mb-3 text-xl text-black"
                value={sp.image}
                onChange={(e) => {
                  const updatedSpeakers = [...dataSpeakers];
                  updatedSpeakers[index].image = e.target.value;
                  setSpeaker(updatedSpeakers);
                }}
              />
              <div className="flex justify-between">
                <div className="flex flex-col w-[45%] gap-2">
                  <label htmlFor="speakerName" className="text-2xl">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="p-2 mb-3 text-xl text-black"
                    value={sp.name}
                    onChange={(e) => {
                      const updatedSpeakers = [...dataSpeakers];
                      updatedSpeakers[index].name = e.target.value;
                      setSpeaker(updatedSpeakers);
                    }}
                  />
                </div>
                <div className="flex flex-col w-[45%] gap-2">
                  <label htmlFor="speakerSurname" className="text-2xl">
                    Surname:
                  </label>
                  <input
                    type="text"
                    className="p-2 mb-3 text-xl text-black"
                    value={sp.surname}
                    onChange={(e) => {
                      const updatedSpeakers = [...dataSpeakers];
                      updatedSpeakers[index].surname = e.target.value;
                      setSpeaker(updatedSpeakers);
                    }}
                  />
                </div>
              </div>
              <label htmlFor="Job" className="text-2xl">
                Job title:
              </label>
              <input
                type="text"
                className="p-2 mb-3 text-xl text-black"
                value={sp.jobTitle}
                onChange={(e) => {
                  const updatedSpeakers = [...dataSpeakers];
                  updatedSpeakers[index].jobTitle = e.target.value;
                  setSpeaker(updatedSpeakers);
                }}
              />
              <label htmlFor="speakerBio" className="text-2xl">
                Bio:
              </label>
              <textarea
                className="p-2 mb-3 overflow-hidden text-xl text-black resize-none"
                value={sp.bio}
                onChange={(e) => {
                  const updatedSpeakers = [...dataSpeakers];
                  updatedSpeakers[index].bio = e.target.value;
                  setSpeaker(updatedSpeakers);
                  autoResize(e.target);
                }}
                ref={(el) => autoResize(el)}
              />
            </form>
          );
        })}
      </div>
      <button>Save</button>
    </section>
  );
}
