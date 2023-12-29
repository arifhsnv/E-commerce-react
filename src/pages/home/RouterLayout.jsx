import React from "react";
import Navbar from "../../components/home/Navbar";
import Footer from "../../components/home/Footer";
import { Outlet } from "react-router-dom";
function RouterLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RouterLayout;
