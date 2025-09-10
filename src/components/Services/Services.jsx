import React from "react";
import video from "../../assets/icons/videoediting.png";
import tiktok from "../../assets/icons/tiktokicon.png";
import thumbnail from "../../assets/icons/thumbnail.png";
import events from "../../assets/icons/events.png";
import community from "../../assets/icons/communities.png";

export default function Services() {
  const services = [
    {
      icon: video,
      title: "Video Editing",
      desc: "I've worked on the following types: Gaming, Vlogs, Podcasts/Shows, Documentaries, Ads, TikTok, UGC, Events Recaps, Medical, Stylish, Highlights, Trailers, Memes, Case Studies, Announcements, Q&A, Music Clips, Islamic, Football, Tests/Drafts, IRL Challenges.",
    },
    { icon: tiktok, title: "Short-Form Content" },
    { icon: thumbnail, title: "Thumbnails" },
    { icon: events, title: "Event & Social Designs" },
    { icon: community, title: "Community Management" },
  ];

  return (
    <section className="md:px-24 px-4 py-20 bg-[#3d135b]" id="about">
      <div>
        <h3 className="text-gold text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-12">
          My Services
        </h3>
      </div>

      {/* Video Editing full row */}
      <div className="flex justify-center mb-12">
        <div className="p-6 rounded-2xl txt-size hover:scale-105 transition duration-300 w-full lg:w-[80%] flex flex-col items-center text-center">
          <img src={services[0].icon} alt={services[0].title} className="w-28 h-28 mb-4" />
          <h4 className="font-semibold text-gold mb-2">{services[0].title}</h4>
          <p className="text-neutral-white leading-relaxed">{services[0].desc}</p>
        </div>
      </div>

      {/* Other services (icons + titles only) */}
      <div className="flex flex-wrap justify-center gap-8">
        {services.slice(1).map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl txt-size hover:scale-105 transition duration-300 w-full sm:w-[80%] lg:w-[22%] flex flex-col items-center text-center"
          >
            <img src={service.icon} alt={service.title} className="w-28 h-28 mb-4" />
            <h4 className="font-semibold text-gold">{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
