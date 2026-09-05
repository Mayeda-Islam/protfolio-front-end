import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import axiosInstance from "../utilities/axiosInstance";
import Research from "../Pages/Research";
import Experience from "../Pages/Experience";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/researchs",
        element: <Research></Research>,
      },
      {
        path: "/experience",
        element: <Experience></Experience>,
      },
      {
        path: "/projects",
        element: <Projects></Projects>,
        loader: async () => {
          const res = await axiosInstance.get("allProjects");
          return await res.data;
        },
      },
    ],
  },
]);
