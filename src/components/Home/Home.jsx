import { motion } from "framer-motion";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import Dashboard from "../Dashboard/Dashboard";
import Featured from "../Featured/Featured";
import gaming from "../../assets/icons/gamingicon.png";
import cc from "../../assets/icons/cc.webp";
import ae from "../../assets/icons/ae.webp";
import ps from "../../assets/icons/ps.webp";
import pr from "../../assets/icons/pr.webp";
import hamed from "../../assets/hamed.avif";
import ClientsCarousel from "../ClientsCarousel/ClientsCarousel";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import Endorsement from "../Endorsement/Endorsement";

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
        className=" bg-[#662390] md:mt-[100px] mt-[-30px] md:mx-24 m-12 mx-4  px-8 pt-8 md:px-12  rounded-[30px] relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text Section */}
          <div
            className="w-full
            lg:w-[40%]  2xl:w-[50%] 
            [@media(min-width:1920px)]:w-[50%] 
            flex-shrink-0"
          >


            <h1 className=" shine-text font-extrabold min-h-[80px]
    text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl 
    [@media(min-width:1920px)]:text-7xl">MetallicHamed</h1>


            <p
              className="text-[#FEF7E4] text-base txt-size "
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
   
   
   <section className="md:mx-24 m-12 mx-4 py-8 relative" id="about">
  {/* FLOATING KEYFRAMES */}
  <style>
    {`
      @keyframes floatCC {
        0%, 100% { transform: translateY(0px) rotate(-12deg); }
        50% { transform: translateY(-12px) rotate(-12deg); }
      }
      @keyframes floatAE {
        0%, 100% { transform: translateY(0px) rotate(8deg); }
        50% { transform: translateY(-14px) rotate(8deg); }
      }
      @keyframes floatPR {
        0%, 100% { transform: translateY(0px) rotate(15deg); }
        50% { transform: translateY(-10px) rotate(15deg); }
      }
      @keyframes floatPS {
        0%, 100% { transform: translateY(0px) rotate(-6deg); }
        50% { transform: translateY(-16px) rotate(-6deg); }
      }

      .float-cc { animation: floatCC 4s ease-in-out infinite; }
      .float-ae { animation: floatAE 5s ease-in-out infinite; }
      .float-pr { animation: floatPR 6s ease-in-out infinite; }
      .float-ps { animation: floatPS 4.5s ease-in-out infinite; }
    `}
  </style>

  <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
    {/* IMAGE WRAPPER */}
   <div className="w-full md:w-[50%] m-auto relative">
  {/* IMAGE */}
  <img
    src={hamed}
    className="block w-[80%] mx-auto rounded-xl md:w-[100%] 2xl:w-[70%]
    [@media(min-width:1920px)]:w-[70%] transition-transform duration-300 relative z-10"
    alt="About"
  />

{/* GRADIENT OVERLAY */}
<div
  className="absolute bottom-0 left-0 right-0 rounded-b-xl z-20 pointer-events-none"
  style={{
    height: "40%", // only cover lower 40% of the image
    background: "linear-gradient(to top, #30054A, transparent)",
    opacity: 1,
  }}
></div>

  {/* FLOATING ICONS (all same sizes) */}
  <img
    src={cc}
    alt="CC"
    className="absolute top-[20%] left-[20%] [@media(min-width:1920px)]:left-[25%] w-14 sm:w-24 md:w-16 lg:w-20 xl:w-24 [@media(min-width:1920px)]:w-32 float-cc drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)] "
  />

  <img
    src={ae}
    alt="AE"
    className="absolute bottom-[17%] [@media(min-width:1920px)]:right-[22%]  [@media(min-width:1920px)]:w-28 right-[10%] lg:right-[5%] xl:right-[10%] md:right-[-10%] z-30 w-14 sm:w-24 md:w-16 lg:w-20 xl:w-24 float-ae drop-shadow-[0_6px_10px_rgba(0,0,0,0.8)]"
  />

  <img
    src={pr}
    alt="PR"
    className="absolute top-[65%] [@media(min-width:1920px)]:w-24 [@media(min-width:1920px)]:left-[15%] left-[10%] lg:left-[-10%] 2xl:left-[5%] z-30 w-14 sm:w-24 md:w-16 lg:w-20 xl:w-24 float-pr drop-shadow-[0_8px_12px_rgba(0,0,0,0.6)]"
  />

  <img
    src={ps}
    alt="PS"
    className="absolute top-[30%] md:top-[17%] [@media(min-width:1920px)]:top-[33%] [@media(min-width:1920px)]:right-[18%] right-[12%] z-30 w-14 sm:w-24 [@media(min-width:1920px)]:w-28 md:w-16 lg:w-20 xl:w-22 float-ps drop-shadow-[0_6px_10px_rgba(0,0,0,0.4)]"
  />
</div>


    {/* TEXT SECTION */}
    <div className="w-full md:w-[80%] md:px-12 px-4">
      <h3
        className="text-gold text-2xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl
        [@media(min-width:1920px)]:text-5xl font-bold"
      >
        Senior Video Editor
      </h3>
      <p className="md:text-left text-neutral-white text-base txt-size">
        <br />
        I have 6+ years of experience producing engaging, high-performing content for brands, influencers, 
and gaming companies.<br></br> I’ve delivered more than 1,750 videos generating over 185 million views across YouTube, TikTok, and 
social platforms. <br></br>My expertise includes YouTube content, TikTok ads, Gaming, UGC campaigns, and branded content. I’ve 
collaborated on projects for Fortnite Middle East, Call of Duty Arabic, Ubisoft Middle East, and EA Middle East, creating 
content that resonates with audiences and drives engagement.,<br></br> Skilled in video editing, storytelling, and motion graphics, I 
bring creativity and precision to every project.
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
