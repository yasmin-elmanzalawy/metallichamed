import React, { useState } from "react";
import acer from "../../assets/companies/acer.png";
import mazag from "../../assets/companies/mazag.png";
import itp from "../../assets/companies/itp.png";
import spartan from "../../assets/companies/spartan.png";
import callofduty from "../../assets/companies/callofduty.png";
import ubisoft from "../../assets/companies/ubisoft.png";
import fortnite from "../../assets/companies/fortnite.png";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const companies = [
  {
    id: 1,
    name: "Acer",
    image: acer,
    subscribers: 21000,
    link: "https://www.instagram.com/acermiddleeast",
  },
  {
    id: 2,
    name: "Mazaj",
    image: mazag,
    subscribers: 2930000,
    link: "https://www.youtube.com/@mazajofficial",
  },
  {
    id: 3,
    name: "ITP Media Group",
    image: itp,
    subscribers: 0,
    link: "https://www.itp.com",
  },
  {
    id: 4,
    name: "Spartan Middle East",
    image: spartan,
    subscribers: 0,
    link: "https://www.instagram.com/spartanmiddleeast",
  },
  {
    id: 5,
    name: "Call of Duty Arabic",
    image: callofduty,
    subscribers: 500000,
    link: "https://www.tiktok.com/@callofdutyarabic",
  },
  {
    id: 6,
    name: "Ubisoft Arabic",
    image: ubisoft,
    subscribers: 105000,
    link: "https://www.tiktok.com/@ubisoftme",
  },
  {
    id: 7,
    name: "Fortnite Arabic",
    image: fortnite,
    subscribers: 258000,
    link: "https://www.tiktok.com/@fortniteme",
  },

  // Add more companies here
];

const contentCreators = [
  {
    id: 1,
    name: "Creator X",
    image: "https://via.placeholder.com/150",
    subscribers: 5000,
    link: "#",
  },
  {
    id: 2,
    name: "Creator Y",
    image: "https://via.placeholder.com/150",
    subscribers: 750,
    link: "#",
  },
  // Add more creators here
];

export default function Clients() {
  const [activeTab, setActiveTab] = useState("companies");

  const clientsToShow = activeTab === "companies" ? companies : contentCreators;

  return (
    <div className="min-h-screen p-6 bg-[#30054A]  text-white">
      <Navbar></Navbar>
      {/* Navigation Tabs */}

      <div className="flex gap-5   md:mt-[100px] mt-[110px]   mb-6 max-w-md mx-auto rounded-md overflow-hidden">
        <button
          className={`flex-1  text-center font-semibold transition-colors duration-300
            ${
              activeTab === "companies"
                ? "bg-[#662390] text-[#F5BF03]"
                : "bg-[#30054A] text-white"
            }`}
          onClick={() => setActiveTab("companies")}
        >
          Companies
        </button>
        <button
          className={`flex-1 text-center font-semibold transition-colors duration-300
            ${
              activeTab === "contentCreators"
                ? "bg-[#662390] text-[#F5BF03]"
                : "bg-[#30054A] text-white"
            }`}
          onClick={() => setActiveTab("contentCreators")}
        >
          Content Creators
        </button>
      </div>

      {/* Clients Grid */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 bg-[#662390] md:mx-24 mx-4 p-8 md:p-12 m-12  rounded-[30px]">
        {clientsToShow.map(({ id, name, image, subscribers, link }) => (
          <div key={id} className="flex flex-col items-center">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 h-32 block rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 border border-transparent hover:border-[#F5BF03]"
            >
              <img
                src={image}
                alt={name}
                className="object-cover w-full m-auto h-full rounded-lg"
              />
            </a>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5BF03] font-semibold text-lg hover:underline"
            >
              {name}
            </a>
            <span className="text-[#E8CCF9]">
              {subscribers.toLocaleString()}
            </span>
            <p className="text-[#E8CCF9]">subscribers</p>
          </div>
        ))}
      </div>
    </div>
  );
}
