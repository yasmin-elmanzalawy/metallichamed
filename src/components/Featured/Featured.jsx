import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import bo1 from "../../assets/thumbnails/bestof/1.avif";
import bo2 from "../../assets/thumbnails/bestof/2.avif";
import bo3 from "../../assets/thumbnails/bestof/3.avif";
import bo4 from "../../assets/thumbnails/bestof/4.avif";
import bo5 from "../../assets/thumbnails/bestof/5.avif";
import bo6 from "../../assets/thumbnails/bestof/6.avif";
import bo7 from "../../assets/thumbnails/bestof/7.avif";
import bo8 from "../../assets/thumbnails/bestof/8.avif";
import bo9 from "../../assets/thumbnails/bestof/9.avif";
import bo10 from "../../assets/thumbnails/bestof/10.avif";
import bo11 from "../../assets/thumbnails/bestof/11.avif";
import bo12 from "../../assets/thumbnails/bestof/12.avif";
import bo13 from "../../assets/thumbnails/bestof/13.avif";

import "./Featured.css";

const featuredVideos = [
  {
    id: 1,
    img: bo1,
    desc: "AboFlah",
    link: "https://youtu.be/1KJaZoZgTvw?si=ucX0TLjgVQ6Bj2Tb",
  },
  {
    id: 2,
    img: bo2,
    desc: "EA Middle East",
    link: "https://youtu.be/vytFscb7FV8?si=AR99_sdcXHxuVwKl",
  },
  {
    id: 3,
    img: bo3,
    desc: "Mazaj - مزاج",
    link: "https://youtu.be/F08cBZDa4WM?si=58-1bOsTpjSqrKml",
  },
  {
    id: 4,
    img: bo4,
    desc: "My Showreel",
    link: "https://youtu.be/onM-cnX5sj0?si=jxkz_j59emXZf4im",
  },
  {
    id: 5,
    img: bo5,
    desc: "Endless Studios",
    link: "https://www.instagram.com/reel/DJ9negCh57B",
  },
  {
    id: 6,
    img: bo6,
    desc: "Aziz - عزيز",
    link: "https://youtu.be/dmhMm7lmWRw",
  },
  {
    id: 7,
    img: bo7,
    desc: "Sofyan",
    link: "https://youtu.be/o12FbYlg8Fw",
  },
  {
    id: 8,
    img: bo8,
    desc: "OFFSIDE",
    link: "https://youtu.be/o12FbYlg8Fw",
  },
  {
    id: 9,
    img: bo9,
    desc: "Call Of Duty",
    link: "https://www.tiktok.com/@callofdutyarabic/video/7406428579484962066",
  },
  {
    id: 10,
    img: bo10,
    desc: "Arena Esports",
    link: "https://www.instagram.com/reel/CvAQQT2PzI5",
  },
  {
    id: 11,
    img: bo11,
    desc: "Arena Es-Momo vs Lyapop",
    link: "https://drive.google.com/file/d/1r0L6OKEs96IyRvPA3njP97akSbuD-Kmx/view",
  },
  {
    id: 12,
    img: bo12,
    desc: "JellyPeanut ",
    link: "https://www.youtube.com/watch?v=RtHFYeANEfY",
  },
  {
    id: 13,
    img: bo13,
    desc: "PlayStation Arabia",
    link: "https://www.youtube.com/watch?v=f2O9evHDzrQ",
  },
];

export default function Featured() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative mt-5">
      <div className="flex items-center mb-5 ">
        <h3 className="text-2xl text-gold font-bold sm:text-lg md:text-2xl lg:text-xl xl:text-lg 2xl:text-xl [@media(min-width:1920px)]:text-4xl ">
          Featured Videos
        </h3>
        <NavLink
          to="/videos"
          className="btn text-sm [@media(min-width:1920px)]:text-xl ml-5 text-center font-bold text-gold hover:text-white transition-colors"
        >
          more
        </NavLink>
      </div>

      {/* Custom arrows */}
      <div
        ref={prevRef}
        className="custom-arrow custom-prev absolute left-[-20px] top-[63%] -translate-y-[50%] z-10 cursor-pointer bg-white/30 hover:bg-white/60 transition-all p-2 rounded-full shadow-lg"
      >
        <FaChevronLeft className="text-white text-xl" />
      </div>
      <div
        ref={nextRef}
        className="custom-arrow custom-next absolute right-[-20px] top-[63%] -translate-y-[50%] z-10 cursor-pointer bg-white/30 hover:bg-white/60 transition-all p-2 rounded-full shadow-lg"
      >
        <FaChevronRight className="text-white text-xl" />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
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
              <a
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group "
              >
                <div className="relative w-full [@media(min-width:1920px)]:h-[180px] h-[150px] rounded-[20px] p-[3px] transition-transform duration-300  group-hover:scale-[1.03]">
                  <img
                    src={video.img}
                    alt={video.desc}
                    className="w-full hover:border border border-transparent hover:border-gold h-full object-cover rounded-[17px]"
                  />
                  <FaStar
                    className="absolute top-4 right-4"
                    size={20}
                    color="#f5bf03"
                  />
                </div>
           
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
