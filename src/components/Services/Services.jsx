import React from "react";
import video from "../../assets/icons/videoediting.png";
import tiktok from "../../assets/icons/tiktokicon.png";
import thumbnail from "../../assets/icons/thumbnail.png";
import events from "../../assets/icons/events.png";
import motion from "../../assets/icons/motiongraphics.png";
import community from "../../assets/icons/communities.png";

export default function Services() {
  const services = [
    { icon: video, title: "Video Editing" },
    { icon: tiktok, title: "Short-Form Content" },
    { icon: thumbnail, title: "Thumbnails" },
    { icon: events, title: "Event & Social Designs" },
    { icon: motion, title: "Motion Graphics" },
    { icon: community, title: "Community Management" },
  ];

  return (
    <section className="md:px-24 px-4 py-20 md:py-32 bg-[#3d135b] " id="about">
      <div>
        <h3 className="text-gold text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-12">
          My Services
        </h3>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="py-8 rounded-2xl txt-size hover:scale-105 transition duration-300 flex flex-col items-center text-center"
          >
            <img
              src={service.icon}
              alt={service.title}
              className="w-20 h-20 md:w-36 md:h-36 mb-4"
            />
            <h4 className="font-semibold text-gold">{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
