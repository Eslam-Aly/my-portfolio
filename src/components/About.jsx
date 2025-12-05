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
              Full-Stack Engineer | AI & DevOps Enthusiast
            </h2>
            <p className="text-lg">
              Motivated full-stack engineer experienced in building scalable web
              and cloud applications. Alongside development, I bring strengths
              in DevOps (Docker, Kubernetes, CI/CD, AWS) and AI/ML (computer
              vision, model deployment) to deliver complete solutions.
            </p>
          </div>
          <div className="flex flex-col mx-auto justify-between  lg:flex-row  pb-12 ">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 lg:mb-0 lg:mr-8 flex-1">
              <h3 className="text-lg font-bold mb-2 font-secondary">
                Education:
              </h3>
              <ul className="mb-8 space-y-1">
                <li>
                  <span className="font-medium text-black">
                    B.Sc. Software Engineering
                  </span>{" "}
                  – University of Europe for Applied Sciences (Germany)
                </li>
                <li>
                  <span className="font-medium text-black">
                    B.Sc. Software Engineering
                  </span>{" "}
                  – Kyiv Polytechnic Institute (Ukraine) – 3 semesters
                </li>
              </ul>
              <h3 className="text-lg font-bold mb-2 font-secondary">
                Work Experience:
              </h3>
              <ul className="mb-8 space-y-1">
                <li>
                  <span className="font-medium text-black">IT Help Desk</span> –
                  Kyiv, Feb 2021 – Feb 2022
                </li>
                <li>
                  <span className="font-medium text-black">
                    Requirements Engineer
                  </span>{" "}
                  – Cairo, Feb 2020 – Dec 2020
                </li>
              </ul>
            </div>
            <div className="mb-4 lg:mb-0 lg:mr-8 bg-white p-6 rounded-lg shadow-md flex-1">
              <h3 className="text-lg font-bold mb-2 font-secondary">
                Specializations:
              </h3>
              <ul className=" space-y-2">
                <li>
                  <span className="font-medium text-black">
                    Full-Stack Development:
                  </span>{" "}
                  React, TypeScript, JavaScript, HTML5, CSS/SCSS, Node.js,
                  Firebase, REST APIs, Tailwind CSS, MongoDB, PostgreSQL
                </li>
                <li>
                  <span className="font-medium text-black">
                    Programming Languages:
                  </span>{" "}
                  JavaScript, TypeScript, Dart, Python, SQL
                </li>
                <li>
                  <span className="font-medium text-black">
                    DevOps & Cloud:
                  </span>{" "}
                  Git, Docker, Kubernetes, GitHub Actions, CI/CD, Linux
                  (Ubuntu), Linux Shell (Bash), AWS
                </li>

                <li>
                  <span className="font-medium text-black">
                    Security & Code Quality:
                  </span>{" "}
                  Snyk, OWASP ZAP, SonarQube, TDD, BDD
                </li>
                <li>
                  <span className="font-medium text-black">
                    Collaboration & Tools:
                  </span>{" "}
                  Git, Jira, Confluence, Figma, Overleaf, VS Code, Microsoft 365
                </li>
              </ul>
            </div>
          </div>
          <button className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/50 transition cursor-pointer">
            <a
              href="/Eslam_Aly_CV_2025.pdf"
              download="Eslam_Aly_CV_2025.pdf"
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
