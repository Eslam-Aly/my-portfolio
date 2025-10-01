import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";
import aboutImage from "../assets/about.jpeg";

function WorkingSteps() {
  return (
    <section className="relative bg-cover bg-center py-12 bg-about h-full">
      <div className="absolute inset-0 bg-herobg/85"></div>
      <div className="relative container mx-auto px-4 py-20">
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-white text-center mb-10"
        >
          <h1 className="text-4xl font-bold font-secondary mb-4">
            How It Works
          </h1>
          <p className="text-lg w-full mx-auto md:w-1/2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            exercitationem consequatur minus quam illo cumque blanditiis ab
            reiciendis reprehenderit eos.
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col md:w-4/5 mx-auto md:flex-row gap-8 h-full"
        >
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
              1
            </div>
            <h3 className="text-lg md:text-xl font-medium mt-8">Fill a form</h3>
            <p className="my-2">
              Step 1 description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
              2
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a form</h3>
            <p className="my-2">
              Step 2 description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="relative bg-white text-center rounded-lg p-6 flex-1">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white size-14 rounded-full flex items-center justify-center">
              3
            </div>
            <h3 className="text-lg font-medium mt-8">Fill a form</h3>
            <p className="my-2">
              Step 3 description goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WorkingSteps;
