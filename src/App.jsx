import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import heroImage from "./assets/hero.png";
import SmoothScroll from "./SmoothScroll";

import OfficeBearers from "./components/OfficeBearers";
import MemoryWall from "./components/MemoryWall";
import VideoReel from "./components/VideoReel";
import MemoryTrain from "./components/MemoryTrain";
import FloatingVideos from "./components/FloatingVideos";
import LastGallery from "./components/LastGallery";

import journeyVideo from "./assets/videos/journey.mp4";
import mainSong from "./assets/music/bg_track.mp3";

export default function App() {
  const heroVideoRef = useRef(null);
  const mainAudioRef = useRef(null);
  const journeySectionRef = useRef(null);

  const [isAudioUnlocked, setIsAudioUnlocked] = useState(false);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);

  useEffect(() => {
    const heroVideo = heroVideoRef.current;
    const mainAudio = mainAudioRef.current;
    const journeySection = journeySectionRef.current;

    if (!heroVideo || !mainAudio || !journeySection) return;

    heroVideo.volume = 1.0;
    mainAudio.volume = 1.0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Inside Journey section -> run video audio, stop track
          heroVideo.muted = false;
          heroVideo.volume = 1.0;

          if (!mainAudio.paused) {
            mainAudio.pause();
            mainAudio.currentTime = 0;
          }
        } else {
          // Outside Journey section -> mute it
          heroVideo.muted = true;

          // CONTINUOUS SYSTEM TRACK PLAYBACK FOR THE REST OF THE APP
          if (mainAudio.paused && isAudioUnlocked && !isHoveringVideo) {
            mainAudio.play().catch((err) => console.log("Play held back:", err));
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(journeySection);
    return () => observer.disconnect();
  }, [isAudioUnlocked, isHoveringVideo]);

  // Global Sync Listener: Handles instant hover muting/resuming globally
  useEffect(() => {
    const mainAudio = mainAudioRef.current;
    if (!mainAudio || !isAudioUnlocked) return;

    if (isHoveringVideo) {
      mainAudio.pause();
    } else {
      mainAudio.play().catch(() => {});
    }
  }, [isHoveringVideo, isAudioUnlocked]);

  return (
    <div className="overflow-hidden bg-black">
      <SmoothScroll />
      <audio ref={mainAudioRef} src={mainSong} loop />

      {/* HERO SECTION */}
      <section className="relative h-screen w-full bg-black">
        <img src={heroImage} alt="NSS Unit 5" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-3xl animate-bounce z-20">↓</div>
      </section>

      {/* JOURNEY SECTION */}
      <section ref={journeySectionRef} className="relative min-h-screen overflow-hidden flex items-center justify-center px-6">
        <video ref={heroVideoRef} autoPlay loop playsInline muted className="absolute inset-0 w-full h-full object-cover blur-[3px]">
          <source src={journeyVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55"></div>
        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} viewport={{ once: true }} className="relative z-10 max-w-4xl text-center">
          <p className="text-green-400 tracking-[6px] uppercase text-sm mb-6">Our Journey</p>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight text-white">We entered as strangers.<br />We stayed as memories.</h2>
          <p className="mt-8 text-gray-300 text-lg leading-relaxed">From first-year introductions to unforgettable camps, leadership, friendship, chaos, laughter, and moments we never wanted to end.</p>
        </motion.div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black"></div>
      </section>

      <OfficeBearers />
      <MemoryWall />
      <VideoReel 
        mainAudioRef={mainAudioRef} 
        isAudioUnlocked={isAudioUnlocked} 
        setIsAudioUnlocked={setIsAudioUnlocked}
        isHoveringVideo={isHoveringVideo}
        setIsHoveringVideo={setIsHoveringVideo}
      />
      <MemoryTrain />
      <FloatingVideos />
      <LastGallery />
    </div>
  );
}