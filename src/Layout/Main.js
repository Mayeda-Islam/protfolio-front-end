import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import homeImage from "../images/background/cover8.png";
import aboutImage from "../images/background/cover6.jpg";
import projectsImage from "../images/background/cover1.png";
import contactImage from "../images/background/cover7.jpg";

const Main = () => {
  const location = useLocation();

  const backgroundImages = {
    "/": homeImage,
    "/about": aboutImage,
    "/projects": projectsImage,
    "/contact": contactImage,
  };

  const currentImage = backgroundImages[location.pathname] || homeImage;

  return (
    <div className="relative min-h-screen">

      {/* FIXED BACKGROUND */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${currentImage})`,
        }}
      />

      {/* BACKGROUND OVERLAY */}
      <div className="fixed inset-0 z-0 bg-slate-950/60" />

      {/* NAVBAR */}
      <Navbar />

      {/* CONTENT */}
      <main className="relative z-10 ml-[270px] min-h-screen">
        <Outlet />
      </main>

    </div>
  );
};

export default Main;