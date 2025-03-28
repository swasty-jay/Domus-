// src/main.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import Listings from "./Components/Listings";
import NotFound from "./Pages/NotFound";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import About from "./Pages/AboutSection";
import Footer from "./Pages/Footer";
import AppLayout from "./Pages/AppLayout";
import PropertyForm from "./Pages/PropertyForm";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      { path: "/listings", element: <Listings /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/about", element: <About /> },
      { path: "/footer", element: <Footer /> },
      { path: "/property-form/:cityId", element: <PropertyForm /> },
      { path: "*", element: <NotFound /> }, // Catch-all for 404
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
