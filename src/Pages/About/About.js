import React from "react";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPhoneFill, BsPhone } from "react-icons/bs";
import aboutImage from "../../images/background/cover6.jpg";
import myImg from "../../images/my-img/mayeda.png";
const About = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${aboutImage})`,
        objectFit: "cover",
      }}
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
    >
      <div className="slide w-screen h-screen">
        <div className="content second-content p-12 pr-4  overflow-y-scroll text-left">
          <div className=" grid grid-cols-1  md:grid-cols-2 gap-4">
            <div className="">
              <div className="left-content  items-center  pt-8 ">
                <h2 className="text-4xl text-justify uppercase font-bold border-b-2 inline-block pb-3 mb-3 mt-0">
                  About
                </h2>
                <p className="">
                  Hello! My name is{" "}
                  <span className="font-semibold">Mayeda Islam</span>.{" "}
                  <br className="md:hidden" /> I am a front-end{" "}
                  <br className="md:hidden" /> web developer.
                  <br className="md:hidden" /> I have a diverse{" "}
                  <br className="md:hidden" />
                  set of skill, ranging <br className="md:hidden" />
                  from HTML, CSS, Javascript, React
                  <br className="md:hidden" /> and all the way to{" "}
                  <br className="md:hidden" /> Express & MongoDB.
                </p>
                <div className="text-left">
                  <h2 className="text-sm uppercase font-bold border-b-2 inline-block pb-1 mt-0">
                    Qualification
                  </h2>
                  <p>
                    <em>
                      B. Sc In Computer <br className="md:hidden" /> Science And
                      Engineering
                    </em>
                  </p>
                </div>
                <div className="text-left">
                  <h2 className="text-sm uppercase font-bold border-b-2 inline-block pb-1 mt-0">
                    Institution
                  </h2>
                  <p>
                    <em>Central University of Science and Technology</em>
                  </p>
                </div>
                <div>
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
                    <div className="">
                      <div className="flex w-1/2 pl-0 p-4">
                        <div className="pr-3 md:px-3 py-3 text-white md:bg-green-100 md:text-green-800 rounded-full bg-transparent text-xl md:mr-4">
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
                        <div className="px-3 py-3  text-white md:bg-green-100 md:text-green-800  rounded-full bg-transparent text-xl md:mr-4">
                          {" "}
                          <a href="https://www.linkedin.com/in/mayeda-islam/">
                            {" "}
                            <FaLinkedin></FaLinkedin>
                          </a>
                        </div>
                        <div className="px-3 py-3 text-white md:bg-green-100 md:text-green-800 rounded-full bg-transparent text-xl md:mr-4">
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
                </div>
                <div className="text-left ">
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
                  <div>
                    <div className="w-full mx-auto ">
                      <div className="md:flex      ">
                        <div className="text-xl mr-4 hidden md:block">
                          <AiOutlineMail></AiOutlineMail>
                        </div>
                        <em className="text-md items-start">
                          mayedakonika@gmail.com
                        </em>
                      </div>
                      <div className=" md:flex   ">
                        <div className="text-xl mr-4  hidden md:block">
                          <BsPhone></BsPhone>
                        </div>
                        <em className="text-md items-start">+8801782955580</em>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="hidden md:block right-image ml-[-20px] md:ml-0 ">
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
