import { motion } from "framer-motion";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import Featured from "../Featured/Featured";
import gaming from "../../assets/icons/gamingicon.png";
import hamed from "../../assets/hamed.png";
import ClientsCarousel from "../ClientsCarousel/ClientsCarousel";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

export default function Home() {
  return (
    <div className="pt-2" id="hero">
      <div className="mb-28">
        <Navbar />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" bg-[#662390] md:mt-[100px] mt-[110px] md:mx-24 m-12 mx-4 pb-20 p-8 md:p-12  rounded-[30px] relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div
            className="w-full
            lg:w-[40%]  2xl:w-[50%] 
            [@media(min-width:1920px)]:w-[50%] 
            flex-shrink-0"
          >
            <h1
              className="font-extrabold min-h-[80px]
    text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl 
    [@media(min-width:1920px)]:text-7xl 
    flex flex-wrap items-center group "
            >
              <span className="shiny-text">Metallichamed</span>
            </h1>

            <p
              className="text-neutral-white text-base sm:text-lg md:text-xl  xl:text-xl 2xl:text-xl
              [@media(min-width:1920px)]:text-2xl "
            >
              Transforming raw footage into captivating visual experiences that
              inspire and connect.
            </p>
          </div>

          <div className="w-full flex justify-center">
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
          display: inline-block;
          white-space: nowrap;
          transition: background-position 1s ease, transform 0.3s ease;
        }
        .glow-hover:hover {
          text-shadow:
            0 0 8px rgba(255, 215, 0, 0.8),
            0 0 16px rgba(255, 223, 0, 0.6),
            0 0 24px rgba(255, 223, 0, 0.4);
          background-position: 100% 0;
        }
      `}</style>
      {/* about */}
      <section className=" md:mx-24 m-12 mx-4 py-8 " id="about">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="w-full md:w-[50%] m-auto">
            <img
              src={hamed}
              className="block w-[60%] mx-auto rounded-xl md:w-[100%] 2xl:w-[70%]
              [@media(min-width:1920px)]:w-[60%] shadow-2xl transition-transform duration-300 hover:scale-105"
              alt="About"
            />
          </div>
          <div className="w-full md:w-[80%] md:px-12 px-4">
            <h3
              className="text-gold text-2xl sm:text-3xl md:text-3xl  xl:text-4xl 2xl:text-4xl
              [@media(min-width:1920px)]:text-5xl font-bold "
            >
              A Senior Video Editor
            </h3>
            <p
              className=" md:text-left text-neutral-white text-base sm:text-lg md:text-xl  xl:text-lg 2xl:text-lg
              [@media(min-width:1920px)]:text-xl"
            >
              <br />
              With +6 years of experience delivering exceptional results for
              major brands and content creators. <br />
              Proven track record in increasing engagement, views, and channel
              subscriptions through expert editing, color correction, motion
              graphics, and visual storytelling.
              <br /> Achieved more than 150 million cumulative views, after
              editing over 1500 long form, short form and advertising videos.
            </p>
          </div>
        </div>
      </section>

      {/* services */}
      <Services></Services>

      <Footer></Footer>
    </div>
  );
}
