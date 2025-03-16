import React from "react";

const Spinner = () => {
  return (
    <div className="container mx-auto py-12 px-4 text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
    </div>
  );
};

export default Spinner;
