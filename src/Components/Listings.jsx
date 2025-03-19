// src/FeaturedProperties.js
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa"; // Icons for bedrooms, bathrooms, area
import { supabase } from "../Supabase";
import Spinner from "./Spinner";

function Listings() {
  const [properties, setProperties] = useState([]); // All properties from Supabase
  const [filteredProperties, setFilteredProperties] = useState([]); // Filtered properties based on tab
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("All Properties"); // Default tab

  // Fetch properties from Supabase
  const fetchProperties = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from("properties")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching properties from Supabase:", error);
        setError("Failed to load properties. Please try again later.");
        toast.error("Failed to load properties. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
        });
        setProperties([]);
        setFilteredProperties([]);
      } else {
        setProperties(data || []);
        // Initially show all properties
        setFilteredProperties(data || []);
        // toast.success("Properties loaded successfully!", {
        //   position: "top-right",
        //   autoClose: 3000,
        // });
      }
    } catch (error) {
      console.error("Unexpected error during fetch:", error);
      setError("An unexpected error occurred. Please try again later.");
      toast.error("An unexpected error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
      });
      setProperties([]);
      setFilteredProperties([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter properties based on the active tab
  const filterProperties = (tab) => {
    setActiveTab(tab);
    if (tab === "All Properties") {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter(
        (property) => property.type.toLowerCase() === tab.toLowerCase()
      );
      setFilteredProperties(filtered);
    }
  };

  // Fetch properties on component mount
  useEffect(() => {
    fetchProperties();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <p className="text-red-500 rounded-full">{error}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <p className="text-center text-white-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Tabs */}
      <div className="flex justify-center mb-8 space-x-4">
        {["All Properties", "Villa", "Apartment", "Office"].map((tab) => (
          <button
            key={tab}
            onClick={() => filterProperties(tab)}
            className={`px-4 py-2 rounded-full font-medium transition-colors duration-300  text-[8px] md:text-sm ${
              activeTab === tab
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            {/* Image */}
            <div
              className="h-48 bg-cover bg-center relative"
              style={{ backgroundImage: `url(${property.image})` }}
            >
              {/* Status and Featured Tags */}
              <div className="absolute top-4 left-4 flex space-x-2">
                <span className="bg-green-600 text-white text-[6px] md:text-xs font-semibold px-2 py-1 rounded-full">
                  {property.status}
                </span>
                {property.is_featured && (
                  <span className="bg-yellow-400 text-black text-[6px] md:text-xs font-semibold px-3 py-1 rounded-full">
                    FEATURED
                  </span>
                )}
              </div>
            </div>

            {/* Property Details */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {property.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{property.address}</p>
              <div className="flex items-center space-x-4 text-gray-600 mb-2">
                <div className="flex items-center">
                  <FaBed className="mr-1" />
                  <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center">
                  <FaBath className="mr-1" />
                  <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center">
                  <FaRulerCombined className="mr-1" />
                  <span>{property.area} </span>
                </div>
              </div>
              <p className="text-lg font-bold text-blue-600">
                {property.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* No Properties Message */}
      {filteredProperties.length === 0 && (
        <p className="text-center text-gray-600 mt-8 rounded-full">
          No properties available for this category.
        </p>
      )}
    </div>
  );
}

export default Listings;
