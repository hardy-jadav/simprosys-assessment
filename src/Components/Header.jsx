import { useState, useEffect, useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaRegHeart,
  FaSearch,
  FaShoppingCart,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaRegUser,
} from "react-icons/fa";

const NAV_LINKS = ["Home", "Shop", "About", "Blog", "Contact", "Pages"];

export default function Header() {
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pagesRef = useRef(null);
  const mobileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pagesRef.current && !pagesRef.current.contains(event.target)) {
        setIsPagesOpen(false);
      }
      if (
        mobileRef.current &&
        !mobileRef.current.contains(event.target) &&
        !event.target.closest(".hamburger")
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full font-sans relative">
      <div className="hidden lg:flex bg-[#252B42] text-white text-sm px-10 py-3 justify-between items-center">
        <div className="flex gap-6 items-center">
          <a
            href="tel:2255550118"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <FaPhone /> (225) 555-0118
          </a>
          <a
            href="mailto:michelle.rivera@example.com"
            className="flex items-center gap-2 hover:text-blue-300 transition-colors"
          >
            <FaEnvelope /> michelle.rivera@example.com
          </a>
        </div>

        <div className="font-bold">
          Follow Us and get a chance to win 80% off
        </div>

        <div className="flex items-center gap-4">
          <span className="font-bold">Follow Us :</span>
          <div className="flex gap-3 items-center text-lg">
            {[FaInstagram, FaYoutube, FaFacebook, FaTwitter].map(
              (Icon, idx) => (
                <Icon
                  key={idx}
                  className="cursor-pointer hover:scale-110 transition-transform"
                />
              ),
            )}
          </div>
        </div>
      </div>

      <nav className="bg-white px-6 py-4 flex justify-between items-center shadow-sm relative z-50">
        <div className="flex items-center gap-10 lg:gap-24">
          <h1 className="text-2xl font-bold text-[#252B42] shrink-0 cursor-pointer">
            Bandage
          </h1>

          <ul className="hidden md:flex gap-6 text-[#737373] font-bold items-center">
            {NAV_LINKS.map((link) => {
              if (link === "Shop") {
                return (
                  <li
                    key={link}
                    className="relative cursor-pointer"
                    ref={pagesRef}
                  >
                    <div
                      onClick={() => setIsPagesOpen(!isPagesOpen)}
                      className="flex items-center gap-1 hover:text-blue-500 transition-colors"
                    >
                      {link}
                      <FaChevronDown
                        className={`text-[10px] transition-transform duration-300 ${isPagesOpen ? "rotate-180" : ""}`}
                      />
                    </div>
                    {isPagesOpen && (
                      <ul className="absolute top-10 left-0 bg-white shadow-xl rounded-lg w-44 py-3 border border-gray-100 z-50 animate-in fade-in slide-in-from-top-2">
                        {["Men", "Women", "Kids"].map((sub) => (
                          <li
                            key={sub}
                            className="px-5 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={() => setIsPagesOpen(false)}
                          >
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              }
              return (
                <li
                  key={link}
                  className="hover:text-blue-500 cursor-pointer transition-colors"
                >
                  {link}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex items-center gap-4 md:gap-6 text-blue-500 font-bold text-sm">
          <div className="hidden sm:flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
            <FaRegUser /> Login / Register
          </div>

          <div className="flex items-center gap-4 md:gap-5 text-xl md:text-base">
            <FaSearch className="cursor-pointer hover:scale-110 transition-transform text-gray-800 md:text-blue-500" />

            <div className="flex items-center gap-1 cursor-pointer group">
              <FaShoppingCart className="text-xl md:text-base text-blue-500 transition-transform group-hover:scale-110" />
              <span className="text-blue-500 text-xs font-medium">1</span>
            </div>

            <div className="hidden sm:flex items-center gap-1 cursor-pointer group">
              <FaRegHeart className="text-xl md:text-base text-blue-500 transition-transform group-hover:scale-110" />
              <span className="text-blue-500 text-xs font-medium">1</span>
            </div>

            <button
              className="md:hidden text-2xl text-gray-800 hamburger focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      <div
        ref={mobileRef}
        className={`md:hidden absolute w-full bg-white transition-all duration-300 ease-in-out shadow-lg z-40 overflow-hidden ${
          isMobileMenuOpen ? "max-h-150 border-b py-10" : "max-h-0 py-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl text-[#737373] font-medium">
          {NAV_LINKS.map((link) => (
            <li
              key={link}
              className="hover:text-blue-500 cursor-pointer transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link}
            </li>
          ))}
          <li className="text-blue-500 flex items-center gap-2 pt-4 cursor-pointer">
            <FaRegUser /> Login / Register
          </li>
        </ul>
      </div>
    </header>
  );
}
