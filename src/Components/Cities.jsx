// src/CitiesSection.js
import React from "react";
import { Link } from "react-router-dom";

const citiesData = [
  {
    name: "New York",
    properties: 8,
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62bf4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Chicago",
    properties: 2,
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Los Angeles",
    properties: 1,
    image:
      "https://images.unsplash.com/photo-1503891451473-3f1d64c4e5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Miami",
    properties: 2,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Florida",
    properties: 3,
    image:
      "https://images.unsplash.com/photo-1592595896550-11c6605fe346?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Ghana",
    properties: 9,
    image:
      "https://yujyiileosrvbcoddbzt.supabase.co/storage/v1/object/public/images//villa-4555818_1280.jpg",
  },
];

function Cities() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">
        Find Properties in These Cities
      </h2>
      <p className="text-center text-gray-600 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex overflow-x-auto space-x-4 pb-4">
        {citiesData.map((city, index) => (
          <Link
            key={index}
            to={`/listings?city=${city.name.toLowerCase()}`}
            className="flex-shrink-0 w-60 h-80 rounded-xl overflow-hidden shadow-lg relative transition-transform transform hover:scale-105"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${city.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              {/* City Info */}
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
}

export default Cities;

// // src/CitiesSection.js
// import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
// import { supabase } from './supabaseClient';
// import { ToastContainer, toast } from 'react-toastify'; // Import react-toastify
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for toast styles

// const CitiesSection = () => {
//   const [cities, setCities] = useState([]); // State to hold fetched data
//   const [loading, setLoading] = useState(true); // State for loading indicator
//   const [error, setError] = useState(null); // State for error handling

//   // Function to fetch data from Supabase
//   const fetchCitiesData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const { data, error } = await supabase
//         .from('cities')
//         .select('*');

//       if (error) {
//         console.error('Error fetching data from Supabase:', error);
//         setError('Failed to load cities. Please try again later.');
//         toast.error('Failed to load cities. Please try again later.', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//         setCities([]);
//       } else {
//         setCities(data || []);
//         toast.success('Cities loaded successfully!', {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     } catch (error) {
//       console.error('Unexpected error during fetch:', error);
//       setError('An unexpected error occurred. Please try again later.');
//       toast.error('An unexpected error occurred. Please try again later.', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       setCities([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchCitiesData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="container mx-auto py-12 px-4 text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container mx-auto py-12 px-4 text-center">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   if (cities.length === 0) {
//     return (
//       <div className="container mx-auto py-12 px-4 text-center">
//         <p>No cities available at the moment.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto py-12 px-4">
//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="light"
//       />
//       <h2 className="text-3xl font-bold text-center mb-4">Find Properties in These Cities</h2>
//       <p className="text-center text-gray-600 mb-8">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       </p>
//       <div className="flex overflow-x-auto space-x-4 pb-4">
//         {cities.map((city, index) => (
//           <Link
//             key={index}
//             to={`/listings?city=${city.name.toLowerCase()}`}
//             className="flex-shrink-0 w-60 h-80 rounded-xl overflow-hidden shadow-lg relative transition-transform transform hover:scale-105"
//           >
//             <div
//               className="w-full h-full bg-cover bg-center"
//               style={{ backgroundImage: `url(${city.image})` }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-30"></div>
//               <div className="absolute top-4 left-4 text-white">
//                 <h3 className="text-xl font-semibold">{city.name}</h3>
//                 <p className="text-sm">{city.properties} Properties</p>
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CitiesSection;
