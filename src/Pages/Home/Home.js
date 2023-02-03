import React from "react";
import "./Home.css";
import homepic from "../../images/my-img/homepic.jpg";
import homeImage from "../../images/background/cover8.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      className="slides"
      style={{
        height: "100vh",
        backgroundImage: `url(${homeImage})`,
        objectFit: "cover",
      }}
    >
      <div className="slide" id="1">
        <div className="content p-10  md:p-28 text-left ">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="">
              <div className="author-image">
                <img
                  src={homepic}
                  className="mt-4 rounded-3xl  w-full md:w-40 mx-auto"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-2 text-center md:text-left mt-8 md:mt-0">
              <h2 className="text-4xl  uppercase font-bold border-b-2 inline-block pb-3 mb-3 mt-0">
                Mayeda islam
              </h2>
              <p className="text-sm tracking-widest mb-5 leading-6 uppercase font-light">
                Hi there! I am a <em className="font-semibold ">front-end</em>{" "}
                developer specializing in creating{" "}
                <em className="font-semibold ">user-friendly</em> and{" "}
                <em className="font-semibold ">visually appealing</em> websites
                and applications using technologies like HTML, CSS, JavaScript
                and framework <em className="font-semibold ">(React)</em> . I
                work closely with design teams and back-end developers to ensure
                a seamless user experience.
              </p>
              <div className="main-btn  md:flex">
                <button className="inline-block mb-4  mr-5 border-2 py-2 px-4 text-sm tracking-wider text-white hover:transition-all hover:bg-white hover:text-black uppercase ">
                  <Link to={"/about"}>Read more</Link>
                </button>

                <a
                  className="inline-block mb-4 mr-5 border-2 py-2 px-4 text-sm bg-white text-black uppercase tracking-wider"
                  href="https://www.linkedin.com/in/mayeda-islam/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Visit Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
