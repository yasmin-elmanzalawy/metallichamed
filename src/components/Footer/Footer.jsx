import React from "react";
import { FaEnvelope } from "react-icons/fa";
import whatsApp from "../../assets/icons/whatsapp.png";
import youtube from "../../assets/icons/youtube.png";
import tiktok from "../../assets/icons/tiktok.png";

export default function Footer() {
  return (
    <div>
      <footer
        id="footer"
        className="bg-[#210434] text-white py-10 px-6 sm:px-10 lg:px-12 rounded-t-3xl"
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Quote Section */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-start text-center lg:text-left">
            <p className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-medium text-gold leading-tight">
              Let's make your content shine
            </p>
          </div>

          {/* Contact + Social Section */}
          <div className="w-full lg:w-[40%] flex flex-col items-center lg:items-end text-center lg:text-right gap-3">
            {/* Email + LinkedIn + WhatsApp on the same line (for large screens) */}
           

            {/* Get to know me more section */}
            <div className="flex flex-col sm:flex-row items-center lg:justify-end gap-4 mt-3">
              <p className="text-sm sm:text-base md:text-xl  text-gold font-bold">
                Get to know more of me
              </p>
              <div className="flex items-center gap-4 sm:gap-6">
                {/* YouTube */}
                <div className="tooltip-container relative cursor-pointer flex items-center">
                  <a
                    href="https://www.youtube.com/@hamedgamingshorts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-white no-underline"
                  >
                    <div className="layer w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 relative transition-transform duration-300 flex items-center justify-center">
                      <span className="absolute inset-0 border border-red-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-red-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-red-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-red-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={youtube}
                          alt="YouTube"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      </span>
                    </div>
                  </a>
                </div>

                {/* TikTok */}
                <div className="tooltip-container relative cursor-pointer flex items-center">
                  <a
                    href="https://www.tiktok.com/@hamedgaming_?_t=ZS-90ecs3fWnIt&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-white no-underline"
                  >
                    <div className="layer w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 relative transition-transform duration-300 flex items-center justify-center">
                      <span className="absolute inset-0 border border-white rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-white rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-white rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-white rounded-md transition-all"></span>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={tiktok}
                          alt="TikTok"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
             <div className="flex flex-col sm:flex-col lg:flex-row items-center lg:justify-end gap-4 sm:gap-5">
              {/* Email */}
              <a
                href="mailto:metallichamed@gmail.com"
                className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors cursor-pointer text-sm sm:text-base md:text-lg lg:text-xl"
              >
                <FaEnvelope className="relative top-[2px]" />
                <span className="break-all">metallichamed@gmail.com</span>
              </a>

              {/* Icons Wrapper */}
              <div className="flex items-center gap-4 sm:gap-6">
                {/* LinkedIn */}
                <div className="tooltip-container relative cursor-pointer flex items-center">
                  <a
                    href="https://www.linkedin.com/in/metallichamed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-white no-underline"
                  >
                    <div className="layer w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 relative transition-transform duration-300 flex items-center justify-center">
                      <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 flex items-center justify-center text-blue-500 text-lg sm:text-xl md:text-2xl">
                        <svg
                          viewBox="0 0 448 512"
                          height="1em"
                          className="fill-current"
                        >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </span>
                    </div>
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="tooltip-container relative cursor-pointer flex items-center">
                  <a
                    href="https://wa.me/201143100875"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-white no-underline"
                  >
                    <div className="layer w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 relative transition-transform duration-300 flex items-center justify-center">
                      <span className="absolute inset-0 border border-green-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-green-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-green-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 border border-green-500 rounded-md transition-all"></span>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <img
                          src={whatsApp}
                          alt="WhatsApp"
                          className="w-5 h-5 sm:w-6 sm:h-6"
                        />
                      </span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hover animation */}
        <style jsx>{`
          .tooltip-container:hover .layer {
            transform: rotate(-35deg) skew(20deg);
          }
          .tooltip-container:hover .layer span:nth-child(1) {
            opacity: 0.2;
          }
          .tooltip-container:hover .layer span:nth-child(2) {
            opacity: 0.4;
            transform: translate(5px, -5px);
          }
          .tooltip-container:hover .layer span:nth-child(3) {
            opacity: 0.6;
            transform: translate(10px, -10px);
          }
          .tooltip-container:hover .layer span:nth-child(4) {
            opacity: 0.8;
            transform: translate(15px, -15px);
          }
          .tooltip-container:hover .layer span:nth-child(5) {
            opacity: 1;
            transform: translate(20px, -20px);
          }
        `}</style>
      </footer>
    </div>
  );
}
