import { motion } from "framer-motion";

import gs from "../assets/floatingvideos/beach1.jpg";
import js from "../assets/floatingvideos/greycamp.jpg";
import meet1 from "../assets/floatingvideos/juiceup_med.jpg";
import meet2 from "../assets/floatingvideos/Pava_poster.jpg";
import mani_vj from "../assets/floatingvideos/farewell_us.jpg";

const photos = [
  {
    image: gs,
    caption: "Nobody wanted that day to end 😭",
    rotate: "-rotate-6",
    top: "top-24",
    left: "left-[8%]",
  },

  {
    image: js,
    caption: "Bus rides > actual events.",
    rotate: "rotate-3",
    top: "top-44",
    left: "left-[38%]",
  },

  {
    image: meet1,
    caption: "Still feels unreal.",
    rotate: "-rotate-3",
    top: "top-20",
    right: "right-[10%]",
  },

  {
    image: meet2,
    caption: "Nobody was ready for goodbye.",
    rotate: "rotate-6",
    bottom: "bottom-36",
    left: "left-[22%]",
  },

  {
    image: mani_vj,
    caption: "We laughed too much here 😭",
    rotate: "-rotate-2",
    bottom: "bottom-28",
    right: "right-[22%]",
  },
];

export default function FloatingVideos() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#16120f] py-40 px-6">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-500/10 blur-3xl rounded-full"></div>

      {/* FILM GRAIN */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

      {/* TITLE */}
      <div className="text-center mb-32 relative z-10">

        <p className="uppercase tracking-[6px] text-yellow-100 text-sm mb-5">
          MEMORIES UNDER THE LIGHTS
        </p>

        <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
          Moments We Never
          <br />
          Wanted To End
        </h2>

      </div>

      {/* PHOTO HANGING AREA */}
      <div className="relative h-[1200px] max-w-7xl mx-auto">

        {photos.map((photo, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: index * 0.2,
            }}
            animate={{
              rotate: [-1, 1, -1],
              y: [0, -8, 0],
            }}
            whileHover={{
              scale: 1.05,
              y: -12,
            }}
            className={`
              absolute
              ${photo.rotate}
              ${photo.top || ""}
              ${photo.bottom || ""}
              ${photo.left || ""}
              ${photo.right || ""}
            `}
          >

            {/* STRING */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[2px] h-32 bg-yellow-100/30"></div>

            {/* BULB */}
            <div className="absolute -top-36 left-1/2 -translate-x-1/2">

              <div className="absolute inset-0 bg-yellow-200 blur-2xl opacity-80 rounded-full"></div>

              <div className="relative w-5 h-5 bg-yellow-100 rounded-full shadow-[0_0_35px_rgba(255,230,150,0.9)]"></div>

            </div>

            {/* PHOTO CARD */}
            <div
              className="
                w-[320px]
                bg-[#211c18]
                rounded-[24px]
                overflow-hidden
                border border-yellow-100/10
                shadow-2xl
              "
            >

              {/* IMAGE */}
              <div className="p-3 bg-[#181412]">

                <img
                  src={photo.image}
                  alt="memory"
                  className="
                    w-full
                    h-[260px]
                    object-contain
                    bg-[#181412]
                    rounded-[14px]
                  "
                />

              </div>

              {/* CAPTION */}
              <div className="p-5">

                <p
                  className="
                    text-gray-300
                    italic
                    text-lg
                    leading-relaxed
                    text-center
                  "
                >
                  "{photo.caption}"
                </p>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0d0b09]"></div>

    </section>
  );
}