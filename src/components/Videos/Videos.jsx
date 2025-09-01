import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";

// Example card images and thumbnails
import gaming from "../../assets/thumbnails/Gaming.png";
import vlog from "../../assets/thumbnails/irl.png";
import fea1 from "../../assets/thumbnails/dum.jpg";
import ads from "../../assets/thumbnails/ads.png";
import Footer from "../Footer/Footer";

const cards = [
  {
    id: 1,
    image: gaming,
    shortVideos: [
      {
        id: 9,
        title: "Call Of Duty Arabic",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@callofdutyarabic/video/7385543871532453137",
      },
      {
        id: 11,
        title: "ubisoftme",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@ubisoftme/video/7511355118864911623",
      },

      {
        id: 12,
        title: "fortniteme",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@fortniteme/video/7471292290670152968",
      },
      {
        id: 4,
        title: "Call Of Duty Arabic",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@callofdutyarabic/video/7515494632373980434",
      },
      {
        id: 15,
        title: "nvidiageforceme",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/DBMU9k6p9aA",
      },
      {
        id: 1,
        title: "Call Of Duty Arabic",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@callofdutyarabic/video/7406428579484962066",
      },

      {
        id: 10,
        title: "ubisoftme",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@ubisoftme/video/7467235232014552327",
      },
      {
        id: 19,
        title: "CoD Movement",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1bB4C_TbzZkX34au7igquq7TdCgKiXD5s/view",
      },
      {
        id: 13,
        title: "fortniteme",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@fortniteme/video/7441964240275131655",
      },
      {
        id: 3,
        title: "Call Of Duty Arabic",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@callofdutyarabic/video/7480936598356430088",
      },
      {
        id: 14,
        title: "fortniteme",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@fortniteme/video/7444613375721606418",
      },

      {
        id: 5,
        title: "Call Of Duty Arabic",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@callofdutyarabic/video/7495052280392174864",
      },
      {
        id: 16,
        title: "arenaesportsae",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/CvAQQT2PzI5",
      },
      {
        id: 7,
        title: "Call Of Duty Arabic",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@callofdutyarabic/video/7492453335568551176",
      },

      {
        id: 17,
        title: "arenaesportsae",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1r0L6OKEs96IyRvPA3njP97akSbuD-Kmx/view",
      },
      {
        id: 18,
        title: "arenaesportsae",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1Fdvd_J_h1FjkHahvCEiTUUVUWkKUJm5q/view",
      },
      {
        id: 6,
        title: "Call Of Duty Arabic",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@callofdutyarabic/video/7494317153022233872",
      },

      {
        id: 2,
        title: "Call Of Duty Arabic",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@callofdutyarabic/video/7487579100622687506",
      },
    ],
    longVideos: [
      {
        id: 4,
        title: "Aziz - عزيز",
        thumbnail: fea1,
        url: "https://youtu.be/wokcf4Va6eg",
      },
      {
        id: 1,
        title: "EA Middle East",
        thumbnail: fea1,
        url: "https://youtu.be/vytFscb7FV8",
      },
      {
        id: 2,
        title: "AboFlah",
        thumbnail: fea1,
        url: "https://youtu.be/pF-40SHydHM",
      },
      {
        id: 13,
        title: "B3shr",
        thumbnail: fea1,
        url: "https://youtu.be/5ELjkeEKSlM",
      },

      {
        id: 5,
        title: "Aziz - عزيز",
        thumbnail: fea1,
        url: "https://youtu.be/5UMnBG_eAYY",
      },
      {
        id: 14,
        title: "Sofyan",
        thumbnail: fea1,
        url: "https://youtu.be/pCzfGtsK0xY",
      },
      {
        id: 6,
        title: "Aziz - عزيز",
        thumbnail: fea1,
        url: "https://youtu.be/EgvX2qF2FCE",
      },
      {
        id: 11,
        title: "B3shr",
        thumbnail: fea1,
        url: "https://youtu.be/lZ_Ho4fXVCg",
      },
      {
        id: 7,
        title: "Aziz - عزيز",
        thumbnail: fea1,
        url: "https://youtu.be/HuqCoL5mKTw",
      },
      {
        id: 8,
        title: "Ahmed Show",
        thumbnail: fea1,
        url: "https://youtu.be/Lulc7ZQOg-U",
      },
      {
        id: 9,
        title: "Gamers React",
        thumbnail: fea1,
        url: "https://www.youtube.com/watch?v=4sfeqf4-LyM",
      },
      {
        id: 3,
        title: "Aziz - عزيز",
        thumbnail: fea1,
        url: "https://youtu.be/dmhMm7lmWRw",
      },
      {
        id: 10,
        title: "JellyPeanut",
        thumbnail: fea1,
        url: "https://www.youtube.com/watch?v=RtHFYeANEfY",
      },

      {
        id: 12,
        title: "B3shr",
        thumbnail: fea1,
        url: "https://youtu.be/mlt3C716x_E",
      },
    ],
  },
  {
    id: 2,
    // name: "IRL / Vlogs",
    image: vlog,
    shortVideos: [
      {
        id: 1,
        title: "arenaesportsae",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/CwQb9xws5wm",
      },
      {
        id: 4,
        title: "colbymartel",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@colbymartel/video/7503329191841107246?lang=en",
      },

      {
        id: 2,
        title: "endlessstudiosgames",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/DJ9negCh57B",
      },
      {
        id: 5,
        title: "colbymartel",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@colbymartel/video/7502463977889418542?lang=en",
      },
      {
        id: 3,
        title: "egamena",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@egamena/video/7361725976633494802",
      },

      {
        id: 6,
        title: "colbymartel",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@colbymartel/video/7499572035417296158?lang=en",
      },
      {
        id: 8,
        title: "OFFSIDE__Football",
        thumbnail: fea1,
        url: "https://www.youtube.com/shorts/zADUh86ejKw",
      },
    ],
    longVideos: [
      {
        id: 5,
        title: "CANCEL",
        thumbnail: fea1,
        url: "https://youtu.be/mVmMyYxPQW8",
      },
      {
        id: 2,
        title: "Aziz - عزيز",
        thumbnail: fea1,
        url: "https://youtu.be/QvD2c0VwE2o",
      },

      {
        id: 3,
        title: "KingsMen ملوك التحدي",
        thumbnail: fea1,
        url: "https://youtu.be/yh80UCaubZc",
      },
      {
        id: 4,
        title: "CANCEL",
        thumbnail: fea1,
        url: "https://youtu.be/OHMadHmc-eg",
      },
      {
        id: 1,
        title: "Aziz - عزيز",
        thumbnail: fea1,
        url: "https://youtu.be/RALnd4Tidz8",
      },

      {
        id: 6,
        title: "CANCEL",
        thumbnail: fea1,
        url: "https://youtu.be/URdsD1OoRCk",
      },
      {
        id: 7,
        title: "e-talkspodcast",
        thumbnail: fea1,
        url: "https://www.youtube.com/shorts/Y-jJkZfdf3U",
      },
      {
        id: 3,
        title: "Aziz - عزيز",
        thumbnail: fea1,
        url: "https://youtu.be/QeUr8V8juxo",
      },
    ],
  },
  {
    id: 3,
    name: "Ads",
    image: ads,
    shortVideos: [
      {
        id: 10,
        title: "Ooredooez Showcase",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1kzf4VIJKe5FPpEKDECHRsCQgGSF3sTY_/view",
      },

      {
        id: 1,
        title: "Swarmio Inc",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1MIZWPFwTJy5wVDp6APHUL4A8TSTxbIvz/view?usp=drive_link",
      },
      {
        id: 7,
        title: "Ooredooez",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/CuPERNroGjI",
      },
      {
        id: 2,
        title: "arenaesportsae",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/CtMaoL8ANks",
      },
      {
        id: 8,
        title: "Ooredooez Sign Up",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1BXa_-DzL1ofcyvzzxPjAhszujFJJIZ2S/view",
      },
      {
        id: 3,
        title: "Arenaesportsae Lan Ad",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1aZltlzmpiWD7PmgwvqBHHcwXixxNY8s_/view",
      },
      {
        id: 4,
        title: "Arenaesportsae Store Ad",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1DYf-UURIOUPIC7iL1OmKfyVX4lWQAmI8/view",
      },
      {
        id: 9,
        title: "Ooredooez Register & Verify",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1d-QuSUlNlQaRgf546c2P6IBbu2kQaI15/view",
      },
      {
        id: 5,
        title: "Arenaesportsae Trio Ad",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1gX5Y1FcGMkkzX0OD_F0eyqthRhv-6PnW/view",
      },
      {
        id: 6,
        title: "Globe Gamer Grounds Platform Default Ad",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1fU5GyLYgGpMOQ70-G3b2xF70EhgsznE8/view",
      },
    ],
    longVideos: [
      {
        id: 3,
        title: "ooredooez",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/CztZVB4tIav",
      },

      {
        id: 1,
        title: "360games General Ad",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1Nkg1M0EpqfLYB0E0Fizdv1p0ApmApTJ0/view",
      },

      {
        id: 3,
        title: "Ooredooez",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/CuwlXfpIbjh",
      },

      {
        id: 5,
        title: "CANCEL",
        thumbnail: fea1,
        url: "https://youtu.be/mVmMyYxPQW8",
      },

      {
        id: 8,
        title: "ooredooez PPC Ad",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1BbW24LVpLmqPcCTU2bh1ViCkcq7mzARA/view",
      },
      {
        id: 11,
        title: "predatorgamingme",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/DEPzs39PiWu",
      },
      {
        id: 9,
        title: "Ooredooez Platform Default Ad",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1wcEKtdASyGBn9jDAWwaf7td6SMduW_wA/view",
      },
      {
        id: 10,
        title: "CANCEL",
        thumbnail: fea1,
        url: "https://x.com/aldaejam/status/1594017369403248640",
      },
    ],
  },
  {
    id: 4,
    name: "Podcast",
    image: fea1,
    shortVideos: [
      {
        id: 1,
        title: "Amados Strategies",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@amados.strategies/video/7522954106890161416",
      },
      {
        id: 2,
        title: "Amados Strategies",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@amados.strategies/video/7521756129647430919",
      },
    ],
    longVideos: [
      {
        id: 1,
        title: "Amados Strategies",
        thumbnail: fea1,
        url: "https://youtu.be/Q2m8f8n-vKs",
      },
      {
        id: 2,
        title: "Amados Strategies",
        thumbnail: fea1,
        url: "https://youtu.be/pQ1boyotNns",
      },
      {
        id: 3,
        title: "e-Talks",
        thumbnail: fea1,
        url: "https://youtu.be/qZn0HEBTXuY",
      },
    ],
  },

  {
    id: 5,
    name: "Documentary",
    image: fea1,
    shortVideos: [
      {
        id: 2,
        title: "GAZA Genocide Film Documentary",
        thumbnail: fea1,
        url: "https://youtu.be/I4GOsT57mDA",
      },
    ],
    longVideos: [
      {
        id: 1,
        title: "The Re-engineered Hope ",
        thumbnail: fea1,
        url: "https://youtu.be/jGtL8l7NjCA",
      },
    ],
  },

  {
    id: 6,
    image: fea1,
    name: "UGC",
    shortVideos: [
      {
        id: 1,
        title: "DL Media Test 1",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1bZhVpL0ovO3cXcRzP_SPLZ-C87TWzRQk/view?usp=sharing",
      },
      {
        id: 2,
        title: "Adjustable Glasses",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1WuD9t_vd8YHg6Qk6Y-XWyQrokwN1DmyN/view?usp=sharing&t=1",
      },
      {
        id: 3,
        title: "DL Media Test 2",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1_hhxZm4ZJ6_4ct3YvcZ4-bkWA_eytMx7/view?usp=sharing",
      },
      {
        id: 4,
        title: "Head Flashlight",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1wXJx6zrkR8qaW_rCQ5lb00T0ZEvaZ0AR/view?usp=sharing",
      },
      {
        id: 5,
        title: "Heater",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/12-LP9tfzuGyQT9gsopfrmNEVDjr3J7oP/view?usp=sharing",
      },
      {
        id: 6,
        title: "Iconic Air Purifier",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1NDUWJdPoyFtaNAOuFuJ6mYPN1xF7tdTF/view?usp=sharing",
      },
      {
        id: 7,
        title: "Mini Magnet Flashlight",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1mkgB0cgpt00PtSmbzIRFOzHfrzJCy7hi/view?usp=sharing",
      },
      {
        id: 8,
        title: "Mini Wifi Camera",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1rfpAjXx7IsAoKcaF-lfkhB065MmizJMC/view?usp=sharing",
      },
      {
        id: 9,
        title: "Nano Spray",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1FwQnUlQX3v4lERy0Oy7idCSS649OiFvJ/view?usp=sharing",
      },
      {
        id: 10,
        title: "TV Antenna",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1dpkrHfACrJvk9_0Ks-U288CZJ_kLJCnb/view?usp=sharing",
      },
      {
        id: 11,
        title: "USB Backup Stick",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1rFScTOpCFA_g9hjcclYSzSRl0cx36dIS/view?usp=sharing",
      },
    ],
    longVideos: [], // 👈 leave empty if you only want them short form
  },

  {
    id: 7,
    name: "Other",
    image: fea1,
    shortVideos: [
      {
        id: 1,
        title: "Arena Esports",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/CtcL9cyRR-c",
      },
      {
        id: 2,
        title: "The Ultimates",
        thumbnail: fea1,
        url: "https://x.com/TheUltimatesgg/status/1654913920849829888",
      },
      {
        id: 3,
        title: "AboFlah",
        thumbnail: fea1,
        url: "https://www.youtube.com/watch?v=1KJaZoZgTvw",
      },

      {
        id: 8,
        title: "Claritine Arabia",
        thumbnail: fea1,
        url: "https://www.facebook.com/reel/1435410481075856",
      },
 
    ],
    longVideos: [
      {
        id: 4,
        title: "B3shr",
        thumbnail: fea1,
        url: "https://youtu.be/N0dkH7sx4LU",
      },
      {
        id: 5,
        title: "B3shr",
        thumbnail: fea1,
        url: "https://youtu.be/QiL6CgvH_rU",
      },
      {
        id: 6,
        title: "OFFSIDE",
        thumbnail: fea1,
        url: "https://www.youtube.com/watch?v=o12FbYlg8Fw",
      },
      {
        id: 7,
        title: "Golazo",
        thumbnail: fea1,
        url: "https://youtu.be/dMjK6BbLmqE",
      },
           {
        id: 9,
        title: "Ulta Beauty V3 Energetic",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/11buqEQnX5GMZUWAxgbRuPiJDdJ5QHRWZ/view?usp=sharing",
      },
      {
        id: 10,
        title: "Ulta Beauty V3 Stylish",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/11buqEQnX5GMZUWAxgbRuPiJDdJ5QHRWZ/view?usp=sharing",
      },
    ],
  },

  {
    id: 8,
    name: "Highlights",
    image: fea1,
    shortVideos: [
      {
        id: 1,
        title: "Arena Esports",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/Cvm7Wx1vxZQ",
      },
      {
        id: 2,
        title: "Gamer Grounds Philippines",
        thumbnail: fea1,
        url: "https://www.facebook.com/reel/1202619947281518",
      },
      {
        id: 3,
        title: "ZainEsports",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/DAd49Q9oUI8",
      },
      {
        id: 4,
        title: "OoredooEZ",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/CnhjV7-J3Ty",
      },
     
     
 
    ],
    longVideos: [
       {
        id: 5,
        title: "(OoredooEZ) Community Highlights",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/15mPHuBRUAp4qVrD-H23z3U-4IWvcvM5i/view",
      },
       {
        id: 6,
        title: "Frenzy",
        thumbnail: fea1,
        url: "https://www.facebook.com/watch/?v=3733447676883448",
      },
           {
        id: 7,
        title: "PUBG: BATTLEGROUNDS",
        thumbnail: fea1,
        url: "https://www.facebook.com/watch/?v=1025731131162862",
      },
    ],
  },

  {
    id: 9,
    name: "Memes",
    image: fea1,
    shortVideos: [
      {
        id: 1,
        title: "Arabian League Stream Moment",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1NtQLYnsNyjnj8-vueycTVkNmSsMRhMEn/view",
      },
      {
        id: 2,
        title: "Arena Esports",
        thumbnail: fea1,
        url: "https://www.instagram.com/reel/CuFCPfZIO7C",
      },
      {
        id: 3,
        title: "Arena Esports",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@tundraesports/video/7462308222754426144",
      },
    ],
    longVideos: [],
  },

  {
    id: 10,
    // name: "Tests",
    image: fea1,
    shortVideos: [
      // {
      //   id: 1,
      //   title: "Tests Folder",
      //   thumbnail: fea1,
      //   url: "https://drive.google.com/drive/folders/1Upu9XfKK7sXC4OVFwZE-gmx02S7-mHlE?usp=drive_link",
      // },
    ],
    longVideos: [],
  },

  {
    id: 11,
    // name: "DESIGNS",
    image: fea1,
    shortVideos: [
      // {
      //   id: 1,
      //   title: "Designs Folder",
      //   thumbnail: fea1,
      //   url: "https://drive.google.com/drive/folders/1rt7jCHGsod9rdzrvCbdE6hIr3aZi2zx5?usp=drive_link",
      // },
    ],
    longVideos: [],
  },
];

