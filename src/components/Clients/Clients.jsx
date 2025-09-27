import React, { useState } from "react";

const creatorsImg = import.meta.glob(
  "../../assets/creators/*.avif",
  { eager: true }
);

const companiesImg = import.meta.glob(
  "../../assets/companies/*.avif",
  { eager: true }
);

// === Helper function to turn object → sorted array
const toArray = (obj) =>
  Object.keys(obj)
    .sort((a, b) => {
      const getNum = (str) => parseInt(str.match(/(\d+)/)?.[0] ?? 0, 10);
      return getNum(a) - getNum(b);
    })
    .map((key) => obj[key].default);


// Arrays ready to use
const creator = toArray(creatorsImg);
const company = toArray(companiesImg);


import Navbar from "../Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Footer/Footer";

const companies = [
  { id: 2, name: "Mazaj", image: company[0], link: "https://www.youtube.com/@mazajofficial" },
  { id: 3, name: "ITP Media Group", image: company[1], link: "https://www.itp.com" },
  { id: 4, name: "Spartan Middle East", image: company[2], link: "https://www.instagram.com/spartanmiddleeast" },
  { id: 5, name: "Call of Duty Arabic", image: company[3], link: "https://www.tiktok.com/@callofdutyarabic" },
  { id: 7, name: "Fortnite Arabic", image: company[5], link: "https://www.tiktok.com/@fortniteme" },
  { id: 6, name: "Ubisoft Arabic", image: company[4], link: "https://www.tiktok.com/@ubisoftme" },
  { id: 8, name: "EA Middle East", image: company[6], link: "https://www.youtube.com/@ElectronicArtsME" },
  { id: 1, name: "Acer", image: company[7], link: "https://www.instagram.com/acermiddleeast" },
  { id: 9, name: "NVIDIA GeForce Middle East", image: company[8], link: "https://www.instagram.com/nvidiageforceme" },
  { id: 10, name: "Claritin Arabia", image: company[9], link: "https://www.facebook.com/ClaritineArabia" },
  { id: 11, name: "Ulta Beauty", image: company[10], link: "https://www.ulta.com" },
  { id: 12, name: "Swarmio Media", image: company[11], link: "https://swarmio.inc" },
  { id: 13, name: "Arena Esports", image: company[12], link: "https://arenaesports.ae" },
  { id: 14, name: "Tundra Esports", image: company[13], link: "https://www.tiktok.com/@tundraesports" },
  { id: 15, name: "OoredooEz", image: company[14], link: "https://www.facebook.com/OoredooEZ" },
  { id: 16, name: "MySalahMat", image: company[15], link: "https://www.mysalahmat.com" },
  { id: 17, name: "Globe Gamer Grounds", image: company[16], link: "https://gamergrounds.ph" },
  { id: 18, name: "Zain Esports", image: company[17], link: "https://zainesports.com" },
  { id: 19, name: "Endless Studios", image: company[18], link: "https://www.endlessstudios.com" }, 
  { id: 20, name: "CommerceCore", image: company[19], link: "https://commercecore.com" },
  { id: 22, name: "Amadòs Strategies", image: company[21], link: "https://amadosstrategies.com" },
  { id: 23, name: "The Esports & Gaming Agency - Middle East", image: company[22], link: "https://www.egamena.com" },
  { id: 24, name: "Frenzy", image: company[23], link: "https://www.frenzyarena.com" },
  { id: 25, name: "The Ultimates", image: company[24], link: "https://www.youtube.com/@TheUltimatesGG" },
  { id: 21, name: "365games", image: company[20], link: "https://www.linkedin.com/company/365games" },
  { id: 26, name: "PUBG Arabic", image: company[25], link: "https://www.facebook.com/pubg.battlegrounds.mena" },
  { id: 27, name: "All Week Entertainment", image: company[26], link: "https://www.facebook.com/AWE.platform" },
  { id: 28, name: "audi Tourism Authority", image: company[27], link: "https://www.sta.gov.sa/en/home" },
  { id: 29, name: "MSI Gaming", image: company[28], link: "https://www.msi.com" },
  { id: 33, name: "Predator Middle East", image: company[32], link: "https://www.instagram.com/predatorgamingme" },
  { id: 30, name: "Burger King KSA", image: company[29], link: "https://x.com/BURGERKINGKSA" },
  { id: 31, name: "PlayStation Arabia", image: company[30], link: "https://www.youtube.com/@PlayStationArabia" },
  // { id: 32, name: "Arab Woman Awards", image: company[31], link: "https://www.itp.events/ArabWomanAwards" },
  { id: 34, name: "Ra'ad", image: company[33], link: "https://raad.gg" },

];

