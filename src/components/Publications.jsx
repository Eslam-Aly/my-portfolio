import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants.js";
import { useState } from "react";

function Publications() {
  const [showModal, setShowModal] = useState(false);

  const showMessage = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section
      id="publications"
      className=" text-black bg-[#f7f8fc] pt-18 md:pt-40"
    >
      <div className="container mx-auto px-8 mb-20">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-secondary mb-3 ">
            Research & Publications
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto">
            This section highlights my published and ongoing research projects,
            showcasing my work in AI, machine learning, and algorithmic
            strategies.
          </p>
        </motion.div>
        <div className="flex flex-col gap-12 xl:flex-row mx-auto  ">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="bg-white rounded-lg p-12 flex-1 shadow-lg ">
              <h3 className="text-xl font-semibold mb-4">
                Toward Reliable Deepfake Detection: A CNN-Based Study on
                Synthetic Faces
              </h3>
              <hr className="w-24 border text-primary border-primary" />

              <p className=" my-4 ">
                This paper explores the use of convolutional neural networks,
                particularly the Xception model, to distinguish between real and
                AI-generated faces.
              </p>
              <ul className="list-disc list-inside space-y-3 my-6">
                <li>
                  📍 The 6th International Electronic Conference on Applied
                  Sciences – Section: Computing and AI
                </li>
                <li>
                  👤 Authors: Eslam Aly, Umne Rabab Syed, Muhammad Maaz Hamid
                </li>
                <li>✅ Status: Accepted for Talk Presentation (2025-07-25)</li>
              </ul>

              <div className="mt-auto grid gap-4 grid-cols-1 sm:grid-cols-2">
                <button
                  onClick={showMessage}
                  className="w-full bg-primary text-white py-2.5 px-4 text-sm font-medium rounded-md hover:bg-primary/80 transition cursor-pointer text-center"
                >
                  View on Sciforum
                </button>
                <button
                  onClick={showMessage}
                  className="w-full bg-primary text-white py-2.5 px-4 text-sm font-medium rounded-md hover:bg-primary/80 transition cursor-pointer text-center"
                >
                  Cite (BibTeX)
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
          >
            <div className="bg-white rounded-lg p-12 flex-1 shadow-lg flex flex-col justify-between">
              <h3 className="text-xl font-semibold mb-4">
                Robustness and Trade-offs in Algorithmic Strategies for
                Combinatorial Optimization
              </h3>
              <hr className="w-24 border text-primary border-primary" />

              <p className="my-4">
                This work analyzes different algorithmic strategies for solving
                combinatorial optimization problems, focusing on their
                robustness and trade-offs.
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6">
                <li>
                  📍 The 6th International Electronic Conference on Applied
                  Sciences – Section: Computing and AI
                </li>
                <li>
                  👤 Authors: Eslam Aly, Raja Hashmi Ali, Muhammad Maaz Hamid
                </li>
                <li>🟡 Status: Under MDPI Check (submitted 2025-07-26)</li>
              </ul>

              <div className="mt-auto grid gap-4 grid-cols-1 sm:grid-cols-2">
                <button
                  onClick={showMessage}
                  className="w-full bg-primary text-white py-2.5 px-4 text-sm font-medium rounded-md hover:bg-primary/80 transition cursor-pointer text-center"
                >
                  View on Sciforum
                </button>
                <button
                  onClick={showMessage}
                  className="w-full bg-primary text-white py-2.5 px-4 text-sm font-medium rounded-md hover:bg-primary/80 transition cursor-pointer text-center"
                >
                  Cite (BibTeX)
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {showModal && (
        <motion.div
          variants={fadeIn("down", 0.01)}
          initial="hidden"
          animate={"show"}
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 flex items-center justify-center bg-black/90"
        >
          <div className="bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-4 ">Thank you!</h2>
            <p>The paper link is not provided yet by Sciforum.</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Publications;
