import React from "react";
import {
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaLaptopCode,
} from "react-icons/fa";

const Experience = () => {
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      className="relative min-h-screen w-full"
    >
      <div className="relative z-10 min-h-screen w-full px-8 py-14 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-6xl">

          {/* ================= HEADER ================= */}
          <div className="mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-violet-400">
              Professional Journey
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Experience
            </h1>

            <div className="mt-5 h-px w-14 bg-violet-500/70" />

            <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
              My experience combines software development with an evolving
              focus on machine learning, deep learning, computer vision,
              and research-oriented problem solving.
            </p>
          </div>

          {/* ================= EXPERIENCE TIMELINE ================= */}
          <div className="relative">

            {/* Vertical Line */}
            <div className="absolute left-[11px] top-2 hidden h-full w-px bg-white/10 md:block" />

            {/* ================= EXPERIENCE 01 ================= */}
            <div className="relative mb-14 md:pl-14">

              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 hidden h-[23px] w-[23px] items-center justify-center rounded-full border border-violet-400/50 bg-black md:flex">
                <div className="h-2 w-2 rounded-full bg-violet-400" />
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[180px_1fr]">

                {/* Date */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-400">
                    Professional
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Frontend Development
                  </p>
                </div>

                {/* Content */}
                <div className="border-t border-white/10 pt-5 lg:pt-0 lg:border-t-0">

                  <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                    <div>
                      <h2 className="text-xl font-medium text-white">
                        Frontend Developer
                      </h2>

                      <p className="mt-1 text-sm text-violet-300">
                        Software Development
                      </p>
                    </div>

                    <span className="w-fit border border-white/10 px-3 py-1 text-xs text-gray-400">
                      Professional Experience
                    </span>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400">
                    Worked on developing practical and user-focused web
                    applications, with hands-on experience in modern
                    frontend technologies. My work involved translating
                    requirements and design concepts into responsive,
                    functional, and maintainable interfaces.
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {[
                      "React",
                      "JavaScript",
                      "Tailwind CSS",
                      "REST API",
                      "Git",
                      "Responsive UI",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 hover:border-violet-400/40 hover:text-violet-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>

            {/* ================= EXPERIENCE 02 ================= */}
            <div className="relative mb-14 md:pl-14">

              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 hidden h-[23px] w-[23px] items-center justify-center rounded-full border border-violet-400/50 bg-black md:flex">
                <div className="h-2 w-2 rounded-full bg-violet-400" />
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[180px_1fr]">

                {/* Date */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-400">
                    Research
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Current Focus
                  </p>
                </div>

                {/* Content */}
                <div className="border-t border-white/10 pt-5 lg:pt-0 lg:border-t-0">

                  <div className="flex items-start gap-4">
                    <div className="mt-1 hidden text-violet-400 sm:block">
                      <FaLaptopCode />
                    </div>

                    <div>
                      <h2 className="text-xl font-medium text-white">
                        Undergraduate Researcher
                      </h2>

                      <p className="mt-1 text-sm text-violet-300">
                        Machine Learning · Deep Learning · Computer Vision
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400">
                    Developing research experience in machine learning and
                    deep learning, with particular interest in computer
                    vision and medical image analysis. My current direction
                    focuses on developing robust and explainable AI systems
                    for challenging medical imaging problems.
                  </p>

                  <div className="mt-6">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                      Research Areas
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        "Machine Learning",
                        "Deep Learning",
                        "Computer Vision",
                        "Medical AI",
                        "Explainable AI",
                        "Medical Imaging",
                      ].map((item) => (
                        <span
                          key={item}
                          className="border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 hover:border-violet-400/40 hover:text-violet-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* ================= EXPERIENCE 03 ================= */}
            <div className="relative md:pl-14">

              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 hidden h-[23px] w-[23px] items-center justify-center rounded-full border border-violet-400/50 bg-black md:flex">
                <div className="h-2 w-2 rounded-full bg-violet-400" />
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[180px_1fr]">

                {/* Date */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-violet-400">
                    Academic
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    CSE Background
                  </p>
                </div>

                {/* Content */}
                <div className="border-t border-white/10 pt-5 lg:pt-0 lg:border-t-0">

                  <div className="flex items-start gap-4">
                    <div className="mt-1 hidden text-violet-400 sm:block">
                      <FaGraduationCap />
                    </div>

                    <div>
                      <h2 className="text-xl font-medium text-white">
                        Computer Science & Engineering
                      </h2>

                      <p className="mt-1 text-sm text-violet-300">
                        Academic & Technical Development
                      </p>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400">
                    Built a strong foundation in computer science through
                    coursework and hands-on projects involving programming,
                    algorithms, software engineering, databases, artificial
                    intelligence, and computer systems.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">

                    <div className="border-l border-white/10 pl-4">
                      <FaCode className="text-violet-400" />
                      <p className="mt-3 text-sm font-medium text-gray-200">
                        Software
                      </p>
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Web development & application building
                      </p>
                    </div>

                    <div className="border-l border-white/10 pl-4">
                      <FaBriefcase className="text-violet-400" />
                      <p className="mt-3 text-sm font-medium text-gray-200">
                        Engineering
                      </p>
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Problem solving & system development
                      </p>
                    </div>

                    <div className="border-l border-white/10 pl-4">
                      <FaLaptopCode className="text-violet-400" />
                      <p className="mt-3 text-sm font-medium text-gray-200">
                        Research
                      </p>
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        ML, DL & computer vision
                      </p>
                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>

          {/* ================= BOTTOM STATEMENT ================= */}
          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="max-w-3xl text-sm leading-7 text-gray-400">
              My long-term goal is to bridge practical software engineering
              experience with research in artificial intelligence, developing
              reliable and impactful solutions to real-world problems.
            </p>
          </div>

          <div className="h-12" />
        </div>
      </div>
    </div>
  );
};

export default Experience;