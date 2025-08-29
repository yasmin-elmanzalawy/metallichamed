import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Servicess.css";

import gaming from "../../assets/icons/gamingicon.png";
import ads from "../../assets/icons/adsicon.png";
import camera from "../../assets/icons/cameraicon.png";
import podcast from "../../assets/icons/podcasticon.png";
import documentary from "../../assets/icons/documentaryicon.png";
import tiktok from "../../assets/icons/tiktokicon.png";
import ugc from "../../assets/icons/ugcicon.png";
import eventrecap from "../../assets/icons/eventrecapicon.png";
import highlight from "../../assets/icons/highlighticon.png";
import medical from "../../assets/icons/medicalicon.png";
import meme from "../../assets/icons/memeicon.png";
import stylish from "../../assets/icons/stylishicon.png";
import casestudy from "../../assets/icons/casestudyicon.png";
import football from "../../assets/icons/footballicon.png";
import islamic from "../../assets/icons/islamicicon.png";
import qa from "../../assets/icons/qaicon.png";
import musicclip from "../../assets/icons/musicclipicon.png";
import trailer from "../../assets/icons/trailericon.png";
import announcement from "../../assets/icons/announcmenticon.png";
import draft from "../../assets/icons/drafticon.png";
import irlchallenges from "../../assets/icons/irlchallengesicon.png";

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const [itemsPerRow, setItemsPerRow] = useState(2);

  const services = [
    { icon: gaming, label: "Gaming" },
    { icon: camera, label: "Vlogs" },
    { icon: documentary, label: "Documentaries" },
    { icon: podcast, label: "Podcasts/Shows" },
    { icon: ads, label: "Ads" },
    { icon: tiktok, label: "TikTok" },
    { icon: ugc, label: "UGC" },
    { icon: eventrecap, label: "Events Recaps" },
    { icon: medical, label: "Medical" },
    { icon: stylish, label: "Stylish" },
    { icon: trailer, label: "Trailer" },
    { icon: meme, label: "Meme" },
    { icon: casestudy, label: "Case Studies" },
    { icon: announcement, label: "Announcements" },
    { icon: qa, label: "Q&A" },
    { icon: musicclip, label: "Music Clips" },
    { icon: islamic, label: "Islamic" },
    { icon: football, label: "Football" },
    { icon: draft, label: "Tests/Drafts" },
    { icon: irlchallenges, label: "IRL Challenges" },
    { icon: highlight, label: "Highlights" },
  ];

  // Determine items per row based on screen width
  useEffect(() => {
    const updateItemsPerRow = () => {
      const width = window.innerWidth;
      if (width >= 1536) setItemsPerRow(7); // 2xl
      else if (width >= 1280) setItemsPerRow(5); // xl
      else if (width >= 768) setItemsPerRow(4); // md
      else if (width >= 640) setItemsPerRow(3); // sm
      else setItemsPerRow(2); // base
    };

    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, []);

  // Show first two rows initially
  const itemsToShow = showAll ? services.length : itemsPerRow * 2;

  return (
    <section className="md:px-24 px-4 py-12 bg-[#3d135b]" id="about">
          <h3
              className="text-gold text-2xl sm:text-3xl md:text-3xl  xl:text-4xl 2xl:text-4xl
              [@media(min-width:1920px)]:text-5xl font-bold text-center my-8 "
            >
              My Services
            </h3>
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-8 px-12"
      >
        {services.slice(0, itemsToShow).map((service, index) => (
          <motion.div
            key={index}
            className="text-center cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
          >
            <div className="m-auto my-5 max-w-[100px]">
              <img
                className="block m-auto hover:scale-105  transition-all duration-700 ease-out"
                src={service.icon}
                alt={`${service.label} icon`}
              />
            </div>
            <p className="text-gold text-sm sm:text-base md:text-lg xl:text-xl [@media(min-width:1920px)]:text-2xl">
              {service.label}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* View All / View Less button */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btnview text-sm [@media(min-width:1920px)]:text-lg ml-5 text-center font-bold  text-gold hover:text-white transition-colors"
        >
          {showAll ? "View Less" : "View All"}
        </button>
      </div>
    </section>
  );
}
