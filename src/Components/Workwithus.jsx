// src/components/WhyWorkWithUs.jsx
import React from "react";
import { FaHome, FaDollarSign, FaShieldAlt } from "react-icons/fa";
import Bunner from "./Bunner";

const WhyWorkWithUs = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        {/* Title and Subtitle */}
        <h2 className="text-3xl font-bold mb-4">Why You Should Work With Us</h2>
        <p className="text-gray-600 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6">
            <FaHome className="text-4xl text-gray-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Wide Range of Properties
            </h3>
            <p className="text-gray-600">
              We offer expert legal help for all related property items in
              Dubai.
            </p>
          </div>
          <div className="p-6">
            <FaDollarSign className="text-4xl text-gray-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Buy or Rent Homes</h3>
            <p className="text-gray-600">
              We sell your home at the best market price and very quickly as
              well.
            </p>
          </div>
          <div className="p-6">
            <FaShieldAlt className="text-4xl text-gray-800 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted by Thousands</h3>
            <p className="text-gray-600">
              We offer you free consultancy to get a loan for your new home.
            </p>
          </div>
        </div>

        {/* CTA Banner */}
        <Bunner />
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
