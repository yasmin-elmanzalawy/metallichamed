import React, { useState, useEffect } from "react";
import {
  FaClock,
  FaEye,
  FaVideo,
  FaUsers,
  FaCalendarAlt,
  FaFilm,
} from "react-icons/fa";

const data = [
  { id: 1, title: "Avg. Duration", icon: <FaClock size={28} />, target: 125 },
  { id: 2, title: "Views", icon: <FaEye size={28} />, target: 4300 },
  { id: 3, title: "Videos", icon: <FaVideo size={28} />, target: 56 },
  { id: 4, title: "Clients", icon: <FaUsers size={28} />, target: 12 },
  { id: 5, title: "Videos/yr", icon: <FaCalendarAlt size={28} />, target: 15 },
  { id: 6, title: "Videos/wk", icon: <FaFilm size={28} />, target: 2 },
];

// IDs we want to keep for mobile
const mobileVisibleIds = [2, 3, 4]; // Views, Videos, Clients

export default function Dashboard() {
  return (
    <>
      {/* Desktop & Tablet View */}
      <div className="hidden sm:grid p-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {data.map(({ id, title, icon, target }) => (
          <GlassCard key={id} icon={icon} title={title} target={target} />
        ))}
      </div>

      {/* Mobile View */}
      <div className="sm:hidden  flex justify-around p-4">
        {data
          .filter(({ id }) => mobileVisibleIds.includes(id))
          .map(({ id, title, target }) => (
            <GlassCard key={id} title={title} target={target} noIcon />
          ))}
      </div>
    </>
  );
}

function GlassCard({ icon, title, target, noIcon }) {
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
      className="sm:w-[11em] w-20 sm:h-24 py-2 mx-2 relative overflow-hidden rounded-xl flex items-center justify-start text-gold shadow-lg
                 bg-gradient-to-br from-[#330c4a] via-[#5d0991] to-[#330c4a] backdrop-blur-md
                 transition-all duration-700 ease-out
                 bg-[length:400%_400%] bg-[position:0%_0%]
                 hover:bg-[position:100%_100%] hover:scale-105 px-4 justify-items-center"
    >
      {/* Icon (only if not in mobile view with noIcon) */}
      {!noIcon && <div className="mr-3">{icon}</div>}

      {/* Title above number */}
      <div className="flex flex-col justify-content-center items-center">
        <h3 className="font-semibold text-neutral-white sm:text-xl text-center">{title}</h3>
        <p className="font-bold text-neutral-white sm:text-xl">{count.toLocaleString()}</p>
      </div>
    </div>
  );
}
