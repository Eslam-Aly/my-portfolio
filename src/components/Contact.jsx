import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaEnvelope, FaGlobe, FaGulp, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [modle, setModle] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !tel || !country || !message) {
      return;
    }

    setModle(true); // this will open your modal
  };
  const closeModle = () => {
    setModle(false);
    setName("");
    setEmail("");
    setTel("");
    setCountry("");
    setMessage("");
  };
  return (
    <section
      id="contact"
      className="bg-herobg flex items-center justify-center py-28 px-8"
    >
      <div className="container mx-auto">
        <div className="md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8">
          {/**left side */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold font-secondary mb-4 text-white">
              Make and Appointment
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full p-3 bg-[#fffff1a]">
                  <FaUserAlt className="text-primary" />
                </div>
                <div className="space-y-1 ">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor..
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full p-3 bg-[#fffff1a]">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-1 ">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor..
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full p-3 bg-[#fffff1a]">
                  <FaPhone className="text-primary" />
                </div>
                <div className="space-y-1 ">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor..
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full p-3 bg-[#fffff1a]">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-1 ">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur Lorem, ipsum dolor..
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* right side */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="space-y-8 p-8 bg-white shadow-xl rounded-md"
          >
            <h3 className="text-2xl font-bold mb-4">Book an Appointment</h3>
            <form action="" onSubmit={handleSubmit} className="space-y-8">
              <div className="flex flex-col md:flex-row">
                <input
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <div className="flex flex-col md:flex-row">
                <input
                  value={tel}
                  required
                  onChange={(e) => setTel(e.target.value)}
                  type="tel"
                  placeholder="Phone Number"
                  pattern="^[0-9]{10,15}$"
                  title="Please enter a valid phone number (10–15 digits)."
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  value={country}
                  required
                  onChange={(e) => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>

              <textarea
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                name=""
                id=""
                placeholder="Write your message..."
                rows={5}
                className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
              ></textarea>

              <button
                type="submit"
                className="w-full p-3 bg-primary text-white rounded-md hover:bg-primary/80"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
        {modle && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/90">
            <div className="bg-white p-8 rounded-md shadow-lg">
              <h2 className="text-2xl font-bold mb-4 ">Thank you!</h2>
              <p>Thank you {name}, for submiting your query</p>
              <button
                onClick={closeModle}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
