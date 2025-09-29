import logo from "../../public/logo.svg";
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
    const sections = ["home", "services", "about", "pricing", "testimonials"];
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
    <ul className="flex flex-col md:flex-row lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-4 md:p-0">
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
          className={`text-white text-xl md:text-2xl ${
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
            setActiveSection("services");
            handleCloseMenu();
            handleScrollTo("services");
          }}
          href="#services"
          className={`text-white text-xl md:text-2xl  ${
            activeSection === "services" ? "isActive" : ""
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
            setActiveSection("about");
            handleCloseMenu();
            handleScrollTo("about");
          }}
          href="#about"
          className={`text-white text-xl md:text-2xl ${
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
            setActiveSection("pricing");
            handleCloseMenu();
            handleScrollTo("pricing");
          }}
          href="#pricing"
          className={`text-white text-xl md:text-2xl ${
            activeSection === "pricing" ? "isActive" : ""
          }`}
        >
          Pricing
        </motion.a>
      </li>
      <li>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.preventDefault();
            setActiveSection("testimonials");
            handleCloseMenu();
            handleScrollTo("testimonials");
          }}
          href="#testimonials"
          className={`text-white text-xl md:text-2xl ${
            activeSection === "testimonials" ? "isActive" : ""
          }`}
        >
          Testimonials
        </motion.a>
      </li>
    </ul>
  );

  return (
    <header className="bg-herobg text-white py-6 px-4 fixed top-0 left-0 right-0 z-10 h-16 md:h-28 ">
      <div className="container mx-auto flex justify-between items-center h-full ">
        {/* Logo Section */}
        <div>
          <a href="/" className="font-bold text-3xl">
            {/**<img src={logo} alt="logo" /> */}
            Eslam Aly
          </a>
        </div>
        {/* Navigation Items */}
        <div className="hidden md:flex flex-grow justify-center">
          <nav>{navItems}</nav>
        </div>
        {/* Menu Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo("contact");
            }}
            className="text-white bg-primary hover:bg-primary/50 transition px-6 py-3 rounded-md text-2xl"
          >
            Contact Me
          </a>
        </div>
        {/* Mobile Menu Button */}
        <div className="block md:hidden ">
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
          <nav className=" md:hidden flex flex-col text items-center text-center space-y-2 p-4 bg-herobg pt-8">
            <hr className="border-t border-white w-full m-2" />
            {navItems}
            <a
              href="#contact"
              className="text-white bg-primary hover:primary/50 px-4 py-2 rounded "
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("contact");
                handleCloseMenu();
              }}
            >
              Contact Me
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
