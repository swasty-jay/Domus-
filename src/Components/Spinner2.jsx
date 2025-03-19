// src/components/Spinner4.jsx
import React from "react";

// const Spinner2 = ({ size = "w-4 h-4", color = "bg-yellow-600" }) => {
//   return (
//     <div className="flex justify-center items-center space-x-2 py-60">
//       <div className={`${size} ${color} rounded-full animate-bounce`}></div>
//       <div
//         className={`${size} ${color} rounded-full animate-bounce`}
//         style={{ animationDelay: "-0.5s" }}
//       ></div>
//       <div
//         className={`${size} ${color} rounded-full animate-bounce`}
//         style={{ animationDelay: "-0.6s" }}
//       ></div>
//     </div>
//   );
// };

const Spinner2 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Spinner2;
