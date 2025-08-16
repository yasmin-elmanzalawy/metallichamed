import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const linkedNavItems = [
    { label: "Home", to: "/metallichamed/" },
    { label: "About", to: "/metallichamed/#about" },
    { label: "Videos", to: "/metallichamed/#" },
    { label: "Designs", to: "/metallichamed/#" },
    { label: "Clients", to: "/metallichamed/clients" },
    { label: "Endorsements", to: "/metallichamed/#" },
    { label: "Contact", to: "/metallichamed/#" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleScrollLink = (label) => {
    setIsOpen(false);

    let sectionId = null;
    if (label === "Home") sectionId = "hero";
    if (label === "About") sectionId = "about";

    if (sectionId) {
      if (location.pathname !== "/metallichamed/") {
        navigate("/metallichamed/");
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          section?.scrollIntoView({ behavior: "smooth" });
        }, 50);
      } else {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#30054A] py-4 text-gold"
    >
      <div className="px-8 lg:px-12 flex justify-between items-center h-14">
        {/* Left: Logo & Tagline */}
        <div className="cursor-pointer select-none">
          <Link to="/metallichamed/" className="inline-block">
            <span className="text-2xl font-extrabold tracking-wide text-neutral-white">
              M
            </span>
            <span className="text-2xl font-extrabold tracking-wide text-neutral-white">
              H
            </span>
          </Link>
          <p className="text-neutral-white opacity-75 text-sm mt-1 lg:inline-block lg:mt-0 lg:px-2">
            Video editor.
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-12 font-semibold tracking-wide items-center">
          {linkedNavItems.map(({ label, to }) => (
            <li
              key={label}
              className="relative group cursor-pointer text-[#E8CCF9] transition-colors duration-300
              sm:text-lg md:text-2xl lg:text-base xl:text-lg 2xl:text-lg
              [@media(min-width:1920px)]:text-xl"
              tabIndex={-1}
            >
              <Link
                to={to}
                className="group-hover:text-purple-400"
                onClick={(e) => {
                  if (label === "Home" || label === "About") {
                    e.preventDefault();
                    handleScrollLink(label);
                  }
                  setIsOpen(false);
                }}
                tabIndex={-1}
              >
                {label}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
        >
          <span
            className={`block w-7 h-[3px] bg-[#E8CCF9] rounded transition-transform duration-300 origin-left ${
              isOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-7 h-[3px] bg-[#E8CCF9] rounded transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-7 h-[3px] bg-[#E8CCF9] rounded transition-transform duration-300 origin-left ${
              isOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#30054A] overflow-hidden transition-[max-height,padding] duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        <ul
          className="flex flex-col space-y-4 px-8 font-semibold text-[#E8CCF9]
          sm:text-lg md:text-2xl lg:text-xl xl:text-lg 2xl:text-xl
          [@media(min-width:1920px)]:text-3xl"
        >
          {linkedNavItems.map(({ label, to }) => (
            <li
              key={label}
              className="cursor-pointer hover:text-purple-400 transition-colors duration-300 rounded"
              tabIndex={0}
              onClick={() => setIsOpen(false)}
            >
              <Link
                to={to}
                onClick={(e) => {
                  if (label === "Home" || label === "About") {
                    e.preventDefault();
                    handleScrollLink(label);
                  }
                }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
