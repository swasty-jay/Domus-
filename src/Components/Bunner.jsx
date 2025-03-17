import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Bunner = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-12 bg-green-800 text-white p-6 rounded-lg flex flex-col md:flex-row justify-between items-center">
      <div className="ml-8">
        <h3 className="text-xl font-semibold mt-4 mb-2 ">
          Sign in to streamline your search
        </h3>
        <p className="text-gray-400 text-sm mb-2">
          Save properties, create alerts and keep track of the enquiries you
          send to agents.
        </p>
      </div>

      <Button
        className="bg-yellow-500 text-green-800 font-semibold py-2  hover:bg-yellow-600 transition duration-300"
        onClick={() => navigate("/signin")}
      >
        {" "}
        Sign in or create an account{" "}
        <span className="text-2xl ml-1">&rarr;</span>
      </Button>
      {/* <button className="mt-4 md:mt-0 bg-yellow-500 text-black font-semibold py-2 px-6 rounded hover:bg-yellow-600 transition duration-300">
        Sign in or create an account →
      </button> */}
    </div>
  );
};

export default Bunner;
