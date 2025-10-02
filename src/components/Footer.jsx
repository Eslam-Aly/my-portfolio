import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";
import {
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGlobe,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-12 bg-gray-100 px-8">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="container mx-auto grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-12"
      >
        <div className="space-y-2 w-3/4">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-semibold">Eslam Aly</h3>
          </div>
          <p className="text-paragraph">
            Motivated and results-oriented software engineer with a solid
            academic background and hands-on experience in DevOps, cloud
            infrastructure, and full-stack development.
          </p>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:underline text-gray-700 ">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-gray-700 ">
                About Me
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline text-gray-700 ">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-700 ">
                Contact Me
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Social</h3>
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/eslam-aly-88b66ab8/"
                className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
              >
                <FaLinkedin />
              </a>
              LinkedIn
            </div>
            <div className="flex flex-row gap-4 items-center">
              <a
                href="https://github.com/Eslam-Aly"
                className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
              >
                <FaGithub />
              </a>
              GitHub
            </div>
            <div className="flex flex-row gap-4 items-center">
              <a
                href="https://www.eslamaly.com"
                className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
              >
                <FaGlobe />
              </a>
              prtoflio
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="  text-primary   size-6 flex items-center justify-center " />
              <p>Berlin, Germany</p>
            </li>
            <li className="flex items-center gap-2 ">
              <FaPhoneAlt className="  text-primary   size-6 flex items-center justify-center " />
              <p>+49 162 33200059</p>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="  text-primary   size-6 flex items-center justify-center  " />
              <p>contact@eslamaly.com</p>
            </li>
          </ul>
        </div>
      </motion.div>
    </footer>
  );
}

export default Footer;
