import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import mazag from "../../assets/companies/1.avif";
import itp from "../../assets/companies/2.avif";
import spartan from "../../assets/companies/3.avif";
import callofduty from "../../assets/companies/4.avif";
import ubisoft from "../../assets/companies/5.avif";
import fortnite from "../../assets/companies/6.avif";
import ea from "../../assets/companies/7.avif";
import nvidia from "../../assets/companies/9.avif";
import claritine from "../../assets/companies/10.avif";

import aboflah from "../../assets/creators/1.avif";
import aziz from "../../assets/creators/2.avif";
import ahmedshow from "../../assets/creators/3.avif";

import "./ClientsCarousel.css";
import { NavLink } from "react-router-dom";

const clients = [
  { id: 1, name: "Mazaj", image: mazag, link: "https://www.youtube.com/@mazajofficial" },
  { id: 2, name: "NVIDIA GeForce Middle East", image: nvidia, link: "https://www.instagram.com/nvidiageforceme" },
  { id: 3, name: "Spartan Middle East", image: spartan, link: "https://www.instagram.com/spartanmiddleeast" },
  { id: 4, name: "Call of Duty Arabic", image: callofduty, link: "https://www.tiktok.com/@callofdutyarabic" },
  { id: 5, name: "Ubisoft Arabic", image: ubisoft, link: "https://www.tiktok.com/@ubisoftme" },
  { id: 6, name: "Claritin Arabia", image: claritine, link: "https://www.facebook.com/ClaritineArabia" },
  { id: 7, name: "EA Middle East", image: ea, link: "https://www.youtube.com/@ElectronicArtsME" },
  { id: 8, name: "AboFlah", image: aboflah, link: "https://www.youtube.com/@AboFlah" },
  { id: 9, name: "Aziz", image: aziz, link: "https://www.youtube.com/@Aziz14" },
  { id: 10, name: "Ahmed Show", image: ahmedshow, link: "https://www.youtube.com/@Ahmedowsari" },
];

export default function ClientsCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative mt-5 clients-carousel-container">
      <div className="flex items-center mb-5">
        <h3 className="text-2xl text-gold font-bold sm:text-lg md:text-2xl lg:text-xl xl:text-lg 2xl:text-xl
            [@media(min-width:1920px)]:text-4xl ">Clients</h3>
        <NavLink
          to="/clients"
          className="btn text-sm [@media(min-width:1920px)]:text-xl ml-5 text-center font-bold  text-gold hover:text-white transition-colors"
        >
          more
        </NavLink>
      </div>

      {/* Custom arrows */}
      <div
        ref={prevRef}
        className="custom-arrow custom-prev"
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="text-white text-xl" />
      </div>
      <div
        ref={nextRef}
        className="custom-arrow custom-next"
        aria-label="Next Slide"
      >
        <FaChevronRight className="text-white text-xl" />
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
          1880: { slidesPerView: 9 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
      >
        {clients.map(({ id, name, image, link }) => (
          <SwiperSlide key={id}>
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="client-slide group flex flex-col items-center"
  >
    {/* Image */}
    <div className="client-image-container w-[130px] md:w-[180px] 2xl:w-[200px] flex-shrink-0">
      <img
        src={image}
        alt={name}
        className="client-image group-hover:scale-[1.05] d-block rounded-xl mx-auto hover:border hover:border-gold"
      />
    </div>

    {/* Text */}
    <div className="client-text-container text-center mt-2 w-full">
      <p className="text-[#FEF7E4] client-name md:text-xl break-words">
        {name}
      </p>
    </div>
  </a>
</SwiperSlide>

        ))}
      </Swiper>
    </div>
  );
}
