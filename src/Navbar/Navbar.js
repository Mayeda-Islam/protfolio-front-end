import React from "react";
import { FaDesktop, FaEnvelope, FaHome, FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  //     transition: "color 2s, background 1s",
  const linkClasses =
    "flex items-center justify-center p-2 gap-3 text-base font-normal rounded-l hover:text-black hover:bg-white";
  const activeLinkClasses = "bg-white text-black";
  return (
    <div>
      {/* <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button> */}

      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4  nav overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul class="space-y-2">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClasses : ""} ${linkClasses}`
                }
              >
                <FaHome></FaHome>
                <em>Home</em>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClasses : ""} ${linkClasses}`
                }
              >
                <FaUserAlt></FaUserAlt>
                <em>About</em>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClasses : ""} ${linkClasses}`
                }
              >
                <FaDesktop></FaDesktop>
                <em>Projects</em>
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  `${isActive ? activeLinkClasses : ""} ${linkClasses}`
                }
              >
                <FaEnvelope></FaEnvelope>
                <em>contact</em>
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
