import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const baseURL = import.meta.env.BASE_URL;

  const linkedNavItems = [
    { label: "Home", to: "/" },
    { label: "Videos", to: "/videos" },
    { label: "Designs", to: "/design" },
    { label: "Clients", to: "/clients" },
    { label: "Endorsements", to: "/#endorsements" },
    { label: "About", to: "/#about" },
    { label: "CV", to: `${baseURL}Mohamed-Hamed-Resume.pdf`, download: true },
    { label: "Contact", to: "#" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollLink = (label) => {
    setIsOpen(false);

    if (label === "Contact") {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      return;
    }

    let sectionId = null;
    if (label === "Home") sectionId = "hero";
    if (label === "About") sectionId = "about";
    if (label === "Endorsements") sectionId = "endorsements";

    if (sectionId) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const section = document.getElementById(sectionId);
          section?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const section = document.getElementById(sectionId);
        section?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-lg transition-all duration-300 bg-[#30054A] text-gold ${
        scrolled
          ? "py-2 2xl:py-3"
          : "py-4 [@media(min-width:1920px)]:py-8 2xl:py-6"
      }`}
    >
      <div className="md:mx-24 mx-18 px-8 md:px-4 flex justify-end items-center h-14">
        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 font-semibold tracking-wide items-center">
          {linkedNavItems.map(({ label, to, download }) => (
            <li key={label}>
              {label === "Contact" ? (
                <button
                  onClick={() => handleScrollLink(label)}
                  className="px-4 py-1.5 rounded-full bg-[#FED03B] text-[#4B0082] hover:bg-[#ffcc00] transition-colors duration-300 [@media(min-width:1920px)]:text-xl"
                >
                  {label}
                </button>
              ) : download ? (
                <a
                  href={to}
                  download="Mohamed_Hamed_CV.pdf"
                  className="px-4 py-1.5 rounded-full bg-purple-500/20 hover:bg-purple-500/40 text-[#E8CCF9] transition-colors duration-300 [@media(min-width:1920px)]:text-xl"
                >
                  {label}
                </a>
              ) : (
                <Link
                  to={to}
                  onClick={(e) => {
                    if (["Home", "About", "Endorsements"].includes(label)) {
                      e.preventDefault();
                      handleScrollLink(label);
                    }
                    setIsOpen(false);
                  }}
                  className="px-4 py-1.5 rounded-full bg-purple-500/20 hover:bg-purple-500/40 text-[#E8CCF9] transition-colors duration-300 [@media(min-width:1920px)]:text-xl"
                >
                  {label}
                </Link>
              )}
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
        className={`lg:hidden bg-[#30054A] mx-2 overflow-hidden transition-[max-height,padding] duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] py-4" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-8 font-semibold text-[#E8CCF9]">
          {linkedNavItems.map(({ label, to, download }) => (
            <li key={label} className="cursor-pointer">
              {label === "Contact" ? (
                <button
                  onClick={() => handleScrollLink(label)}
                  className="px-4 py-1.5 rounded-full bg-[#FED03B] text-[#4B0082] hover:bg-[#e6c22f] transition-colors duration-300 block text-center w-full"
                >
                  {label}
                </button>
              ) : download ? (
                <a
                  href={to}
                  download="Mohamed_Hamed_CV.pdf"
                  className="block text-center py-2 text-[#E8CCF9] hover:bg-purple-500/40 rounded-full transition-colors duration-300"
                >
                  {label}
                </a>
              ) : (
                <Link
                  to={to}
                  onClick={(e) => {
                    if (["Home", "About", "Endorsements"].includes(label)) {
                      e.preventDefault();
                      handleScrollLink(label);
                    }
                    setIsOpen(false);
                  }}
                  className="block text-center py-2"
                >
                  {label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
