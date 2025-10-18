import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaEllipsisV,
} from "react-icons/fa";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import bg from "../../assets/endorsement/endorsement.avif";
import b3shr from "../../assets/creators/4.avif";
import mysalahmat from "../../assets/companies/16.avif";
import cancel from "../../assets/creators/6.avif";
import Jellypeanut from "../../assets/creators/7.avif";
import swarmio from "../../assets/companies/12.avif";
import aziz from "../../assets/creators/2.avif";
import abofalah from "../../assets/creators/1.avif";
import aldaej from "../../assets/Abdullahaldaej.avif";
import caio from "../../assets/Caioborges.avif";
import Nathany from "../../assets/Nathany.avif";
import noof from "../../assets/NoofAbdulla.avif";
import bilal from "../../assets/BilalShreif.avif";
import rokas from "../../assets/RokasKavaliauskas.avif";
import Sofyan from "../../assets/creators/11.avif";
import ahmed from "../../assets/creators/3.avif";
import offside from "../../assets/creators/13.avif";
import Footer from "../Footer/Footer";
import cancelrec from "../../assets/recs/CANCEL.ogg";
import ahmedrec from "../../assets/recs/ahmedshow.ogg";
import azizrec from "../../assets/recs/AZIZ.ogg";
import abofalahrec from "../../assets/recs/ABOFLAH.ogg";
import Trending from "../Trending/Trending";

// ✅ Custom Audio Player (Updated)
function CustomAudioPlayer({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(30); // starts at 0:30

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime + 30); // add 30 sec offset
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    audio.addEventListener("timeupdate", updateTime);
    return () => audio.removeEventListener("timeupdate", updateTime);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e) => {
    const audio = audioRef.current;
    const newTime = (e.target.value / 100) * audio.duration;
    audio.currentTime = newTime;
    setProgress(e.target.value);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="w-full bg-[#30054A] border border-[#FFCC02] rounded-lg py-2 px-4 flex items-center gap-3 shadow-md">
      <FaVolumeUp className="text-[#FFCC02] w-5 h-5 flex-shrink-0" />

      <button
        onClick={togglePlay}
        className="text-[#FFCC02] hover:scale-110 transition-transform"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>

      {/* ✅ Single time only */}
      <span className="text-[#FFCC02] text-sm font-medium min-w-[40px] text-center">
        {formatTime(currentTime)}
      </span>

      {/* ✅ Shorter progress bar */}
      <input
        type="range"
        value={progress}
        onChange={handleSeek}
        className="w-[100px] h-[4px] accent-[#FFCC02] cursor-pointer bg-[#FFCC02]/30 rounded-full appearance-none"
        style={{
          background: `linear-gradient(to right, #FFCC02 ${progress}%, rgba(255,204,2,0.3) ${progress}%)`,
        }}
      />

      <button
        onClick={toggleMute}
        className="text-[#FFCC02] hover:scale-110 transition-transform"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>

      <FaEllipsisV className="text-[#FFCC02] w-4 h-4 cursor-pointer hover:rotate-90 transition-transform" />

      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setIsPlaying(false)}
        preload="metadata"
      />
    </div>
  );
}


const endorsements = [
  { id: 9, img: abofalah, name: "Abofalah", rec: abofalahrec },
  { id: 10, img: Sofyan, name: "Sofyan", text: "Mohammed is easily one of the best editors I've ever worked with..." },
  { id: 1, img: b3shr, name: "B3shr", text: "You are great! The video is amazing!" },
  { id: 3, img: aldaej, name: "Abdullah Al Daej", text: "I worked with Mohammed for nearly 2 years. He provided world-class editing services..." },
  { id: 12, img: caio, name: "Caio Borges", subtitle: "OG Esports", text: "Hamed surprised me positively. He is super proactive and has a wide range of skills..." },
  { id: 13, img: noof, name: "Noof Abdulla", subtitle: "Swarmio", text: "I had the pleasure of working with Mohamed on creating social media and streaming content..." },
  { id: 14, img: bilal, name: "Bilal Shreif", subtitle: "The Esports & Gaming Agency - Middle East", text: "I Highly recommend Hamed not only for his top quality work, but also for his dedication..." },
  { id: 15, img: Nathany, name: "Nathany Rabello", subtitle: "Swarmio", text: "Hammed is creative, dedicated and thinks fast. It's a great person to have around..." },
  { id: 16, img: rokas, name: "Rokas Kavaliauskas", subtitle: "Commerce Core", text: "I’ve worked with Mohamed for a few months and he is a talented video editor..." },
  { id: 7, img: ahmed, name: "Ahmed Show", rec: ahmedrec },
  { id: 2, img: Jellypeanut, name: "Jellypeanut", text: "Honestly I love your work, I think it's really good." },
  { id: 8, img: aziz, name: "AZIZ", rec: azizrec },
  { id: 4, img: swarmio, name: "Swarmio Media", text: "The platform videos for GGG and OEZ were highly praised..." },
  { id: 5, img: mysalahmat, name: "MySalahMat", text: "Your edit is so good! Really impressed!" },
  { id: 11, img: offside, name: "OFFSIDE", text: "Your edit is so INSANE, best video researcher out there!" },
  { id: 3, img: cancel, name: "CANCEL", rec: cancelrec },
];

