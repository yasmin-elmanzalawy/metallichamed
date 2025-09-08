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
    {
      icon: tiktok,
      title: "Short-Form Content",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum magnam sunt, omnis dignissimos porro neque quibusdam veritatis sed distinctio sequi aliquam consectetur perspiciatis aut ut minus! Nisi, totam distinctio.",
    },
    {
      icon: thumbnail,
      title: "Thumbnails",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum magnam sunt, omnis dignissimos porro neque quibusdam veritatis sed distinctio sequi aliquam consectetur perspiciatis aut ut minus! Nisi, totam distinctio.",
    },
    {
      icon: events,
      title: "Event & Social Designs",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum magnam sunt, omnis dignissimos porro neque quibusdam veritatis sed distinctio sequi aliquam consectetur perspiciatis aut ut minus! Nisi, totam distinctio.",
    },
    {
      icon: community,
      title: "Community Management",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laborum magnam sunt, omnis dignissimos porro neque quibusdam veritatis sed distinctio sequi aliquam consectetur perspiciatis aut ut minus! Nisi, totam distinctio.",
    },
  ];

  return (
    <section className="md:px-24 px-4 py-20 bg-[#3d135b]" id="about">
      <div>
        <h3 className="text-gold text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-center mb-12">
          My Services
        </h3>
      </div>

      {/* First row */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        {services.slice(0, 3).map((service, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl hover:shadow-xl txt-size hover:scale-105 transition duration-300 w-full lg:w-[30%] flex flex-col items-center text-center"
          >
            <img src={service.icon} alt={service.title} className="w-28 h-28 mb-4" />
            <h4 className="font-semibold text-gold mb-2">{service.title}</h4>
            <p className="text-neutral-white leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* Second row */}
      <div className="flex flex-wrap justify-center gap-8">
        {services.slice(3).map((service, index) => (
          <div
            key={index}
            className=" p-6 rounded-2xl  hover:shadow-xl hover:scale-105 txt-size transition duration-300 w-full lg:w-[30%] flex flex-col items-center text-center"
          >
            <img src={service.icon} alt={service.title} className="w-28 h-28 mb-4" />
            <h4 className="font-semibold text-gold mb-2">{service.title}</h4>
            <p className="text-neutral-white leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
