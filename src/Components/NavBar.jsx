import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 uppercase ${
        scrolling ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <span className="mr-2">🏠</span>
          <span className={`${scrolling ? "text-gray-800" : "text-white"}`}>
            JustHome
          </span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {["Home", "Listings", "Members", "Blog", "Pages", "Contact"].map(
            (link) => (
              <li key={link}>
                <Link
                  to={`/${link.toLowerCase()}`}
                  className={`${
                    scrolling ? "text-gray-700" : "text-white"
                  } hover:text-blue-600 transition duration-300`}
                >
                  {link}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Contact & User Section */}
        {/* <div className="hidden md:flex items-center space-x-4">
          <div
            className={`flex items-center space-x-2 ${
              scrolling ? "text-gray-700" : "text-white"
            }`}
          >
            <FaPhoneAlt />
            <span>+68 685 8866</span>
          </div>
          <FaUserCircle
            className={`text-2xl ${scrolling ? "text-gray-700" : "text-white"}`}
          />
          <button
            className={`${
              scrolling
                ? "border-gray-800 hover:bg-gray-800 hover:text-white"
                : "border-white hover:bg-white hover:text-gray-800"
            } border-2 px-4 py-2 rounded-lg font-medium transition duration-300`}
          >
            Add Property
          </button>
        </div> */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <IoMdClose className={scrolling ? "text-gray-800" : "text-white"} />
          ) : (
            <HiBars3BottomRight
              className={scrolling ? "text-gray-800" : "text-white"}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul
          className={`md:hidden flex flex-col items-center ${
            scrolling ? "bg-white" : "bg-stone-100"
          } shadow-md py-4 space-y-4 font-medium`}
        >
          {["Home", "Listings", "Blog", "Pages", "Contact"].map((link) => (
            <li key={link}>
              <Link
                to={`/${link.toLowerCase()}`}
                className={`${
                  scrolling ? "text-gray-700" : "text-gray-800"
                } hover:text-blue-600 transition duration-300`}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            </li>
          ))}
          {/* <li className="flex items-center space-x-2">
            <FaPhoneAlt
              className={scrolling ? "text-gray-700" : "text-white"}
            />
            <span className={scrolling ? "text-gray-700" : "text-white"}>
              +68 685 8866
            </span>
          </li>
          <li>
            <button
              className={`${
                scrolling
                  ? "border-gray-800 hover:bg-gray-800 hover:text-white"
                  : "border-white hover:bg-white hover:text-gray-800"
              } border-2 px-4 py-2 rounded-lg font-medium transition duration-300`}
              onClick={() => setMenuOpen(false)}
            >
              Add Property
            </button>
          </li> */}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
