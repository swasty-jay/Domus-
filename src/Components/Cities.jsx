// src/CitiesSection.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify"; // Import react-toastify
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast styles
import { supabase } from "./../Supabase";
import Spinner from "./Spinner";

const Cities = () => {
  const [cities, setCities] = useState([]); // State to hold fetched data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  // Function to fetch data from Supabase
  const fetchCitiesData = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase.from("cities").select("*");

      if (error) {
        console.error("Error fetching data from Supabase:", error);
        setError("Failed to load cities. Please try again later.");
        toast.error("Failed to load cities. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setCities([]);
      } else {
        setCities(data || []);
        // toast.success("Cities loaded successfully!", {
        //   position: "top-center",
        //   autoClose: 3000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   pauseOnHover: true,
        //   draggable: true,
        //   progress: undefined,
        // });
      }
    } catch (error) {
      console.error("Unexpected error during fetch:", error);
      setError("An unexpected error occurred. Please try again later.");
      toast.error("An unexpected error occurred. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setCities([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchCitiesData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (cities.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <p>No cities available at the moment.</p>
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
      <h2 className="text-3xl font-bold text-center mb-4">
        Find Properties in These Cities
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Experience luxury living with breathtaking ocean views daily
      </p>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {cities.map((city, index) => (
          <Link
            key={index}
            to={`/listings?city=${city.name.toLowerCase()}`}
            className="flex-shrink-0 w-60 h-80 rounded-xl overflow-hidden shadow-lg relative transition-transform transform hover:scale-105"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${city.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute top-4 left-4 text-white">
                <h3 className="text-xl font-semibold">{city.name}</h3>
                <p className="text-sm">{city.properties} Properties</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cities;
