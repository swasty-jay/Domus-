import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/NavBar";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
