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
import logo3 from "../../assets/creators/6.avif";
import Jellypeanut from "../../assets/creators/7.avif";
import swarmio from "../../assets/companies/12.avif";
import Sofyan from "../../assets/creators/11.avif";
import Footer from "../Footer/Footer";

const endorsements = [
   {
    id: 7,
    img: Sofyan,
    name: "Sofyan",
    text: "Mohammed is easily one of the best editors I've ever worked with, for me what separates him from most editors is that he really knows how youtube works.",
  },
  {
    id: 1,
    img: b3shr,
    name: "B3shr",
    text: "You are great! The video is amazing!",
  },
   

  {
    id: 3,
    img: logo3,
    name: "CANCEL",
    text: "I worked with Mohammed for nearly 2 years. He provided me with world-class editing services that contributed to high growth in audience retention and engagement.",
  },  {
    id: 2,
    img: Jellypeanut,
    name: "Jellypeanut",
    text: "Honestly I love it,I think it is really good!",
  },
  {
    id: 8,
    img: Sofyan,
    name: "Sofyan",
    text: "he knows how to use his editing skills to keep the audience engaged throughout the video and thus create good retention which is really the most important thing right? If you ever need an editor with really good YouTube knowledge, Mohammed is your guy!",
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
    id: 6,
    img: logo3,
    name: "CANCEL",
    text: "Providing a perfect combination of editing skills and a sense of humor with maintaining a high level of professionalism, makes Mohammed a great added value to any media production project.",
  },
 
];

function EndorsementCard({ img, name, text }) {
  return (
    <div
      className="relative flex items-start  p-8 rounded-2xl overflow-hidden leading-relaxed
      transition-all duration-[480ms] ease-[cubic-bezier(0.23,1,0.32,1)] txt-size
      hover:scale-105 min-h-[500px] m-5 shadow-lg hover:shadow-2xl border border-[#FFCC02]
      bg-cover bg-center"
      style={{ backgroundImage: `url(${bg} )` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#662390]/50"></div>

      <div className="relative flex flex-col  h-full gap-4 text-neutral-50 z-10">
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
        className="md:mx-24 px-5 py-12 mx-4  md:p-12 mt-28 bg-[#662390] m-8 rounded-[30px]"
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
