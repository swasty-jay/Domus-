// src/App.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../Components/NavBar";
import CitiesSection from "../Components/Cities";
import Listings from "../Components/Listings";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Workwithus from "../Components/Workwithus";
// Sample carousel data
const carouselData = [
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Luxury Beachfront Villa",
    description: "Experience paradise in this stunning 4-bedroom villa",
    price: "$250/month",
  },
  {
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Modern Downtown Apartment",
    description: "Sleek and stylish living in the heart of the city",
    price: "$850/month",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    title: "Countryside Mansion",
    description: "Spacious estate with breathtaking views",
    price: "$500/month",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Carousel Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          enabled: true,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="relative w-full"
      >
        {carouselData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[70vh] md:h-[80vh] bg-cover bg-center relative flex items-center justify-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>

              {/* Content */}
              <div className="relative max-w-lg text-center px-6 md:px-8 lg:px-10">
                <h1 className="text-lg md:text-2xl lg:text-5xl font-semibold mb-3 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-[12px] md:text-xl lg:text-2xl mb-4 animate-fade-in animation-delay-200">
                  {slide.description}
                </p>
                <div className="text-lg md:text-2xl lg:text-3xl font-semibold mb-4 animate-fade-in animation-delay-400">
                  {slide.price}
                </div>
                <Link to="/listings">
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-stone-900 font-bold  md:font-semibold py-2 px-5 md:py-3 md:px-8 rounded-lg transition duration-300 animate-fade-in animation-delay-600 text-sm md:text-base lg:text-lg">
                    View Property{" "}
                    <span className="ml-2 text-xl "> &rarr; </span>
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Other Sections */}
      <CitiesSection />
      <Workwithus />
      <Listings />
      <Footer />
    </div>
  );
}

export default App;
