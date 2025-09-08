import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Footer/Footer";
import { X } from "lucide-react"; // X icon
import AWA1 from "../../assets/design/AWA1.avif";
import AWA2 from "../../assets/design/AWA2.avif";
import AWA3 from "../../assets/design/AWA3.avif";
import AWA4 from "../../assets/design/AWA4.avif";
import Fortnite1 from "../../assets/design/Fortnite1.avif";
import Fortnite2 from "../../assets/design/Fortnite2.avif";
import Fortnite3 from "../../assets/design/Fortnite3.avif";
import PlayStation from "../../assets/design/PlayStation.avif";
import VoltechFPS from "../../assets/design/VoltechFPS.avif";

// Arrays for each section
const awaImages = [AWA1, AWA2, AWA3, AWA4];
const fortniteImages = [Fortnite1, Fortnite2, Fortnite3];
const playStationImages = [PlayStation];
const voltechFPSImages = [VoltechFPS];

export default function Design() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="min-h-screen bg-[#30054A] text-white ">
        <div className="mb-28">
          <Navbar />
        </div>

        {/* Animated container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:mx-24 mx-4 md:p-12 px-5 py-12 bg-[#662390] m-8 rounded-[30px] min-h-screen"
        >
          {/* Arab Woman Awards Section */}
          <div className="mt-16 flex flex-col items-center pb-12 mb-12">
            <h3
              className="h-[60px] flex items-center justify-center text-gold 
              text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl
              [@media(min-width:1920px)]:text-3xl font-bold my-6 text-center"
            >
              Arab Woman Awards 2025 Event
            </h3>

            <div className="flex flex-wrap justify-center gap-8 my-4">
              {awaImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    className="2xl:w-[250px] [@media(min-width:1920px)]:w-[450px] [@media(min-width:1920px)]:h-[450px] w-[200px] 2xl:h-[250px] object-cover rounded-md 
                    shadow-[0_4px_15px_#FED03B]/50" // golden glow
                    // shadow-lg shadow-black/40   // neutral alternative
                    src={img}
                    alt={`Arab Woman Awards 2025 Event pic ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-[70%] h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#FED03B] to-transparent"></div>

          {/* Fortnite Section */}
          <div className="mt-16 flex flex-col items-center pb-12 mb-12">
            <h3
              className="h-[60px] flex items-center justify-center text-gold 
              text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl
              [@media(min-width:1920px)]:text-3xl font-bold my-6 text-center"
            >
              Fortnite Middle East
            </h3>

            <div className="flex flex-wrap justify-center gap-8 my-4">
              {fortniteImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    className="2xl:w-[250px] [@media(min-width:1920px)]:w-[400px] [@media(min-width:1920px)]:h-[400px] w-[200px] 2xl:h-[250px] object-cover rounded-md 
                    shadow-[0_4px_15px_#FED03B]/50"
                    src={img}
                    alt={`Fortnite project ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="w-[70%] h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#FED03B] to-transparent"></div>

          {/* PlayStation + Voltech Section */}
          <div className="mt-16 flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-8 w-full">
              {/* PlayStation */}
              <div className="flex flex-col items-center max-w-[400px] flex-1 min-w-[280px]">
                <h3
                  className="h-[60px] flex items-center justify-center text-gold 
                  text-2xl sm:text-3xl md:text-lg xl:text-3xl 2xl:text-3xl
                  [@media(min-width:1920px)]:text-3xl font-bold my-6 text-center"
                >
                  PlayStation Arabic Thumbnails
                </h3>

                {playStationImages.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      className="2xl:w-[250px] [@media(min-width:1920px)]:w-[400px] [@media(min-width:1920px)]:h-[400px] w-[200px] 2xl:h-[250px] object-cover rounded-md 
                      shadow-[0_4px_15px_#FED03B]/50"
                      src={img}
                      alt={`PlayStation thumbnail ${index + 1}`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Voltech */}
              <div className="flex flex-col items-center max-w-[400px] flex-1 min-w-[280px]">
                <h3
                  className="h-[60px] flex items-center justify-center text-gold 
                  text-2xl sm:text-3xl md:text-lg xl:text-3xl 2xl:text-3xl
                  [@media(min-width:1920px)]:text-3xl font-bold my-6 text-center"
                >
                  VoltechFPS
                </h3>

                {voltechFPSImages.map((img, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="cursor-pointer"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      className="2xl:w-[250px] [@media(min-width:1920px)]:w-[400px] [@media(min-width:1920px)]:h-[400px] w-[200px] 2xl:h-[250px] object-cover rounded-md 
                      shadow-[0_4px_15px_#FED03B]/50"
                      src={img}
                      alt={`VoltechFPS project ${index + 1}`}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 text-white text-3xl z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            {/* Image */}
            <motion.img
              src={selectedImage}
              alt="Full preview"
              className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
