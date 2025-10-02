import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScroll = () => {
    const sections = ["home", "projects", "about", "publications", "contact"];
    const scrollPosition = window.scrollY + 100;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const height = element.offsetHeight;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + height
        ) {
          setActiveSection(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const navItems = (
    <ul className="flex flex-col lg:flex-row lg:space-x-8 sm:space-x-4 p-4 md:p-0">
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("home");
            handleCloseMenu();
            handleScrollTo("home");
          }}
          href="#home"
          className={`text-white text-xl md:text-xl ${
            activeSection === "home" ? "isActive" : ""
          }`}
        >
          Home
        </motion.a>
      </li>

      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("about");
            handleCloseMenu();
            handleScrollTo("about");
          }}
          href="#about"
          className={`text-white text-xl md:text-xl ${
            activeSection === "about" ? "isActive" : ""
          }`}
        >
          About Me
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("projects");
            handleCloseMenu();
            handleScrollTo("projects");
          }}
          href="#projects"
          className={`text-white text-xl md:text-xl  ${
            activeSection === "projects" ? "isActive" : ""
          }`}
        >
          Projects
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("publications");
            handleCloseMenu();
            handleScrollTo("publications");
          }}
          href="#publications"
          className={`text-white text-xl md:text-xl ${
            activeSection === "publications" ? "isActive" : ""
          }`}
        >
          Publications
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("contact");
            handleCloseMenu();
            handleScrollTo("contact");
          }}
          href="#contact"
          className={`text-white text-lg md:text-xl ${
            activeSection === "contact" ? "isActive" : ""
          }`}
        >
          Contact Me
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-herobg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10 h-16 md:h-24  ">
      <div className="container mx-auto flex justify-between items-center h-full ">
        {/* Logo Section */}
        <div>
          <a href="/" className="font-bold text-2xl">
            {/* logo */}
            Eslam Aly
          </a>
        </div>
        {/* Navigation Items */}
        <div className="hidden lg:flex flex-grow justify-center items-center">
          <nav>{navItems}</nav>
        </div>
        {/* Menu Button */}
        <div className="hidden lg:block">
          <a
            href="/Eslam_Aly_CV_2025.pdf"
            download="Eslam_Aly_CV_2025.pdf"
            className="text-white bg-primary hover:bg-primary/50 transition px-6 py-2 rounded-md text-lg"
          >
            Download CV
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="block lg:hidden ">
          <button
            className={`text-white focus:outline-none hover:cursor-pointer  ${
              isMenuOpen ? "open" : ""
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HiOutlineMenuAlt3 className="size-10" />
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="absolute w-full left-0 top-full">
        {isMenuOpen && (
          <nav className=" lg:hidden flex flex-col text items-center text-center space-y-2 p-4 bg-herobg pt-8">
            <hr className="border-t border-white w-full m-2" />
            {navItems}
            <a
              href="/Eslam_Aly_CV_2025.pdf"
              download="Eslam_Aly_CV_2025.pdf"
              className="text-white bg-primary hover:primary/50 px-4 py-2 rounded "
              onClick={handleCloseMenu}
            >
              Download CV
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
