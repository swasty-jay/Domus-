// src/components/AboutSection.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaTrophy, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

// Placeholder image for lazy loading
const placeholderImage =
  "https://yujyiileosrvbcoddbzt.supabase.co/storage/v1/object/public/images//pexels-binyaminmellish-1396132.jpg";

const AboutSection = React.memo(() => {
  const [isMounted, setIsMounted] = useState(false);

  // Animation variants for sections (simplified)
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Defer animations until the component is mounted
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView={isMounted ? "visible" : "hidden"}
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="text-center mb-10"
          style={{ willChange: "opacity, transform" }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">
            About Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Learn about our mission to help you find your dream property with
            ease and confidence.
          </p>
        </motion.div>

        {/* Introduction with Image */}
        <motion.div
          initial="hidden"
          whileInView={isMounted ? "visible" : "hidden"}
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="flex flex-col md:flex-row items-center gap-6 mb-10"
          style={{ willChange: "opacity, transform" }}
        >
          <div className="md:w-1/2">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <FaHome className="text-blue-500 mr-2" />
              Your Real Estate Partner
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              At Domus, we specialize in residential and commercial properties
              in Accra. With over 10 years of experience, we make your property
              journey seamless.
            </p>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Our personalized approach meets your needs, whether buying,
              selling, or investing.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src={placeholderImage}
              data-src="https://yujyiileosrvbcoddbzt.supabase.co/storage/v1/object/public/images//pexels-binyaminmellish-1396132.jpg"
              alt="About Us"
              className="w-full h-64 md:h-72 object-cover rounded-xl shadow-md lazy-load"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Our Story and Values Combined */}
        <motion.div
          initial="hidden"
          whileInView={isMounted ? "visible" : "hidden"}
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="mb-10"
          style={{ willChange: "opacity, transform" }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center flex items-center justify-center">
            <FaRocket className="text-blue-500 mr-2" />
            Our Journey & Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl shadow-md">
              <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                Our Story
              </h4>
              <p className="text-gray-600 text-sm md:text-base">
                Founded in 2022 by Daniel Yawson in Tema, Ghana, Domus is now a
                leading agency managing thousands of properties globally.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-md">
              <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                Our Values
              </h4>
              <ul className="text-gray-600 text-sm md:text-base space-y-1">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Integrity:
                  Transparent dealings.
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Customer Focus:
                  Your satisfaction first.
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">•</span> Innovation:
                  Tech-driven solutions.
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Team and Achievements Combined */}
        <motion.div
          initial="hidden"
          whileInView={isMounted ? "visible" : "hidden"}
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="mb-10"
          style={{ willChange: "opacity, transform" }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 text-center flex items-center justify-center">
            <FaUsers className="text-blue-500 mr-2" />
            Our Team & Achievements
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <img
                // src={placeholderImage}
                src="./team.jpg"
                alt="Our Team"
                className="w-full h-64 md:h-72 object-cover rounded-xl shadow-md lazy-load"
                loading="lazy"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/600x400?text=Team+Image";
                }}
              />
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-5 rounded-xl shadow-md">
                <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
                  Meet Our Team
                </h4>
                <p className="text-gray-600 text-sm md:text-base mb-3">
                  Our expert team in real estate, finance, and customer service
                  supports you every step of the way.
                </p>
                <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2 flex items-center">
                  <FaTrophy className="text-blue-500 mr-2" />
                  Achievements
                </h4>
                <ul className="text-gray-600 text-sm md:text-base space-y-1">
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
          whileInView={isMounted ? "visible" : "hidden"}
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="text-center"
          style={{ willChange: "opacity, transform" }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3">
            Ready to Find Your Dream Property?
          </h3>
          <p className="text-gray-600 mb-4 text-sm md:text-base">
            Let’s make your real estate goals a reality. Get started today!
          </p>
          <div className="flex justify-center space-x-3">
            <Link
              to="/contact"
              className="inline-flex text-sm items-center px-5 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/listings"
              className="inline-flex text-sm items-center px-5 py-2 bg-yellow-500 text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300"
            >
              Explore Properties
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default AboutSection;

// Lazy load images
if (typeof window !== "undefined") {
  const images = document.querySelectorAll(".lazy-load");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => observer.observe(img));
}
