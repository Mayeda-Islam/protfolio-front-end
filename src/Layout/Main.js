import React, { useEffect, useState } from "react";
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

  const [background, setBackground] = useState(currentImage);
  const [previousBackground, setPreviousBackground] = useState(null);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (currentImage === background) return;

    // New image আগে preload করা
    const img = new Image();

    img.src = currentImage;

    img.onload = () => {
      setPreviousBackground(background);
      setBackground(currentImage);
      setIsChanging(true);

      // Transition শেষ হওয়ার পর old image remove
      setTimeout(() => {
        setPreviousBackground(null);
        setIsChanging(false);
      }, 700);
    };
  }, [currentImage, background]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">

      {/* ================= PAGE TRANSITION ================= */}
      <style>
        {`
          @keyframes pageSlideIn {
            from {
              opacity: 0;
              transform: translateX(-70px);
            }

            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .page-slide-in {
            animation: pageSlideIn 0.7s ease-out;
          }
        `}
      </style>

      {/* ================= BACKGROUND ================= */}

      {/* Previous Background */}
      {previousBackground && (
        <div
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${previousBackground})`,
          }}
        />
      )}

      {/* New Background */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-700"
        style={{
          backgroundImage: `url(${background})`,
          opacity: isChanging ? 1 : 1,
        }}
      />

      {/* ================= DARK OVERLAY ================= */}
      <div className="fixed inset-0 z-0 bg-slate-950/60" />

      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= PAGE CONTENT ================= */}
      <main className="relative z-10 ml-[270px] min-h-screen overflow-x-hidden">

        <div
          key={location.pathname}
          className="page-slide-in min-h-screen"
        >
          <Outlet />
        </div>

      </main>
    </div>
  );
};

export default Main;