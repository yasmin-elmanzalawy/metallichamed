import { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import fea1 from "../../assets/fea1.png";
import Dashboard from "../Dashboard/Dashboard";
import Featured from "../Featured/Featured";
import Clients from "../Clients/Clients";

const words = ["Mohamed", "Metallic"];

export default function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [showStatic, setShowStatic] = useState(false);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    setShowStatic(true);

    if (!isDeleting && displayedText === currentWord) {
      setShowCaret(true);
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      timeout = setTimeout(() => {
        setShowStatic(false);
        setShowCaret(true);
      }, 300);
    } else {
      setShowCaret(true);
      timeout = setTimeout(() => {
        setDisplayedText((prev) => {
          if (isDeleting) {
            return currentWord.substring(0, prev.length - 1);
          } else {
            return currentWord.substring(0, prev.length + 1);
          }
        });
        setTypingSpeed(isDeleting ? 55 : 90);
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex, typingSpeed]);

  useEffect(() => {
    let blinkInterval;

    if (!isDeleting && displayedText === words[currentWordIndex]) {
      blinkInterval = setInterval(() => {
        setShowCaret((prev) => !prev);
      }, 500);
    } else {
      setShowCaret(true);
    }

    return () => clearInterval(blinkInterval);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* hero box */}
      <div className="bg-[#662390] md:mt-[100px] md:mx-24 mt-[110px] mx-4 p-8 md:p-12 m-12  rounded-[30px] relative overflow-hidden">
        {/* name and dashboard */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* Text Section */}
          <div className="w-full lg:w-[40%]">
            <div className="flex space-x-3 font-extrabold text-5xl">
              <h1 className="min-h-[100px] md:min-h-[0] font-extrabold text-7xl">
                <span
                  className={`metallic-gold-glow-pass glitch-word ${
                    showStatic ? "static-noise tv-flicker" : ""
                  }`}
                  style={{
                    whiteSpace: "pre",
                    display: "inline-block",
                    width: "10ch", // fixed width to fit longest word
                  }}
                >
                  {displayedText}
                </span>
                                <span
                  className="metallic-gold-glow-pass shiny-word"
                  style={{
                    display: "inline-block",
                    width: "6ch", // width to fit "Hamed"
                  }}
                >
                  Hamed
                </span>
              </h1>
            </div>

            <p className="text-neutral-white text-xl mt-4 ">
              Transforming raw footage into captivating visual experiences that inspire and connect
            </p>
          </div>

          {/* Dashboard Section */}
          <div className="w-full lg:w-[70%] mt-6 lg:mt-0 flex justify-center">
            <Dashboard />
          </div>
        </div>

        {/* featured  */}
        <Featured></Featured>
      </div>
    </div>
  );
}
