import SponsorsData from "../assets/data/sponsors.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function SectionSponsors() {
  const boxes = SponsorsData.result.list.map((sponsor) => sponsor);
  return (
    <section className="relative z-10 w-3/4 mx-auto py-36" id="sponsors">
      <h2 className="text-6xl font-bold text-center text-white mb-14">
        Sponsors
      </h2>
      <Swiper
        className="h-[17rem] w-full"
        modules={[Autoplay]}
        loop={true}
        slidesPerView={4} // cuántas cajas se ven al mismo tiempo
        spaceBetween={20}
        autoplay={{
          delay: 2000, // cada 2s avanza
          disableOnInteraction: false,
        }}
        speed={1000} // velocidad de la animación
      >
        {boxes.map((num) => (
          <SwiperSlide key={num}>
            <div className="flex flex-col items-center w-56 h-64 gap-6 px-3 py-5 text-xl text-white transition-all duration-300 border-2 rounded-md bg-black/70 backdrop-blur-sm hover:cursor-default hover:shadow-md border-white/20 hover:border-white/10 hover:shadow-white">
              <img src={num.image} alt="" className="object-contain h-3/5 " />
              <p className="text-2xl text-center">{num.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
