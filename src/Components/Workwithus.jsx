import React from "react";
import { motion } from "framer-motion";
import { FaHome, FaDollarSign, FaShieldAlt } from "react-icons/fa";
import Bunner from "./Bunner";

const Workwithus = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Title and Subtitle */}
        <motion.h2
          className="text-[16px] md:text-xl font-semibold mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Work With Us?
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Trusted advisors dedicated to your success always available.
        </motion.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <FaHome />,
              title: "Wide Range of Properties",
              description:
                "We offer expert legal help for all related property items in Dubai.",
            },
            {
              icon: <FaDollarSign />,
              title: "Buy or Rent Homes",
              description:
                "We sell your home at the best market price and very quickly as well.",
            },
            {
              icon: <FaShieldAlt />,
              title: "Trusted by Thousands",
              description:
                "We offer you free consultancy to get a loan for your new home.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="text-2xl inline-block md:text-3xl text-gray-800 mx-auto mb-4"
                whileHover={{ scale: 1.1 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-base font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <Bunner />
      </div>
    </section>
  );
};

export default Workwithus;
