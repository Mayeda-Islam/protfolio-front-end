import React, { useState } from "react";
import {
  FaHome,
  FaUserAlt,
  FaFlask,
  FaCode,
  FaGraduationCap,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaFileAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    {
      name: "About",
      path: "/about",
      icon: <FaUserAlt />,
    },
    {
      name: "Research",
      path: "/researchs",
      icon: <FaFlask />,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: <FaCode />,
    },
    {
      name: "Experience",
      path: "/experience",
      icon: <FaGraduationCap />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <>
      {/* =====================================================
          DESKTOP SIDEBAR
      ===================================================== */}
      <aside
        className="
          fixed left-0 top-0 z-50
          hidden h-screen w-[270px]
          border-r border-white/10
          bg-black/20
          text-white
          backdrop-blur-md
          lg:block
        "
      >
        <div className="flex h-full flex-col px-5 py-7">

          {/* LOGO */}
          <div className="mb-12 flex items-center gap-3 px-2">

            <div
              className="
                flex h-11 w-11 shrink-0
                items-center justify-center
                rounded-xl
                bg-gradient-to-br from-violet-600 to-indigo-600
                text-sm font-bold
                tracking-wider
                shadow-lg shadow-violet-900/30
              "
            >
              MI
            </div>

            <div>
              <h2 className="text-[15px] font-semibold tracking-wide">
                Mayeda Islam
              </h2>

              <p className="mt-1 text-[10px] font-medium tracking-wide text-slate-300">
                Researcher & Developer
              </p>
            </div>

          </div>

          {/* NAVIGATION */}
          <nav className="flex-1">

            <p
              className="
                mb-4 px-3
                text-[10px]
                font-bold
                tracking-[0.2em]
                text-slate-300
              "
            >
              MENU
            </p>

            <ul className="space-y-2">

              {navItems.map((item) => (
                <li key={item.name}>

                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={({ isActive }) =>
                      `
                      group relative
                      flex items-center gap-4
                      rounded-xl
                      px-4 py-3
                      transition-all duration-300

                      ${
                        isActive
                          ? "bg-violet-500/20 text-white"
                          : "text-slate-300 hover:bg-white/10 hover:text-white"
                      }
                      `
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {isActive && (
                          <span
                            className="
                              absolute
                              -left-5
                              top-1/2
                              h-7
                              w-[3px]
                              -translate-y-1/2
                              rounded-r-full
                              bg-violet-500
                            "
                          />
                        )}

                        <span
                          className={`
                            flex w-5
                            items-center justify-center
                            text-[15px]
                            transition-transform duration-300
                            group-hover:scale-110

                            ${
                              isActive
                                ? "text-violet-400"
                                : "text-slate-300 group-hover:text-violet-400"
                            }
                          `}
                        >
                          {item.icon}
                        </span>

                        <span className="text-[13px] font-medium tracking-wide">
                          {item.name}
                        </span>
                      </>
                    )}
                  </NavLink>

                </li>
              ))}

            </ul>

          </nav>

          {/* BOTTOM */}
          <div className="border-t border-white/10 pt-5">

            {/* CV */}
            <a
              href="/Mayeda_Islam_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                flex w-full
                items-center justify-center
                gap-2
                rounded-xl
                border border-white/10
                bg-white/10
                px-4 py-3
                text-xs
                font-semibold
                text-slate-200
                transition-all duration-300
                hover:border-violet-500/40
                hover:bg-violet-600
                hover:text-white
                hover:shadow-lg
                hover:shadow-violet-900/30
              "
            >
              <FaFileAlt className="text-[13px]" />
              <span>View CV</span>
            </a>

            {/* SOCIAL */}
            <div className="mt-5 flex justify-center gap-3">

              <a
                href="https://github.com/Mayeda-Islam"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-lg
                  bg-white/10
                  text-slate-300
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-violet-600
                  hover:text-white
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mayeda-islam/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="
                  flex h-9 w-9
                  items-center justify-center
                  rounded-lg
                  bg-white/10
                  text-slate-300
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:bg-violet-600
                  hover:text-white
                "
              >
                <FaLinkedinIn />
              </a>

            </div>

            <p className="mt-5 text-center text-[9px] tracking-wide text-slate-300">
              © {new Date().getFullYear()} Mayeda Islam
            </p>

          </div>
        </div>
      </aside>

      {/* =====================================================
          MOBILE NAVBAR
      ===================================================== */}
      <div
        className="
          fixed left-0 right-0 top-0 z-50
          border-b border-white/10
          bg-black/40
          backdrop-blur-xl
          lg:hidden
        "
      >
        <div className="flex h-[70px] items-center justify-between px-5">

          {/* MOBILE LOGO */}
          <div className="flex items-center gap-3">

            <div
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-xl
                bg-gradient-to-br from-violet-600 to-indigo-600
                text-xs font-bold
                tracking-wider
              "
            >
              MI
            </div>

            <div>
              <h2 className="text-sm font-semibold text-white">
                Mayeda Islam
              </h2>

              <p className="text-[9px] tracking-wide text-gray-400">
                Researcher & Developer
              </p>
            </div>

          </div>

          {/* HAMBURGER */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-lg
              border border-white/10
              bg-white/5
              text-gray-200
              transition-all duration-300
              hover:bg-violet-600
            "
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* MOBILE MENU */}
        <div
          className={`
            overflow-hidden
            border-t border-white/10
            transition-all duration-300
            ${
              isOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }
          `}
        >
          <nav className="px-5 py-4">

            <ul className="space-y-1">

              {navItems.map((item) => (
                <li key={item.name}>

                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `
                      flex items-center gap-4
                      rounded-lg
                      px-4 py-3
                      text-sm
                      transition-all duration-300

                      ${
                        isActive
                          ? "bg-violet-500/20 text-white"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }
                      `
                    }
                  >
                    <span className="text-violet-400">
                      {item.icon}
                    </span>

                    <span>{item.name}</span>
                  </NavLink>

                </li>
              ))}

            </ul>

            {/* MOBILE CV */}
            <a
              href="/Mayeda_Islam_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="
                mt-4 flex
                items-center justify-center
                gap-2
                rounded-lg
                border border-violet-500/30
                bg-violet-600/80
                px-4 py-3
                text-xs
                font-semibold
                text-white
              "
            >
              <FaFileAlt />
              View CV
            </a>

          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;