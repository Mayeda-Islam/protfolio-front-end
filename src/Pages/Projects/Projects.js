import React from "react";
import { useLoaderData } from "react-router-dom";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  FaExternalLinkAlt,
  FaGithub,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const projects = useLoaderData();

  console.log(projects, "projects");

  return (
    <div className="relative min-h-screen bg-slate-950">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-violet-950/20" />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10 px-8 py-16 lg:px-14 xl:px-20">

        {/* =================================================
            PAGE HEADER
        ================================================== */}
        <div className="mb-14 max-w-3xl">

          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-violet-400/20
              bg-violet-500/10
              px-4
              py-2
              text-xs
              font-medium
              tracking-wide
              text-violet-300
            "
          >
            <FaLaptopCode />

            Featured Projects
          </div>

          <h1
            className="
              text-4xl
              font-bold
              tracking-tight
              text-white
              sm:text-5xl
            "
          >
            Projects & Development
          </h1>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-8
              text-slate-400
            "
          >
            A collection of projects that reflect my experience in
            frontend development, software engineering, and building
            practical technology solutions.
          </p>

        </div>


        {/* =================================================
            PROJECT LIST
        ================================================== */}
        <div className="space-y-10">

          {projects?.map((project, i) => (

            <div
              key={project._id || project.id || i}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-md
                transition-all
                duration-500
                hover:border-violet-500/30
                hover:bg-white/[0.06]
              "
            >

              <div
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-2
                "
              >

                {/* =================================================
                    IMAGE SECTION
                ================================================== */}
                <div
                  className={`
                    relative
                    min-h-[280px]
                    overflow-hidden
                    bg-slate-900

                    ${i % 2 !== 0 ? "lg:order-last" : ""}
                  `}
                >

                  <Swiper
                    spaceBetween={20}
                    centeredSlides={true}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[
                      Autoplay,
                      Pagination,
                      Navigation,
                    ]}
                    className="h-full min-h-[280px] w-full"
                  >

                    {project?.images?.map((img, index) => (

                      <SwiperSlide key={img._id || img.id || index}>

                        <div className="relative h-full w-full">

                          <img
                            src={img.url}
                            alt={`${project.title} ${index + 1}`}
                            className="
                              h-full
                              min-h-[280px]
                              w-full
                              object-cover
                              transition-transform
                              duration-700
                              group-hover:scale-[1.02]
                            "
                          />

                          {/* Image Overlay */}
                          <div
                            className="
                              absolute
                              inset-0
                              bg-gradient-to-t
                              from-slate-950/70
                              via-transparent
                              to-transparent
                            "
                          />

                        </div>

                      </SwiperSlide>

                    ))}

                  </Swiper>

                </div>


                {/* =================================================
                    PROJECT INFORMATION
                ================================================== */}
                <div className="flex flex-col justify-center p-7 sm:p-9 lg:p-10">

                  {/* Project Number */}
                  <div
                    className="
                      mb-5
                      flex
                      items-center
                      gap-3
                    "
                  >

                    <span
                      className="
                        text-xs
                        font-bold
                        tracking-[0.2em]
                        text-violet-400
                      "
                    >
                      PROJECT {String(i + 1).padStart(2, "0")}
                    </span>

                    <span className="h-px w-10 bg-violet-500/40" />

                  </div>


                  {/* Title */}
                  <h2
                    className="
                      text-2xl
                      font-bold
                      uppercase
                      leading-tight
                      text-white
                      sm:text-3xl
                    "
                  >
                    {project.title}
                  </h2>


                  {/* Description */}
                  <p
                    className="
                      mt-5
                      text-sm
                      leading-7
                      text-slate-400
                    "
                  >
                    {project.description}
                  </p>


                  {/* =================================================
                      TECHNOLOGIES
                  ================================================== */}
                  <div className="mt-7">

                    <div
                      className="
                        mb-3
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-bold
                        uppercase
                        tracking-wider
                        text-slate-300
                      "
                    >
                      <FaCode className="text-violet-400" />

                      Technologies
                    </div>


                    <div className="flex flex-wrap gap-2">

                      {project?.technologies?.map(
                        (technology, index) => (

                          <span
                            key={`${technology}-${index}`}
                            className="
                              rounded-lg
                              border
                              border-violet-500/20
                              bg-violet-500/10
                              px-3
                              py-1.5
                              text-xs
                              font-medium
                              text-violet-300
                            "
                          >
                            {technology}
                          </span>

                        )
                      )}

                    </div>

                  </div>


                  {/* =================================================
                      PROJECT LINKS
                  ================================================== */}
                  {project?.links?.length > 0 && (

                    <div className="mt-8 flex flex-wrap gap-3">

                      {project.links.map((link, index) => (

                        <a
                          key={link._id || link.id || index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            group/link
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-white/10
                            bg-white/5
                            px-4
                            py-2.5
                            text-xs
                            font-semibold
                            text-slate-200
                            transition-all
                            duration-300
                            hover:border-violet-500/40
                            hover:bg-violet-600
                            hover:text-white
                          "
                        >

                          {link.title}

                          <FaExternalLinkAlt
                            className="
                              text-[10px]
                              transition-transform
                              duration-300
                              group-hover/link:translate-x-0.5
                              group-hover/link:-translate-y-0.5
                            "
                          />

                        </a>

                      ))}

                    </div>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* =================================================
            EMPTY STATE
        ================================================== */}
        {!projects?.length && (

          <div
            className="
              flex
              min-h-[400px]
              items-center
              justify-center
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
            "
          >

            <div className="text-center">

              <FaCode
                className="
                  mx-auto
                  text-4xl
                  text-violet-400
                "
              />

              <h2
                className="
                  mt-5
                  text-xl
                  font-semibold
                  text-white
                "
              >
                No projects available
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Projects will appear here once they are added.
              </p>

            </div>

          </div>

        )}

      </div>

    </div>
  );
};

export default Projects;