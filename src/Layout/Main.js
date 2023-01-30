import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import bgImg from "../images/background/fifth_bg.jpg";
const Main = () => {
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }}>
      <div class="grid grid-cols-3  gap-4 ">
        <div className="fixed top-0 left-0 ">
          <Navbar> </Navbar>
        </div>

        <div style={{ height: "100vh" }} class="col-span-2  ">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