export default function Videos() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeTab, setActiveTab] = useState("short");

  return (
    <div className="min-h-screen bg-[#30054A] text-white ">
      <div className="mb-28">
        <Navbar />
      </div>

      <AnimatePresence mode="wait">
        {!selectedCard ? (
          // === Cards Grid ===
          <motion.div
            key="cards"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="md:mx-24 px-5 py-12 mx-4 md:p-12 grid grid-cols-1 md:grid-cols-4 2xl:grid-cols-4
            [@media(min-width:1920px)]:grid-cols-5 gap-6 bg-[#662390] m-8 rounded-[30px] min-h-screen"
          >
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => setSelectedCard(card)}
                className="cursor-pointer flex flex-col items-center hover:scale-105 transition-transform"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="object-cover rounded-lg border border-transparent hover:border-gold"
                />
                <p className="mt-2 text-gold font-semibold">{card.name}</p>
              </div>
            ))}
          </motion.div>
        ) : (
          // === Card Details Page ===
          <motion.div
            key="details"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="bg-[#662390] md:mx-24 mx-4 p-8 md:p-12 rounded-[30px]"
          >
            {/* Back Button */}
            <button
              onClick={() => {
                setSelectedCard(null);
                setActiveTab("short");
              }}
              className="mb-6 px-4 py-2 bg-gold text-black txt-size rounded-lg hover:bg-yellow-400 transition"
            >
              ← Back
            </button>

            {/* <h2 className="text-2xl font-bold text-gold mb-6">
              {selectedCard.name} Edits
            </h2> */}

            {/* Tabs (hide for Ads card) */}
            {selectedCard.name !== "Ads" &&
              selectedCard.name !== "Documentary" &&
              selectedCard.name !== "UGC" &&
              selectedCard.name !== "Memes" && (
                <div className="flex gap-5 md:mt-[20px] mt-[20px] mb-6 max-w-md mx-auto rounded-md overflow-hidden">
                  <button
                    className={`btn txt-size flex-1 text-center font-semibold transition-colors duration-300 ${
                      activeTab === "short"
                        ? "bg-[#30054A] text-gold"
                        : "bg-[#662390] text-white"
                    }`}
                    onClick={() => setActiveTab("short")}
                  >
                    Short Form
                  </button>
                  <button
                    className={`btn txt-size flex-1 text-center font-semibold transition-colors duration-300 ${
                      activeTab === "long"
                        ? "bg-[#30054A] text-gold"
                        : "bg-[#662390] text-white"
                    }`}
                    onClick={() => setActiveTab("long")}
                  >
                    Long Form
                  </button>
                </div>
              )}

            {/* Videos Grid with animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`grid gap-6 ${
                  selectedCard.name === "Ads" ||
                  selectedCard.name === "Documentary" ||
                  selectedCard.name === "UGC" || selectedCard.name === "Memes"
                    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                    : activeTab === "short"
                    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                }`}
              >
                {(selectedCard.name === "Ads" ||
                selectedCard.name === "Documentary" ||
                selectedCard.name === "UGC" || selectedCard.name === "Memes"
                  ? [...selectedCard.shortVideos, ...selectedCard.longVideos]
                  : activeTab === "short"
                  ? selectedCard.shortVideos
                  : selectedCard.longVideos
                ).map((video) => (
                  <div
                    key={video.id}
                    className="overflow-hidden hover:scale-105 transition-transform"
                  >
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className={`w-full rounded-xl object-cover ${
                          selectedCard.name === "Ads" ||
                          selectedCard.name === "Documentary" ||
                          selectedCard.name === "UGC" 
                            ? "aspect-video"
                            : activeTab === "short"
                            ? "aspect-[2/3]"
                            : "aspect-video"
                        }`}
                      />
                      <p className="text-[#E5D4D6] txt-size font-semibold text-center py-2">
                        {video.title}
                      </p>
                    </a>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
