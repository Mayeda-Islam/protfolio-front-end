import React from "react";
import {
  FaBrain,
  FaChartLine,
  FaMicroscope,
  FaEye,
  FaSearch,
  FaArrowRight,
} from "react-icons/fa";

const Research = () => {
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
          <div className="mb-14 max-w-3xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-violet-400">
              Research
            </p>

            <h1 className="mt-3 font-serif text-5xl font-medium leading-tight text-white md:text-6xl">
              Research & AI
            </h1>

            <div className="mt-5 h-px w-14 bg-violet-500/70" />

            <p className="mt-6 text-[15px] leading-7 text-gray-300 md:text-base">
              My research interests lie at the intersection of machine
              learning, deep learning, computer vision, and medical imaging.
              I am particularly interested in developing robust and
              interpretable AI systems that can address challenging
              real-world problems.
            </p>
          </div>

          {/* ================= CURRENT RESEARCH ================= */}
          <section className="mb-16">

            <div className="mb-7 flex items-center gap-3">
              <FaMicroscope className="text-sm text-violet-400" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
                Current Research
              </p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">

              {/* Main Research */}
              <div className="border-t border-white/15 pt-6">

                <p className="text-xs uppercase tracking-[0.18em] text-violet-400">
                  Undergraduate Research Thesis
                </p>

                <h2 className="mt-4 max-w-4xl text-2xl font-medium leading-relaxed text-white md:text-3xl">
                  Transformer-Based TransMamm: A Density-Aware Hybrid Vision
                  Transformer Framework for Robust Lesion Detection in Dense
                  Breast Tissue
                </h2>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400">
                  This research explores deep learning approaches for breast
                  lesion detection in mammographic images, with particular
                  attention to the challenges introduced by dense breast
                  tissue. The work investigates transformer-based and hybrid
                  vision architectures to improve the robustness of automated
                  medical image analysis.
                </p>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-gray-400">
                  The broader objective is to develop an AI-assisted framework
                  that can provide reliable visual representations of
                  suspicious regions while maintaining a research-oriented
                  focus on model performance, generalization, and
                  interpretability.
                </p>

                {/* Research Tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {[
                    "Medical Imaging",
                    "Breast Imaging",
                    "Computer Vision",
                    "Vision Transformer",
                    "Deep Learning",
                    "Lesion Detection",
                    "Explainable AI",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/10 px-3 py-1.5 text-xs text-gray-400 transition-colors duration-300 hover:border-violet-400/40 hover:text-violet-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>

              {/* Research Status */}
              <div className="border-t border-white/15 pt-6 lg:border-l lg:border-t-0 lg:pl-7">

                <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
                  Research Status
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.7)]" />

                  <span className="text-sm text-gray-200">
                    In Progress
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-gray-500">
                  Currently focused on literature review, dataset
                  preparation, model development, experimentation, and
                  evaluation.
                </p>

              </div>
            </div>
          </section>

          {/* ================= RESEARCH AREAS ================= */}
          <section className="mb-16">

            <div className="mb-7">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
                Research Areas
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">

              {/* Machine Learning */}
              <div className="border-t border-white/10 pt-6">

                <div className="flex items-center gap-4">
                  <FaBrain className="text-lg text-violet-400" />

                  <h3 className="text-lg font-medium text-white">
                    Machine Learning & Deep Learning
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  Exploring supervised and deep learning methods for
                  classification, prediction, representation learning, and
                  complex pattern recognition.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "CNN",
                    "Transformers",
                    "Transfer Learning",
                    "Classification",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-xs text-gray-500"
                    >
                      #{item}
                    </span>
                  ))}
                </div>

              </div>

              {/* Computer Vision */}
              <div className="border-t border-white/10 pt-6">

                <div className="flex items-center gap-4">
                  <FaEye className="text-lg text-violet-400" />

                  <h3 className="text-lg font-medium text-white">
                    Computer Vision
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  Interested in image classification, object and lesion
                  detection, image preprocessing, visual representation, and
                  computer vision systems for real-world applications.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Image Processing",
                    "Detection",
                    "Recognition",
                    "Feature Learning",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-xs text-gray-500"
                    >
                      #{item}
                    </span>
                  ))}
                </div>

              </div>

              {/* Medical AI */}
              <div className="border-t border-white/10 pt-6">

                <div className="flex items-center gap-4">
                  <FaMicroscope className="text-lg text-violet-400" />

                  <h3 className="text-lg font-medium text-white">
                    Medical AI & Imaging
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  Investigating AI-based approaches for medical image
                  analysis, with a particular interest in reliable detection
                  and decision support for healthcare applications.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "Medical Imaging",
                    "Mammography",
                    "Disease Detection",
                    "Healthcare AI",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-xs text-gray-500"
                    >
                      #{item}
                    </span>
                  ))}
                </div>

              </div>

              {/* Explainable AI */}
              <div className="border-t border-white/10 pt-6">

                <div className="flex items-center gap-4">
                  <FaSearch className="text-lg text-violet-400" />

                  <h3 className="text-lg font-medium text-white">
                    Explainable AI
                  </h3>
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  Interested in understanding model predictions and making
                  AI-assisted decisions more transparent, interpretable, and
                  trustworthy, particularly in high-impact applications.
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "XAI",
                    "Interpretability",
                    "Model Analysis",
                    "Trustworthy AI",
                  ].map((item) => (
                    <span
                      key={item}
                      className="text-xs text-gray-500"
                    >
                      #{item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* ================= RESEARCH APPROACH ================= */}
          <section className="mb-16">

            <div className="mb-7 flex items-center gap-3">
              <FaChartLine className="text-sm text-violet-400" />

              <p className="text-xs font-medium uppercase tracking-[0.25em] text-gray-400">
                Research Approach
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">

              <div className="border-l border-white/10 pl-5">
                <span className="text-xs text-violet-400">01</span>

                <h3 className="mt-3 text-sm font-medium text-white">
                  Literature Review
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-500">
                  Studying existing methods, limitations, datasets, and
                  research gaps.
                </p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <span className="text-xs text-violet-400">02</span>

                <h3 className="mt-3 text-sm font-medium text-white">
                  Data Preparation
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-500">
                  Preparing, preprocessing, augmenting, and analyzing
                  research datasets.
                </p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <span className="text-xs text-violet-400">03</span>

                <h3 className="mt-3 text-sm font-medium text-white">
                  Model Development
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-500">
                  Designing and experimenting with ML and deep learning
                  architectures.
                </p>
              </div>

              <div className="border-l border-white/10 pl-5">
                <span className="text-xs text-violet-400">04</span>

                <h3 className="mt-3 text-sm font-medium text-white">
                  Evaluation
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-500">
                  Comparing models using appropriate metrics and analyzing
                  strengths and limitations.
                </p>
              </div>

            </div>
          </section>

          {/* ================= FUTURE DIRECTION ================= */}
          <section className="border-t border-white/10 pt-10">

            <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">

              <div className="max-w-3xl">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400">
                  Future Research Direction
                </p>

                <h2 className="mt-4 text-2xl font-medium leading-relaxed text-white md:text-3xl">
                  Building reliable and interpretable AI for real-world
                  visual intelligence.
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  I aim to further explore robust computer vision, medical
                  image analysis, explainable AI, and efficient deep learning
                  systems through graduate-level research and collaborative
                  work.
                </p>
              </div>

              <div className="flex items-center gap-3 text-sm text-violet-300">
                Research Focus
                <FaArrowRight className="text-xs" />
              </div>

            </div>

          </section>

          <div className="h-16" />

        </div>
      </div>
    </div>
  );
};

export default Research;