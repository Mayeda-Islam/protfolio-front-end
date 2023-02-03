import React from "react";
import { FaDesktop, FaEnvelope, FaHome, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  //     transition: "color 2s, background 1s",
  const linkClasses =
    "flex items-center  justify-center p-2 gap-3 text-base font-normal rounded-l hover:text-black hover:bg-white";
  const activeLinkClasses = "bg-white text-black ";
  return (
    <div>
      <aside
        // id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen 
       transition-transform -translate-x-1/2 sm:translate-x-0
        "
        // aria-label="Sidebar"
      >
        <div class="h-full  px-3 py-4  nav overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2 flex flex-col mr-4 items-end  md:items-center md:justify-center mt-20  ">
            <li className="pb-16 p-4 md:p-4 ">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClasses : ""} ${linkClasses}`
                }
              >
                <div className="text-4xl md:text-lg ">
                  <FaHome></FaHome>
                </div>
                <em className="hidden md:block">Home</em>
              </NavLink>
            </li>
            <li className="pb-16 p-4 md:p-4">
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClasses : ""} ${linkClasses}`
                }
              >
                <div className="text-4xl md:text-lg">
                  <FaUserAlt></FaUserAlt>
                </div>
                <em className="hidden md:block">About</em>
              </NavLink>
            </li>
            <li className="pb-16 p-4 md:p-4">
              <NavLink
                to={"/projects"}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClasses : ""} ${linkClasses}`
                }
              >
                <div className="text-4xl md:text-lg">
                  <FaDesktop></FaDesktop>
                </div>
                <em className="hidden md:block">Projects</em>
              </NavLink>
            </li>
            <li className="pb-16 p-4 md:p-4">
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClasses : ""} ${linkClasses}`
                }
              >
                <div className="text-4xl md:text-lg">
                  <FaEnvelope></FaEnvelope>
                </div>
                <em className="hidden md:block">contact</em>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>

      {/* <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <div class="grid grid-cols-3 gap-4 mb-4">
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
          <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
            <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
              <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Navbar;