// ✅ Card Component
// ✅ Card Component
function EndorsementCard({ img, name, subtitle, text, rec }) {
  return (
    <div
      className="relative flex items-start p-8 rounded-2xl overflow-hidden leading-relaxed transition-all duration-[480ms]
      ease-[cubic-bezier(0.23,1,0.32,1)] justify-center hover:scale-105 min-h-[600px] m-5 shadow-lg hover:shadow-2xl
      border border-[#FFCC02] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[#662390]/50"></div>

      <div className="relative flex flex-col h-full gap-4 text-neutral-50 z-[10]">
        {/* === Profile Info === */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={img}
            alt={name}
            className="w-28 h-28 rounded-full object-cover shadow-md"
          />
          <strong className="block font-semibold text-center text-gold">
            {name}
          </strong>
          {subtitle && (
            <span className="block text-sm italic text-center text-[#FFCC02]/80">
              {subtitle}
            </span>
          )}
        </div>

        {/* === Quote + Text Endorsements === */}
        {text && (
          <div className="flex flex-col items-start gap-2">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 quotes"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFCC02"
                d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"
              />
            </svg>
            <p className="opacity-80 text-base">{text}</p>
          </div>
        )}

        {/* === Quote + Audio Endorsements === */}
        {rec && (
          <div className="flex flex-col items-start gap-3">
            <svg
              viewBox="0 0 24 24"
              className="w-12 h-12 quotes"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFCC02"
                d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"
              />
            </svg>
            <CustomAudioPlayer src={rec} />
          </div>
        )}
      </div>
    </div>
  );
}


// ✅ Main Component
export default function Endorsements() {
  const [navEls, setNavEls] = useState({ prevEl: null, nextEl: null });
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current || !navEls.prevEl || !navEls.nextEl) return;
    const swiper = swiperRef.current;
    swiper.params.navigation.prevEl = navEls.prevEl;
    swiper.params.navigation.nextEl = navEls.nextEl;
    try {
      if (swiper.navigation) swiper.navigation.destroy();
    } catch (e) {}
    swiper.navigation.init();
    swiper.navigation.update();
  }, [navEls.prevEl, navEls.nextEl]);

  return (
    <div>
      <div id="endorsements" className="min-h-[90vh] mt-5">
        <motion.div
          key="cards"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:mx-24 px-1 py-12 mx-4 md:p-12 mt-5 rounded-[30px]"
        >
          <h3 className="text-gold text-2xl sm:text-3xl md:text-3xl xl:text-4xl font-bold my-5 md:my-12 text-center">
            Endorsements
          </h3>

          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                900: { slidesPerView: 2 },
                1424: { slidesPerView: 3 },
                1780: { slidesPerView: 4 },
              }}
            >
              {endorsements.map((endorsement) => (
                <SwiperSlide key={endorsement.id}>
                  <EndorsementCard {...endorsement} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              ref={(el) => {
                if (el && navEls.prevEl !== el)
                  setNavEls((s) => ({ ...s, prevEl: el }));
              }}
              className="absolute left-0 md:left-[-40px] top-1/2 -translate-y-1/2 z-[10] cursor-pointer bg-white/30 hover:bg-white/60 transition-all p-3 rounded-full shadow-xl"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-white text-2xl" />
            </div>

            <div
              ref={(el) => {
                if (el && navEls.nextEl !== el)
                  setNavEls((s) => ({ ...s, nextEl: el }));
              }}
              className="absolute right-0 md:right-[-40px] top-1/2 -translate-y-1/2 z-[10] cursor-pointer bg-white/30 hover:bg-white/60 transition-all p-3 rounded-full shadow-xl"
              aria-label="Next"
            >
              <FaChevronRight className="text-white text-2xl" />
            </div>
          </div>

          <Trending />
        </motion.div>
      </div>
    </div>
  );
}
