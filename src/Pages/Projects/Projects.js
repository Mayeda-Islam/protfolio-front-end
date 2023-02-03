import React from "react";
import { useLoaderData } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import projectImage from "../../images/background/cover1.png";
import "./Projects.css";
const Projects = () => {
  const projects = useLoaderData();

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      style={{
        backgroundImage: `url(${projectImage})`,
        objectFit: "cover",
      }}
    >
      <div className="slide w-screen h-screen " id="1">
        <div className="content p-12 pr-4 overflow-y-scroll ">
          {projects.map((project, i) => (
            <div className="flex flex-col-reverse  md:flex-row justify-between mb-12 w-full">
              <div
                className={`${i % 2 !== 0 ? `md:order-last ` : ""} md:w-1/2`}
              >
                <div className="left-content text-start pr-8 ">
                  <h2 className="text-xl uppercase font-bold border-b-2 inline-block pb-3  mt-0">
                    {project.title}
                  </h2>
                  <p className="text-sm tracking-wide leading-6 font-light ">
                    {project.description}
                  </p>
                  <p className="uppercase font-bold text-sm my-2">
                    Technologies used
                  </p>
                  <p className="">
                    {project.technologies.map((technology) => (
                      <em className="bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded-lg dark:bg-green-900 dark:text-green-300">
                        {technology}
                      </em>
                    ))}
                  </p>
                  <div className=" my-4">
                    <h2 className="uppercase text-sm  font-bold  inline-block  mt-0">
                      Project links :{" "}
                      {project.links.map((link) => (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className=" mr-4"
                        >
                          {" "}
                          <em className="text-extrabold"> {link.title}</em>
                        </a>
                      ))}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 pr-4">
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper md:h-[260px] w-full"
                >
                  {project.images.map((img) => (
                    <SwiperSlide>
                      <img className="object-cover" src={img.url} alt="" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
