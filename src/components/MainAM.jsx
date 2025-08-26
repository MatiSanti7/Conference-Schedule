import { useState, useEffect } from "react";
import dataHotel from "../assets/data/hotel.json";
import dataFoods from "../assets/data/foods.json";
import HotelCard from "./Hotel";
import Food from "./Food";

export default function MainAM() {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    setFoods(dataFoods);
  }, []);
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    setHotels(dataHotel);
  }, []);

  return (
    <main className="relative mb-28">
      <section id="hotels" className="pt-28">
        <h2 className="my-8 text-3xl text-center text-white">Hotels</h2>
        <div className="w-9/12 py-3 mx-auto overflow-x-scroll overflow-y-hidden">
          <div className="flex gap-6 w-[200%] ">
            {hotels.map((item) => (
              <HotelCard key={item.key} item={item} />
            ))}
          </div>
        </div>
      </section>
      <section id="foods" className="pt-28">
        <h2 className="my-8 text-3xl text-center text-white">Foods</h2>
        <div className="w-9/12 py-3 mx-auto overflow-x-scroll overflow-y-hidden">
          <div className="flex gap-6 w-[200%]">
            {foods.map((food) => (
              <Food key={food.key} food={food} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
