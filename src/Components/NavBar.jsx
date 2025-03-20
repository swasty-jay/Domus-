import { useState } from "react";
import { Link } from "react-router-dom";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900 text-white shadow-md uppercase">
      <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xs md:text-lg font-bold flex items-center">
          <Link to="/">
            {" "}
            <span className="mr-2">🏠</span>
            <span>JustHome</span>
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          {["Home", "Listings", "Blogs", "About", "Contact"].map((link) => (
            <li key={link} className="relative">
              <Link
                to={`/${link.toLowerCase()}`}
                className="relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[4px] after:bg-yellow-200 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <HiBars3BottomRight />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center bg-slate-900 shadow-md py-4 space-y-4 font-medium">
          {["Home", "Listings", "Blogs", "About", "Contact"].map((link) => (
            <li key={link} className="relative">
              <Link
                to={`/${link.toLowerCase()}`}
                className="relative transition duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[4px] after:bg-blue-600 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
