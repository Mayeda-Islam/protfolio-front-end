import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Main = () => {
  return (
    <>
      <div className="fixed top-0 left-0 ">
        <Navbar> </Navbar>
      </div>

      <div style={{ height: "100vh" }}>
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default Main;
