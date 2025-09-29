import React, { useState } from "react";
import thumbnail from "../assets/video-thumbnail.webp";
import { FaRegCirclePlay } from "react-icons/fa6";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";

function About() {
  const [isVideoPlaying, setVideoPlaying] = useState(false);
  const handleVideoPlaying = () => {
    setVideoPlaying(true);
  };
  const handleCloseVideo = () => {
    setVideoPlaying(false);
  };

  const handleScroll = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <section id="about" className=" bg-[#f7f8fc] pt-18 md:pt-28">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center mx-auto gap-8 py-12 px-4">
          {/**left side */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="relative w-full md:w-1/2 mb-8 md:mb-0"
          >
            {!isVideoPlaying ? (
              <div className="relative">
                <img
                  src={thumbnail}
                  alt="thumbnail image"
                  className="w-full h-auto md:h-[446px] rounded-lg object-cover"
                />
                <button
                  onClick={handleVideoPlaying}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary p-3 rounded-full shadow-lg cursor-pointer"
                >
                  <FaRegCirclePlay className="size-12 text-white" />
                </button>
              </div>
            ) : (
              <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                <div className="relative w-full h-full flex items-center justify-center ">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/_g4QbfEwyNE?si=jAW5fM3PQeR78DF1"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                  <button
                    onClick={handleCloseVideo}
                    className="absolute top-1/10 right-1/10 text-3xl text-white cursor-pointer"
                  >
                    X
                  </button>
                </div>
              </div>
            )}
          </motion.div>
          {/**right side */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl font-secondary font-bold mb-4  leading-snug">
              Individual Consult And Therapy
            </h2>
            <p className="text-lg mb-12 md:pr-8">
              We lower our stress levels, we get to know our pain, we connect
              better, we improve our focus, and we're kinder to ourselves. Let
              us walk you through the basics in our new mindful guide on how to
              meditate.
            </p>
            <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/50 transition cursor-pointer">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleScroll("contact");
                }}
                className="flex gap-1 items-center"
              >
                <span>Get Started</span>
                <IoArrowForwardCircleSharp />
              </a>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
