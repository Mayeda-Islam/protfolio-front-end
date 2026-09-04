import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import homeImage from "../images/background/cover8.png";
import aboutImage from "../images/background/cover6.jpg";
// import researchImage from "../images/background/cover5.jpg";
// import projectsImage from "../images/background/cover1.png";
import contactImage from "../images/background/cover7.jpg";

const Main = () => {
  const location = useLocation();

  const backgroundImages = {
    "/": homeImage,
    "/about": aboutImage,
    // "/research": researchImage,
    // "/projects": projectsImage,
    "/contact": contactImage,
  };

  const currentImage = backgroundImages[location.pathname];
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat  absolute
          
          z-0
         "
      style={{
        backgroundImage: `url(${currentImage})`,
      }}
    >
      <div className="min-h-screen bg-slate-950">
        {/* ================= NAVBAR ================= */}
        <Navbar />

        {/* ================= PAGE CONTENT ================= */}
        <main className="ml-[270px] min-h-screen">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Main;
