import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Speaker = ({ speaker }) => {
  const { name, surname, image, bio } = speaker;
  return (
    <div
      className="px-6 py-10 transition-all duration-300 border-2 rounded-md bg-black/70 backdrop-blur-sm hover:cursor-default hover:shadow-md hover:bg-red-500 border-white/20 hover:border-white/10 hover:shadow-white"
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center justify-center gap-5 ">
        <img
          src={image}
          alt={name}
          className="object-cover w-48 h-48 rounded-full"
        />
        <strong className="flex flex-col text-4xl text-center text-white">
          <span>{name}</span> <span>{surname}</span>
        </strong>
      </div>
      <p className="mt-5 text-center text-white text-balance">{bio}</p>
    </div>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    image: PropTypes.string,
    bio: PropTypes.string,
  }).isRequired,
};

export default Speaker;
