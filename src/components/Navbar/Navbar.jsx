import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  // Nav items with links only
  const linkedNavItems = [
    { label: "Home", to: "/metallichamed/" },
    { label: "About", to: "/metallichamed/#" },
    { label: "Videos", to: "/metallichamed/#" },
    { label: "Designs", to: "/metallichamed/#" },
    { label: "Clients", to: "/metallichamed/clients" },
    { label: "Endorsements", to: "/metallichamed/#" },
    { label: "Contact", to: "/metallichamed/#" },
  ];

  // Close mobile menu if click outside of navbar when open
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

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#30054A] py-4 text-gold"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex justify-between items-center h-16">
        <div className="cursor-pointer select-none">
          <Link to="/metallichamed/" className="inline-block">
            <span className="text-2xl font-extrabold tracking-wide text-neutral-white">
              Metallic
            </span>
            <span className="text-2xl font-extrabold tracking-wide text-purple-400 ">
              Hamed
            </span>
          </Link>
          <p className="text-neutral-white opacity-75 text-sm mt-1">
            Mohamed Hamed, video editor.
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12 font-semibold tracking-wide items-center">
          {linkedNavItems.map(({ label, to }) => (
            <li
              key={label}
              className="relative group cursor-pointer text-[#E8CCF9] transition-colors duration-300"
              tabIndex={-1}
            >
              <Link
                to={to}
                className="group-hover:text-purple-400"
                onClick={() => setIsOpen(false)}
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
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none"
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
        className={`md:hidden bg-[#30054A] overflow-hidden transition-[max-height,padding] duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 text-lg font-semibold text-[#E8CCF9]">
          {linkedNavItems.map(({ label, to }) => (
            <li
              key={label}
              className="cursor-pointer hover:text-purple-400 transition-colors duration-300 rounded"
              tabIndex={0}
              onClick={() => setIsOpen(false)}
            >
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
