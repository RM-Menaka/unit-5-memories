import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import camp from "../assets/videos/camp.mp4";
import farewell from "../assets/videos/farewell.mp4";
import sri from "../assets/videos/sri.mp4";
import suvi from "../assets/videos/suvi.mp4";
import grey_camp from "../assets/videos/grey_camp.mp4";

const tvs = [
  {
    title: "",
    quote: "Where it all started. All in blue.",
    video: camp,
    top: "top-[20px]",
    left: "left-[8%]",
    rotate: "-rotate-4",
  },
  {
    title: "",
    quote: "Half the memories happened here 😭",
    video: farewell,
    top: "top-[380px]",
    right: "right-[8%]",
    rotate: "rotate-3",
  },
  {
    title: "",
    quote: "The energy still feels alive.",
    video: grey_camp,
    top: "top-[740px]",
    left: "left-[12%]",
    rotate: "-rotate-2",
  },
  {
    title: "",
    quote: "Sri atrocities caught on camera!",
    video: sri,
    top: "top-[1100px]",
    right: "right-[10%]",
    rotate: "rotate-4",
  },
  {
    title: "",
    quote: "Art, charts, and the true melody of our unit. ✨",
    video: suvi,
    top: "top-[1460px]",
    left: "left-[8%]",
    rotate: "-rotate-3",
  },
];

function TVCard({
  tv,
  index,
  mainAudioRef,
  isAudioUnlocked,
  setIsHoveringVideo,
}) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHoveringVideo(true);

    if (mainAudioRef.current) {
      mainAudioRef.current.pause();
    }

    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.volume = 1.0;
      videoRef.current.play().catch((err) => console.log("Play blocked:", err));
    }
  };

  const handleMouseLeave = () => {
    setIsHoveringVideo(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
    }

    if (mainAudioRef.current && isAudioUnlocked) {
      mainAudioRef.current.play().catch((err) => console.log("Resume blocked:", err));
    }
  };

  return (
    <motion.div
      animate={{ y: [0, -12, 0] }}
      transition={{ repeat: Infinity, duration: 4 + index }}
      whileHover={{ scale: 1.05 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`absolute ${tv.top || ""} ${tv.left || ""} ${tv.right || ""} ${tv.rotate} w-[320px] cursor-pointer`}
    >
      {/* TV BODY */}
      <div className="bg-[#3a2f25] rounded-[30px] p-4 shadow-2xl border border-[#6d5742]">
        {/* TV SCREEN */}
        <div className="relative rounded-[18px] overflow-hidden bg-black">
          <video
            ref={videoRef}
            src={tv.video}
            muted
            loop
            playsInline
            className="w-full h-[220px] object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

          <div className="absolute bottom-3 left-3 text-white text-sm tracking-[3px]">
            ● HOVER TO PLAY
          </div>
        </div>

        {/* TV LABEL */}
        <div className="text-center mt-5">
          <h3 className="text-white text-2xl font-serif">{tv.title}</h3>
          <p className="text-gray-300 italic mt-3">"{tv.quote}"</p>
        </div>
      </div>

      {/* TV LEGS */}
      <div className="flex justify-between px-12">
        <div className="w-2 h-10 bg-[#6d5742]"></div>
        <div className="w-2 h-10 bg-[#6d5742]"></div>
      </div>
    </motion.div>
  );
}

export default function VideoReel({
  mainAudioRef,
  isAudioUnlocked,
  setIsAudioUnlocked,
  setIsHoveringVideo,
}) {
  const sectionRef = useRef(null);
  const [isSectionActive, setIsSectionActive] = useState(false);

  const unlockAudioEnv = (e) => {
    e.stopPropagation();

    if (mainAudioRef.current) {
      mainAudioRef.current.volume = 1.0;
      mainAudioRef.current
        .play()
        .then(() => {
          setIsAudioUnlocked(true);
        })
        .catch((err) => console.log("Audio play failed:", err));
    }
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionActive(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[#120f0d] py-40 px-6"
    >
      {/* UNLOCK POPUP — only when this section is visible */}
      <AnimatePresence>
        {!isAudioUnlocked && isSectionActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-[100] flex flex-col items-center justify-center text-center px-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              className="max-w-md p-8 rounded-3xl bg-[#1e1712] border border-[#6d5742] shadow-2xl relative z-[110]"
            >
              <h3 className="text-white font-serif text-3xl mb-3">
                Welcome to Unit 5 Channels
              </h3>
              <p className="text-orange-200/70 text-sm mb-6 leading-relaxed">
                To experience the full memories wall with background music and live
                audio clips, click below to unlock.
              </p>
              <button
                onClick={unlockAudioEnv}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 text-white text-sm font-semibold tracking-wider hover:opacity-90 shadow-lg shadow-orange-950/40 transition-opacity relative z-[120] cursor-pointer"
              >
                ⚡ ENTER SYSTEM WITH SOUND
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full"></div>

      {/* Film Grain */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]"></div>

      {/* Title */}
      <div className="text-center mb-24 relative z-10">
        <p className="uppercase tracking-[8px] text-orange-200 text-sm mb-5">
          CHANNELS OF OUR MEMORIES
        </p>
        <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">
          Every Screen
          <br />
          Tells A Story
        </h2>
      </div>

      {/* TV WALL */}
      <div className="relative h-[1950px] max-w-6xl mx-auto">
        {tvs.map((tv, index) => (
          <TVCard
            key={index}
            tv={tv}
            index={index}
            mainAudioRef={mainAudioRef}
            isAudioUnlocked={isAudioUnlocked}
            setIsHoveringVideo={setIsHoveringVideo}
          />
        ))}
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
}