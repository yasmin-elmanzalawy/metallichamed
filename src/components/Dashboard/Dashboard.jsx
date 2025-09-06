import React, { useState, useEffect } from "react";
import { FaEye, FaVideo, FaUsers } from "react-icons/fa";

const stats = [
  { id: 2, icon: FaEye, prefix: "+", suffix: "M", target: 185 },
  { id: 3, icon: FaVideo, prefix: "+", target: 1750 },
  { id: 4, icon: FaUsers, prefix: "+", target: 60 },
];

const mobileVisible = [2, 3, 4];

export default function Dashboard() {
  return (
    <>
      {/* Desktop & Tablet */}
      <div className="hidden sm:flex p-5 gap-6 justify-center items-center flex-nowrap overflow-x-auto">
        {stats.map((item) => (
          <GlassCard key={item.id} {...item} />
        ))}
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex gap-3 p- justify-center items-center flex-nowrap overflow-x-auto">
        {stats
          .filter(({ id }) => mobileVisible.includes(id))
          .map((item) => (
            <GlassCard key={item.id} {...item} />
          ))}
      </div>
    </>
  );
}

function GlassCard({ icon: Icon, target, prefix = "", suffix = "" }) {
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
<div
  className="inline-flex flex-col items-center justify-center px-6 py-6 
    rounded-xl shadow-lg text-gold
    relative overflow-hidden backdrop-blur-md
    bg-gradient-to-br from-[#330c4a] via-[#5d0991] to-[#330c4a]
    transition-all duration-700 ease-out
    bg-[length:400%_400%] bg-[position:0%_0%]
    hover:bg-[position:100%_100%] hover:scale-105
    w-[150px] md:w-[150px] lg:w-[120px] xl:w-[150px] 2xl:w-[160px] [@media(min-width:1920px)]:w-[200px]
    shrink"
>
  {/* Icon */}
  <Icon className="mb-2 text-2xl md:text-3xl 2xl:text-5xl text-gold" />

  {/* Counter */}
  <p className="mt-1 font-semibold text-neutral-white txt-size text-center">
    {prefix}{count.toLocaleString()}{suffix}
  </p>
</div>


  );
}
