import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";

import menaka from "../assets/ob/Menaka.jpeg";
import mani from "../assets/ob/mani.jpeg";
import sandy from "../assets/ob/sandy.jpeg";
import sunil from "../assets/ob/sunil.jpeg";
import sherni from "../assets/ob/sherni.jpeg";
import pava from "../assets/ob/pava.jpeg";
import kitty from "../assets/ob/kitty.jpeg";
import suvi from "../assets/ob/sui.jpeg";
import sri from "../assets/ob/sri.jpeg";

import "swiper/css";
import "swiper/css/effect-coverflow";

const officeBearers = [
  {
    name: "Menaka",
    role: "Female GS",
    vibe: "Angry Bird GS",
    image: menaka,
  },
  {
    name: "Sandiep",
    role: "Male GS",
    vibe: "The Calm One",
    image: sandy,
  },
  {
    name: "Sherni",
    role: "Female JS",
    vibe: "Fearless JS Energy",
    image: sherni,
  },
  {
    name: "Sunil",
    role: "Male JS",
    vibe: "On The Way Since 5 PM",
    image: sunil,
  },
  {
    name: "Pava",
    role: "Design Head",
    vibe: "Every Banner Had Their Touch",
    image: pava,
  },
  {
    name: "KittyKrish",
    role: "Logistics",
    vibe: "Curly Hair Chaos",
    image: kitty,
  },
  {
    name: "Sri",
    role: "Social Media Head",
    vibe: "Uyir Handball ku , Udal NSS ku",
    image: sri,
  },
  {
    name: "Suvi",
    role: "Events Head",
    vibe: "The Melody Of Unit 5",
    image: suvi,
  },
  {
    name: "ManiKandan T",
    role: "Events",
    vibe: "Built Every Idea Into Reality",
    image: mani,
  },
];

export default function OfficeBearers() {
  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden py-32 selection:bg-green-500 selection:text-black">
      
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-green-800/15 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-green-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-green-900/10 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      {/* HEADER SECTION */}
      <div className="text-center mb-16 relative z-10 px-4">
        <p className="uppercase tracking-[0.35em] text-green-400 font-medium text-xs sm:text-sm mb-4 bg-green-500/5 border border-green-500/10 px-4 py-1.5 rounded-full inline-block backdrop-blur-sm">
          NSS UNIT 5
        </p>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white font-serif max-w-3xl mx-auto leading-[1.15]">
          The People Behind <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-green-500/70">
            The Memories
          </span>
        </h2>
      </div>

      {/* SWIPER AREA */}
      <div className="relative overflow-visible px-4">
        {/* FILM GRAIN */}
        <div className="absolute inset-0 opacity-[0.025] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] pointer-events-none z-30"></div>

        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          grabCursor={true}
          slidesPerView={3}
          speed={1200}
          autoplay={{
            delay: 2400,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 60,
            depth: 140,
            modifier: 1.5,
            scale: 0.85,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full max-w-5xl mx-auto pt-12 pb-32 overflow-visible"
        >
          {officeBearers.map((ob, index) => (
            <SwiperSlide key={index} className="overflow-visible">
              {({ isActive }) => (
                <div
                  className={`group relative overflow-visible transition-all duration-700 ease-out ${
                    isActive
                      ? "scale-105 opacity-100 z-20"
                      : "scale-90 opacity-40 blur-[1px] pointer-events-none"
                  }`}
                >
                  {/* ACTIVE BACKGLOW */}
                  {isActive && (
                    <div className="absolute -inset-1.5 bg-gradient-to-b from-green-500/20 to-transparent blur-2xl rounded-[32px] opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                  )}

                  {/* MAIN CARD */}
                  <div className="relative rounded-[28px] overflow-hidden border border-white/[0.07] group-hover:border-green-500/30 transition-all duration-500 shadow-2xl bg-[#0d0d0d] backdrop-blur-md">
                    
                    {/* IMAGE CONTAINER WITH GRADIENT OVERLAY */}
                    <div className="relative h-[380px] sm:h-[400px] overflow-hidden">
                      <img
                        src={ob.image}
                        alt={ob.name}
                        className="w-full h-full object-cover object-top transition-transform duration-1000 ease-out group-hover:scale-105"
                      />
                      {/* Vignette & Bottom Soft Blend */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/10 to-transparent"></div>
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0d0d] to-transparent"></div>
                    </div>

                    {/* DETAILS PANEL */}
                    <div className="relative px-6 pb-8 pt-2 text-center bg-[#0d0d0d] z-10">
                      <p className="tracking-[0.2em] text-green-400 font-semibold text-[11px] mb-2.5 uppercase opacity-90">
                        {ob.role}
                      </p>

                      <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif mb-3">
                        {ob.name}
                      </h3>

                      <div className="w-8 h-[1px] bg-green-500/30 mx-auto mb-3.5 group-hover:w-16 transition-all duration-500"></div>

                      <p className="text-gray-400 font-medium italic text-[14px] sm:text-base px-2 line-clamp-2 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                        "{ob.vibe}"
                      </p>
                    </div>
                  </div>

                  {/* FLOATING HOVER CARD MEMORY */}
                  <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-bottom-8 transition-all duration-500 bg-black/90 backdrop-blur-md border border-green-500/20 px-4 py-2 rounded-xl text-xs font-medium tracking-wide text-green-400 shadow-xl whitespace-nowrap pointer-events-none z-40 shadow-green-950/20">
                    ✨ The memories would never be the same without them.
                  </div>

                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BOTTOM GRADIENT BLEND */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none z-20"></div>
      </div>
    </section>
  );
}