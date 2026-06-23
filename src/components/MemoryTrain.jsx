import { motion } from "framer-motion";

import position from "../assets/memorytrain/position.jpg";
import pongal from "../assets/memorytrain/pongal.jpg";
import pongal_mms from "../assets/memorytrain/pongal_mms.jpg";
import orph_grp from "../assets/memorytrain/orph_grp.jpg";
import med_me_sandy from "../assets/memorytrain/med_me_sandy.jpg";
import me_mani from "../assets/memorytrain/me_mani.jpg";
import me_litty from "../assets/memorytrain/me_litty.jpg";
import farewell from "../assets/memorytrain/farewell.jpg";
import clean_drive from "../assets/memorytrain/clean_drive.jpg";
import cap_sri from "../assets/memorytrain/Sherni_juiceup.jpg";
import camp_nyt from "../assets/memorytrain/camp_nyt.jpg";
import camp_mani from "../assets/memorytrain/camp_mani.jpg";
import farewell_us from "../assets/memorytrain/mani_me.jpg";

const memories = [
  { title: "Upgraded", quote: "The moment it became official.", image: position },
  { title: "We celebrated", quote: "Half the memories happened here 😭", image: pongal },
  { title: "Pongalo Pongal", quote: "We celebrated Pongal", image: pongal_mms },
  { title: "Orphanage Visit", quote: "Spreading smiles together.", image: orph_grp },
  { title: "Medical Camp", quote: "Serving with love and teamwork.", image: med_me_sandy },
  { title: "", quote: "Zero coordination, maximum volume", image: me_mani },
  { title: "Kitty Moments", quote: "Unfiltered laughter behind scenes.", image: me_litty },
  { title: "Farewell Vibe", quote: "Hardest goodbyes we ever said.", image: farewell },
  { title: "Clean Drive", quote: "Making a difference on campus.", image: clean_drive },
  { title: "Juice Up!", quote: "Recharging after a heavy session.", image: cap_sri },
  { title: "Camp Night Stories", quote: "Stargazing and deep conversations.", image: camp_nyt },
  { title: "Camp Crew", quote: "Building bonds that never break.", image: camp_mani },
  { title: "", quote: "subsidized by Instagram’s server bandwidth", image: farewell_us },
];

export default function MemoryTrain() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#161311] py-32 flex flex-col justify-between">
      
      {/* NOSTALGIC SOFT BG GLOWS */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-600/5 blur-[160px] rounded-full pointer-events-none"></div>

      {/* HEADER SECTION */}
      <div className="text-center mb-12 relative z-10 px-6">
        <p className="uppercase tracking-[0.35em] text-orange-300/70 font-medium text-xs mb-4">
          MEMORY JOURNEY
        </p>
        <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-[1.2]">
          The Journey <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-orange-400/50">Still Continues</span>
        </h2>
        <div className="w-12 h-[1px] bg-orange-500/20 mx-auto mt-6"></div>
      </div>

      {/* THE INTEGRATED RAILROAD TRACKS SYSTEM */}
      <div className="relative w-full mt-4 pb-20 overflow-visible group">
        
        {/* PHYSICAL TRACK METALS */}
        <div className="absolute bottom-[88px] left-0 w-full h-[4px] bg-gradient-to-r from-neutral-700 via-neutral-500 to-neutral-700 z-10"></div>
        <div className="absolute bottom-[76px] left-0 w-full h-[6px] bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 z-10"></div>
        
        {/* WOODEN TRACK SLEEPERS / TIES */}
        <div className="absolute bottom-[72px] left-0 w-full h-4 bg-[repeating-linear-gradient(90deg,#2e241c,#2e241c_15px,#1c1611_15px,#1c1611_45px)] opacity-60"></div>

        {/* MOVING CARRIAGES CAROUSEL */}
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 35, // Smooth pace to allow reading comfortably
            ease: "linear",
          }}
          // Pauses the entire train beautifully when hovering over any card
          className="flex gap-10 w-max px-10 overflow-visible pointer-events-auto [animation-play-state:running] group-hover:[animation-play-state:paused]"
        >
          {/* Doubled arrays to maintain a seamless, glitch-free infinite loop */}
          {[...memories, ...memories].map((memory, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -16,
                scale: 1.03,
                borderColor: "rgba(249,115,22,0.3)",
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="
                relative
                w-[340px]
                bg-gradient-to-b from-[#26201c] to-[#1d1815]
                rounded-[24px]
                border border-white/[0.06]
                shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                flex flex-col
                justify-between
                cursor-pointer
                pb-8
                mr-2
              "
            >
              {/* IMAGE WINDOW */}
              <div className="relative h-[240px] bg-[#14100e] rounded-t-[23px] overflow-hidden border-b border-black/40 flex items-center justify-center">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-contain filter brightness-[95%] contrast-[102%]"
                />
                
                {/* AMBIENT GRADIENT SHIELD */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none"></div>

                {/* TEXT LABEL OVERLAY */}
                <div className="absolute bottom-0 left-0 w-full p-4 text-left">
                  <p className="text-white text-xl font-serif tracking-wide drop-shadow-md">
                    {memory.title}
                  </p>
                </div>
              </div>

              {/* QUOTE INSCRIPTION CAPACITY */}
              <div className="p-5 text-left flex-grow flex items-center">
                <p className="text-orange-100/70 italic text-sm sm:text-base leading-relaxed">
                  "{memory.quote}"
                </p>
              </div>

              {/* DYNAMIC RETRO TRAIN WHEELS - Placed cleanly below card base to sit perfectly on tracks */}
              <div className="absolute -bottom-5 left-8 w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border-[3px] border-neutral-500 shadow-md flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-neutral-400 animate-spin" style={{ animationDuration: '3s' }}></div>
              </div>

              <div className="absolute -bottom-5 right-8 w-10 h-10 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 border-[3px] border-neutral-500 shadow-md flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-neutral-400 animate-spin" style={{ animationDuration: '3s' }}></div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* AMBIENT SMOKE/FOG PARTICLES */}
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -15, 0],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 left-10 w-80 h-80 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none"
      />
    </section>
  );
}