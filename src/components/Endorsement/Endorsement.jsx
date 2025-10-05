import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

// === Endorsements Data ===
import bg from "../../assets/endorsement/endorsement.avif";
import b3shr from "../../assets/creators/4.avif";
import mysalahmat from "../../assets/companies/16.avif";
import cancel from "../../assets/creators/6.avif";
import Jellypeanut from "../../assets/creators/7.avif";
import swarmio from "../../assets/companies/12.avif";
import aziz from "../../assets/creators/2.avif";
import abofalah from "../../assets/creators/1.avif";
import aldaej from "../../assets/creators/Abdullahaldaej.avif";
import Sofyan from "../../assets/creators/11.avif";
import ahmed from "../../assets/creators/3.avif";
import Footer from "../Footer/Footer";
import cancelrec from "../../assets/recs/CANCEL.ogg";
import ahmedrec from "../../assets/recs/ahmedshow.ogg";
import azizrec from "../../assets/recs/AZIZ.ogg";
import abofalahrec from "../../assets/recs/ABOFLAH.ogg";

const endorsements = [
    {
    id: 9,
    img: abofalah,
    name: "Abofalah",

    rec: abofalahrec,
  },
  {
    id: 7,
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
    id: 7,
    img: ahmed,
    name: "Ahmed Show",

    rec: ahmedrec,
  },
  {
    id: 2,
    img: Jellypeanut,
    name: "Jellypeanut",
    text: "Honestly I love it,I think it is really good!",
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
    text: "his is so good, Really impressed! love the colours and transitions, because its for kids it will keep them interested.",
  },
  {
    id: 3,
    img: cancel,
    name: "CANCEL",

    rec: cancelrec,
  },

];

function EndorsementCard({ img, name, text, rec }) {
  return (
    <div
      className="relative flex items-start  p-8 rounded-2xl overflow-hidden leading-relaxed
      transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] txt-size justify-center
      hover:scale-105 min-h-[550px] m-5 shadow-lg hover:shadow-2xl border border-[#FFCC02]
      bg-cover bg-center"
      style={{ backgroundImage: `url(${bg} )` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#662390]/50"></div>

      <div className="relative flex flex-col h-full gap-4 text-neutral-50 z-10">
        {/* Avatar + Name */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={img}
            alt={name}
            className="w-28 h-28 rounded-full object-cover shadow-md"
          />
          <strong className="block font-semibold text-center text-gold">
            {name}
          </strong>
        </div>

        {/* Quote + Text */}
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
          <p className="opacity-80 text-base txt-lg">{text}</p>
        </div>

        {/* Recordings (if any) */}
        {rec &&
          (Array.isArray(rec) ? (
            rec.map((r, index) => (
              <div
                key={index}
                className="w-full bg-[#30054A]/70 p-3 rounded-xl shadow-md flex items-center gap-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="#FFCC02"
                >
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.75-4.15v8.3A4.5 4.5 0 0 0 16.5 12zm-2.75-9v2.06c3.39.49 6 3.39 6 6.94s-2.61 6.45-6 6.94V21c4.56-.5 8-4.36 8-9s-3.44-8.5-8-9z" />
                </svg>

                <audio
                  controls
                  controlsList="nodownload"
                  className="flex-1 accent-[#FFCC02] rounded-lg w-[150px] lg:w-[260px]"
                >
                  <source src={r} type="audio/ogg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))
          ) : (
     <div className="w-full bg-[#30054A]/70 p-3 rounded-xl shadow-md flex items-center gap-3 border-2 border-[#662390]">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-8 h-8 flex-shrink-0"
    viewBox="0 0 24 24"
    fill="#FFCC02"
  >
    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3a4.5 4.5 0 0 0-2.75-4.15v8.3A4.5 4.5 0 0 0 16.5 12zm-2.75-9v2.06c3.39.49 6 3.39 6 6.94s-2.61 6.45-6 6.94V21c4.56-.5 8-4.36 8-9s-3.44-8.5-8-9z" />
  </svg>

  <audio
    controls
    controlsList="nodownload"
    className="flex-1 accent-[#FFCC02] rounded-lg w-[150px] lg:w-[260px] custom-audio"
  >
    <source src={rec} type="audio/ogg" />
    Your browser does not support the audio element.
  </audio>

  <style>{`
    .custom-audio::-webkit-media-controls-panel {
      background-color: #30054A !important;
    }
    .custom-audio::-webkit-media-controls-play-button,
    .custom-audio::-webkit-media-controls-current-time-display,
    .custom-audio::-webkit-media-controls-time-remaining-display,
    .custom-audio::-webkit-media-controls-volume-slider,
    .custom-audio::-webkit-media-controls-mute-button {
      color: #FFCC02 !important;
      filter: brightness(1.4);
    }
    /* Gold progress bar */
    .custom-audio::-webkit-media-controls-timeline::-webkit-slider-runnable-track {
      background-color: #FFCC02 !important;
    }
    /* Gold draggable thumb */
    .custom-audio::-webkit-media-controls-timeline::-webkit-slider-thumb {
      background-color: #FFCC02 !important;
    }
  `}</style>
</div>


          ))}
      </div>
    </div>
  );
}

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
    } catch (e) {
      /* ignore */
    }
    swiper.navigation.init();
    swiper.navigation.update();
  }, [navEls.prevEl, navEls.nextEl]);

  return (
    <div>
      <div className="min-h-[90vh] mt-32">
        <motion.div
          key="cards"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:mx-24 px-1 py-12 mx-4  md:p-12 mt-28 bg-[#662390] m-8 rounded-[30px]"
        >
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

            {/* Custom Arrows */}
            <div
              ref={(el) => {
                if (el && navEls.prevEl !== el)
                  setNavEls((s) => ({ ...s, prevEl: el }));
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-[60] cursor-pointer bg-white/30 hover:bg-white/60 transition-all p-3 rounded-full shadow-xl pointer-events-auto"
              aria-label="Previous"
            >
              <FaChevronLeft className="text-white text-2xl" />
            </div>

            <div
              ref={(el) => {
                if (el && navEls.nextEl !== el)
                  setNavEls((s) => ({ ...s, nextEl: el }));
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-[60] cursor-pointer bg-white/30 hover:bg-white/60 transition-all p-3 rounded-full shadow-xl pointer-events-auto"
              aria-label="Next"
            >
              <FaChevronRight className="text-white text-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
