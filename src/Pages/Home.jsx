import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "../Components/NavBar";
import Cities from "../Components/Cities";
import Listings from "./Listings";
import { Link } from "react-router-dom";
import WhyWorkWithUs from "../Components/WhyworkWithUs";
import Footer from "./Footer";

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
    <div className="min-h-screen ">
      {/* navbar */}

      <Navbar />
      {/* Carousel Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-screen relative"
      >
        {carouselData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>

              {/* Content */}
              <div className="relative h-full flex items-center justify-center text-white">
                <div className="text-center max-w-2xl mx-auto px-4">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 animate-fade-in animation-delay-200">
                    {slide.description}
                  </p>
                  <div className="text-2xl md:text-3xl font-semibold mb-8 animate-fade-in animation-delay-400">
                    {slide.price}
                  </div>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-stone-900 font-bold py-3 px-6 rounded-lg transition duration-300 animate-fade-in animation-delay-600">
                    <Link to="/listings">
                      {" "}
                      View Property{" "}
                      <span className="ml-2 text-2xl">&rarr;</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev custom-arrow"></div>
        <div className="swiper-button-next custom-arrow"></div>
      </Swiper>
      <Cities />
      <WhyWorkWithUs />
      <Listings />
      <Footer />
    </div>
  );
}

// Add custom styles including arrow customization
const customStyles = `
  .animate-fade-in {
    animation: fadeIn 1s ease-in forwards;
  }
  
  .animation-delay-200 {
    animation-delay: 0.2s;
  }
  
  .animation-delay-400 {
    animation-delay: 0.4s;
  }
  
  .animation-delay-600 {
    animation-delay: 0.6s;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Custom Arrow Styles */
  .custom-arrow {
    color: #ffffff; /* Change color to white */
    width: 30px; /* Reduce size */
    height: 30px; /* Reduce size */
    background: rgba(0, 0, 0, 0.5); /* Optional: semi-transparent background */
    border-radius: 60%; /* Optional: circular shape */
    transition: all 0.3s ease;
  }

  .custom-arrow:hover {
    color: #f6dd3b; /* Blue on hover (matches button) */
    background: rgba(129, 103, 10, 0.7);
  }

  .swiper-button-prev.custom-arrow:after,
  .swiper-button-next.custom-arrow:after {
    font-size: 16px; /* Smaller arrow icon */
  }

  .swiper-button-prev.custom-arrow {
    left: 20px; /* Adjust position from left */
  }

  .swiper-button-next.custom-arrow {
    right: 20px; /* Adjust position from right */
  }
`;

const styleSheet = document.createElement("style");
styleSheet.textContent = customStyles;
document.head.appendChild(styleSheet);

export default App;
