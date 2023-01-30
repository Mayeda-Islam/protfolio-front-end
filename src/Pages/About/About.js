import React from "react";
import myImg from "../../images/my-img/mayeda.png";
const About = () => {
  return (
    <div>
      <div className="slide w-screen h-screen">
        <div className="content second-content p-12 overflow-y-scroll text-left">
          <div className=" grid grid-cols-2 gap-4">
            <div className="">
              <div className="left-content text-justify pr-8">
                <h2>About Us</h2>
                <p>
                  Please tell your friends about templatemo website. A variety
                  of free CSS templates are available for immediate downloads.
                </p>
                <p>
                  Phasellus vitae faucibus orci. Etiam eleifend orci sed
                  faucibus semper. Cras varius dolor et augue fringilla, eu
                  commodo sapien iaculis. Donec eget dictum tellus.
                  <a href="#">Curabitur</a> a interdum diam. Nulla vestibulum
                  porttitor porta.
                </p>
                <p>
                  Nulla vitae interdum libero, vel posuere ipsum. Phasellus
                  interdum est et dapibus tempus. Vestibulum malesuada lorem
                  condimentum mauris ornare dapibus. Curabitur tempor ligula et
                  <a href="#">placerat</a> molestie.
                </p>
                <p>
                  Aliquam efficitur eu purus in interdum.
                  <a href="#">Etiam tincidunt</a> magna ex, sit amet lobortis
                  felis bibendum id. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
                <div className="main-btn">
                  <a href="#3">Read More</a>
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
