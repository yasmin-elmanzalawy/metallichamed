import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";


import "swiper/css";
import "swiper/css/navigation";

import fea1 from "../../assets/fea1.png";
import dummyProfile from "../../assets/fea1.png";
import "./Featured.css";

const featuredVideos = [
  { id: 1, img: fea1, desc: "video", authorImg: dummyProfile },
  { id: 2, img: fea1, desc: "video", authorImg: dummyProfile },
  { id: 3, img: fea1, desc: "video", authorImg: dummyProfile },
  { id: 4, img: fea1, desc: "video", authorImg: dummyProfile },
  { id: 5, img: fea1, desc: "video", authorImg: dummyProfile },
  { id: 6, img: fea1, desc: "video", authorImg: dummyProfile },
  { id: 7, img: fea1, desc: "video", authorImg: dummyProfile },
];

export default function Featured() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative mt-5">
      <div className="flex items-center mb-5 ">
        <h3 className="text-2xl text-gold font-bold  sm:text-lg md:text-2xl lg:text-xl xl:text-lg 2xl:text-xl
            [@media(min-width:1920px)]:text-3xl ">Featured Videos</h3>
        <NavLink
          to="/videos"
          className="btn text-sm [@media(min-width:1920px)]:text-lg ml-5 text-center font-bold  text-gold hover:text-white transition-colors"
        >
          more
        </NavLink>
      </div>

      {/* Custom arrows */}
      <div
        ref={prevRef}
        className="custom-arrow custom-prev absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 cursor-pointer 
                   bg-white/30 hover:bg-white/60 transition-all p-2 rounded-full shadow-lg"
      >
        <FaChevronLeft className="text-white text-xl" />
      </div>
      <div
        ref={nextRef}
        className="custom-arrow custom-next absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 cursor-pointer 
                   bg-white/30 hover:bg-white/60 transition-all p-2 rounded-full shadow-lg"
      >
        <FaChevronRight className="text-white text-xl" />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1} // default for smallest screens
        loop={true}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
          1880: { slidesPerView: 5 },
        }}
      >
        {featuredVideos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="py-5 px-5">
              <a href={`#${video.id}`} className="block group">
                <div className="relative w-full h-40 rounded-[20px] p-[3px] transition-transform duration-300 group-hover:scale-[1.03]">
                  <img
                    src={video.img}
                    alt="Featured"
                    className="w-full h-full object-cover rounded-[17px]"
                  />
                  <FaStar className="absolute top-2 right-2" size={20} color="#f5bf03" />
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <img
                    src={video.authorImg}
                    alt="Author"
                    className="w-10 h-10 rounded-full border-2 border-gold-dark"
                  />
                  <p className="text-[#FEF7E4] text-sm leading-snug  sm:text-lg md:text-2xl lg:text-xl xl:text-lg 2xl:text-xl
            [@media(min-width:1920px)]:text-2xl">{video.desc}</p>
                </div>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
