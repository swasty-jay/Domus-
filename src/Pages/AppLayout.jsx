import React from "react";
import Navbar from "../Components/NavBar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
