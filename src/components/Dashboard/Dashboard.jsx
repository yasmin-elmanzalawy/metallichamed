import React, { useState, useEffect } from "react";
import { FaEye, FaVideo, FaUsers } from "react-icons/fa";

const stats = [
  { id: 2, title: "Views", icon: FaEye, suffix: " +", target: 185000000 },
  { id: 3, title: "Videos", icon: FaVideo, suffix: "+", target: 1750 },
  { id: 4, title: "Clients", icon: FaUsers, suffix: "+", target: 60 },
];

const mobileVisible = [2, 3, 4];

export default function Dashboard() {
  return (
    <>
      {/* Desktop & Tablet */}
      <div className="hidden sm:flex p-10 gap-4 whitespace-nowrap">
        {stats.map((item) => (
          <GlassCard key={item.id} {...item} />
        ))}
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex justify-around p-4 whitespace-nowrap">
        {stats
          .filter(({ id }) => mobileVisible.includes(id))
          .map((item) => (
            <GlassCard key={item.id} {...item} noIcon />
          ))}
      </div>
    </>
  );
}

function GlassCard({ icon: Icon, title, target, suffix = "", noIcon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = target / 40; // 2000ms / 50ms = 40 steps
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="w-auto inline-flex flex-col items-center px-4 py-5 mx-2 rounded-xl shadow-lg text-gold
      relative overflow-hidden backdrop-blur-md
      bg-gradient-to-br from-[#330c4a] via-[#5d0991] to-[#330c4a]
      transition-all duration-700 ease-out
      bg-[length:400%_400%] bg-[position:0%_0%]
      hover:bg-[position:100%_100%] hover:scale-105"
    >
      {/* Icon + Title */}
      <div className="flex items-center gap-2">
        {!noIcon && <Icon className="sm:text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl" />}
        <h3 className="font-bold text-neutral-white text-center sm:text-lg md:text-xl lg:text-xl xl:text-xl 2xl:text-xl">
          {title}
        </h3>
      </div>

      {/* Counter */}
      <p className="mt-1 font-semibold text-neutral-white sm:text-lg md:text-xl lg:text-lg xl:text-xl 2xl:text-lg">
        {count.toLocaleString()}
        {suffix}
      </p>
    </div>
  );
}
