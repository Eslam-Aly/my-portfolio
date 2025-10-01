import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";
import hero1 from "../assets/img1.png";
import { IoArrowForwardCircleSharp } from "react-icons/io5";

function Hero() {
  return (
    <section id="home" className="bg-herobg md:h-screen md:pt-20 text-white ">
      <div className="container flex flex-col md:flex-row items-center justify-between p-4 mx-auto overflow-y-hidden md:gap-8 h-full">
        {/*left side*/}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-secondary font-bold  md: leading-snug">
            Eslam Aly
          </h1>
          <h2 className="text-2xl font-light mb-4">Software Engineer</h2>
          <p className="md:text-xl mb-12 md:pr-8">
            Motivated and results-oriented software engineer with a solid
            academic background and hands-on experience in DevOps, cloud
            infrastructure, and full-stack development. Skilled in designing and
            deploying scalable applications, automating workflows, and
            integrating machine learning models into production environments.
            Proficient in Docker, Kubernetes, CI/CD pipelines, Git, and cloud
            platforms such as AWS.
          </p>
          <button className="bg-primary text-white py-3.5 px-8 font-medium transition rounded-md hover:bg-primary/50">
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
          viewport={{ once: false, amount: 0.7 }}
          className="md:w-1/2 order-1 md:order-2"
        >
          <img src={hero1} alt="hero image" className="w-full object-cover" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
