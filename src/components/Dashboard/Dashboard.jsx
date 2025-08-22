import React, { useState, useEffect } from "react";
import { FaEye, FaVideo, FaUsers } from "react-icons/fa";

const data = [
  { id: 2, title: "Views", icon: <FaEye />, target: 185, suffix: " Mil" },
  { id: 3, title: "Videos", icon: <FaVideo />, target: 56, suffix: "" },
  { id: 4, title: "Clients", icon: <FaUsers />, target: 12, suffix: "" },
];

const mobileVisibleIds = [2, 3, 4];

export default function Dashboard() {
  return (
    <>
      {/* Desktop & Tablet View */}
      <div className="hidden sm:flex p-10 flex-nowrap justify-items-center whitespace-nowrap">
        {data.map(({ id, title, icon, target, suffix }) => (
          <GlassCard key={id} icon={icon} title={title} target={target} suffix={suffix} />
        ))}
      </div>

      {/* Mobile View */}
      <div className="sm:hidden flex justify-around p-4 whitespace-nowrap">
        {data
          .filter(({ id }) => mobileVisibleIds.includes(id))
          .map(({ id, title, target, suffix }) => (
            <GlassCard key={id} title={title} target={target} suffix={suffix} noIcon />
          ))}
      </div>
    </>
  );
}

function GlassCard({ icon, title, target, suffix = "", noIcon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.floor(start));
    }, 50);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <div
      className="sm:w-30 md:w-32 lg:w-28 xl:w-28 2xl:w-32 
        [@media(min-width:1920px)]:w-40 
        lg:h-16 xl:h-20  [@media(min-width:1920px)]:h-24 
        py-2 mx-2 relative overflow-hidden rounded-xl flex flex-nowrap items-center justify-start text-gold shadow-lg
        bg-gradient-to-br from-[#330c4a] via-[#5d0991] to-[#330c4a] backdrop-blur-md
        transition-all duration-700 ease-out
        bg-[length:400%_400%] bg-[position:0%_0%]
        hover:bg-[position:100%_100%] hover:scale-105 px-4"
    >
      {/* Icon */}
      {!noIcon && (
        <div
          className="
            mr-3
            sm:text-lg md:text-lg lg:text-xl xl:text-lg 2xl:text-xl
            [@media(min-width:1920px)]:text-2xl
          "
        >
          {React.cloneElement(icon, { size: "1em" })}
        </div>
      )}

      {/* Title + Number */}
      <div className="flex flex-col justify-content-center items-center whitespace-nowrap">
        <h3
          className="font-semibold text-neutral-white text-center 
            sm:text-lg md:text-2xl lg:text-xl xl:text-lg 2xl:text-xl
            [@media(min-width:1920px)]:text-2xl
          "
        >
          {title}
        </h3>
        <p
          className="font-bold text-neutral-white
            sm:text-lg md:text-xl lg:text-xl xl:text-lg 2xl:text-lg
            [@media(min-width:1920px)]:text-2xl
          "
        >
          {count.toLocaleString()}
          {suffix}
        </p>
      </div>
    </div>
  );
}
