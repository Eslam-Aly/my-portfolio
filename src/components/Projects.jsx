import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ffdDemoWebm from "../assets/FFDDemo.webm";
import ffdDemoMp4 from "../assets/FFDemo.mp4";
import stoxDemoWebm from "../assets/StoxDemo.webm";
import stoxDemoMp4 from "../assets/StoXDemo.mp4";
import NQueenWebM from "../assets/N-QueenDemo1.webm";
import NQueenMp4 from "../assets/N-QueenDemo2.mp4";
import rubiksCube1 from "../assets/rubiksCube.webm";
import rubiksCube2 from "../assets/rubiksCube2.mp4";
import AqardotDemoMp4 from "../assets/AqardotDemoMp4.mp4";
import AqardotDemoWebm from "../assets/AqardotDemoWebm.webm";

function Projects() {
  const MotionTabList = motion(TabList);
  return (
    <section id="projects" className="  bg-[#f7f8fc]  ">
      <div className="container pt-18 md:pt-30 px-4 mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center space-y-"
        >
          <h1 className="text-4xl font-bold font-secondary text-herobg ">
            Featured Projects
          </h1>
          <p className="md:w-1/2 mx-auto">
            A collection of projects showcasing my skills in software
            engineering, AI, and problem-solving.
          </p>
        </motion.div>

        <div className=" py-12 mx-auto">
          <Tabs>
            <MotionTabList
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="flex flex-row flex-nowrap overflow-x-auto justify-between items-center lg:gap-12 lg:text-lg font-medium gap-1 cursor-pointer"
            >
              <Tab className="shrink-0 h-10 px-4 inline-flex items-center justify-center rounded-md bg-white text-sm md:text-base whitespace-nowrap">
                AqarDot
              </Tab>
              <Tab className="shrink-0 h-10 px-4 inline-flex items-center justify-center rounded-md bg-white text-sm md:text-base whitespace-nowrap">
                {" "}
                StoX
              </Tab>
              <Tab className="shrink-0 h-10 px-4 inline-flex items-center justify-center rounded-md bg-white text-sm md:text-base whitespace-nowrap">
                Fake Face Detection
              </Tab>
              <Tab className="shrink-0 h-10 px-4 inline-flex items-center justify-center rounded-md bg-white text-sm md:text-base whitespace-nowrap">
                N Queens Solver
              </Tab>
              <Tab className="shrink-0 h-10 px-4 inline-flex items-center justify-center rounded-md bg-white text-sm md:text-base whitespace-nowrap">
                Rubik’s Cube Solver
              </Tab>
            </MotionTabList>

            <TabPanel>
              <div className="flex flex-col xl:flex-row gap-8 mt-8 items-stretch">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="xl:w-1/2 bg-white rounded-lg p-12 font-secondary flex flex-col"
                >
                  <h3 className="text-3xl font-semibold text-primary ">
                    AqarDot
                  </h3>
                  <p className="mb-4">
                    AqarDot is a full-stack real estate platform that allows
                    users to browse, search, filter, and list properties for
                    rent or sale across Egypt.
                  </p>
                  <h4 className="text-xl font-medium">Description:</h4>
                  <p className="mb-8">
                    AqarDot is designed to make property discovery simple and
                    efficient. Users can search by governorate, city, area,
                    price, property type, and more—supported by a dynamic,
                    hierarchical location structure tailored for Egypt.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li>
                      Full-stack architecture using React, Node.js, MongoDB, and
                      Firebase
                    </li>
                    <li>
                      Dynamic location system with governorates → cities → areas
                    </li>
                    <li>
                      Advanced search with filters (price, property size, type,
                      amenities, etc.)
                    </li>
                    <li>
                      User authentication with Firebase (signup, login,
                      protected routes)
                    </li>
                  </ul>
                  <p>
                    <span className="text-xl font-medium">Tech Stack: </span>
                    React, Node.js, Express.js, MongoDB, Firebase.
                  </p>
                  <div className="flex flex-row gap-1 mt-4 items-center ">
                    <p className="text-xl font-medium">Links:</p>
                    <a
                      href="https://github.com/Eslam-Aly/aqardot-client.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Client Repo |
                    </a>
                    <a
                      href="https://github.com/Eslam-Aly/aqardot-api.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      API Repo |
                    </a>
                    <a
                      href="https://www.aqardot.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="xl:w-1/2 flex object-cover bg-black rounded-lg"
                >
                  <video
                    className="w-full h-auto rounded-2xl "
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={AqardotDemoWebm} type="video/webm" />
                    <source src={AqardotDemoMp4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="flex flex-col lg:flex-row gap-8 mt-8 items-stretch">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="lg:w-1/2 bg-white rounded-lg p-12 font-secondary"
                >
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    StoX
                  </h3>
                  <p className="mb-4">
                    A cross-platform stock market and portfolio tracking app.
                  </p>
                  <h4 className="text-xl font-medium">Description:</h4>
                  <p className="mb-8">
                    StoX is a Flutter-based app designed to make stock and
                    crypto tracking simple for both beginners and advanced
                    users. It integrates multiple APIs and offers real-time
                    financial data visualization.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li>
                      Real-time prices for stocks, ETFs, and cryptocurrencies.
                    </li>
                    <li>
                      Personalized portfolio tracking with gain/loss analysis.
                    </li>
                    <li>Multi-country currency conversion support.</li>
                    <li>
                      Responsive mobile & web design with Firebase backend.
                    </li>
                  </ul>
                  <p>
                    <span className="text-xl font-medium">Tech Stack: </span>
                    Flutter, Dart, Firebase, React, Tailwind CSS, REST APIs.
                  </p>
                  <div className="flex gap-1 mt-4 items-center">
                    <p className="text-xl font-medium">Links:</p>
                    <a
                      href="https://github.com/Eslam-Aly/StoX.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="lg:w-1/2 flex object-cover bg-black rounded-lg"
                >
                  <video
                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={stoxDemoWebm} type="video/webm" />
                    <source src={stoxDemoMp4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col xl:flex-row gap-8 mt-8 items-stretch">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="xl:w-1/2 bg-white rounded-lg p-12 font-secondary flex flex-col"
                >
                  <h3 className="text-3xl font-semibold text-primary ">
                    Fake face Detection
                  </h3>
                  <p className="mb-4">
                    Detecting deepfakes using Xception with transfer learning.
                  </p>
                  <h4 className="text-xl font-medium">Description:</h4>
                  <p className="mb-8">
                    With the rise of deepfakes, detecting AI-generated faces is
                    critical to maintaining trust online. This project applies
                    computer vision and deep learning to distinguish real from
                    fake faces.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li>
                      Implemented Xception CNN with transfer learning for
                      classification.
                    </li>
                    <li>
                      Preprocessed and trained on a large-scale real vs. fake
                      image dataset.
                    </li>
                    <li>
                      Achieved 92% validation accuracy, outperforming baseline
                      models.
                    </li>
                    <li>
                      Built a Streamlit web app for user-friendly face
                      classification.
                    </li>
                  </ul>
                  <p>
                    <span className="text-xl font-medium">Tech Stack: </span>
                    Python, TensorFlow, Keras, Streamlit, Google Colab.
                  </p>
                  <div className="flex flex-row gap-1 mt-4 items-center ">
                    <p className="text-xl font-medium">Links:</p>
                    <a
                      href="https://github.com/Eslam-Aly/fake-face-detection.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub |
                    </a>
                    <a
                      href="https://huggingface.co/spaces/eslamaly/fake-face-detector"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="xl:w-1/2 flex object-cover bg-black rounded-lg"
                >
                  <video
                    className="w-full h-auto rounded-2xl "
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={ffdDemoWebm} type="video/webm" />
                    <source src={ffdDemoMp4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col lg:flex-row gap-8 mt-8">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="lg:w-1/2 bg-white rounded-lg p-12 font-secondary items-stretch"
                >
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    N Queen Solver
                  </h3>
                  <p className="mb-4">
                    Comparing search and optimization algorithms for N-Queens.
                  </p>
                  <h4 className="text-xl font-medium">Description:</h4>
                  <p className="mb-8">
                    The N-Queens problem is a classic AI puzzle: placing N
                    queens on a chessboard without conflict. This project
                    benchmarks multiple algorithms to explore efficiency and
                    scalability.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li>
                      Implemented Depth-First Search (DFS), Hill Climbing,
                      Simulated Annealing, and Genetic Algorithms.
                    </li>
                    <li>
                      Designed a benchmarking framework with 100 randomized runs
                      per algorithm.
                    </li>
                    <li>
                      Compared time, memory, and success rates across N = 10,
                      30, 50, 100, 200.
                    </li>
                    <li>Produced an academic-style paper analyzing results.</li>
                  </ul>
                  <p>
                    <span className="text-xl font-medium">Tech Stack: </span>
                    Python, NumPy, Matplotlib, Overleaf (LaTeX).
                  </p>
                  <div className="flex gap-1 mt-4 items-center">
                    <p className="text-xl font-medium">Links:</p>
                    <a
                      href="https://github.com/Eslam-Aly/N-Queen-Solver.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="lg:w-1/2 flex object-cover bg-black rounded-lg"
                >
                  <video
                    className="w-full h-auto rounded-2xl "
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={NQueenWebM} type="video/webm" />
                    <source src={NQueenMp4} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col lg:flex-row gap-8 mt-8 items-stretch">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="lg:w-1/2 bg-white rounded-lg p-12 font-secondary"
                >
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Rubik's Cube Solver
                  </h3>
                  <p className="mb-4">
                    Comparing classical search algorithms for solving the
                    Rubik’s Cube.
                  </p>
                  <h4 className="text-xl font-medium">Description:</h4>
                  <p className="mb-8">
                    This project tackles the Rubik’s Cube, one of the most
                    iconic puzzles, by implementing classical and
                    heuristic-based search strategies.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Features:
                  </h4>
                  <ul className="list-disc list-inside space-y-3 mb-4">
                    <li>
                      Implemented DFS, BFS, A* Search, and Heuristic Search.
                    </li>
                    <li>
                      Developed a cube state generator with reproducible
                      configurations.
                    </li>
                    <li>
                      Benchmarked algorithms by moves taken, time, and memory
                      usage.
                    </li>
                    <li>
                      Authored a research-style paper comparing solver
                      strategies.
                    </li>
                  </ul>
                  <p>
                    <span className="text-xl font-medium">Tech Stack: </span>
                    Python, NumPy, Matplotlib, Overleaf (LaTeX).
                  </p>
                  <div className="flex gap-1 mt-4 items-center">
                    <p className="text-xl font-medium">Links:</p>
                    <a
                      href="https://github.com/Eslam-Aly/rubik-cube-solver.git"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.4 }}
                  className="lg:w-1/2 flex object-cover bg-black rounded-lg"
                >
                  <video
                    className="w-full h-auto rounded-2xl "
                    autoPlay
                    muted
                    loop
                    playsInline
                  >
                    <source src={rubiksCube1} type="video/webm" />
                    <source src={rubiksCube2} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Projects;
