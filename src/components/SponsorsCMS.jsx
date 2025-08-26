import dataSponsors from "../assets/data/sponsors.json";

import { useState } from "react";

export default function SponsorsCMS() {
  const [, setSponsor] = useState(dataSponsors);

  return (
    <section id="dataSponsors" className="text-white">
      <h1 className="mb-5 text-5xl font-bold">Sponsors:</h1>
      <div className="flex flex-col gap-5">
        {dataSponsors.map((sprs, index) => {
          return (
            <form className="flex flex-col gap-2 bg-slate-800" key={index}>
              <label htmlFor="linkImage" className="text-2xl">
                Image Link:
              </label>
              <input
                type="text"
                className="p-2 mb-3 text-xl text-black"
                value={sprs.url}
                onChange={(e) => {
                  const updatedSponsors = [...dataSponsors];
                  updatedSponsors[index].image = e.target.value;
                  setSponsor(updatedSponsors);
                }}
              />
              <label htmlFor="speakerBio" className="text-2xl">
                Company Name:
              </label>
              <input
                className="p-2 mb-3 text-xl text-black"
                value={sprs.name}
                onChange={(e) => {
                  const updatedSponsors = [...dataSponsors];
                  updatedSponsors[index].name = e.target.value;
                  setSponsor(updatedSponsors);
                }}
              />
              <label htmlFor="" className="text-2xl">
                Link URL:{" "}
              </label>
              <input
                type="url"
                className="p-2 mb-3 text-xl text-black"
                value={sprs.url}
                onChange={(e) => {
                  const updatedSponsors = [...dataSponsors];
                  updatedSponsors[index].url = e.target.value;
                  setSponsor(updatedSponsors);
                }}
              />
            </form>
          );
        })}
      </div>
      <button>Save</button>
    </section>
  );
}
