import React from "react";
import homepic from "../../images/my-img/homepic.jpg";
import { Link } from "react-router-dom";

import { FaArrowRight, FaBrain, FaEye, FaCode, FaFlask } from "react-icons/fa";

const Home = () => {
  const researchTags = [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Medical Imaging",
    "Vision Transformers",
    "Explainable AI",
    "Self-Supervised Learning",
  ];

  return (
    // Home.jsx
    <div className="relative min-h-screen">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          z-0
          bg-cover
          bg-center
          bg-no-repeat
        "
      />

      {/* =====================================================
          DARK OVERLAY
      ====================================================== */}
      <div
        className="
          absolute
          inset-0
          z-0
          bg-slate-950/50
        "
      />

      {/* =====================================================
          CONTENT
      ====================================================== */}
      <div className="relative z-10">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in"
          className="
            flex
            min-h-screen
            items-center
            px-8
            py-16
            lg:px-16
            xl:px-20
          "
        >
          <div className="w-full max-w-6xl">
            <div
              className="
                grid
                grid-cols-1
                items-center
                gap-12
                lg:grid-cols-12
              "
            >
              {/* =================================================
                  PROFILE IMAGE
              ================================================== */}
              <div
                className="
                  flex
                  justify-center
                  lg:col-span-4
                "
              >
                <div className="relative">
                  {/* Image Glow */}
                  <div
                    className="
                      absolute
                      -inset-4
                      rounded-[2rem]
                      bg-violet-500/20
                      blur-2xl
                    "
                  />

                  {/* Profile Image */}
                  <img
                    src={homepic}
                    alt="Mayeda Islam"
                    className="
                      relative
                      h-60
                      w-60
                      rounded-[2rem]
                      border
                      border-white/20
                      object-cover
                      shadow-2xl
                      sm:h-64
                      sm:w-64
                      lg:h-72
                      lg:w-72
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  HERO TEXT
              ================================================== */}
              <div className="lg:col-span-8">
                {/* Researcher Badge */}
                <div
                  className="
                    mb-6
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-violet-400/30
                    bg-violet-500/10
                    px-4
                    py-2
                    text-xs
                    font-medium
                    tracking-wide
                    text-violet-300
                    backdrop-blur-sm
                  "
                >
                  <span
                    className="
                      h-2
                      w-2
                      rounded-full
                      bg-violet-400
                    "
                  />
                  Computer Science Researcher
                </div>

                {/* Name */}
                <h1
                  className="
                    text-5xl
                    font-bold
                    uppercase
                    leading-tight
                    tracking-tight
                    text-white
                    sm:text-6xl
                    xl:text-7xl
                  "
                >
                  Mayeda Islam
                </h1>

                {/* Research Identity */}
                <h2
                  className="
                    mt-5
                    text-2xl
                    font-semibold
                    leading-relaxed
                    text-slate-200
                    sm:text-3xl
                  "
                >
                  Machine Learning
                  <span className="text-violet-400">
                    {" "}
                    • Deep Learning • Computer Vision
                  </span>
                </h2>

                {/* Short Introduction */}
                <p
                  className="
                    mt-6
                    max-w-3xl
                    text-base
                    leading-8
                    text-slate-300
                    sm:text-lg
                  "
                >
                  Emerging Computer Science researcher with a background in
                  software development and a growing focus on{" "}
                  <span className="font-semibold text-white">
                    Machine Learning, Deep Learning, Computer Vision,
                  </span>{" "}
                  and{" "}
                  <span className="font-semibold text-white">
                    AI-driven solutions.
                  </span>{" "}
                  My research interests include medical image analysis, Vision
                  Transformers, Self-Supervised Learning, and Explainable AI.
                </p>

                {/* =================================================
                    RESEARCH TAGS
                ================================================== */}
                <div className="mt-7 flex flex-wrap gap-3">
                  {researchTags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        rounded-full
                        border
                        border-white/10
                        bg-white/10
                        px-4
                        py-2
                        text-xs
                        text-slate-200
                        backdrop-blur-sm
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* =================================================
                    BUTTONS
                ================================================== */}
                <div className="mt-9 flex flex-wrap gap-4">
                  {/* About Button */}
                  <Link
                    to="/about"
                    className="
                      group
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      bg-violet-600
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-violet-500
                      hover:shadow-xl
                      hover:shadow-violet-900/40
                    "
                  >
                    About Me
                    <FaArrowRight
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </Link>

                  {/* Research Button */}
                  <Link
                    to="/research"
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-xl
                      border
                      border-white/15
                      bg-white/10
                      px-6
                      py-3.5
                      text-sm
                      font-semibold
                      text-white
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:bg-white/20
                    "
                  >
                    Explore Research
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            CURRENT RESEARCH
        ====================================================== */}
        <section
          data-aos="fade-up"
          data-aos-duration="1000"
          className="px-8 pb-20 lg:px-16 xl:px-20"
        >
          <div className="mx-auto max-w-5xl">
            {/* Section Heading */}
            <div className="mb-8">
              <p
                className="
          text-xs
          font-bold
          uppercase
          tracking-[0.25em]
          text-violet-400
        "
              >
                Current Research
              </p>

              <h2
                className="
          mt-3
          text-3xl
          font-bold
          text-white
          sm:text-4xl
        "
              >
                Ongoing Research Project
              </h2>
            </div>

            {/* Research Card */}
            <div
              className="
        w-full
        rounded-3xl
        border
        border-white/10
        bg-white/[0.07]
        p-7
        backdrop-blur-md
        transition-all
        duration-300
        hover:border-violet-400/30
        hover:bg-white/[0.09]
        sm:p-9
      "
            >
              {/* Research Label */}
              <div className="flex flex-wrap items-center gap-3">
                <span
                  className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-violet-400/30
            bg-violet-500/10
            px-3
            py-1.5
            text-xs
            font-medium
            text-violet-300
          "
                >
                  <FaFlask className="text-[10px]" />
                  Ongoing Research
                </span>

                <span className="text-xs text-slate-400">
                  Medical Imaging • Computer Vision
                </span>
              </div>

              {/* Research Title */}
              <h3
                className="
          mt-5
          text-2xl
          font-bold
          leading-relaxed
          text-white
          sm:text-3xl
        "
              >
                Transformer-Based TransMamm:
              </h3>

              {/* Research Subtitle */}
              <p
                className="
          mt-2
          text-xl
          font-semibold
          leading-relaxed
          text-violet-400
          sm:text-2xl
        "
              >
                A Density-Aware Hybrid Vision Transformer Framework for Robust
                Lesion Detection in Dense Breast Tissue
              </p>

              {/* Research Description */}
              <p
                className="
          mt-5
          text-sm
          leading-7
          text-slate-300
          sm:text-base
        "
              >
                This research explores a hybrid Vision Transformer framework for
                robust lesion detection in dense breast tissue, focusing on
                improving representation learning and model reliability in
                challenging medical imaging scenarios.
              </p>

              {/* Research Areas */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                {[
                  "Vision Transformers",
                  "CNNs",
                  "Self-Supervised Learning",
                  "Explainable AI",
                  "Medical Imaging",
                  "Lesion Detection",
                ].map((item) => (
                  <span
                    key={item}
                    className="
              rounded-lg
              border
              border-white/10
              bg-black/10
              px-3
              py-2
              text-xs
              text-slate-300
            "
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Research Button */}
              <div className="mt-7">
                <Link
                  to="/research"
                  className="
            group
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-violet-600
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-violet-500
            hover:shadow-lg
            hover:shadow-violet-900/30
          "
                >
                  View Research
                  <FaArrowRight
                    className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            RESEARCH FOCUS
        ====================================================== */}
        <section
          data-aos="fade-up"
          data-aos-duration="1000"
          className="
            px-8
            pb-20
            lg:px-16
            xl:px-20
          "
        >
          {/* Section Heading */}
          <div className="mb-10">
            <p
              className="
                text-xs
                font-bold
                uppercase
                tracking-[0.25em]
                text-violet-400
              "
            >
              Research Focus
            </p>

            <h2
              className="
                mt-3
                text-3xl
                font-bold
                text-white
                sm:text-4xl
              "
            >
              Areas I am exploring
            </h2>

            <p
              className="
                mt-3
                mx-auto
                max-w-4xl
                text-sm
                leading-7
                text-slate-300
              "
            >
              My current academic interests focus on intelligent systems,
              computer vision, and AI-driven solutions for real-world problems.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-5 md:grid-cols-3">
            {/* =================================================
                MACHINE LEARNING
            ================================================== */}
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.07]
                p-6
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/[0.10]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-500/15
                  text-violet-400
                "
              >
                <FaBrain />
              </div>

              <h3
                className="
                  mt-5
                  text-lg
                  font-semibold
                  text-white
                "
              >
                Machine Learning
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-300
                "
              >
                Exploring machine learning techniques for classification,
                prediction, pattern recognition, and intelligent systems.
              </p>
            </div>

            {/* =================================================
                COMPUTER VISION
            ================================================== */}
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.07]
                p-6
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/[0.10]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-500/15
                  text-violet-400
                "
              >
                <FaEye />
              </div>

              <h3
                className="
                  mt-5
                  text-lg
                  font-semibold
                  text-white
                "
              >
                Computer Vision & Medical AI
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-300
                "
              >
                Investigating deep learning and vision-based methods for image
                classification, lesion detection, and medical image analysis.
              </p>
            </div>

            {/* =================================================
                SOFTWARE DEVELOPMENT
            ================================================== */}
            <div
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.07]
                p-6
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/[0.10]
              "
            >
              <div
                className="
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  bg-violet-500/15
                  text-violet-400
                "
              >
                <FaCode />
              </div>

              <h3
                className="
                  mt-5
                  text-lg
                  font-semibold
                  text-white
                "
              >
                Software Development
              </h3>

              <p
                className="
                  mt-3
                  text-sm
                  leading-7
                  text-slate-300
                "
              >
                Professional experience in building responsive, user-focused
                applications using modern frontend and web technologies.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
