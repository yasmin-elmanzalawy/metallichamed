import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";

// Example card images and thumbnails
import gaming from "../../assets/thumbnails/gaming.avif";
import vlog from "../../assets/thumbnails/irl.avif";
import fea1 from "../../assets/thumbnails/dum.jpg";
import ads from "../../assets/thumbnails/ads.png";
import mazag from "../../assets/thumbnails/bestof/3.avif"; 

import Footer from "../Footer/Footer";

// Gaming
const gamingLong = import.meta.glob(
  "../../assets/thumbnails/gaming/long/*.avif",
  { eager: true }
);
const gamingShort = import.meta.glob(
  "../../assets/thumbnails/gaming/short/*.avif",
  { eager: true }
);

// IRL
const irlLong = import.meta.glob("../../assets/thumbnails/irl/long/*.avif", {
  eager: true,
});
const irlShort = import.meta.glob("../../assets/thumbnails/irl/short/*.avif", {
  eager: true,
});
// ads
const adsLong = import.meta.glob("../../assets/thumbnails/ads/*.avif", {
  eager: true,
});
// Podcast
const pocast = import.meta.glob("../../assets/thumbnails/podcast/*.avif", {
  eager: true,
});
// Podcast
const memes = import.meta.glob("../../assets/thumbnails/memes/*.avif", {
  eager: true,
});
// others
const otherslg = import.meta.glob("../../assets/thumbnails/others/long/*.avif", {
  eager: true,
});
const otherssh = import.meta.glob("../../assets/thumbnails/others/short/*.avif", {
  eager: true,
});

// === Helper function to turn object → sorted array
const toArray = (obj) =>
  Object.keys(obj)
    .sort((a, b) => {
      const getNum = (str) => parseInt(str.match(/(\d+)/)?.[0] ?? 0, 10);
      return getNum(a) - getNum(b);
    })
    .map((key) => obj[key].default);

// Arrays ready to use
const gl = toArray(gamingLong);
const gs = toArray(gamingShort);
const il = toArray(irlLong);
const is = toArray(irlShort);
const ad = toArray(adsLong);
const pc = toArray(pocast);
const meme = toArray(memes);
const otherlg = toArray(otherslg);
const othersh = toArray(otherssh);

