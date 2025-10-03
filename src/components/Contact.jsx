import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaEnvelope, FaGlobe, FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import fadeIn from "../utilis/animationVariants";

function Contact() {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      return;
    }

    const access_key = "1f977a1d-b447-4670-9e78-c952d43c98f9";

    const payload = {
      access_key,
      name,
      email,
      subject: subject || "(No subject)",
      message,
      from_name: "Portfolio Contact Form",
      page: window.location.href,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setShowModal(true);
      } else {
        alert("Sorry, something went wrong. Please try again later.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    }
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section
      id="contact"
      className="bg-herobg flex items-center justify-center py-28 px-8"
    >
      <div className="container mx-auto px">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
          {/**left side */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="space-y-8 "
          >
            <h2 className="text-4xl font-bold font-secondary mb-4 text-white">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full p-3 bg-[#fffff1a]">
                  <FaPhone className="text-primary" />
                </div>
                <div className="space-y-1 ">
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p>+49 162 3320059</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full p-3 bg-[#fffff1a]">
                  <FaEnvelope className="text-primary" />
                </div>
                <div className="space-y-1 ">
                  <h3 className="text-lg font-medium">Email</h3>
                  <p>eslam.aly@eslamaly.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full p-3 bg-[#fffff1a]">
                  <FaLinkedin className="text-primary" />
                </div>
                <div className="space-y-1 ">
                  <h3 className="text-lg font-medium">LinkedIn</h3>
                  <p>eslam-aly-88b66ab8</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center rounded-full p-3 bg-[#fffff1a]">
                  <FaGlobe className="text-primary" />
                </div>
                <div className="space-y-1 ">
                  <h3 className="text-lg font-medium">Portfolio</h3>
                  <p>www.eslamaly.com</p>
                </div>
              </div>
            </div>
          </motion.div>
          {/* right side */}
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="space-y-8 p-8 bg-white shadow-xl rounded-md mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
            <hr className="w-24 border text-primary border-primary" />
            <form action="" onSubmit={handleSubmit} className="space-y-12">
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  type="text"
                  placeholder="Subject (Optional)"
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
                className="w-full p-3 font-semibold bg-primary text-white rounded-md hover:bg-primary/80"
              >
                Let’s Connect
              </button>
            </form>
          </motion.div>
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
              <p>Thank you {name}, for submitting your message.</p>
              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default Contact;
