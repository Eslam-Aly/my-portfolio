import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";
import hero1 from "../assets/img1.png";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

function Hero() {
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
    <section id="home" className="bg-herobg text-white ">
      <div
        className="container flex flex-col md:flex-row items-center mx-auto justify-between py-4 gap-4  
      overflow-hidden"
      >
        {/*left side*/}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="md:w-1/2 order-2 p-4 md:order-1 md:pl-8 md:pt-24"
        >
          <h1 className="text-3xl  font-secondary font-bold leading-snug">
            Eslam Aly
          </h1>
          <h2 className="text-2xl font-light mb-4">Software Engineer</h2>
          <p className="text-sm md:text-base mb-12 ">
            Motivated and results-oriented software engineer with a solid
            academic background and hands-on experience in DevOps, cloud
            infrastructure, and full-stack development. Skilled in designing and
            deploying scalable applications, automating workflows, and
            integrating machine learning models into production environments.
            Proficient in Docker, Kubernetes, CI/CD pipelines, Git, and cloud
            platforms such as AWS.
          </p>
          <button
            onClick={handleScroll}
            className="bg-primary text-white py-3.5 px-8 font-medium transition rounded-md hover:bg-primary/50"
          >
            <a href="#contact" className="flex gap-1 items-center">
              <span>Get in Touch</span>
              <IoArrowForwardCircleSharp />
            </a>
          </button>
        </motion.div>
        {/* right side */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="order-1 md:order-2 md:w-1/2"
        >
          <img
            src={hero1}
            alt="hero image"
            className="h-screen md:h-1/2 object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
