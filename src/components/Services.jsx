import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import services1 from "../assets/service1.webp";
import services2 from "../assets/service2.webp";
import services3 from "../assets/service3.webp";
import services4 from "../assets/service4.webp";

function Services() {
  return (
    <section id="services" className="  bg-[#f7f8fc]  ">
      <div className="pt-18 md:pt-30 px-4 mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center space-y-5"
        >
          <h1 className="text-4xl font-bold font-secondary text-herobg ">
            What Can We Do Together
          </h1>
          <p className="md:w-1/2 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            saepe sit. Magni? consectetur adipisicing elit. Numquam, saepe sit
          </p>
        </motion.div>
        {/** service category */}
        <div className="w-4/5 py-12 mx-auto">
          <Tabs>
            <motion.TabList
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex flex-wrap justify-between items-center gap-8 md:gap-12"
            >
              <Tab>Project 1</Tab>
              <Tab>Project 2</Tab>
              <Tab>Project 3</Tab>
              <Tab>Project 4</Tab>
            </motion.TabList>

            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="md:w-1/2 bg-white rounded-lg p-12 font-secondary"
                >
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Project 1
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    accusantium iusto tempora esse illum at maiores, facere nemo
                    ullam voluptatibus.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Benfit
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="md:w-1/2"
                >
                  <img
                    src={services1}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="md:w-1/2 bg-white rounded-lg p-12 font-secondary"
                >
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Project 2
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    accusantium iusto tempora esse illum at maiores, facere nemo
                    ullam voluptatibus.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Subtitle
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="md:w-1/2"
                >
                  <img
                    src={services2}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="md:w-1/2 bg-white rounded-lg p-12 font-secondary"
                >
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Project 3
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    accusantium iusto tempora esse illum at maiores, facere nemo
                    ullam voluptatibus.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    Subtitle
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="md:w-1/2"
                >
                  <img
                    src={services3}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex flex-col md:flex-row gap-8 mt-8">
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="md:w-1/2 bg-white rounded-lg p-12 font-secondary"
                >
                  <h3 className="text-3xl font-semibold text-primary mb-4">
                    Project 4
                  </h3>
                  <p className="mb-8">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                    accusantium iusto tempora esse illum at maiores, facere nemo
                    ullam voluptatibus.
                  </p>
                  <h4 className="text-xl font-medium text-black mb-4">
                    subtitle
                  </h4>
                  <ul className="list-disc list-inside space-y-3">
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                    <li>Understanding Relationship Dynamics</li>
                  </ul>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.2)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: false, amount: 0.7 }}
                  className="md:w-1/2"
                >
                  <img
                    src={services4}
                    alt=""
                    className="w-full h-auto rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

export default Services;