const cards = [
  {
    id: 1,
    image: gaming,
    shortVideos: [
      {
        id: 1,
        title: "Call Of Duty Arabic",
        thumbnail: gs[0],
        url: "https://www.tiktok.com/@callofdutyarabic/video/7385543871532453137",
      },
      {
        id: 2,
        title: "ubisoftme",
        thumbnail: gs[1],
        url: "https://www.tiktok.com/@ubisoftme/video/7511355118864911623",
      },

      {
        id: 3,
        title: "fortniteme",
        thumbnail: gs[2],
        url: "https://www.tiktok.com/@fortniteme/video/7471292290670152968",
      },
      {
        id: 4,
        title: "Call Of Duty Arabic",
        thumbnail: gs[3],
        url: "https://www.tiktok.com/@callofdutyarabic/video/7515494632373980434",
      },
      {
        id: 5,
        title: "nvidiageforceme",
        thumbnail: gs[4],
        url: "https://www.instagram.com/reel/DBMU9k6p9aA",
      },
      {
        id: 6,
        title: "Call Of Duty Arabic",
        thumbnail: gs[5],
        url: "https://www.tiktok.com/@callofdutyarabic/video/7406428579484962066",
      },

      {
        id: 7,
        title: "ubisoftme",
        thumbnail: gs[6],
        url: "https://www.tiktok.com/@ubisoftme/video/7467235232014552327",
      },
      {
        id: 8,
        title: "CoD Movement",
        thumbnail: gs[7],
        url: "https://drive.google.com/file/d/1bB4C_TbzZkX34au7igquq7TdCgKiXD5s/view",
      },
      {
        id: 9,
        title: "fortniteme",
        thumbnail: gs[8],
        url: "https://www.tiktok.com/@fortniteme/video/7441964240275131655",
      },
      {
        id: 10,
        title: "Call Of Duty Arabic",
        thumbnail: gs[9],
        url: "https://www.tiktok.com/@callofdutyarabic/video/7480936598356430088",
      },
      {
        id: 11,
        title: "fortniteme",
        thumbnail: gs[10],
        url: "https://www.tiktok.com/@fortniteme/video/7444613375721606418",
      },

      {
        id: 12,
        title: "Call Of Duty Arabic",
        thumbnail: gs[11],
        url: "https://www.tiktok.com/@callofdutyarabic/video/7495052280392174864",
      },
      {
        id: 13,
        title: "arenaesportsae",
        thumbnail: gs[12],
        url: "https://www.instagram.com/reel/CvAQQT2PzI5",
      },
      {
        id: 14,
        title: "Call Of Duty Arabic",
        thumbnail: gs[13],
        url: "https://www.tiktok.com/@callofdutyarabic/video/7492453335568551176",
      },

      {
        id: 15,
        title: "arenaesportsae",
        thumbnail: gs[14],
        url: "https://drive.google.com/file/d/1r0L6OKEs96IyRvPA3njP97akSbuD-Kmx/view",
      },
      {
        id: 16,
        title: "arenaesportsae",
        thumbnail: gs[15],
        url: "https://drive.google.com/file/d/1Fdvd_J_h1FjkHahvCEiTUUVUWkKUJm5q/view",
      },
      {
        id: 17,
        title: "Call Of Duty Arabic",
        thumbnail: gs[16],
        url: "https://www.tiktok.com/@callofdutyarabic/video/7494317153022233872",
      },

      {
        id: 18,
        title: "Call Of Duty Arabic",
        thumbnail: gs[17],
        url: "https://www.tiktok.com/@callofdutyarabic/video/7487579100622687506",
      },
    ],
    longVideos: [
      {
        id: 1,
        title: "Aziz - عزيز",
        thumbnail: gl[0],
        url: "https://youtu.be/wokcf4Va6eg",
      },
      {
        id: 2,
        title: "EA Middle East",
        thumbnail: gl[1],
        url: "https://youtu.be/vytFscb7FV8",
      },
      {
        id: 3,
        title: "AboFlah",
        thumbnail: gl[2],
        url: "https://youtu.be/pF-40SHydHM",
      },
      {
        id: 4,
        title: "B3shr",
        thumbnail: gl[3],
        url: "https://youtu.be/5ELjkeEKSlM",
      },

      {
        id: 5,
        title: "Aziz - عزيز",
        thumbnail: gl[4],
        url: "https://youtu.be/5UMnBG_eAYY",
      },
      {
        id: 6,
        title: "Sofyan",
        thumbnail: gl[5],
        url: "https://youtu.be/pCzfGtsK0xY",
      },
      {
        id: 7,
        title: "Aziz - عزيز",
        thumbnail: gl[6],
        url: "https://youtu.be/EgvX2qF2FCE",
      },
      {
        id: 8,
        title: "B3shr",
        thumbnail: gl[7],
        url: "https://youtu.be/lZ_Ho4fXVCg",
      },
      {
        id: 9,
        title: "Aziz - عزيز",
        thumbnail: gl[8],
        url: "https://youtu.be/HuqCoL5mKTw",
      },
      {
        id: 10,
        title: "Ahmed Show",
        thumbnail: gl[9],
        url: "https://youtu.be/Lulc7ZQOg-U",
      },
      {
        id: 11,
        title: "Gamers React",
        thumbnail: gl[10],
        url: "https://www.youtube.com/watch?v=4sfeqf4-LyM",
      },
      {
        id: 12,
        title: "Aziz - عزيز",
        thumbnail: gl[11],
        url: "https://youtu.be/dmhMm7lmWRw",
      },
      {
        id: 13,
        title: "JellyPeanut",
        thumbnail: gl[12],
        url: "https://www.youtube.com/watch?v=RtHFYeANEfY",
      },

      {
        id: 14,
        title: "B3shr",
        thumbnail: gl[13],
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
        thumbnail: is[0],
        url: "https://www.instagram.com/reel/CwQb9xws5wm",
      },
      {
        id: 2,
        title: "colbymartel",
        thumbnail: is[1],
        url: "https://www.tiktok.com/@colbymartel/video/7503329191841107246?lang=en",
      },

      {
        id: 3,
        title: "endlessstudiosgames",
        thumbnail: is[2],
        url: "https://www.instagram.com/reel/DJ9negCh57B",
      },
      {
        id: 4,
        title: "colbymartel",
        thumbnail: is[3],
        url: "https://www.tiktok.com/@colbymartel/video/7502463977889418542?lang=en",
      },
      {
        id: 5,
        title: "egamena",
        thumbnail: is[4],
        url: "https://www.tiktok.com/@egamena/video/7361725976633494802",
      },

      {
        id: 6,
        title: "colbymartel",
        thumbnail: is[5],
        url: "https://www.tiktok.com/@colbymartel/video/7499572035417296158?lang=en",
      },
      {
        id: 7,
        title: "OFFSIDE__Football",
        thumbnail: is[6],
        url: "https://www.youtube.com/shorts/zADUh86ejKw",
      },
    ],
    longVideos: [
      {
        id: 1,
        title: "CANCEL",
        thumbnail: il[0],
        url: "https://youtu.be/mVmMyYxPQW8",
      },
      {
        id: 2,
        title: "Aziz - عزيز",
        thumbnail: il[1],
        url: "https://youtu.be/QvD2c0VwE2o",
      },

      {
        id: 3,
        title: "KingsMen ملوك التحدي",
        thumbnail: il[2],
        url: "https://youtu.be/yh80UCaubZc",
      },
      {
        id: 4,
        title: "CANCEL",
        thumbnail: il[3],
        url: "https://youtu.be/OHMadHmc-eg",
      },
      {
        id: 5,
        title: "Aziz - عزيز",
        thumbnail: il[4],
        url: "https://youtu.be/RALnd4Tidz8",
      },

      {
        id: 6,
        title: "CANCEL",
        thumbnail: il[5],
        url: "https://youtu.be/URdsD1OoRCk",
      },

      {
        id: 7,
        title: "Aziz - عزيز",
        thumbnail: il[6],
        url: "https://youtu.be/QeUr8V8juxo",
      },
      {
        id: 8,
        title: "Mazaj - مزاج",
        thumbnail: il[7],
        url: "https://youtu.be/zuaFGp5EhQM",
      },
      {
        id: 9,
        title: "Mazaj - مزاج",
        thumbnail: mazag,
        url: "https://youtu.be/F08cBZDa4WM",
      },
    ],
  },
  {
    id: 1,
    name: "Ads",
    image: ads,
    shortVideos: [
      {
        id: 1,
        title: "Ooredooez Showcase",
        thumbnail: ad[0],
        url: "https://drive.google.com/file/d/1kzf4VIJKe5FPpEKDECHRsCQgGSF3sTY_/view",
      },

      {
        id: 2,
        title: "Swarmio Inc",
        thumbnail: ad[1],
        url: "https://drive.google.com/file/d/1MIZWPFwTJy5wVDp6APHUL4A8TSTxbIvz/view?usp=drive_link",
      },
      {
        id: 3,
        title: "Ooredooez",
        thumbnail: ad[2],
        url: "https://www.instagram.com/reel/CuPERNroGjI",
      },
      {
        id: 4,
        title: "arenaesportsae",
        thumbnail: ad[3],
        url: "https://www.instagram.com/reel/CtMaoL8ANks",
      },
      {
        id: 5,
        title: "Ooredooez Sign Up",
        thumbnail: ad[4],
        url: "https://drive.google.com/file/d/1BXa_-DzL1ofcyvzzxPjAhszujFJJIZ2S/view",
      },
      {
        id: 6,
        title: "Arenaesportsae Lan Ad",
        thumbnail: ad[5],
        url: "https://drive.google.com/file/d/1aZltlzmpiWD7PmgwvqBHHcwXixxNY8s_/view",
      },
      {
        id: 7,
        title: "Arenaesportsae Store Ad",
        thumbnail: ad[6],
        url: "https://drive.google.com/file/d/1DYf-UURIOUPIC7iL1OmKfyVX4lWQAmI8/view",
      },
      {
        id: 8,
        title: "Ooredooez Register & Verify",
        thumbnail: ad[7],
        url: "https://drive.google.com/file/d/1d-QuSUlNlQaRgf546c2P6IBbu2kQaI15/view",
      },
      {
        id: 9,
        title: "Arenaesportsae Trio Ad",
        thumbnail: ad[8],
        url: "https://drive.google.com/file/d/1gX5Y1FcGMkkzX0OD_F0eyqthRhv-6PnW/view",
      },
      {
        id: 10,
        title: "Globe Gamer Grounds Platform Default Ad",
        thumbnail: ad[9],
        url: "https://drive.google.com/file/d/1fU5GyLYgGpMOQ70-G3b2xF70EhgsznE8/view",
      },
      {
        id: 11,
        title: "ooredooez",
        thumbnail: ad[10],
        url: "https://www.instagram.com/reel/CztZVB4tIav",
      },

      {
        id: 12,
        title: "360games General Ad",
        thumbnail: ad[11],
        url: "https://drive.google.com/file/d/1Nkg1M0EpqfLYB0E0Fizdv1p0ApmApTJ0/view",
      },

      {
        id: 13,
        title: "Ooredooez",
        thumbnail: ad[12],
        url: "https://www.instagram.com/reel/CuwlXfpIbjh",
      },

      {
        id: 14,
        title: "ooredooez PPC Ad",
        thumbnail: ad[13],
        url: "https://drive.google.com/file/d/1BbW24LVpLmqPcCTU2bh1ViCkcq7mzARA/view",
      },
      {
        id: 15,
        title: "predatorgamingme",
        thumbnail: ad[14],
        url: "https://www.instagram.com/reel/DEPzs39PiWu",
      },
      {
        id: 16,
        title: "Ooredooez Platform Default Ad",
        thumbnail: ad[15],
        url: "https://drive.google.com/file/d/1wcEKtdASyGBn9jDAWwaf7td6SMduW_wA/view",
      },
      {
        id: 17,
        title: "CANCEL",
        thumbnail: ad[16],
        url: "https://x.com/aldaejam/status/1594017369403248640",
      },
    ],
    longVideos: [],
  },
  {
    id: 4,
    name: "Podcast",
    image: fea1,
    shortVideos: [
      
    ],
    longVideos: [
      {
        id: 1,
        title: "Amados Strategies",
        thumbnail: pc[0],
        url: "https://www.tiktok.com/@amados.strategies/video/7522954106890161416",
      },
      {
        id: 2,
        title: "Amados Strategies",
        thumbnail: pc[1],
        url: "https://www.tiktok.com/@amados.strategies/video/7521756129647430919",
      },
      {
        id: 3,
        title: "Amados Strategies",
        thumbnail:  pc[2],
        url: "https://youtu.be/Q2m8f8n-vKs",
      },
      {
        id: 4,
        title: "Amados Strategies",
        thumbnail:  pc[3],
        url: "https://youtu.be/pQ1boyotNns",
      },
      {
        id: 5,
        title: "e-Talks",
        thumbnail:  pc[4],
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
        title: "Head Flashlight",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1wXJx6zrkR8qaW_rCQ5lb00T0ZEvaZ0AR/view?usp=sharing",
      },
      {
        id: 4,
        title: "Heater",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/12-LP9tfzuGyQT9gsopfrmNEVDjr3J7oP/view?usp=sharing",
      },
      {
        id: 5,
        title: "Iconic Air Purifier",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1NDUWJdPoyFtaNAOuFuJ6mYPN1xF7tdTF/view?usp=sharing",
      },
      {
        id: 6,
        title: "Mini Magnet Flashlight",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1mkgB0cgpt00PtSmbzIRFOzHfrzJCy7hi/view?usp=sharing",
      },
      
    ],
    longVideos: [],
  },
  {
    id: 7,
    name: "Other",
    image: fea1,
    shortVideos: [
      {
        id: 1,
        title: "Arena Esports",
        thumbnail: othersh[0],
        url: "https://www.instagram.com/reel/CtcL9cyRR-c",
      },
      {
        id: 2,
        title: "The Ultimates",
        thumbnail: othersh[1],
        url: "https://x.com/TheUltimatesgg/status/1654913920849829888",
      },
   

      {
        id: 3,
        title: "Claritine Arabia",
        thumbnail: othersh[2],
        url: "https://www.facebook.com/reel/1435410481075856",
      },
    ],
    longVideos: [
      {
        id: 1,
        title: "B3shr",
        thumbnail: otherlg[0],
        url: "https://youtu.be/N0dkH7sx4LU",
      },
      {
        id: 2,
        title: "B3shr",
        thumbnail: otherlg[1],
        url: "https://youtu.be/QiL6CgvH_rU",
      },
      {
        id: 3,
        title: "OFFSIDE",
        thumbnail: otherlg[2],
        url: "https://www.youtube.com/watch?v=o12FbYlg8Fw",
      },
      {
        id: 7,
        title: "Golazo",
        thumbnail: otherlg[3],
        url: "https://youtu.be/dMjK6BbLmqE",
      },
    
      {
        id: 9,
        title: "Ulta Beauty V3 Energetic",
        thumbnail: otherlg[4],
        url: "https://drive.google.com/file/d/11buqEQnX5GMZUWAxgbRuPiJDdJ5QHRWZ/view?usp=sharing",
      },
      {
        id: 10,
        title: "Ulta Beauty V3 Stylish",
        thumbnail: otherlg[4],
        url: "https://drive.google.com/file/d/11buqEQnX5GMZUWAxgbRuPiJDdJ5QHRWZ/view?usp=sharing",
      },
           {
        id: 3,
        title: "AboFlah",
        thumbnail: otherlg[5],
        url: "https://www.youtube.com/watch?v=1KJaZoZgTvw",
      }
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
        thumbnail: meme[0],
        url: "https://drive.google.com/file/d/1NtQLYnsNyjnj8-vueycTVkNmSsMRhMEn/view",
      },
      {
        id: 2,
        title: "Arena Esports",
        thumbnail: meme[1],
        url: "https://www.instagram.com/reel/CuFCPfZIO7C",
      },
      {
        id: 3,
        title: "Arena Esports",
        thumbnail: meme[2],
        url: "https://www.tiktok.com/@tundraesports/video/7462308222754426144",
      },
    ],
    longVideos: [],
  },
  {
    id: 10,
    name: "Tiktoks",
    image: fea1,
    shortVideos: [
      {
        id: 1,
        title: "Arabian League Stream Moment",
        thumbnail:fea1,
        url: "https://www.tiktok.com/@colbymartel/video/7503329191841107246?lang=en",
      },
      {
        id: 2,
        title: "Arena Esports",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@colbymartel/video/7502463977889418542?lang=en",
      },
      {
        id: 3,
        title: "Arena Esports",
        thumbnail: fea1,
        url: "https://www.tiktok.com/@colbymartel/video/7499572035417296158?lang=en",
      },
      {
        id: 4,
        title: "Arena Esports",
        thumbnail: fea1,
        url: "https://www.youtube.com/shorts/Y-jJkZfdf3U",
      },
      {
        id: 3,
        title: "Arena Esports",
        thumbnail: fea1,
        url: "https://www.youtube.com/shorts/zADUh86ejKw",
      },
    ],
    longVideos: [],
  },
  {
    id: 11,
    image: fea1,
    name: "Tests",
    shortVideos: [
      {
        id: 1,
        title: "Airrack",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1QLQJm1ADKItRVdk8jjuZRXVirtD20Lkn/view?usp=sharing",
      },
      {
        id: 2,
        title: "Amados Strategies",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1eJa35pQRdnC9j1rShO4b0qCG-kqEcyry/view?usp=sharing&t=1",
      },
      {
        id: 3,
        title: "CommerceCore Hook 1",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1HC3Vev0pK8bMWrFbTV9EUv8dA4CFn8rW/view?usp=sharing",
      },
      {
        id: 4,
        title: "CommerceCore Hook 2",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1c6UZ_iJFpH-kwOsoYpCddFvZHSP_DQLL/view?usp=sharing",
      },
      {
        id: 5,
        title: "CommerceCore Hook 3",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1gTWyvPFSgG7Sl1EGgCozFNSQ6d4FWYZF/view?usp=sharing",
      },
      {
        id: 6,
        title: "DailyFuelUp",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1h_g9pkCq1--TsQnrMHJcijBRxTFK4SN-/view?usp=sharing",
      },
      {
        id: 7,
        title: "KFM",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1jh9W12z3gadjg_bCoJnE2sqyd_2JxGj8/view?usp=sharing",
      },
      {
        id: 8,
        title: "Maxian Football",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1aeIhtt_llI3fDf8wc_Cu1HgIIRjR_mgC/view?usp=sharing",
      },
      {
        id: 9,
        title: "Pasynsoft",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1ilMR8bIA1LZz83c7LGzsDt73_IZouyO_/view?usp=sharing",
      },
      {
        id: 10,
        title: "Saatchi & Saatchi Qatar",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1bRsAc1vHtU0Elf-HALDOtIfORDHYBKpx/view?usp=sharing",
      },
      {
        id: 11,
        title: "VCL 25",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1zj6G4cBdJgFzuYvwUVV-dPWL4kmvulGy/view?usp=sharing",
      },
      {
        id: 12,
        title: "MUDWTR Test Ad",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1K0eXS2QNO4M4sdjN4mPc_vD6CVrB3Pek/view?usp=sharing",
      },
      {
        id: 13,
        title: "SNAPR",
        thumbnail: fea1,
        url: "https://drive.google.com/file/d/1-_-O3EEXJQI9xmWGlM2f5Ryb2PiUCpGC/view?usp=drive_link",
      },
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
                className="cursor-pointer flex flex-col items-center transition-transform"
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="object-cover rounded-lg border border-transparent transition-transform duration-300 hover:scale-105 hover:border-gold"
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
            
            {
             selectedCard.name === "Podcast" ||
             selectedCard.name !== "Ads" &&
              selectedCard.name !== "Documentary" &&
              selectedCard.name !== "UGC" &&
              selectedCard.name !== "Memes" &&
              selectedCard.name !== "Tiktoks" &&
              selectedCard.name !== "Tests" && (
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
                className={` grid gap-6 ${
                  selectedCard.name === "Podcast" ||
                  selectedCard.name === "Ads" ||
                  selectedCard.name === "Documentary" ||
                  selectedCard.name === "UGC" ||
                  selectedCard.name === "Memes" ||
                  selectedCard.name === "Tiktoks" ||
                  selectedCard.name === "Tests"
                    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                    : activeTab === "short"
                    ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
                    : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
                }`}
              >
                {(
                  selectedCard.name === "Podcast" ||
                selectedCard.name === "Documentary" ||
                selectedCard.name === "UGC" ||
                selectedCard.name === "Memes" ||
                selectedCard.name === "Tiktoks" ||
                selectedCard.name === "Tests"
                  ? [...selectedCard.shortVideos, ...selectedCard.longVideos]
                  : activeTab === "short"
                  ? selectedCard.shortVideos
                  : selectedCard.longVideos
                ).map((video) => (
                  <div
                    key={video.id}
                    className="overflow-hidden hover:scale-105 transition-transform duration-300 relative rounded-xl"
                  >
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className="relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className={`w-full rounded-xl object-cover shadow-sm hover:shadow-lg transition-shadow duration-300
          ${
            selectedCard.name === "Podcast" ||
            selectedCard.name === "Documentary" ||
            selectedCard.name === "UGC" ||
            selectedCard.name === "Tests"
              ? "aspect-video"
              : activeTab === "short"
              ? "aspect-[2/3]"
              : "aspect-video"
          }`}
                        />
                        {/* Dark overlay on hover */}
                        <div className="absolute inset-0 rounded-xl bg-black/0 hover:bg-black/20 transition-colors duration-300"></div>
                      </div>

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