const contentCreators = [
  { id: 1, name: "AboFlah", image: creator[0], subscribers: 46800000, link: "https://www.youtube.com/@AboFlah" },
  { id: 2, name: "Aziz", image: creator[1], subscribers: 3100000, link: "https://www.youtube.com/@Aziz14" },
  { id: 3, name: "Ahmed Show", image: creator[2], subscribers: 5500000, link: " https://www.youtube.com/@Ahmedowsari" },
  { id: 4, name: "B3shr", image: creator[3], subscribers: 1400000, link: " https://www.youtube.com/@B3shr" },
  { id: 5, name: "Amr El hady", image: creator[4], subscribers: 2000000, link: " https://www.tiktok.com/@amrelhady" },
  { id: 6, name: "CANCEL", image: creator[5], subscribers: 3100000, link: "https://www.youtube.com/@GamersReact" },
  { id: 7, name: "JellyPeanut", image: creator[6], subscribers: 130000, link: "https://www.twitch.tv/jellypeanut" },
  { id: 8, name: "MrMarvelTV", image: creator[7], subscribers: 3990000, link: "https://www.youtube.com/c/MrMarvelTV" },
  { id: 9, name: "LeoNoHero", image: creator[8], subscribers: 152000, link: "https://www.youtube.com/@LeoNoHero" },
  { id: 10, name: "i6arba5", image: creator[9], subscribers: 2100000, link: "https://www.youtube.com/@i6rba5" },
  { id: 11, name: "Sofyan", image: creator[10], subscribers: 1100000, link: "https://www.youtube.com/@SofyanBN" },
  { id: 12, name: "Colby Martel", image: creator[11], subscribers: 226000, link: "https://www.tiktok.com/@colbymartel" },
  { id: 13, name: "OFFSIDE", image: creator[12], subscribers: 198000, link: "https://www.youtube.com/@OFFSIDE__Football" },
  { id: 14, name: "Golazo", image: creator[13], subscribers: 65000, link: " https://www.youtube.com/@goolazo" },
  { id: 15, name: "VoltechFPS", image: creator[14], subscribers: 22000, link: " https://www.instagram.com/voltech.fps" },
  { id: 16, name: "The Re-engineered Club", image: creator[15], subscribers: 6200, link: "https://www.youtube.com/@reengineeredclub" },
  { id: 16, name: "Gamers React", image: creator[16], subscribers: 3100000, link: " https://www.youtube.com/@GamersReact" },
  { id: 16, name: "Gamers React", image: creator[17], subscribers: 885, link: " https://www.youtube.com/@e-talkspodcast" },
];

export default function Clients() {
  const [activeTab, setActiveTab] = useState("companies");
  const clientsToShow = activeTab === "companies" ? companies : contentCreators;

  return (
    <div className=" bg-[#30054A] text-white">
      <div className="min-h-[100vh] ">


      <Navbar />

      {/* Navigation Tabs */}
      <div className="flex  md:mt-[120px] mt-[110px] gap-5 mb-6 max-w-lg mx-auto rounded-md overflow-hidden">
        <button
          className={`btn flex-1 text-sm md:text-lg ms-8 text-center font-semibold transition-colors duration-300 ${
            activeTab === "companies" ? "bg-[#662390] text-gold" : "bg-[#30054A] text-white"
          }`}
          onClick={() => setActiveTab("companies")}
        >
          Companies
        </button>
        <button
          className={`btn flex-1 text-sm md:text-lg me-8 text-center font-semibold transition-colors duration-300 ${
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
              {/* <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold font-semibold hover:underline text-center
                  txt-size mt-2"
              >
                {name}
              </a> */}

              {/* Show subscribers only for content creators */}
              {activeTab === "contentCreators" && subscribers !== undefined && (
                <>
                  <span className="text-[#E8CCF9] text-xs sm:text-lg">
                    {subscribers.toLocaleString()}
                  </span>
                  <p className="text-[#E8CCF9] text-sm sm:text-lg">subscribers</p>
                </>
              )}
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>     
    <Footer></Footer>
     </div>
  );
}
