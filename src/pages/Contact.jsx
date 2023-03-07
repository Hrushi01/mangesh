import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import GreenImg from "../assets/Greenimg.jpeg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

function ContactUs({ setDisplay }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header setDisplay={setDisplay} />

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 ">
        <div className="lg:flex lg:items-center lg:justify-between bg-green-500 text-white p-10   md:px-0 ">
          <motion.div
            className="flex"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="lg:w-1/2 p-10     ">
              <h2 className="text-4xl font-bold leading-tight sm:text-5xl sm:leading-tight ">
                Contact Us
              </h2>
              <p className="mt-3 text-lg sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Have a question or need more information about our smart
                greenhouse monitoring and control systems? Don't hesitate to get
                in touch with us!
              </p>
              <p className="mt-3 text-lg sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                We're available by phone, email, or through our social media
                channels.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:ml-8 p-5">
              {/* Image goes here */}
              <div className="h-full rounded-md overflow-hidden shadow-lg ">
                <img
                  src={GreenImg}
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* <motion.div
          className="flex w-full  "
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
        > */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          <motion.div
            className=""
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {/* Contact method */}
            <div className="bg-white rounded-md overflow-hidden shadow-lg p-4">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-green-600 h-8 w-8 flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                </div>
                <h3 className="text-lg font-bold">Email</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <a
                  href="mailto:info@smartgreenhouse.com"
                  className="text-green-600 hover:text-green-700"
                >
                  info@smartgreenhouse.com
                </a>
              </p>
            </div>
          </motion.div>
          {/* Contact method */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <div className="bg-white rounded-md overflow-hidden shadow-lg p-4">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-green-600 h-8 w-8 flex items-center justify-center mr-4">
                  <FontAwesomeIcon icon={faPhone} className="text-white" />
                </div>
                <h3 className="text-lg font-bold">Phone</h3>
              </div>
              <p className="text-gray-700 mb-2">
                <a
                  href="tel:+123456789"
                  className="text-green-600 hover:text-green-700"
                >
                  +1 (234) 567-89
                </a>
              </p>
            </div>
          </motion.div>
          {/* Contact method */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.9 }}
          >
            <div className="bg-white rounded-md overflow-hidden shadow-lg p-4">
              <div className="flex items-center mb-4">
                <div className="rounded-full bg-green-600 h-8 w-8 flex items-center justify-center mr-4">
                  <FontAwesomeIcon
                    icon={faMapMarkerAlt}
                    className="text-white"
                  />
                </div>
                <h3 className="text-lg font-bold">Address</h3>
              </div>
              <p className="text-gray-700 mb-2">
                123 Main Street <br />
                Suite 100 <br />
                Anytown, USA 12345
              </p>
            </div>
          </motion.div>
        </div>
        {/* </motion.div> */}
        <div className="mt-20">
          <h3 className="text-lg font-bold mb-4">Get in touch</h3>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full rounded-md border-gray-400 shadow-inner py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full rounded-md border-gray-400 shadow-inner py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="w-full rounded-md border-gray-400 shadow-inner py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="6"
                placeholder="Enter your message here"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ContactUs;
