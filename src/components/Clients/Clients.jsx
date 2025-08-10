import React, { useState } from "react";
import mazag from "../../assets/companies/mazag.png";
import itp from "../../assets/companies/itp.png";
import spartan from "../../assets/companies/spartan.png";
import callofduty from "../../assets/companies/callofduty.png";
import ubisoft from "../../assets/companies/ubisoft.png";
import fortnite from "../../assets/companies/fortnite.png";
import ea from "../../assets/companies/ea.png";
import acer from "../../assets/companies/acer.png";
import nvidia from "../../assets/companies/nvidia.png";
import claritine from "../../assets/companies/claritine.png";
import ulta from "../../assets/companies/ulta.png";
import swarmio from "../../assets/companies/swarmio.png";
import arena from "../../assets/companies/arena.png";
import tundra from "../../assets/companies/tundra.png";
import ooredo from "../../assets/companies/ooredoo.png";
import { NavLink } from "react-router-dom";

// creators
import aboflah from "../../assets/creators/AboFlah.jpg";
import ahmedshow from "../../assets/creators/AhmedShow3.jpg";
import aziz from "../../assets/creators/Aziz.jpg";

import Navbar from "../Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion"; // Added for animation

const companies = [
  { id: 2, name: "Mazaj", image: mazag, subscribers: 2930000, link: "https://www.youtube.com/@mazajofficial" },
  { id: 3, name: "ITP Media Group", image: itp, subscribers: 0, link: "https://www.itp.com" },
  { id: 4, name: "Spartan Middle East", image: spartan, subscribers: 0, link: "https://www.instagram.com/spartanmiddleeast" },
  { id: 5, name: "Call of Duty Arabic", image: callofduty, subscribers: 500000, link: "https://www.tiktok.com/@callofdutyarabic" },
  { id: 6, name: "Ubisoft Arabic", image: ubisoft, subscribers: 105000, link: "https://www.tiktok.com/@ubisoftme" },
  { id: 7, name: "Fortnite Arabic", image: fortnite, subscribers: 258000, link: "https://www.tiktok.com/@fortniteme" },
  { id: 8, name: "EA Middle East", image: ea, subscribers: 84000, link: "https://www.youtube.com/@ElectronicArtsME" },
  { id: 1, name: "Acer", image: acer, subscribers: 21000, link: "https://www.instagram.com/acermiddleeast" },
  { id: 9, name: "NVIDIA GeForce Middle East", image: nvidia, subscribers: 241000, link: "https://www.instagram.com/nvidiageforceme" },
  { id: 10, name: "Claritin Arabia", image: claritine, subscribers: 229000, link: "https://www.facebook.com/ClaritineArabia" },
  { id: 11, name: "Ulta Beauty", image: ulta, subscribers: 0, link: "https://www.ulta.com" },
  { id: 12, name: "Swarmio Media", image: swarmio, subscribers: 0, link: "https://swarmio.inc" },
  { id: 13, name: "Arena Esports", image: arena, subscribers: 0, link: "https://arenaesports.ae" },
  { id: 14, name: "Tundra Esports", image: tundra, subscribers: 122000, link: "https://www.tiktok.com/@tundraesports" },
  { id: 15, name: "OoredooEz", image: ooredo, subscribers: 0, link: "https://www.facebook.com/OoredooEZ" },
];

const contentCreators = [
  { id: 1, name: "AboFlah", image: aboflah, subscribers: 46800000, link: "https://www.youtube.com/@AboFlah" },
  { id: 2, name: "Aziz", image: aziz, subscribers: 3100000, link: "https://www.youtube.com/@Aziz14" },
  { id: 3, name: "Ahmed Show", image: ahmedshow, subscribers: 5500000, link: " https://www.youtube.com/@Ahmedowsari" },
];

export default function Clients() {
  const [activeTab, setActiveTab] = useState("companies");
  const clientsToShow = activeTab === "companies" ? companies : contentCreators;

  return (
    <div className="min-h-screen p-6 bg-[#30054A] text-white">
      <Navbar />

      {/* Navigation Tabs */}
      <div className="flex gap-5 md:mt-[100px] mt-[110px] mb-6 max-w-md mx-auto rounded-md overflow-hidden">
        <button
          className={`btn flex-1 text-center font-semibold transition-colors duration-300 ${
            activeTab === "companies" ? "bg-[#662390] text-gold" : "bg-[#30054A] text-white"
          }`}
          onClick={() => setActiveTab("companies")}
        >
          Companies
        </button>
        <button
          className={`btn flex-1 text-center font-semibold transition-colors duration-300 ${
            activeTab === "contentCreators" ? "bg-[#662390] text-gold" : "bg-[#30054A] text-white"
          }`}
          onClick={() => setActiveTab("contentCreators")}
        >
          Content Creators
        </button>
      </div>

      {/* Clients Grid with Zoom Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab} // re-trigger animation when tab changes
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-6 gap-6 bg-[#662390] md:mx-24 mx-4 p-8 md:p-12 m-12 rounded-[30px]"
        >
          {clientsToShow.map(({ id, name, image, subscribers, link }) => (
            <div key={id} className="flex flex-col items-center">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-gold
                  w-20 h-20 sm:w-28 sm:h-28"
              >
                <img
                  src={image}
                  alt={name}
                  className="object-cover w-full h-full rounded-lg"
                />
              </a>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-semibold hover:underline text-center
                  text-sm sm:text-lg mt-2"
              >
                {name}
              </a>
              <span className="text-[#E8CCF9] text-xs sm:text-base">
                {subscribers.toLocaleString()}
              </span>
              <p className="text-[#E8CCF9] text-xs sm:text-base">subscribers</p>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
