// src/components/Bunner.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaSignInAlt, FaArrowRight } from "react-icons/fa"; // Icons for visual appeal

const Bunner = () => {
  const navigate = useNavigate();

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const illustrationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.5 } },
  };

  return (
    <section className="mt-12 bg-gradient-to-r from-green-600 to-green-900 text-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative container mx-auto px-6 py-4 md:pt-6 flex flex-col md:flex-row items-center justify-between">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/subtle-stripes.png')]"></div>

        {/* Left Side: Text and CTA */}
        <div className="relative z-10 md:w-1/2 text-center md:text-left">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="mb-6"
          >
            <h3 className="text-base md:text-xl font-bold mb-2 flex items-center justify-center md:justify-start">
              {/* <FaSearch className="text-yellow-400 mr-2" /> */}
              Streamline Your Property Search
            </h3>
            <p className="text-gray-200 text-sm md:text-base">
              Sign in to save properties and track your inquiries with ease.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={buttonVariants}
            className="flex justify-center md:justify-start space-x-4"
          >
            <button
              onClick={() => navigate("/signin")}
              className="flex items-center text-[9px] md:text-sm px-6 py-3 bg-yellow-500 text-green-900 font-semibold rounded-xl hover:bg-yellow-600 transition duration-300"
            >
              <FaSignInAlt className="mr-2" />
              Sign In or Create Account
              <FaArrowRight className="ml-2" />
            </button>
            <button
              onClick={() => navigate("/about")}
              className="flex items-center px-6 text-[9px] md:text-sm py-3 bg-transparent border border-yellow-500 text-yellow-500 font-semibold rounded-xl hover:bg-yellow-500 hover:text-green-900 transition duration-300"
            >
              Learn More
            </button>
          </motion.div>
        </div>

        {/* Right Side: Illustration */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={illustrationVariants}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-center"
        >
          <img
            src="./illustration.svg"
            alt="Property Search Illustration"
            className="w-64 h-64 md:w-80 md:h-80 object-contain"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Bunner;
