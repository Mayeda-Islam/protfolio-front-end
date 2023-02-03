import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Projects from "../Pages/Projects/Projects";
import axiosInstance from "../utilities/axiosInstance";

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
        path: "/projects",
        element: <Projects></Projects>,
        loader: async () => {
          const res = await axiosInstance.get("projects");
          return await res.data;
        },
      },
    ],
  },
]);
