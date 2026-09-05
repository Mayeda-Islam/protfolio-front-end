import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { FaGithub, FaLinkedin, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = async () => {
    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_qc8bgxp",
        "template_8csnen5",
        form.current,
        "0VgFfJkeFLFxThSn3"
      );

      setStatus("success");
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in"
      className="relative min-h-screen w-full"
    >
      <div className="relative z-10 min-h-screen w-full px-8 py-16 lg:px-16 xl:px-24">
        <div className="mx-auto max-w-6xl">

          {/* ================= HEADER ================= */}
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-violet-400">
              Get In Touch
            </p>

            <h1 className="font-serif text-5xl font-medium leading-tight text-white md:text-6xl">
              Let's talk research,
              <br className="hidden md:block" />
              collaboration, or code.
            </h1>

            <p className="mt-6 text-[15px] leading-7 text-gray-300">
              I'm based in Dhaka, Bangladesh, working at the intersection of
              deep learning and medical imaging. Reach out below, or use
              whichever channel suits you.
            </p>
          </div>

          {/* ================= MAIN CONTENT ================= */}
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-16">

            {/* ================= LEFT SIDE ================= */}
            <div className="lg:col-span-2">
              <dl className="max-w-sm divide-y divide-white/10 border-y border-white/10">

                {/* EMAIL */}
                <div className="flex items-start justify-between gap-6 py-5">
                  <dt className="flex items-center gap-3 text-sm text-gray-400">
                    <AiOutlineMail className="text-base text-violet-400" />
                    Email
                  </dt>

                  <dd className="text-right">
                    <a
                      href="mailto:mayedakonika@gmail.com"
                      className="text-sm text-gray-200 transition-colors duration-300 hover:text-violet-400"
                    >
                      mayedakonika@gmail.com
                    </a>
                  </dd>
                </div>

                {/* PHONE */}
                <div className="flex items-start justify-between gap-6 py-5">
                  <dt className="flex items-center gap-3 text-sm text-gray-400">
                    <BsPhone className="text-base text-violet-400" />
                    Phone
                  </dt>

                  <dd className="text-right">
                    <a
                      href="tel:+8801782955580"
                      className="text-sm text-gray-200 transition-colors duration-300 hover:text-violet-400"
                    >
                      +880 1782-955580
                    </a>
                  </dd>
                </div>

                {/* GITHUB */}
                <div className="flex items-start justify-between gap-6 py-5">
                  <dt className="flex items-center gap-3 text-sm text-gray-400">
                    <FaGithub className="text-base text-violet-400" />
                    GitHub
                  </dt>

                  <dd className="text-right">
                    <a
                      href="https://github.com/Mayeda-Islam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-200 transition-colors duration-300 hover:text-violet-400"
                    >
                      Mayeda-Islam
                    </a>
                  </dd>
                </div>

                {/* LINKEDIN */}
                <div className="flex items-start justify-between gap-6 py-5">
                  <dt className="flex items-center gap-3 text-sm text-gray-400">
                    <FaLinkedin className="text-base text-violet-400" />
                    LinkedIn
                  </dt>

                  <dd className="text-right">
                    <a
                      href="https://www.linkedin.com/in/mayeda-islam/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-200 transition-colors duration-300 hover:text-violet-400"
                    >
                      mayeda-islam
                    </a>
                  </dd>
                </div>

              </dl>

              {/* QUOTE */}
              <p className="mt-8 max-w-sm font-serif text-lg italic leading-8 text-gray-300">
                "Open to conversations on machine learning, computer vision,
                and medical AI — especially anything touching breast cancer
                detection."
              </p>
            </div>

            {/* ================= RIGHT SIDE / FORM ================= */}
            <div className="lg:col-span-3">

              <div className="rounded-2xl border border-white/10 bg-black/20 p-8 backdrop-blur-[2px] md:p-10">

                <div className="mb-8">
                  <h2 className="text-xl font-medium text-white">
                    Send a message
                  </h2>

                  <p className="mt-2 text-sm text-gray-400">
                    Fill in the details below and I will get back to you.
                  </p>
                </div>

                <form
                  ref={form}
                  onSubmit={handleSubmit(sendEmail)}
                  id="contact"
                  className="space-y-6"
                >

                  {/* NAME + EMAIL */}
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                    {/* NAME */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-xs text-gray-400"
                      >
                        Your name
                      </label>

                      <input
                        {...register("user_name", {
                          required: "Please enter your name.",
                        })}
                        id="name"
                        name="user_name"
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full border-b border-white/20 bg-transparent px-0 py-2.5 text-sm text-white outline-none placeholder:text-gray-400 transition-colors duration-300 focus:border-violet-400"
                      />

                      {errors.user_name && (
                        <p className="mt-1.5 text-xs text-rose-400">
                          {errors.user_name.message}
                        </p>
                      )}
                    </div>

                    {/* EMAIL */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-xs text-gray-400"
                      >
                        Email address
                      </label>

                      <input
                        {...register("user_email", {
                          required: "Please enter your email.",
                          pattern: {
                            value: /^\S+@\S+\.\S+$/,
                            message: "Please enter a valid email address.",
                          },
                        })}
                        id="email"
                        name="user_email"
                        type="email"
                        placeholder="jane@email.com"
                        className="w-full border-b border-white/20 bg-transparent px-0 py-2.5 text-sm text-white outline-none placeholder:text-gray-400 transition-colors duration-300 focus:border-violet-400"
                      />

                      {errors.user_email && (
                        <p className="mt-1.5 text-xs text-rose-400">
                          {errors.user_email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* SUBJECT */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-xs text-gray-400"
                    >
                      Subject
                    </label>

                    <input
                      {...register("subject", {
                        required: "Please enter a subject.",
                      })}
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Research, collaboration, project..."
                      className="w-full border-b border-white/20 bg-transparent px-0 py-2.5 text-sm text-white outline-none placeholder:text-gray-400 transition-colors duration-300 focus:border-violet-400"
                    />

                    {errors.subject && (
                      <p className="mt-1.5 text-xs text-rose-400">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-xs text-gray-400"
                    >
                      Message
                    </label>

                    <textarea
                      {...register("message", {
                        required: "Please enter your message.",
                        minLength: {
                          value: 10,
                          message:
                            "Message should be at least 10 characters.",
                        },
                      })}
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Write your message..."
                      className="w-full resize-none border-b border-white/20 bg-transparent px-0 py-2.5 text-sm leading-7 text-white outline-none placeholder:text-gray-400 transition-colors duration-300 focus:border-violet-400"
                    />

                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  {/* SUCCESS MESSAGE */}
                  {status === "success" && (
                    <div className="border-l-2 border-emerald-400/60 bg-emerald-400/5 px-4 py-3 text-sm text-emerald-300">
                      Your message has been sent successfully. Thank you
                      for reaching out!
                    </div>
                  )}

                  {/* ERROR MESSAGE */}
                  {status === "error" && (
                    <div className="border-l-2 border-rose-400/60 bg-rose-400/5 px-4 py-3 text-sm text-rose-300">
                      Something went wrong while sending your message.
                      Please try again.
                    </div>
                  )}

                  {/* BUTTON */}
                  <div className="flex justify-end pt-2">
                    <button
                      type="submit"
                      disabled={sending}
                      className="group flex items-center gap-3 rounded-full border border-violet-500/50 bg-violet-600/90 px-7 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-violet-400 hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {sending ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send message
                          <FaPaperPlane className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              </div>
            </div>
          </div>

          <div className="h-16" />
        </div>
      </div>
    </div>
  );
};

export default Contact;