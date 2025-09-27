import React from "react";
import { FaEnvelope } from "react-icons/fa";
import whatsApp from "../../assets/icons/whatsapp.png";

export default function Footer() {
  return (
    <div>
      <footer
        id="footer"
        className="bg-[#210434] text-white py-10 p-6 sm:p-10 lg:px-12 rounded-t-3xl"
      >
        <div className="container mx-auto px-2 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          {/* Quote: 40% */}
          <div className="w-full lg:w-[40%] flex justify-center items-center text-center">
            <p
              className="text-2xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl 
              [@media(min-width:1920px)]:text-4xl font-medium text-gold"
            >
              Let's make your content shine.
            </p>
          </div>

          {/* Email: 30% */}
          <div className="w-full lg:w-[30%] flex justify-center items-center text-center">
            <a
              href="mailto:metallichamed@gmail.com"
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors cursor-pointer text-base sm:text-lg md:text-xl xl:text-xl 2xl:text-2xl"
            >
              <FaEnvelope className="text-lg sm:text-xl" />
              <span className="break-all">metallichamed@gmail.com</span>
            </a>
          </div>

          {/* Social Links: 30% */}
          <div className="w-full lg:w-[30%] flex justify-center items-center gap-6">
            {/* LinkedIn */}
            <div className="tooltip-container relative cursor-pointer">
              <a
                href="https://www.linkedin.com/in/metallichamed"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-white no-underline"
              >
                <div className="layer w-10 h-10 sm:w-12 sm:h-12 relative transition-transform duration-300">
                  <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                  <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                  <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                  <span className="absolute inset-0 border border-blue-500 rounded-md transition-all"></span>
                  <span className="absolute inset-0 flex items-center justify-center text-blue-500 text-xl sm:text-2xl">
                    <svg
                      viewBox="0 0 448 512"
                      height="1em"
                      className="fill-current"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </span>
                </div>
                <span className="mt-1 opacity-0 transition-all duration-300 tooltip-text text-sm">
                  LinkedIn
                </span>
              </a>
            </div>

            {/* WhatsApp */}
            <div className="tooltip-container relative cursor-pointer">
              <a
                href="https://wa.me/201143100875"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-white no-underline"
              >
                <div className="layer w-10 h-10 sm:w-12 sm:h-12 relative transition-transform duration-300">
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
                <span className="mt-1 opacity-0 transition-all duration-300 tooltip-text text-sm">
                  WhatsApp
                </span>
              </a>
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
          .tooltip-container:hover .tooltip-text {
            opacity: 1;
            transform: translateY(-10px);
          }
        `}</style>
      </footer>

      {/* Copyright aligned under the quote */}
    <div className="bg-[#170324]">
  <div className="container mx-auto px-2">
    <div className="w-full lg:w-[40%] mx-auto lg:ml-0 text-center py-5 text-lg text-[#7f2bb4]">
      © 2025 All Rights Reserved. Created by{" "}
      <a
        href="mailto:elmanzalawyyasmine@gmail.com"
        className="text-[#b95af5] font-bold hover:underline"
      >
        Yarci.
      </a>
    </div>
  </div>
</div>

    </div>
  );
}
