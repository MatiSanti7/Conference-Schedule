import Speaker from "./Speaker";
import speakerData from "../assets/data/speaker.json";

const MainSpeakers = () => {
  return (
    <section
      className="relative z-10 flex flex-col items-center justify-center w-full pt-36"
      id="speakers"
    >
      <h2 className="text-6xl font-bold text-white mb-14">Speaker{"'"}s</h2>
      <div className="grid w-9/12 grid-cols-4 gap-10 text-white">
        {speakerData.map((speaker, index) => {
          return <Speaker speaker={speaker} key={index} />;
        })}
      </div>
    </section>
  );
};

export default MainSpeakers;
