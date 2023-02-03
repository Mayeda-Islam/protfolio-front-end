import React from "react";
import "./Contact.css";
import contactImage from "../../images/background/cover7.jpg";
const Contact = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      style={{ backgroundImage: `url(${contactImage})`, objectFit: "cover" }}
    >
      <div className="slide  w-screen h-screen " id="5">
        <div className="content overflow-y-scroll  bg-black  fifth-content">
          <div className="container-fluid ">
            {/* <div className="col-md-6">
              <div id="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945"
                  width="100%"
                  height="500px"
                  frameborder="0"
                  style="border: 0"
                  allowfullscreen
                ></iframe>
              </div>
            </div> */}
            <div className="col-md-6 ">
              <form id="contact" className="p-12" action="" method="post">
                <div className="row">
                  <div>
                    <fieldset>
                      <input
                        style={{ backgroundColor: "rgba(250, 250, 250, 0.15)" }}
                        name="name"
                        type="text"
                        className="pl-4 font-medium w-full h-10 mb-6 text-white text-md border-none rounded-none text-md"
                        id="name"
                        placeholder="Your name..."
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div>
                    <fieldset>
                      <input
                        name="email"
                        type="email"
                        style={{ backgroundColor: "rgba(250, 250, 250, 0.15)" }}
                        className="pl-4 font-medium w-full h-10 mb-6 text-white text-md border-none rounded-none text-md"
                        id="email"
                        placeholder="Your email..."
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <input
                        name="subject"
                        type="text"
                        style={{ backgroundColor: "rgba(250, 250, 250, 0.15)" }}
                        className="pl-4 font-medium w-full  h-10 mb-6 text-white text-md border-none rounded-none text-md"
                        id="subject"
                        placeholder="Subject..."
                        required=""
                      />
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <textarea
                        name="message"
                        style={{ backgroundColor: "rgba(250, 250, 250, 0.15)" }}
                        rows="6"
                        className="pl-4 font-medium w-full pt-2 h-40 max-h-56 mb-6 text-white text-md border-none rounded-none text-md"
                        id="message"
                        placeholder="Your message..."
                        required=""
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-md-12">
                    <fieldset>
                      <button
                        type="submit"
                        id="form-submit"
                        className="max-w-full w-full inline-block text-md decoration-none no-underline uppercase bg-transparent transition-all px-4 py-2 border-2"
                      >
                        Send Now
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
