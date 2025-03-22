import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "Designer",
    text: "Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Robert Fox",
    role: "Software Engineer",
    text: "The best platform for real estate transactions. Everything is seamless and easy to use. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Jenny Wilson",
    role: "Product Manager",
    text: "I love how intuitive and user-friendly the platform is. It has everything I need for my real estate needs.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevTestimonial = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-black text-white py-16 px-4 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold">
            What Our Clients Say
          </h2>
          <div className="flex items-center space-x-4 mt-4">
            <div className="text-3xl font-bold">5,000</div> <div>+</div>
            <div className="text-lg">Happy Clients</div>
          </div>
          <div className="flex items-center space-x-4 mt-2">
            <div className="text-3xl font-bold">4.6</div>
            <div className="flex">
              {[...Array(4)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 space-x-1" />
              ))}
            </div>
            <div className="text-lg">Overall Rating</div>
          </div>
        </motion.div>

        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-900 p-6 rounded-lg relative"
        >
          <div className="flex items-center space-x-4">
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-14 h-14 rounded-full"
            />
            <div>
              <h4 className="font-semibold">{testimonials[index].name}</h4>
              <p className="text-gray-400 text-sm">
                {testimonials[index].role}
              </p>
            </div>
          </div>
          <p className="mt-4 text-gray-300">{testimonials[index].text}</p>
          <div className="flex space-x-2 mt-4">
            <button
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              onClick={prevTestimonial}
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              className="p-2 bg-gray-800 rounded-full hover:bg-gray-700"
              onClick={nextTestimonial}
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
      <hr className="border-gray-700 mt-8" />
      <div className="mt-12 text-center text-gray-400">
        <p>Thousands of world’s leading companies trust us</p>
        <div className="flex justify-center gap-4 mt-4">
          <div>
            <img src="./amazon.png" alt="amazon logo" className="h-14" />
            <span className="text-gray-500">amazon</span>
          </div>
          <div>
            <img src="./logitech.png" alt="logitech logo" className="h-14" />
            <span className="text-gray-500">logitech</span>
          </div>
          <div>
            <img src="./techcrunch.png" alt="spotify logo" className="h-14" />
            <span className="text-gray-500">techcrunch</span>
          </div>
          <div>
            <img src="./spotify-logo.png" alt="spotify logo" className="h-14" />
            <span className="text-gray-500">spotify</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
