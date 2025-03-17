// src/components/Footer.jsx
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully:", email);
    // Add API call or further logic here
    setEmail("");
  };
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">JustHome</h3>
          <p className="text-gray-400 mb-4">
            Your trusted partner in finding the perfect home. Explore a wide
            range of properties with expert guidance.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/home"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/listings"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Listings
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-400 flex items-center mb-2">
            <FaEnvelope className="mr-2" /> info@justhome.com
          </p>
          <p className="text-gray-400 flex items-center mb-2">
            <FaPhoneAlt className="mr-2" /> +68 685 8866
          </p>
          <p className="text-gray-400 flex items-center">
            <FaMapMarkerAlt className="mr-2" /> 123 Property Lane, Dubai
          </p>
        </div>

        {/* Newsletter Signup */}
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-gray-400 mb-4">
            Stay updated with the latest property listings and offers.
          </p>
          <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} JustHome. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
