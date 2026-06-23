import { motion } from "framer-motion";

import gs from "../assets/memories/gs.jpg";
import js from "../assets/memories/js.jpg";
import meet1 from "../assets/memories/meet1.jpg";
import meet2 from "../assets/memories/meet2.jpg";
import mani_vj from "../assets/memories/mani_vj.jpg";
import med from "../assets/memories/med.jpg";
import beach from "../assets/memories/beach.jpg";
import gmeet from "../assets/memories/gmeet.jpg";
import sandy_me from "../assets/memories/sandy_me.jpg";
import pava_me from "../assets/memories/pava_me.jpg";

const memories = [
  {
    image: gs,
    caption: "The day responsibility found us",
    rotate: "-rotate-6",
    top: "top-10",
    left: "left-10",
  },
  {
    image: js,
    caption: "A new badge, the same heartbeat for Unit 5.",
    rotate: "rotate-3",
    top: "top-40",
    left: "left-[35%]",
  },
  {
    image: meet1,
    caption: "We laughed too much here.",
    rotate: "-rotate-3",
    top: "top-20",
    right: "right-16",
  },
  {
    image: meet2,
    caption: "Still feels unreal.",
    rotate: "rotate-6",
    top: "top-[520px]",
    left: "left-20",
  },
  {
    image: mani_vj,
    caption: "The memories stayed.",
    rotate: "-rotate-2",
    top: "top-[620px]",
    right: "right-[18%]",
  },
  {
    image: med,
    caption: "Core memory unlocked.",
    rotate: "rotate-2",
    top: "top-[920px]",
    left: "left-[12%]",
  },
  {
    image: beach,
    caption: "We stayed for minutes, but the memories stayed longer.",
    rotate: "-rotate-5",
    top: "top-[980px]",
    right: "right-[12%]",
  },
  {
    image: gmeet,
    caption: "Nobody stayed serious here.",
    rotate: "rotate-4",
    top: "top-[1450px]",
    left: "left-[40%]",
  },
  {
    image: sandy_me,
    caption: "Trying to look incredibly serious at our very first meeting",
    rotate: "-rotate-3",
    top: "top-[1500px]",
    right: "right-[8%]",
  },
  {
    image: pava_me,
    caption: "Their smiles said more than the medals ever could",
    rotate: "rotate-6",
    top: "top-[1450px]",
    left: "left-[5%]",
  },
];

export default function MemoryWall() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fffaf3] py-40 px-6">
      
      {/* RICH MULTI-LAYERED BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-pink-200/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-amber-100/40 blur-[140px] rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-orange-100/30 blur-[160px] rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      {/* HIGHER-FIDELITY VINTAGE TEXTURE BACKGROUND LAYER */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] pointer-events-none"></div>

      {/* TYPOGRAPHY HEADER UPGRADE */}
      <div className="text-center mb-36 relative z-10">
        <p className="uppercase tracking-[0.4em] text-amber-800/50 font-medium text-xs mb-4">
          OUR MEMORIES
        </p>
        <h2 className="text-5xl md:text-7xl font-serif text-[#2e241c] tracking-tight leading-[1.15]">
          Moments We Never <br />
          <span className="italic font-normal text-amber-700/90">Wanted To End</span>
        </h2>
        <div className="w-12 h-[1px] bg-amber-800/20 mx-auto mt-6"></div>
      </div>

      {/* CANVAS CONTAINER */}
      <div className="relative h-[2200px] max-w-7xl mx-auto">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              y: -14,
              scale: 1.05,
              rotate: 0,
              zIndex: 40,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            className={`
              absolute
              ${memory.rotate}
              ${memory.top || ""}
              ${memory.left || ""}
              ${memory.right || ""}
              bg-[#fcfbf9]
              p-4
              pb-7
              rounded-sm
              shadow-[0_10px_30px_rgba(43,34,26,0.08)]
              hover:shadow-[0_25px_50px_rgba(43,34,26,0.18)]
              w-[290px]
              sm:w-[310px]
              cursor-pointer
              transition-shadow
              duration-300
              border border-neutral-200/50
            `}
          >
            {/* VINTAGE TRANSLUCENT TAPE EFFECT ON TOP */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-amber-100/20 backdrop-blur-[1px] border-x border-dashed border-neutral-900/5 shadow-[0_1px_2px_rgba(0,0,0,0.01)] transform -rotate-1 pointer-events-none"></div>

            {/* POLAROID SQUARE IMAGE FRAME */}
            <div className="overflow-hidden rounded-xs bg-[#f4e0cc]/10 aspect-square border border-neutral-200/40 relative group">
              <img
                src={memory.image}
                alt="memory snapshot"
                className="
                  w-full
                  h-full
                  object-cover
                  filter
                  brightness-[98%]
                  contrast-[98%]
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-102
                "
              />
              {/* VINTAGE INNER PHOTOPRINT GLOW */}
              <div className="absolute inset-0 ring-1 ring-inset ring-black/5 pointer-events-none"></div>
            </div>

            {/* HANDWRITTEN STYLE INK CAPTION */}
            <p className="mt-5 text-center text-[#3c3127] text-lg font-serif italic tracking-wide px-1 select-none">
              "{memory.caption}"
            </p>

          </motion.div>
        ))}
      </div>

      {/* GRADIENT SECTION TRANSITION FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#f5efe6] pointer-events-none"></div>

    </section>
  );
}