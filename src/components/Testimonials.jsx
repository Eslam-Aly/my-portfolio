import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";
import testimons from "../data/testimonials.js";
import { BsFillChatQuoteFill } from "react-icons/bs";

function Testimonials() {
  return (
    <section
      id="testimonials"
      className=" text-black bg-[#f7f8fc] pt-18 md:pt-40 pb-18"
    >
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="container mx-auto px-8"
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-secondary mb-3 ">
            What Our Clients Say
          </h2>
          <p className="text-lg mb-12 md:w-2/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt
            possimus ipsum dolores ipsam, molestiae eveniet voluptatibus
            similique tempora omnis?
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:w-4/5 mx-auto gap-8 md:gap-12">
          {testimons.map((testimon, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-6 flex-1"
            >
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
                <BsFillChatQuoteFill className="size-12 text-primary" />
              </div>
              <div className="flex flex-col mb-4 space-y-3">
                <p className="text-lg mb-2">{testimon.review}</p>
                <div className="flex gap-1">
                  <img
                    src={testimon.image}
                    alt="review image"
                    className="size-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold">{testimon.name}</p>
                    <p className="text-gray-600">{testimon.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Testimonials;
