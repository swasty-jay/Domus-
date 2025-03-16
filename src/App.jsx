import React from "react";
import AppLayout from "./Pages/AppLayout";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route index element={<Home />} /> {/* default route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
