import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

const About = () => {
  return (
    <div className="min-h-screen w-full px-8 py-12 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-6xl">
        {/* ================= HEADER ================= */}
        <div className="mb-10">
          <h1 className="inline-block border-b-2 pb-3 text-4xl font-bold uppercase text-white md:text-5xl">
            About Me
          </h1>
        </div>

        {/* ================= INTRODUCTION ================= */}
        <section className="mb-10">
          <p className="text-lg leading-8 text-gray-200 md:text-xl">
            Hello! I’m{" "}
            <span className="font-semibold text-violet-400">
              Mayeda Islam
            </span>
            , a Computer Science researcher with a background in software
            development and a growing focus on{" "}
            <span className="font-semibold text-white">
              Machine Learning, Deep Learning, Computer Vision, and Artificial
              Intelligence.
            </span>
          </p>

          <p className="mt-5 text-base leading-8 text-gray-300 md:text-lg">
            My journey began with software development during my university
            years, where I gained hands-on experience building practical,
            user-focused applications. I have professional experience as a
            Frontend Developer, working with technologies such as{" "}
            <span className="font-medium text-white">
              JavaScript, React.js, Next.js, Node.js, REST APIs, and modern UI
              frameworks.
            </span>
          </p>
        </section>

        {/* ================= RESEARCH ================= */}
        <section className="mb-10">
          <h2 className="mb-4 inline-block border-b-2 pb-2 text-sm font-bold uppercase tracking-widest text-violet-400">
            Research Focus
          </h2>

          <p className="text-base leading-8 text-gray-300 md:text-lg">
            My undergraduate thesis introduced me to research and developed my
            interest in intelligent systems and medical image analysis. I am
            currently working on research involving{" "}
            <span className="font-medium text-white">
              CNNs, Vision Transformers, Self-Supervised Learning, and
              Explainable AI
            </span>{" "}
            for medical imaging.
          </p>
        </section>

        {/* ================= CURRENT RESEARCH ================= */}
        <section className="mb-10">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-violet-400">
              Current Research
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-8 text-white md:text-3xl">
              Transformer-Based TransMamm
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 backdrop-blur-md md:p-8">
            <p className="text-lg font-semibold leading-8 text-gray-100">
              A Density-Aware Hybrid Vision Transformer Framework for Robust
              Lesion Detection in Dense Breast Tissue
            </p>

            <p className="mt-4 leading-7 text-gray-300">
              This research explores transformer-based deep learning
              approaches for robust lesion detection in dense breast tissue,
              with a focus on combining computer vision, medical imaging, and
              explainable AI techniques.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "Vision Transformers",
                "CNNs",
                "Self-Supervised Learning",
                "Explainable AI",
                "Medical Imaging",
                "Lesion Detection",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-violet-400/20 bg-violet-400/10 px-3 py-1.5 text-sm text-gray-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ================= RESEARCH INTERESTS ================= */}
        <section className="mb-10">
          <h2 className="mb-5 inline-block border-b-2 pb-2 text-sm font-bold uppercase tracking-widest text-violet-400">
            Research Interests
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              "Machine Learning",
              "Deep Learning",
              "Computer Vision",
              "Medical Imaging",
              "Vision Transformers",
              "Explainable AI",
              "Self-Supervised Learning",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* ================= EDUCATION ================= */}
        <section className="mb-10">
          <h2 className="mb-4 inline-block border-b-2 pb-2 text-sm font-bold uppercase tracking-widest text-violet-400">
            Education
          </h2>

          <div>
            <h3 className="text-lg font-semibold text-white md:text-xl">
              B.Sc. in Computer Science and Engineering
            </h3>

            <p className="mt-2 text-gray-300">
              Central University of Science and Technology
            </p>
          </div>
        </section>

        {/* ================= TECHNICAL SKILLS ================= */}
        <section className="mb-10">
          <h2 className="mb-5 inline-block border-b-2 pb-2 text-sm font-bold uppercase tracking-widest text-violet-400">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
              <h3 className="mb-3 font-semibold text-white">
                Research & AI
              </h3>

              <p className="leading-7 text-gray-300">
                Python • PyTorch • TensorFlow/Keras • OpenCV • Kaggle • Machine
                Learning • Deep Learning • Computer Vision
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-sm">
              <h3 className="mb-3 font-semibold text-white">
                Software Development
              </h3>

              <p className="leading-7 text-gray-300">
                JavaScript • React.js • Next.js • Node.js • REST APIs • MongoDB
                • Git • GitHub
              </p>
            </div>
          </div>
        </section>

        {/* ================= SOCIAL ================= */}
        <section className="mb-10">
          <h2 className="mb-4 inline-block border-b-2 pb-2 text-sm font-bold uppercase tracking-widest text-violet-400">
            Find Me On
          </h2>

          <div className="mt-3 flex gap-4">
            <a
              href="https://github.com/Mayeda-Islam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-all duration-300 hover:scale-110 hover:bg-violet-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/mayeda-islam/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-xl text-white transition-all duration-300 hover:scale-110 hover:bg-violet-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section className="pb-16">
          <h2 className="mb-4 inline-block border-b-2 pb-2 text-sm font-bold uppercase tracking-widest text-violet-400">
            Contact Me
          </h2>

          <div className="space-y-3 text-gray-300">
            <div className="flex items-center gap-3">
              <AiOutlineMail className="text-xl text-violet-400" />
              <span>mayedakonika@gmail.com</span>
            </div>

            <div className="flex items-center gap-3">
              <BsPhone className="text-lg text-violet-400" />
              <span>+8801782955580</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;