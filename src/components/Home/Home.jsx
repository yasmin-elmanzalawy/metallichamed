import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import Featured from "../Featured/Featured";
import ClientsCarousel from "../ClientsCarousel/ClientsCarousel";

export default function Home() {
  const words = ["etallic", "ohamed"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 1000);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1));
      },
      deleting ? 100 : 150
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-[#662390] md:mt-[100px] md:mx-24 mt-[110px] mx-4 p-8 md:p-12 m-12 rounded-[30px] relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Text Section */}
          <div className="w-full lg:w-[40%]">
            <h1 className="font-extrabold min-h-[80px] text-5xl sm:text-6xl lg:text-7xl">
              <span className="golden-gradient hover:scale-105 transition-transform duration-300">
                M{words[index].substring(0, subIndex)}
              </span>
              <span className="golden-gradient">{blink ? "|" : " "}</span>
            </h1>

            <h1 className="md:mt-0 mt-[-20px] font-extrabold text-5xl sm:text-6xl lg:text-7xl golden-gradient hover:scale-105 transition-transform duration-300">
              Hamed
            </h1>

            <p className="text-neutral-white text-lg sm:text-xl mt-4">
              Transforming raw footage into captivating visual experiences that
              inspire and connect.
            </p>
          </div>

          {/* Dashboard Section */}
          <div className="w-full lg:w-[70%] mt-6 lg:mt-0 flex justify-center">
            <Dashboard />
          </div>
        </div>

        <Featured />
        <ClientsCarousel></ClientsCarousel>
      </motion.div>

      <style>{`
        .golden-gradient {
          background: linear-gradient(
            90deg,
            #ddaa00,
            #F5BF03,
            #ffd13d,
            #ffe07a,
            #ffd13d,
            #F5BF03,
            #ddaa00
          );
          background-size: 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: background-position 1s ease, transform 0.3s ease;
          display: inline-block;
        }
        .golden-gradient:hover {
          background-position: 100% 0;
        }
      `}</style>
    </div>
  );
}
