import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export default function Food({ food }) {
  return (
    <div
      key={food.key}
      className="flex flex-col items-end justify-between w-1/6 p-4 transition-all duration-300 translate-x-2 rounded-lg shadow-lg bg-black/70 hover:scale-105 hover:shadow-md hover:bg-red-500 border-white/20 hover:border-white/10 hover:shadow-white"
      data-aos="fade-up"
    >
      <div className="text-white">
        <img
          src={food.image}
          alt={food.name}
          className="object-cover w-full h-48 mb-4 rounded-lg"
        />
        <h3 className="mb-2 text-xl font-bold ">{food.name}</h3>
        <p className="mb-2">Price estimate: {`$${food.price}`}</p>
      </div>
      <a
        href={food.url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 mt-2 font-bold text-black transition-colors duration-300 bg-white rounded-full hover:bg-gray-200 hover:text-black"
      >
        View Food
      </a>
    </div>
  );
}

Food.propTypes = {
  food: PropTypes.shape({
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
};
