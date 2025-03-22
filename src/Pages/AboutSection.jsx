// src/components/AboutSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaTrophy, FaRocket } from "react-icons/fa"; // Icons for visual appeal
import { motion } from "framer-motion";

const AboutSection = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center mb-12"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
            About Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Learn about our mission to help you find your dream property with
            ease and confidence.
          </p>
        </motion.div>

        {/* Introduction with Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row items-center gap-8 mb-12"
        >
          <div className="md:w-1/2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaHome className="text-blue-500 mr-2" />
              Your Real Estate Partner
            </h3>
            <p className="text-gray-600">
              At Domus, we specialize in residential and commercial properties
              in Accra. With over 10 years of experience, we’re here to make
              your property journey seamless and enjoyable.
            </p>
            <p className="text-gray-600 mt-2">
              Our personalized approach ensures we meet your unique needs,
              whether you’re buying, selling, or investing.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://yujyiileosrvbcoddbzt.supabase.co/storage/v1/object/public/images//pexels-binyaminmellish-1396132.jpg"
              alt="About Us"
              className="w-full h-80 object-cover rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Our Story and Values Combined */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mb-12"
        >
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center">
            <FaRocket className="text-blue-500 mr-2" />
            Our Journey & Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Our Story
              </h4>
              <p className="text-gray-600">
                Founded in 2022 by Daniel Yawson, we started as a small family
                business in Ghana, Tema. Today, we’re a leading agency, managing
                thousands of properties across the globe.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">
                Our Values
              </h4>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Integrity:
                  Transparent and honest dealings.
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Customer Focus:
                  Your satisfaction is our priority.
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Innovation:
                  Using technology to enhance your experience.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Team and Achievements Combined */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="mb-12"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center flex items-center justify-center">
            <FaUsers className="text-blue-500 mr-2" />
            Our Team & Achievements
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <img
                src="./team.jpg"
                alt="Our Team"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Team+Image";
                }}
              />
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  Meet Our Team
                </h4>
                <p className="text-gray-600 mb-4">
                  Our dedicated team of experts in real estate, finance, and
                  customer service is here to support you every step of the way.
                </p>
                <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaTrophy className="text-blue-500 mr-2" />
                  Achievements
                </h4>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span> 15+ Years in
                    Business
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span> 5,000+
                    Properties Sold
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span> 3 Industry
                    Awards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
          className="text-center"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Ready to Find Your Dream Property?
          </h3>
          <p className="text-gray-600 mb-6">
            Let’s make your real estate goals a reality. Get started today!
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex text-sm items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/listings"
              className="inline-flex text-sm items-center px-6 py-3 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300"
            >
              Explore Properties
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
