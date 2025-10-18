import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

import trend1 from "../../assets/trends/1.avif";
import trend2 from "../../assets/trends/2.avif";
import trend3 from "../../assets/trends/3.avif";
import trend4 from "../../assets/trends/4.avif";
import trend5 from "../../assets/trends/5.avif";
import trend6 from "../../assets/trends/6.avif";

const trends = [
  { img: trend1, link: "https://youtu.be/pF-40SHydHM" },
  { img: trend2, link: "" },
  { img: trend3, link: "https://www.youtube.com/watch?v=RALnd4Tidz8" },
  { img: trend4, link: "" },
  { img: trend5, link: "https://www.youtube.com/watch?v=RALnd4Tidz8" },
  { img: trend6, link: "https://www.youtube.com/watch?v=C59qDUGdjm8" },
];

export default function Trending() {
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
    <section>
      <div className="relative md:mt-28 px-6 md:px-16">
        <h3
          className="text-gold text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl
          [@media(min-width:1920px)]:text-5xl font-bold my-5 md:my-12 text-center"
        >
          Trending
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
              640: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1600: { slidesPerView: 5 },
            }}
          >
            {trends.map((trend, index) => (
              <SwiperSlide key={index}>
                {trend.link ? (
                  <a
                    href={trend.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border border-[#FFCC02] bg-[#662390]/30 transition-transform duration-500 hover:scale-105">
                      <img
                        src={trend.img}
                        alt={`Trend ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </a>
                ) : (
                  <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-lg border border-[#FFCC02] bg-[#662390]/30">
                    <img
                      src={trend.img}
                      alt={`Trend ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrows */}
          <div
            ref={(el) => {
              if (el && navEls.prevEl !== el)
                setNavEls((s) => ({ ...s, prevEl: el }));
            }}
            className="absolute left-[-25px] md:left-[-60px] top-1/2 -translate-y-1/2 z-[10] cursor-pointer bg-white/30 hover:bg-white/60 transition-all p-2 rounded-full shadow-xl pointer-events-auto"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-white text-2xl" />
          </div>

          <div
            ref={(el) => {
              if (el && navEls.nextEl !== el)
                setNavEls((s) => ({ ...s, nextEl: el }));
            }}
            className="absolute right-[-25px] md:right-[-60px] top-1/2 -translate-y-1/2 z-[10] cursor-pointer bg-white/30 hover:bg-white/60 transition-all p-2 rounded-full shadow-xl pointer-events-auto"
            aria-label="Next"
          >
            <FaChevronRight className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
