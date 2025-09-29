import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";
import packages from "../data/pricingData.js";

function Pricing() {
  const handleScroll = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="pricing" className=" text-black bg-[#f7f8fc] pt-18 md:pt-40">
      <div className="container mx-auto px-8">
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold font-secondary mb-3 ">
            Perfect for Small and Large Brands
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt
            possimus ipsum dolores ipsam, molestiae eveniet voluptatibus
            similique tempora omnis?
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col md:w-5/6 mx-auto  md:flex-row gap-8 pb-12"
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 flex-1 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{pkg.name}</h3>
              <hr className="w-24 border text-primary border-primary" />
              <p className="mb-4 text-3xl font-bold">
                {pkg.price} <span className="text-lg font-normal">/mo</span>
              </p>
              <p className="text-lg mb-4">{pkg.description}</p>
              <ul className="list-disc list-inside space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <button
                onClick={handleScroll}
                className="bg-primary text-white py-3.5 px-8 font-medium rounded-md hover:bg-primary/80 transition cursor-pointer"
              >
                Contect Me
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Pricing;
