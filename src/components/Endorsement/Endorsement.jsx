import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight, FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
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

function CustomAudioPlayer({ src, onPlay, onPause }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showElapsed, setShowElapsed] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const setAudioDuration = () => setDuration(audio.duration);
    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    audio.addEventListener("loadedmetadata", setAudioDuration);
    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("play", () => onPlay(audio));
    audio.addEventListener("pause", () => onPause(audio));
    audio.addEventListener("ended", () => {
      setIsPlaying(false);
      setShowElapsed(false);
      setProgress(0);
      onPause(audio); // resume autoplay when finished
    });

    return () => {
      audio.removeEventListener("loadedmetadata", setAudioDuration);
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("play", () => onPlay(audio));
      audio.removeEventListener("pause", () => onPause(audio));
      audio.removeEventListener("ended", () => onPause(audio));
    };
  }, [onPlay, onPause]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) audio.pause();
    else {
      audio.play();
      setShowElapsed(true);
    }
    setIsPlaying(!isPlaying);
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
    const seconds = Math.floor(time % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div className="w-full bg-[#30054A] border border-[#FFCC02] rounded-xl py-5 px-5 flex items-center justify-center gap-3 shadow-md">
      <button onClick={togglePlay} className="text-[#FFCC02] hover:scale-110 transition-transform">
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <span className="text-[#FFCC02] text-sm font-medium min-w-[45px] text-center">
        {showElapsed ? formatTime(currentTime) : formatTime(duration)}
      </span>
      <input
        type="range"
        value={progress}
        onChange={handleSeek}
        className="w-[120px] h-[4px] accent-[#FFCC02] cursor-pointer bg-[#FFCC02]/30 rounded-full appearance-none"
        style={{
          background: `linear-gradient(to right, #FFCC02 ${progress}%, rgba(255,204,2,0.3) ${progress}%)`,
        }}
      />
      <button
        onClick={() => {
          const audio = audioRef.current;
          audio.muted = !audio.muted;
          setIsMuted(!isMuted);
        }}
        className="text-[#FFCC02] hover:scale-110 transition-transform"
      >
        {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
      </button>
      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
}

// ✅ Endorsement Data
const endorsements = [
  {
    id: 9,
    img: abofalah,
    name: "Abofalah",
    rec: abofalahrec,
  },
  {
    id: 10,
    img: Sofyan,
    name: "Sofyan",
    text: "Mohammed is easily one of the best editors I've ever worked with, for me what separates him from most editors is that he really knows how youtube works. he knows how to use his editing skills to keep the audience engaged throughout the video and thus create good retention which is really the most important thing right? If you ever need an editor with really good YouTube knowledge, Mohammed is your guy!",
  },
  {
    id: 1,
    img: b3shr,
    name: "B3shr",
    text: "You are great! The video is amazing!",
  },
  {
    id: 3,
    img: aldaej,
    name: "Abdullah Al Daej",
    text: "I worked with Mohammed for nearly 2 years. He provided me with world-class editing services that contributed to high growth in audience retention and engagement. Providing a perfect combination of editing skills and a sense of humor with maintaining a high level of professionalism, makes Mohammed a great added value to any media production project.",
  },
  {
    id: 12,
    img: caio,
    name: "Caio Borges",
    subtitle: "OG Esports",
    text: "Hamed surprised me positively. He is super proactive and has a wide range of skills. He also has great knowledge of the MENA market and how to make videos more attractive for this region. Without a doubt, a great choice for my team at that moment, and hope to work with Hamed again at some point.",
  },
  {
    id: 13,
    img: noof,
    name: "Noof Abdulla",
    subtitle: "Swarmio",
    text: "I had the pleasure of working with Mohamed on creating social media and streaming content. He consistently demonstrated creativity, professionalism, and strong technical skills in his work. One of Mohamed’s standout qualities is his ability to clearly understand feedback and implement revisions with a quick turnaround, all while maintaining high-quality standards.",
  },
  {
    id: 14,
    img: bilal,
    name: "Bilal Shreif",
    subtitle: "The Esports & Gaming Agency - Middle East",
    text: "I Highly recommend Hamed not only for his top quality work, but also for his dedication and love for his profession, his patience when the client numerous edits and for the speed of delivery. It has been more than two years i work with Hamed and he always strives to deliver better results. Always with you the best Hamed you deserve it!",
  },
  {
    id: 15,
    img: Nathany,
    name: "Nathany Rabello",
    subtitle: "Swarmio",
    text: "Hammed is creative, dedicated and thinks fast. It's a great person to have around and excellent to work with. For more than a year, I could count on him to bring to life all the visual aspects of our marketing campaigns, especially for highlights and community content, always being available to learn new things and keep the deliveries fresh and exciting. I'm glad that I had the opportunity to work and share so much with him.",
  },
  {
    id: 16,
    img: rokas,
    name: "Rokas Kavaliauskas",
    subtitle: "Commerce Core",
    text: "I’ve worked with Mohamed for a few months and it that time I’ve noticed that he is a talented video editor with a sharp eye for detail and creativity. He always delivers polished, engaging work that elevates every project.",
  },
  {
    id: 7,
    img: ahmed,
    name: "Ahmed Show",
    rec: ahmedrec,
  },
  {
    id: 2,
    img: Jellypeanut,
    name: "Jellypeanut",
    text: "Honestly I love your work, I think it's really good.",
  },
  {
    id: 8,
    img: aziz,
    name: "AZIZ",
    rec: azizrec,
  },
  {
    id: 4,
    img: swarmio,
    name: "Swarmio Media",
    text: "The platform videos for GGG and OEZ were highly praised, especially GGG's video.",
  },
  {
    id: 5,
    img: mysalahmat,
    name: "MySalahMat",
    text: "Your edit is so good, Really impressed! love the colours and transitions, because its for kids it will keep them interested.",
  },
  {
    id: 11,
    img: offside,
    name: "OFFSIDE",
    text: "Your edit is so INSANE from what I've seen, you're honestly insane, best video researcher out there, you're a legend bro!",
  },
  
  {
    id: 3,
    img: cancel,
    name: "CANCEL",
    rec: cancelrec,
  },
];

// ✅ Card Component
function EndorsementCard({ img, name, subtitle, text, rec, onPlay, onPause }) {
  return (
    <div
      className="relative flex items-start p-8 rounded-2xl overflow-hidden leading-relaxed transition-all duration-[480ms]
      ease-[cubic-bezier(0.23,1,0.32,1)] justify-center hover:scale-105 min-h-[600px] m-5 shadow-lg hover:shadow-2xl
      border border-[#FFCC02] bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-[#662390]/50"></div>

      <div className="relative flex flex-col h-full gap-4 text-neutral-50 z-[10]">
        <div className="flex flex-col items-center gap-3">
          <img src={img} alt={name} className="w-28 h-28 rounded-full object-cover shadow-md" />
          <strong className="block font-semibold text-center text-gold">{name}</strong>
          {subtitle && <span className="block text-sm italic text-center text-[#FFCC02]/80">{subtitle}</span>}
        </div>

        {text && (
          <div className="flex flex-col items-start gap-2">
            <svg viewBox="0 0 24 24" className="w-12 h-12 quotes" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFCC02"
                d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"
              />
            </svg>
            <p className="opacity-80 text-base">{text}</p>
          </div>
        )}

        {rec && (
          <div className="flex flex-col items-start gap-3">
            <svg viewBox="0 0 24 24" className="w-12 h-12 quotes" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#FFCC02"
                d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"
              />
            </svg>
            <CustomAudioPlayer src={rec} onPlay={onPlay} onPause={onPause} />
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
  const audioRefs = useRef([]);

  const handlePlay = (audio) => {
    audioRefs.current.forEach((a) => {
      if (a && a !== audio && !a.paused) a.pause();
    });
    if (swiperRef.current?.autoplay) swiperRef.current.autoplay.stop();
  };

  const handlePause = () => {
    if (swiperRef.current?.autoplay) swiperRef.current.autoplay.start();
  };

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
              {endorsements.map((endorsement, index) => (
                <SwiperSlide key={endorsement.id}>
                  <EndorsementCard
                    {...endorsement}
                    onPlay={(audio) => {
                      audioRefs.current[index] = audio;
                      handlePlay(audio);
                    }}
                    onPause={handlePause}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div
              ref={(el) => {
                if (el && navEls.prevEl !== el)
                  setNavEls((s) => ({ ...s, prevEl: el }));
              }}
              className="absolute left-[-15px] md:left-[-40px] top-1/2 -translate-y-1/2 z-[10] cursor-pointer bg-white/30 hover:bg-white/60 transition-all p-2 rounded-full shadow-xl"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-white text-2xl" />
            </div>

            <div
              ref={(el) => {
                if (el && navEls.nextEl !== el)
                  setNavEls((s) => ({ ...s, nextEl: el }));
              }}
              className="absolute right-[-15px] md:right-[-40px] top-1/2 -translate-y-1/2 z-[10] cursor-pointer bg-white/30 hover:bg-white/60 transition-all p-2 rounded-full shadow-xl"
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
