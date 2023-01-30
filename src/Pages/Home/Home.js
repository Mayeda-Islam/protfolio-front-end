import React from "react";
import "./Home.css";
import homepic from "../../images/my-img/homepic.jpg";
const Home = () => {
  return (
    <div className="slides" style={{ height: "100vh" }}>
      <div className="slide" id="1">
        <div className="content p-28 text-left ">
          <div className="grid grid-cols-3">
            <div className="">
              <div className="author-image">
                <img
                  src={homepic}
                  className="mt-4 rounded-3xl mr-8 w-40"
                  alt=""
                />
              </div>
            </div>
            <div className="col-span-2">
              <h2 className="text-4xl uppercase font-bold border-b-2 inline-block pb-3 mb-3 mt-0">
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
              <div className="main-btn flex">
                <button className="inline-block mr-5 border-2 py-2 px-4 text-sm tracking-wider text-white hover:transition-all hover:bg-white hover:text-black uppercase ">
                  Read more
                </button>

                <button className="inline-block mr-5 border-2 py-2 px-4 text-sm bg-white text-black uppercase tracking-wider">
                  Visit Linkedin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;