import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#210434] text-white py-10 rounded-t-3xl">
      <div className="container mx-auto px-20 flex flex-col md:flex-row justify-between items-center gap-2">
        
        {/* Left section: Quote */}
        <div className="md:w-1/2">
          <span className="text-3xl sm:text-4xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl 
  [@media(min-width:1920px)]:text-5xl m-auto font-medium  text-gold">
            Let's make your content shine.
          </span>
        </div>

        {/* Right section: Email+Phone + Socials */}
        <div className="md:w-1/2 flex flex-col md:flex-row md:items-center justify-between w-full gap-4">
          
          {/* Email + Phone */}
          <div className="items-center gap-4 md:text-left text-neutral-white text-base sm:text-lg md:text-xl  xl:text-xl 2xl:text-xl
              [@media(min-width:1920px)]:text-2x">
            <a
              href="mailto:metallichamed@gmail.com"
              className="flex items-center gap-2 my-5 hover:text-blue-400 transition-colors cursor-pointer"
            >
              <FaEnvelope className="text-xl" />
              <span>metallichamed@gmail.com</span>
            </a>
            <a
              href="tel:+201143100875"
              className="flex items-center gap-2 my-5 hover:text-green-400 transition-colors cursor-pointer"
            >
              <FaPhone className="text-xl" />
              <span>+201143100875</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 m-auto">
            {/* LinkedIn */}
            <div className="tooltip-container relative cursor-pointer">
              <a
                href="https://www.linkedin.com/in/metallichamed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-white no-underline"
              >
                <div className="layer w-12 h-12 relative transition-transform duration-300">
                  <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                  <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                  <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                  <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                  <span className="absolute inset-0 flex items-center justify-center text-blue-500 text-2xl">
                    <svg viewBox="0 0 448 512" height="1em" className="fill-current">
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                    </svg>
                  </span>
                </div>
                <span className="mt-1 opacity-0 transition-all duration-300 tooltip-text">LinkedIn</span>
              </a>
            </div>

            {/* YouTube */}
            <div className="tooltip-container relative cursor-pointer">
              <a
                href="https://www.youtube.com/channel/YOUR_CHANNEL_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-white no-underline"
              >
                <div className="layer w-12 h-12 relative transition-transform duration-300">
                  <span className="absolute inset-0 border border-red-600 rounded-md transition-all"></span>
                  <span className="absolute inset-0 border border-red-600 rounded-md transition-all"></span>
                  <span className="absolute inset-0 border border-red-600 rounded-md transition-all"></span>
                  <span className="absolute inset-0 border border-red-600 rounded-md transition-all"></span>
                  <span className="absolute inset-0 flex items-center justify-center text-red-600 text-2xl">
                    <svg viewBox="0 0 576 512" height="1em" className="fill-current">
                      <path d="M549.655 124.083c-6.281-23.65-24.79-42.07-48.52-48.45C457.154 64 288 64 288 64S118.846 64 74.865 75.632c-23.73 6.379-42.238 24.8-48.52 48.45C16 168.978 16 256 16 256s0 87.022 10.345 131.917c6.282 23.65 24.79 42.071 48.52 48.45C118.846 448 288 448 288 448s169.154 0 213.135-11.633c23.73-6.379 42.238-24.8 48.52-48.45C560 343.022 560 256 560 256s0-87.022-10.345-131.917zM232 334V178l142 78-142 78z"/>
                    </svg>
                  </span>
                </div>
                <span className="mt-1 opacity-0 transition-all duration-300 tooltip-text">YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hover animation */}
      <style jsx>{`
        .tooltip-container:hover .layer {
          transform: rotate(-35deg) skew(20deg);
        }
        .tooltip-container:hover .layer span:nth-child(1) { opacity: 0.2; }
        .tooltip-container:hover .layer span:nth-child(2) { opacity: 0.4; transform: translate(5px, -5px); }
        .tooltip-container:hover .layer span:nth-child(3) { opacity: 0.6; transform: translate(10px, -10px); }
        .tooltip-container:hover .layer span:nth-child(4) { opacity: 0.8; transform: translate(15px, -15px); }
        .tooltip-container:hover .layer span:nth-child(5) { opacity: 1; transform: translate(20px, -20px); }
        .tooltip-container:hover .tooltip-text { opacity: 1; transform: translateY(-10px); }
      `}</style>
    </footer>
  );
}
