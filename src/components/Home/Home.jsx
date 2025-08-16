import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import Featured from "../Featured/Featured";
import about from "../../assets/about.png";
import ClientsCarousel from "../ClientsCarousel/ClientsCarousel";

export default function Home() {
  const words = ["etallicHamed", "ohamed Hamed"]; // M is static
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length && !deleting) {
      setTimeout(() => setDeleting(true), 2500);
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
      deleting ? 100 : 120
    );
    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div id="hero" >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
       className=" bg-[#662390] md:mt-[100px] md:mx-24 mt-[110px] mx-4 p-8 md:p-12 m-12 rounded-[30px] relative overflow-hidden"
      >
        <div id="hero" className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div
            className="w-full
            lg:w-[50%]  2xl:w-[60%] 
              [@media(min-width:1920px)]:w-[55%] 
          flex-shrink-0"
          >
            <h1
              className="font-extrabold min-h-[80px]
            text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl 
              [@media(min-width:1920px)]:text-7xl 
              flex flex-wrap items-center group transition-transform duration-300 hover:scale-105"
            >
              <span className="golden-gradient">M</span>
              <span className="golden-gradient">
                {words[index].substring(0, subIndex)}
              </span>
              <span className="golden-gradient">{blink ? "|" : " "}</span>
            </h1>

            <p
              className="text-neutral-white text-base sm:text-lg md:text-xl  xl:text-xl 2xl:text-xl
            [@media(min-width:1920px)]:text-2xl "
            >
              Transforming raw footage into captivating visual experiences that
              inspire and connect.
            </p>
          </div>

          <div className="w-full  flex justify-center">
            <Dashboard />
          </div>
        </div>

        <Featured />
        <ClientsCarousel />
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
          white-space: nowrap;
        }
        .golden-gradient:hover {
          background-position: 100% 0;
        }
      `}</style>
      <section className="px-4 md:px-14 py-8" id="about">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="w-full md:w-[40%]">
            <img
              src={about}
              className="block w-[70%] md:w-[70%] mx-auto"
              alt="About"
            />
          </div>
          <div className="w-full md:w-[70%] px-12">
            <h3
              className="text-gold text-2xl sm:text-3xl md:text-3xl  xl:text-4xl 2xl:text-4xl
            [@media(min-width:1920px)]:text-5xl font-bold "
            >
              {" "}
              A Senior Video Editor
            </h3>
            <p
              className=" md:text-left text-neutral-white text-base sm:text-lg md:text-xl  xl:text-xl 2xl:text-xl
            [@media(min-width:1920px)]:text-2xl"
            >
              <br />
              With +6 years of experience delivering exceptional results for
              major brands and content creators. <br />
              Proven track record in increasing engagement, views, and channel
              subscriptions through expert editing, color correction, motion
              graphics, and visual storytelling.
              <br /> Achieved more than 150 million
              cumulative views, after editing over 1500 long form, short form
              and advertising videos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
