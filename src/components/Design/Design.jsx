import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Footer/Footer";
import { X } from "lucide-react"; // X icon
import AWA1 from "../../assets/design/AWA1.png";
import AWA2 from "../../assets/design/AWA2.png";
import AWA3 from "../../assets/design/AWA3.png";
import AWA4 from "../../assets/design/AWA4.png";
import Fortnite1 from "../../assets/design/Fortnite1.png";
import Fortnite2 from "../../assets/design/Fortnite2.png";
import Fortnite3 from "../../assets/design/Fortnite3.png";
import PlayStation from "../../assets/design/PlayStation.jpg";
import VoltechFPS from "../../assets/design/VoltechFPS.png";

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
          <div>
            <h3
              className="text-gold text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl
              [@media(min-width:1920px)]:text-3xl font-bold my-6 text-center"
            >
              Arab Woman Awards 2025 Event
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 my-4 m-auto">
              {awaImages.map((img, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    className="rounded-md w-full object-cover"
                    src={img}
                    alt={`Arab Woman Awards 2025 Event pic ${index + 1}`}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fortnite Section */}
         <div className="mt-16">
  <h3
    className="text-gold text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl
    [@media(min-width:1920px)]:text-3xl font-bold my-6 text-center"
  >
    Fortnite Middle East
  </h3>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 my-4 ">
    {fortniteImages.map((img, index) => (
      <motion.div
        key={index}
        whileHover={{ scale: 1.05 }}
        className="cursor-pointer flex justify-center"
        onClick={() => setSelectedImage(img)}
      >
        <div className="m-auto max-w-[400px]">
          <img
          className="rounded-md max-w-full h-auto object-cover"
          src={img}
          alt={`Fortnite project ${index + 1}`}
        />
        </div>
      </motion.div>
    ))}
  </div>
</div>


         {/* PlayStation + Voltech side by side in a responsive grid */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
  {/* PlayStation Section */}
  <div>
    <h3
      className="text-gold text-2xl sm:text-3xl md:text-lg xl:text-3xl 2xl:text-3xl
      [@media(min-width:1920px)]:text-3xl font-bold my-6 text-center"
    >
      PlayStation Arabic Thumbnails
    </h3>

    <div className="my-4">
      {playStationImages.map((img, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => setSelectedImage(img)}
        >
        <div className="m-auto max-w-[400px]">
            <img
            className="d-block rounded-md w-full object-cover"
            src={img}
            alt={`PlayStation thumbnail ${index + 1}`}
          />
        </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Voltech Section */}
  <div>
    <h3
      className="text-gold text-2xl sm:text-3xl md:text-lg xl:text-3xl 2xl:text-3xl
      [@media(min-width:1920px)]:text-3xl font-bold my-6 text-center"
    >
      VoltechFPS
    </h3>

    <div className=" my-4 max-w-[400px] m-auto">
      {voltechFPSImages.map((img, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="cursor-pointer"
          onClick={() => setSelectedImage(img)}
        >
          <img
            className="rounded-md w-full object-cover"
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
