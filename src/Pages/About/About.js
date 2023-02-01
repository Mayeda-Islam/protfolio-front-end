import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPhoneFill, BsPhone } from "react-icons/bs";
import myImg from "../../images/my-img/mayeda.png";
const About = () => {
  return (
    <div>
      <div className="slide w-screen h-screen">
        <div className="content second-content p-12 overflow-y-scroll text-left">
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <div className="left-content text-justify items-center pt-8 ">
                <h2 className="text-4xl uppercase font-bold border-b-2 inline-block pb-3 mb-3 mt-0">
                  About
                </h2>
                <p className="">
                  Hello! My name is{" "}
                  <span className="font-semibold">Mayeda Islam</span>. I am a
                  front-end web developer. I have a diverse set of skill,
                  ranging from HTML, CSS, Javascript, React and all the way to
                  Express & MongoDB.
                </p>
                <div>
                  <h2 className="text-sm uppercase font-bold border-b-2 inline-block pb-1 mt-0">
                    Qualification
                  </h2>
                  <p>
                    <em>B. Sc In Computer Science And Engineering</em>
                  </p>
                </div>
                <h2 className="text-sm uppercase font-bold border-b-2 inline-block pb-1 mt-0">
                  Institution
                </h2>
                <p>
                  <em>Central University of Science and Technology</em>
                </p>
                <div>
                  <h2
                    className="text-sm
                    uppercase
                    font-bold
                    border-b-2
                    inline-block
                    pb-1
                    mt-0"
                  >
                    Find me on
                  </h2>
                  <div>
                    <div className="flex w-1/2 pl-0 p-4">
                      <div className="px-3 py-3 bg-green-100 text-green-800 rounded-full bg-transparent text-xl mr-4">
                        {" "}
                        <a
                          href="https://github.com/Mayeda-Islam"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <FaGithub></FaGithub>
                        </a>
                      </div>
                      <div className="px-3 py-3 bg-green-100 text-green-800 rounded-full bg-transparent text-xl mr-4">
                        {" "}
                        <a href="https://www.linkedin.com/in/mayeda-islam/">
                          {" "}
                          <FaLinkedin></FaLinkedin>
                        </a>
                      </div>
                      <div className="px-3 py-3 bg-green-100 text-green-800 rounded-full bg-transparent text-xl mr-4">
                        {" "}
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <FaFacebookF></FaFacebookF>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2
                    className="text-sm
                    uppercase
                    font-bold
                    border-b-2
                    inline-block
                    pb-1
                    mt-0"
                  >
                    Contact me here
                  </h2>
                </div>
                <div className="flex items-center justify-evenly ml-3 gap-x-4 w-1/2">
                  <div className="text-xl">
                    <AiOutlineMail></AiOutlineMail>
                  </div>
                  <em className="text-md">mayedakonika@gmail.com</em>
                </div>
                <div className="flex items-center justify-evenly gap-x-4 ml-3 w-1/3">
                  <div className="text-xl mt-2 ">
                    <BsPhone></BsPhone>
                  </div>
                  <em className="text-md ">+8801782955580</em>
                </div>
              </div>
            </div>
            <div className="">
              <div className="right-image ">
                <img src={myImg} className="w-full " alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
