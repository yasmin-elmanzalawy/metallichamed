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
import B3shr from "../../assets/creators/B3shr.jpg";
import AmrElhady from "../../assets/creators/AmrElhady.jpg";
import cancel from "../../assets/creators/CANCEL.jpg";
import GamersReact from "../../assets/creators/GamersReact.jpg";
import JellyPeanut from "../../assets/creators/JellyPeanut.png";
import MrMarvelTV from "../../assets/creators/MrMarvelTV.jpg";
import LeoNoHero from "../../assets/creators/LeoNoHero.jpg";
import i6arba5 from "../../assets/creators/i6arba5.jpg";
import Sofyan from "../../assets/creators/Sofyan.jpg";
import ColbyMartel from "../../assets/creators/ColbyMartel.jpg";
import offside from "../../assets/creators/OFFSIDE.jpg";
import golazo from "../../assets/creators/golazo.jpg";
import VoltechFPS from "../../assets/creators/VoltechFPS.png";
import TheReengineeredClub from "../../assets/creators/TheReengineeredClub.png";
import NourKhan from "../../assets/creators/NourKhan.jpg";
import MySalahMat from "../../assets/creators/MySalahMat.png";

import Navbar from "../Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";

const companies = [
  { id: 2, name: "Mazaj", image: mazag, link: "https://www.youtube.com/@mazajofficial" },
  { id: 3, name: "ITP Media Group", image: itp, link: "https://www.itp.com" },
  { id: 4, name: "Spartan Middle East", image: spartan, link: "https://www.instagram.com/spartanmiddleeast" },
  { id: 5, name: "Call of Duty Arabic", image: callofduty, link: "https://www.tiktok.com/@callofdutyarabic" },
  { id: 6, name: "Ubisoft Arabic", image: ubisoft, link: "https://www.tiktok.com/@ubisoftme" },
  { id: 7, name: "Fortnite Arabic", image: fortnite, link: "https://www.tiktok.com/@fortniteme" },
  { id: 8, name: "EA Middle East", image: ea, link: "https://www.youtube.com/@ElectronicArtsME" },
  { id: 1, name: "Acer", image: acer, link: "https://www.instagram.com/acermiddleeast" },
  { id: 9, name: "NVIDIA GeForce Middle East", image: nvidia, link: "https://www.instagram.com/nvidiageforceme" },
  { id: 10, name: "Claritin Arabia", image: claritine, link: "https://www.facebook.com/ClaritineArabia" },
  { id: 11, name: "Ulta Beauty", image: ulta, link: "https://www.ulta.com" },
  { id: 12, name: "Swarmio Media", image: swarmio, link: "https://swarmio.inc" },
  { id: 13, name: "Arena Esports", image: arena, link: "https://arenaesports.ae" },
  { id: 14, name: "Tundra Esports", image: tundra, link: "https://www.tiktok.com/@tundraesports" },
  { id: 15, name: "OoredooEz", image: ooredo, link: "https://www.facebook.com/OoredooEZ" },
];

const contentCreators = [
  { id: 1, name: "AboFlah", image: aboflah, subscribers: 46800000, link: "https://www.youtube.com/@AboFlah" },
  { id: 2, name: "Aziz", image: aziz, subscribers: 3100000, link: "https://www.youtube.com/@Aziz14" },
  { id: 3, name: "Ahmed Show", image: ahmedshow, subscribers: 5500000, link: " https://www.youtube.com/@Ahmedowsari" },
  { id: 4, name: "B3shr", image: B3shr, subscribers: 1400000, link: " https://www.youtube.com/@B3shr" },
  { id: 5, name: "Amr El hady", image: AmrElhady, subscribers: 2000000, link: " https://www.tiktok.com/@amrelhady" },
  { id: 6, name: "CANCEL", image: cancel, subscribers: 3100000, link: "https://www.youtube.com/@GamersReact" },
  { id: 7, name: "JellyPeanut", image: JellyPeanut, subscribers: 130000, link: "https://www.twitch.tv/jellypeanut" },
  { id: 8, name: "MrMarvelTV", image: MrMarvelTV, subscribers: 3990000, link: "https://www.youtube.com/c/MrMarvelTV" },
  { id: 9, name: "LeoNoHero", image: LeoNoHero, subscribers: 152000, link: "https://www.youtube.com/@LeoNoHero" },
  { id: 10, name: "i6arba5", image: i6arba5, subscribers: 2100000, link: "https://www.youtube.com/@i6rba5" },
  { id: 11, name: "Sofyan", image: Sofyan, subscribers: 1100000, link: "https://www.youtube.com/@SofyanBN" },
  { id: 12, name: "Colby Martel", image: ColbyMartel, subscribers: 226000, link: "https://www.tiktok.com/@colbymartel" },
  { id: 13, name: "OFFSIDE", image: offside, subscribers: 198000, link: "https://www.youtube.com/@OFFSIDE__Football" },
  { id: 14, name: "Golazo", image: golazo, subscribers: 65000, link: " https://www.youtube.com/@goolazo" },
  { id: 15, name: "VoltechFPS", image: VoltechFPS, subscribers: 22000, link: " https://www.instagram.com/voltech.fps" },
  { id: 16, name: "The Re-engineered Club", image: TheReengineeredClub, subscribers: 6200, link: "https://www.youtube.com/@reengineeredclub" },
  { id: 17, name: "MySalahMat", image: MySalahMat, subscribers: 0, link: "https://www.mysalahmat.com" },
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
          key={activeTab}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-9 bg-[#662390] md:mx-24 mx-4 p-8 md:p-12 m-12 rounded-[30px]"
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

              {/* Show subscribers only for content creators */}
              {activeTab === "contentCreators" && subscribers !== undefined && (
                <>
                  <span className="text-[#E8CCF9] text-xs sm:text-base">
                    {subscribers.toLocaleString()}
                  </span>
                  <p className="text-[#E8CCF9] text-xs sm:text-base">subscribers</p>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
