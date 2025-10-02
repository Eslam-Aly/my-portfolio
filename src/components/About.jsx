import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";

function About() {
  return (
    <section id="about" className=" bg-[#f7f8fc] pt-24 md:pt-32">
      <div className="container mx-auto px-8 lg:px-32 ">
        {/**left side */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" items-center "
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-secondary font-bold mb-4 leading-snug">
              Software Engineer | AI & DevOps Enthusiast
            </h2>
            <p className="text-lg">
              I’m a motivated software engineer with a strong foundation in
              software engineering, DevOps, and artificial intelligence. Skilled
              in building scalable systems, automating workflows, and applying
              AI to solve real-world problems, I combine hands-on project
              experience with a passion for continuous learning.
            </p>
          </div>
          <div className="flex flex-col mx-auto justify-between  lg:flex-row  pb-12 ">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 lg:mb-0 lg:mr-8 flex-1">
              <h3 className="text-lg font-bold mb-2 font-secondary">
                Education:
              </h3>
              <ul className="mb-8 space-y-1">
                <li>
                  B.Sc. Software Engineering, University of Europe for Applied
                  Sciences (Germany)
                </li>
                <li>
                  B.Sc. Software Engineering, Kyiv Ploticnic Institute (Ukrain)
                </li>
              </ul>
              <h3 className="text-lg font-bold mb-2 font-secondary">
                Work Experince:
              </h3>
              <ul className="mb-8 space-y-1">
                <li>Requirement Engineer | Cairo | 2020</li>
                <li>IT Help Desk | Kyiv | 2021</li>
              </ul>
            </div>
            <div className="mb-4 lg:mb-0 lg:mr-8 bg-white p-6 rounded-lg shadow-md flex-1">
              <h3 className="text-lg font-bold mb-2 font-secondary">
                Specializations:
              </h3>
              <ul className=" space-y-2">
                <li>🚀 DevOps & Cloud: Docker, Kubernetes, CI/CD, AWS</li>
                <li>
                  🤖 AI & Machine Learning: Computer Vision, Deep Learning,
                  Optimization
                </li>
                <li>💻 Full-Stack Development: React, Flutter, Firebase</li>
                <li>📊 Data & Analytics: Python, SQL, Tableau</li>
              </ul>
            </div>
          </div>
          <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/50 transition cursor-pointer">
            <a
              href="/Eslam_Aly_CV_2025"
              download="Eslam_Aly_CV_2025"
              className="flex gap-1 items-center "
            >
              <span>Download CV</span>
              <IoArrowForwardCircleSharp />
            </a>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
