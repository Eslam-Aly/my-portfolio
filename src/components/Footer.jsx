import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
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
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8"
      >
        <div className="space-y-6 ">
          <div className="flex items-center space-x-2">
            <h3 className="text-xl font-semibold">Eslam Aly</h3>
          </div>
          <p className="text-paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis,
            saepe.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="bg-gray-200 text-primary rounded-full size-10 flex items-center justify-center hover:bg-primary hover:text-white"
            >
              <FaLinkedin />
            </a>
          </div>
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
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:underline text-gray-700 ">
                FAQs
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-gray-700 ">
                Terms of Services
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline text-gray-700 ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-gray-700 ">
                Suppor Center
              </a>
            </li>
          </ul>
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
