import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import mazag from "../../assets/companies/mazag.png";
import itp from "../../assets/companies/itp.png";
import spartan from "../../assets/companies/spartan.png";
import callofduty from "../../assets/companies/callofduty.png";
import ubisoft from "../../assets/companies/ubisoft.png";
import fortnite from "../../assets/companies/fortnite.png";
import ea from "../../assets/companies/ea.png";
import nvidia from "../../assets/companies/nvidia.png";
import claritine from "../../assets/companies/claritine.png";

import aboflah from "../../assets/creators/AboFlah.jpg";
import aziz from "../../assets/creators/Aziz.jpg";
import ahmedshow from "../../assets/creators/AhmedShow3.jpg";

import "./ClientsCarousel.css";
import { NavLink } from "react-router-dom";

const clients = [
  { id: 1, name: "Mazaj", image: mazag, subscribers: 2930000, link: "https://www.youtube.com/@mazajofficial" },
  { id: 2, name: "NVIDIA GeForce Middle East", image: nvidia, subscribers: 241000, link: "https://www.instagram.com/nvidiageforceme" },
  { id: 3, name: "Spartan Middle East", image: spartan, subscribers: 0, link: "https://www.instagram.com/spartanmiddleeast" },
  { id: 4, name: "Call of Duty Arabic", image: callofduty, subscribers: 500000, link: "https://www.tiktok.com/@callofdutyarabic" },
  { id: 5, name: "Ubisoft Arabic", image: ubisoft, subscribers: 105000, link: "https://www.tiktok.com/@ubisoftme" },
  { id: 6, name: "Claritin Arabia", image: claritine, subscribers: 229000, link: "https://www.facebook.com/ClaritineArabia" },
  { id: 7, name: "EA Middle East", image: ea, subscribers: 84000, link: "https://www.youtube.com/@ElectronicArtsME" },
  { id: 8, name: "AboFlah", image: aboflah, subscribers: 46800000, link: "https://www.youtube.com/@AboFlah" },
  { id: 9, name: "Aziz", image: aziz, subscribers: 3100000, link: "https://www.youtube.com/@Aziz14" },
  { id: 10, name: "Ahmed Show", image: ahmedshow, subscribers: 5500000, link: "https://www.youtube.com/@Ahmedowsari" },
];

export default function ClientsCarousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative mt-5 clients-carousel-container">
      <div className="flex items-center mb-5">
        <h3 className="text-2xl text-gold font-bold">Clients</h3>
        <NavLink
          to="/metallichamed/clients"
          className="btn text-sm ml-5 text-center font-bold  text-gold hover:text-white transition-colors"
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
  slidesPerView={2} // mobile default
  breakpoints={{
    640: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    1024: { slidesPerView: 5 },
    1280: { slidesPerView: 7 },  // Changed from 6 to 7 here
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
        {clients.map(({ id, name, image, subscribers, link }) => (
          <SwiperSlide key={id}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="client-slide group"
            >
              <div className="client-image-container">
                <img
                  src={image}
                  alt={name}
                  className="client-image group-hover:scale-[1.05] rounded-xl"
                />
              </div>

              <div className="client-text-container">
                <p className="client-name">{name}</p>
                <span className="client-subscribers">
                  {subscribers.toLocaleString()} subscribers
                </span>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
