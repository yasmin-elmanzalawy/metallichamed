import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import fea1 from "../../assets/fea1.png";
import dummyProfile from "../../assets/fea1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Featured.css";

const featuredVideos = [
  {
    id: 1,
    img: fea1,
    desc: "الكشف عن تقييمات FC 25 : خمن البطاقة مع @AbdullahAshkanani-fl4cw و @OLYAN15K",
    authorImg: dummyProfile,
  },
  {
    id: 2,
    img: fea1,
    desc: "فيديو تجريبي رقم 2 - وصف قصير",
    authorImg: dummyProfile,
  },
  {
    id: 3,
    img: fea1,
    desc: "فيديو تجريبي رقم 3 - وصف قصير",
    authorImg: dummyProfile,
  },
  {
    id: 4,
    img: fea1,
    desc: "فيديو تجريبي رقم 4 - وصف قصير",
    authorImg: dummyProfile,
  },
  {
    id: 5,
    img: fea1,
    desc: "فيديو تجريبي رقم 5 - وصف قصير",
    authorImg: dummyProfile,
  },
  {
    id: 6,
    img: fea1,
    desc: "فيديو تجريبي رقم 6 - وصف قصير",
    authorImg: dummyProfile,
  },
  {
    id: 7,
    img: fea1,
    desc: "فيديو تجريبي رقم 7 - وصف قصير",
    authorImg: dummyProfile,
  },
];

export default function Featured() {
  const settings = {
    dots: false,
     arrows: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className=""> 
      <div className="flex md:gap-5 gap-0">
        <h3 className="text-2xl text-gold pb-5 font-bold px-3 md:w-30">Featured Videos</h3>
        <button className="mt-1 ">
          <span> more</span>
        </button>
      </div>
      <Slider {...settings}>
        {featuredVideos.map((video) => (
          <div key={video.id} className="px-3 py-5">
            <a href={`#${video.id}`} className="block group">
              {/* Gradient border with always-on glow */}
              <div className=" relative w-full h-40 rounded-[20px] p-[3px] transition-transform duration-300 group-hover:scale-[1.03]">
                <img
                  src={video.img}
                  alt="Featured"
                  className="w-full h-full object-cover rounded-[17px]"
                />
                {/* Star */}
                <FaStar
                  className="absolute top-2 right-2"
                  size={20}
                  color="#f5bf03"
                />
              </div>

              {/* Info section */}
              <div className="flex items-center gap-3 mt-3">
                <img
                  src={video.authorImg}
                  alt="Author"
                  className="w-10 h-10 rounded-full border-2 border-gold-dark"
                />
                <p className="text-[#FEF7E4] text-sm">{video.desc}</p>
              </div>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
