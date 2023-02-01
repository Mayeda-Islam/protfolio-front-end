import React from "react";
import { useLoaderData } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Projects.css";
const Projects = () => {
  const projects = useLoaderData();

  return (
    <div>
      <div className="slide w-screen h-screen " id="1">
        <div className="content  overflow-y-scroll p-8">
          {projects.map((project, i) => (
            <div className="flex justify-between mb-12 w-full">
              <div className={`${i % 2 !== 0 ? `order-last` : ""} w-1/2`}>
                <div className="left-content text-justify pr-8 ">
                  <h2 className="text-xl uppercase font-bold border-b-2 inline-block pb-3  mt-0">
                    {project.title}
                  </h2>
                  <p className="text-sm tracking-wide leading-6 font-light ">
                    {project.description}
                  </p>
                  <h2 className="text-xl uppercase font-bold border-b-2 inline-block pb-3  mt-0">
                    Technologies used
                  </h2>
                  <p className="mb-2 text-sm tracking-wide leading-6 font-light ">
                    {project.technologies.map((technology) => technology)}
                  </p>
                  <div className="">
                    <h2 className="text-xl uppercase font-bold border-b-2 inline-block pb-3  mt-0">
                      Project links
                    </h2>
                    <br />
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
                  </div>
                </div>
              </div>
              <div className="w-1/2 pr-4">
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
                  className="mySwiper h-[260px] w-full"
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
